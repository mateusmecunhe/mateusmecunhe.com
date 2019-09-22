function calculaImc(peso, altura){
    var alturaEmMetros = altura/100;
    return Math.round(peso/(alturaEmMetros*alturaEmMetros)*10)/10;
};