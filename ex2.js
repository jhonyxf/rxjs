const { Observable } = require("rxjs")

const obs = new Observable(subcriber => {
    subcriber.next("Hellouuu mundão")
    subcriber.complete()
})


obs.subscribe({
    next(x){console.log(x)},
    error(err){console.log(error)},
    complete(){console.log("dfdafaf")}
})