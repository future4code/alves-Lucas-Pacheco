//A - U 
//T - A 
// C  - G
// G - C 

const dna = "ATTGCTGCGCATTAACGACGCGTA"

const rna  = dna.split("").map((letra: string) => {
    if(letra === "A")
    return "U"
    if(letra === "T")
    return "A"
    if(letra === "C")
    return "G"
    if(letra === "G")
    return "C"

    return letra
}).join("")

console.log(rna)