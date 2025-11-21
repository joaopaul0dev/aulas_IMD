const unico = (array) => {
  let resultado = []; 
  for (let i = 0; i < array.length; i++) {
    if (resultado.indexOf(array[i]) === -1) {
      resultado.push(array[i]); 
    }
  }
  return resultado; 
}

let exemplo = [1, 2, 3, 1, 2];
console.log(unico(exemplo)); 
exemplo = ['a', 'b', 'a', 'd', 'e', 'a'];
console.log(unico(exemplo)); 
exemplo = [true, false, false, true, true, false, false];
console.log(unico(exemplo));
