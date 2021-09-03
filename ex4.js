const { Observable, noop } = require("rxjs");

function fromArray(array){
    return new Observable(sub =>{
        array.forEach(el => sub.next(el));
        sub.complete()
    })
}

fromArray([1,2,3,4,5,6,7,8,9])
    .subscribe({
        next(n) {console.log(n)},
        error(err){console.log(error)},
        complete(){console.log("FIIIM!!")}
    })
