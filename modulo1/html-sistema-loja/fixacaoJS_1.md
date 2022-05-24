~~~ function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salarioFixo = 2000
let comissao1 = 100 * qtdeCarrosVendidos
let comissao2 = valorTotalVendas / 100 * 5
let salarioFinal = salarioFixo + comissao1 + comissao2
   return salarioFinal
}
~~~