const excluirPropriedades = (objeto, propriedades) => {
    const novoObj = { ...objeto };
    propriedades.forEach(prop => {
      delete novoObj[prop];
    });
    return novoObj;
  };
  
  var exemplo = { a: 1, b: 2, c: true };
  console.log(excluirPropriedades(exemplo, ['b']));  
  exemplo = { a: 1, b: 2, c: true };
  console.log(excluirPropriedades(exemplo, ['b', 'a'])); 
  
  const transformarObjEmArray = (objeto) => {
    return Object.entries(objeto);
  };
  
  exemplo = { a: 1, b: 2, c: true };
  console.log(transformarObjEmArray(exemplo)); 