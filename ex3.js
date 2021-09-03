const { from } = require("rxjs")
const { map } = require("rxjs/operators")

const notas = [6,7,2,3,8,4,9]

const resultado = from(notas)

resultado.subscribe(x =>{
    //console.log(typeof(x))
})

from(notas)
    .pipe(
        map(nota => nota >= 7 ? 'Aprovado': 'Reprovado'),
        map(status => status[0])
    )
    .subscribe(status => {
    console.log(status)
})
