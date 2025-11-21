const excluir = (array, itensParaExcluir) => {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (itensParaExcluir.indexOf(array[i]) === -1) {
      resultado.push(array[i]);
    }
  }
  return resultado; 
}

arr1 = [1, 2, 3, 1, 2];
console.log(excluir(arr1, [1, 2]));
arr2 = ['a', 'b', 'a', 'd', 'e', 'a'];
console.log(excluir(arr2, ['a', 'd'])); 
arr3 = [true, false, false, true, true, false, false];
console.log(excluir(arr3, [true])); 
