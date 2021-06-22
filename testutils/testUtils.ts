
import * as Mocha from 'mocha';
import * as path from 'path';
import * as fs from 'fs';
import * as vscode from "vscode"


/**
 * The Setup allows the user to inject workbenches into the workspace using a 
 * java-properties file.
 */
export async function Setup(){
    const ewSetupFile = process.env["ew-setup-file"];
    if(ewSetupFile){
        console.log(`Reading stages from ${ewSetupFile}`);

        var properties = require('java-properties');
        var values = properties.of(ewSetupFile);

        let ewPaths: String[] = [];
        for(var key of values.getKeys()){
            let newPath = values.get(key);
            console.log("Adding " + newPath);
            ewPaths.push(newPath);
        }

        // Update the set of available workbenches
        await vscode.workspace.getConfiguration("iarvsc").update("iarInstallDirectories", ewPaths, false);
        console.log("EW Setup complete");
    }
}

/**
 * The mocha test promise that runs the actual test using mocha and produces the junit results.
 * @param testsRoot 
 * @returns 
 */
export async function getTestPromise(testsRoot:string, localTimeout: number = 2000) : Promise<void>{
    await Setup();

    let junitFile:string = "/junit-vs-" + path.basename(testsRoot) + ".xml";

    let options:any = {ui: 'tdd', timeout: localTimeout};
    if(process.env["junit"]){
        console.log("Adding junit file " + junitFile);
        options.reporter = 'mocha-junit-reporter';
        options.reporterOptions = {mochaFile: testsRoot + junitFile}
    }
    const mocha = new Mocha(options);

    return new Promise((c, e) => {
        // run all test files in this directory
        fs.readdir(testsRoot, (err, files) => {
            if (err) { return e(err); }
            files = files.filter(file => file.endsWith(".test.js"));

            // Add files to the test suite
            files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

            try {
                // Run the mocha test
                mocha.run(failures => {
                    if (failures > 0) {
                        e(new Error(`${failures} tests failed.`));
                    } else {
                        c();
                    }
                });
            } catch (err) {
                e(err);
            }
        });
    });
}


export namespace TestUtils{

    /**
     * Replaces the $TARGET$ string in the @param testEwpFile with @param targetName
     * and produces a copy placed alongside which can be used for testing.
     * @param targetName 
     * @param testEwpFile 
     */
    export function pathEwpFile(targetName:string, testEwpFile:string){
        let fileContent: string = fs.readFileSync(testEwpFile, {encoding:'utf8'});
        fileContent = fileContent.replace("$TARGET$", targetName);
        fs.writeFileSync(testEwpFile.replace(".ewp", "_" + targetName + ".ewp"),fileContent,{encoding:'utf8'});       
    }

}
