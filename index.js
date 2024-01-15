let resultado = rankear(110, 3)

function rankear(vitoria, derrota = 0 ){
    let saldo = vitoria - derrota
    return saldo
}

if (resultado <= 10) {
    nivel = "FERRO"
} else if (resultado <= 20) {
    nivel = "BRONZE"   
} else if (resultado <= 50) {
    nivel = "PRATA"
} else if (resultado <= 80) {
    nivel = "OURO"
} else if (resultado <= 90) {
    nivel = "DIAMANTE"
} else if (resultado <= 100) {
    nivel = "LENDARIO"
} else if (resultado > 101) {
    nivel = "IMORTAL"
} 
let heroi = nivel
console.log("")
console.log("-------------------------------------------------------------------")
console.log("O Heroi tem saldo de **", resultado, "** e esta no nivel **",heroi,"**")
console.log("-------------------------------------------------------------------")
console.log("")