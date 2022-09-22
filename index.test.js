const test = require('tape')
const index = require('./index')

test('Aplicar desconto 01', (t) => {
    t.assert(index.aplicarDesconto(10,5) === 5, 
    "Descontou corretamente")
    t.end()
})
test('Aplicar desconto 02', (t) => {
    t.assert(index.aplicarDesconto(5,10) === 0, 
    "Descontou corretamente")
    t.end()
})
test('Aplicar desconto 03', (t) => {
    t.assert(index.aplicarDesconto(8,2) === 6, 
    "Descontou corretamente")
    t.end()
})
test('Aplicar desconto 04', (t) => {
    t.assert(index.aplicarDesconto(9,2) === 6, 
    "Descontou corretamente")
    t.end()
})
test('Aplicar desconto 05', (t) => {
    t.assert(index.aplicarDesconto(9,2) === 7, 
    "Descontou corretamente")
    t.end()
})