const fs = require('fs')
fs.readFile('/index.html', (erro, arquivo) => {
    if (erro) throw erro
    console.log(arquivo)
})

const arquivo = fs.readFileSync('/index.html')
console.log(arquivo)