const axios = require("axios")
const { Observable } = require("rxjs")
const { map } = require("rxjs/operators")

function httpGet(url){
    return new Observable(subscriber =>{
        axios.get(url)
            .then(resp =>{
                if(Array.isArray(resp.data)){
                    resp.data.forEach(element =>{
                        subscriber.next(element)
                    });
                } else{
                    subscriber.next(resp.data)
                }

            })
            .then(() => subscriber.complete())
        })
}

httpGet('http://localhost:3001/films')
    .pipe(
        map(film => film.Actors)
    )
    .subscribe(dado => console.log(dado))