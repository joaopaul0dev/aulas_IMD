   function resultado(idEntrada, idSaida) {
    let valorMetros = converterParaMetros(idEntrada);
    let valorKm = converterParaKm(idEntrada);
    
    document.getElementById(idSaida).innerHTML = 
        "Sua distancia em metros: " + valorMetros + "<br>" + 
        "Sua distancia em quilometros: " + valorKm;
}

function converterParaMetros(idCampo) {
    let valorPes = Number(document.getElementById(idCampo).value);
    let metros = valorPes * 0.3048;
    return metros;
}

function converterParaKm(idCampo) {
    let valorPes = Number(document.getElementById(idCampo).value);
    let km = valorPes * 0.3048 / 1000;
    return km;
}