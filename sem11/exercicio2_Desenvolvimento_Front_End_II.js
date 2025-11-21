function calcularArea(propriedade, formula) {
 return formula(propriedade);
}

function area_quad(l) {
return l * l
}

function area_circle(r) {
return  Math.PI * r * r
}

console.log("area quadrado: " + calcularArea(5, area_quad) + "area circulo: " + calcularArea(3, area_circle))