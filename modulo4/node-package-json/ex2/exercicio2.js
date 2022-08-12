const num1 = Number(process.argv[3])

const num2 = Number(process.argv[4])

const operation = process.argv[2]


    switch (operation) {
        case "soma":
            console.log(num1 + num2)
            break
        case "sub":
            console.log(num1 - num2)
            break
        case "mult":
            console.log(num1 * num2)
            break
        case "div":
            console.log(num1 / num2)
            break
        default:
            console.log("\u001b[37m \u001b[44m Não existe dois números aqui \u001b[m")
            break
               
    }



