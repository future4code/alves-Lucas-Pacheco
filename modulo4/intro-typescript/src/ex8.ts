const invertido = (frase: string):string => {
return frase.split("").reverse().join("")
}

console.log(invertido("abcd"))