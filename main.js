fetch("./build/optimized.wasm").then(response =>
    response.arrayBuffer()
).then(bytes => {
    const imports = {
        imports: {},
        env: {
            abort: () => { console.log('aborted'); }
        },
        console: {
            log: (value) => console.log(value)
        }
    };
    return WebAssembly.instantiate(bytes, imports);
}).then(results => {
    const { add } = results.instance.exports;
    console.log(add(2, 2));
});
