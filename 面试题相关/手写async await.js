function delay(ms){
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}
function *generator(){
    console.log('start generator');
    yield delay(1000);
    console.log('afetr 1s');
    yield delay(2000);
    console.log('afetr 2s');
}

function async(generatorFunc){
    const iterator = generatorFunc();
    function handle(result) {
        if(result.done) {
            return Promise.resolve(result.value);
        }
        return Promise.resolve(result.value).then((res) => {
            return handle(iterator.next(res));
        })
    }
    return handle(iterator.next());
}

async(function() {
    return generator();
}).then(() => {
    console.log('done');
})

async function foo(){
    let res1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('1');
        }, 1000);
    })
    console.log(res1);
    let res2 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('2');
        }, 2000);
    })
    console.log(res2);

}
foo().then(()=>{
    console.log('done');
});