
const pluginName = 'ConsoleLog';

class Console {

    apply(compiler) {
        // console.dir(compiler.hooks);
        compiler.hooks.run.tap(pluginName, (compilation) => {
            console.log("started");
        });
        compiler.hooks.done.tap(pluginName, (compilation) => {
            // console.dir(compilation);
            console.log("done");
        });
        compiler.hooks.afterCompile.tap(pluginName, (compilation) => {

            console.log("afterCompile");
        });
    }
}

module.exports = Console;