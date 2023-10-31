const lista = [2, 1, 8, 5, 3, 20, 16, 21, 11, 12];

for (let i = 0; i < 10; i++) {
  console.log(`Posicao ${i}: ${lista[i]}`);
}

console.log('----')

lista.forEach(num => {
  console.log(num);
})

console.log('----')

lista.forEach((num, i) => {
  console.log(`Posicao ${i}: ${num}`);
})