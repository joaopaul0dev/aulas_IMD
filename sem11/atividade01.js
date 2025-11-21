var idd = Number(prompt("insira sua idade atual: "))

function converterIdadeEmDias(idadeEmDias) {
    var anos = idd;
    var meses = idd * 12;
    var dias = meses * 30;

    console.log(anos + " ano(s)");
    console.log(meses + " mes(es)");
    console.log(dias + " dia(s)");
}

