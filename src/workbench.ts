/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



import { spawnSync } from "child_process";
import * as Fs from "fs";
import * as Path from "path";
import { IarOsUtils, OsUtils } from "./osUtils";


/**
 * An IAR toolchain (Embedded Workbench or Build Tools). To the user, this is refered to as a toolchain.
 * Note that they are not the related to the thrift Toolchain type.
 */
export interface Workbench {
    readonly name: string;
    readonly path: string;
    /** The path to iaridepm */
    readonly idePath: string;
    /** The path to iarbuild */
    readonly builderPath: string;
    /** The IDE platform version */
    readonly version: WorkbenchVersion;
    /** Whether this is a full IDE or just build tools (BX) */
    readonly type: WorkbenchType;
    /** Identifiers for the targets supported by this workbench (e.g. 'arm').
     *  Each identifier is the name of the folder in the workbench root containing the files for the target (e.g. the compiler) */
    readonly targetIds: string[];
}

export interface WorkbenchVersion { major: number, minor: number, patch: number }

/**
 * Describes the product type.
 */
export enum WorkbenchType {
    /** An installation with only what's needed to build projects, and no debugger or thrift project manager. */
    LEGACY_BX = 0,
    /** An installation without any graphical components (i.e. the IDE). */
    EXTENDED_BX = 1,
    /** A full installation. */
    IDE = 2,
}

export namespace Workbench {
    export const ideSubPath = "common/bin/IarIdePm.exe";
    export const builderSubPath = "common/bin/iarbuild" + (OsUtils.OsType.Windows === OsUtils.detectOsType() ? ".exe" : "");

    /**
     * Create a new Workbench object and verify it.
     * @param root the root path of the Workbench. The folders *common* and *install-info* reside in the root folder.
     * @returns A Workbench instance if root points to a valid workbench, otherwise undefined
     */
    export function create(root: string): Workbench | undefined {
        if (!isValid(root)) {
            return undefined;
        }
        return new WorkbenchImpl(root);
    }

    function isValid(workbenchPath: string): boolean {
        const builderPath = Path.join(workbenchPath, Workbench.builderSubPath);

        try {
            const stat = Fs.statSync(builderPath);

            return stat.isFile();
        } catch (e) {
            return false;
        }
    }

    const targetDisplayNames: { [target: string]: string } = {
        "arm":   "Arm",
        "riscv": "RISC-V",
        "430":   "MSP430",
        "avr":   "AVR",
        "rh850": "RH850",
        "rl78":  "RL78",
        "rx":    "RX",
        "stm8":  "STM8",
    };
    /**
     * Gets the user-friendly name of a target
     */
    export function getTargetDisplayName(targetId: string): string {
        return targetDisplayNames[targetId] ?? targetId;
    }
}

class WorkbenchImpl implements Workbench {
    private _version: WorkbenchVersion | undefined = undefined;

    readonly path: string;
    readonly idePath: string;
    readonly builderPath: string;
    readonly targetIds: string[];

    /**
     * Create a new Workbench object based using a path.
     *
     * @param path The root path of the workbench. The folders *common* and
     *             *install-info* reside in the root folder.
     */
    constructor(path: string) {
        this.path = path;
        this.idePath = Path.join(this.path.toString(), Workbench.ideSubPath);
        this.builderPath = Path.join(this.path.toString(), Workbench.builderSubPath);
        const entries = Fs.readdirSync(path);
        this.targetIds =  entries.filter(entry => !["install-info", "common", "drivers"].includes(entry)).
            filter(entry => {
                if (!Fs.statSync(Path.join(path, entry)).isDirectory() ||
                    !Fs.existsSync(Path.join(path, entry, "bin")) ||
                    !Fs.statSync(Path.join(path, entry, "bin")).isDirectory()) {
                    return false;
                }
                const binEntries = Fs.readdirSync(Path.join(path, entry, "bin"));
                return binEntries.some(ent => ent.startsWith("icc"));
            });
    }

    get name(): string {
        const targetNames = this.targetIds.map(Workbench.getTargetDisplayName);
        return Path.parse(this.path.toString()).base + ` (${targetNames.join("/")})`;
    }

    get version(): WorkbenchVersion {
        if (this._version === undefined) {
            const stdout = spawnSync(this.builderPath.toString()).stdout;
            const match = stdout.toString().match(/V(\d+)\.(\d+)\.(\d+)\.\d+/);
            if (match && match[1] !== undefined && match[2] !== undefined && match[3] !== undefined) {
                this._version = { major: parseInt(match[1]), minor: parseInt(match[2]), patch: parseInt(match[3]) };
            } else {
                this._version = { major: NaN, minor: NaN, patch: NaN };
            }
        }
        return this._version;
    }

    get type(): WorkbenchType {
        // Checks whether a workbench has CspyServer. This might misclassify really old EW version, but that's ok since we don't support them anyway.
        if (Fs.existsSync(Path.join(this.path, "common/bin/CSpyServer" + IarOsUtils.executableExtension())) ||
            Fs.existsSync(Path.join(this.path, "common/bin/CSpyServer2" + IarOsUtils.executableExtension()))) {

            if (Fs.existsSync(Path.join(this.path, "common/bin/IarIdePm" + IarOsUtils.executableExtension())) ||
                Fs.existsSync(Path.join(this.path, "common/bin/IarIde" + IarOsUtils.executableExtension()))) {
                return WorkbenchType.IDE;
            }
            return WorkbenchType.EXTENDED_BX;
        }
        return WorkbenchType.LEGACY_BX;
    }

}
