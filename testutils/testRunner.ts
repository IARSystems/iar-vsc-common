
import * as path from "path";
import * as cp from "child_process";
import { downloadAndUnzipVSCode, resolveCliPathFromVSCodeExecutablePath, runTests } from "vscode-test";
import { TestOptions } from "vscode-test/out/runTest";

/**
 * Construct a key:string based on the supplied options from the commandline.
 * @returns
 */
export function getEnvs(): Record<string, string> {
    const envs: Record<string, string> = {};
    for (const opt of process.argv.slice(2)) {
        if (opt.startsWith("--")) {
            const options = opt.substr(2).split("=");
            if (options[0] !== undefined) {
                if (options[1] !== undefined) {
                    envs[options[0]] = options[1];
                } else {
                    envs[options[0]] = "true";
                }
            }
        }
    }
    return envs;
}

/**
 * Run a set of tests using the vscode-runtests interface.
 * @param testPath The path to the index file to run.
 * @param additionalDirectories A directory to include in the tests.
 */
export async function runTestsIn(relPath: string, extensionPath: string, testPath: string, additionalDirectories: string | undefined = undefined, vsix: string[] | undefined = undefined) {
    try {
        console.log("Extension from " + extensionPath);
        console.log("Running tests in " + testPath);

        const options: TestOptions = {
            extensionDevelopmentPath: path.resolve(relPath, extensionPath),
            extensionTestsPath: path.resolve(relPath, testPath),
            launchArgs: ["--disable-workspace-trust"] // our extensions do not work with untrusted workspaces
        };

        if (additionalDirectories) {
            const additionals = path.resolve(relPath, additionalDirectories);
            options.launchArgs?.push(additionals);
        }

        // Install the C/C++ extension from Microsoft which is a hard requirement.
        options.extensionTestsEnv = getEnvs()

        const vscodeExecutablePath = await downloadAndUnzipVSCode('1.57.1');
        const cliPath = resolveCliPathFromVSCodeExecutablePath(vscodeExecutablePath);

        let extensions = ['ms-vscode.cpptools']
        if (vsix) {
            extensions = extensions.concat(vsix)
        }

        // Use cp.spawn / cp.exec for custom setup
        extensions.forEach(extension => {
            console.log("Installing " + extension)

            cp.spawnSync(cliPath, ['--install-extension', extension], {
                encoding: 'utf-8',
                stdio: 'inherit'
            });
        })

        // List all installed extensions for
        cp.spawnSync(cliPath, ['--list-extensions', '--show-versions'], {
            encoding: 'utf-8',
            stdio: 'inherit'
        });

        await runTests(options);
    } catch (err) {
        console.log("Error:" + err);
    }
}
