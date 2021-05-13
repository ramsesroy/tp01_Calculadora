function dividir(a,b) {
    if(b ===0) {
        return "No se puede divivir por 0"
    }
    if(a ===0) {
        return 0
    }
    return a / b
}

module.exports = dividir;