var idade = Number(prompt("insira sua idade atual: "))

function converterIdadeEmDias(idadeEmDias) {
    var anos = idade;
    var meses = idade * 12;
    var dias = meses * 30;

    console.log(anos + " ano(s)");
    console.log(meses + " mes(es)");
    console.log(dias + " dia(s)");
}

