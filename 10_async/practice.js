////////////////////////////////////////
// practice 1.
function call (name) {
    return new Promise(function (resolve,reject){
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
    });
}

function back () {
    return new Promise (function(resolve,reject) {
        setTimeout(function() {
            console.log('back');
            resolve('back');
        }, 1000);
    });
}

function hell(msg) {
    return new Promise (function(resolve,reject) {
        setTimeout(function() {
            console.log(`${msg}`);
            resolve(msg);
        }, 1000);
    });
}

let name = 'kim';
call(name).then(function (f) {
    console.log(`${name} 반가워`);
    return back();
}).then (function (f) {
    console.log('back을 실행했구나');
    return hell('여기는 callback hell');
})

/////////////////////////////////////////////////
// practice 2.

async function exec() {
    let user = await call(name);
    console.log(user + '반가워');
    let getback = await back();
    console.log(getback + '을 실행했구나');
    let gethell = await hell('여기는 callback hell');
}
exec();

