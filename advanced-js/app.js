'use strict'

let arr = [{
        id: 1,
        name: "Вася"
    },
    {
        id: 2,
        name: "Петя"
    },
    {
        id: 3,
        name: "Вася"
    },
]

const unique = new Set(arr.map(el => el.name))
console.log(unique);