var erros = [];
var campoNome = document.querySelector('.campo-nome');
var campoPeso = document.querySelector('.campo-peso');
var campoAltura = document.querySelector('.campo-altura');

function validaNome(nome){
    if(nome<1){
        erros.push("nome está vazio");
        console.log('nome vazio');
        campoNome.classList.add('erro-no-form');
    } else{
        campoNome.classList.remove('erro-no-form');
    }
}

function validaPeso(peso){
    if(peso<10 || peso>300){
        erros.push("peso inválido");
        console.log('peso inválido');
        campoPeso.classList.add('erro-no-form');
    } else{
        campoPeso.classList.remove('erro-no-form');
    }
}


function validaAltura(altura){
    if(altura < 50 || altura > 300){
        erros.push("altura inválida");
        campoAltura.classList.add('erro-no-form');
        console.log('erro na altura');
    } else{
        campoAltura.classList.remove('erro-no-form');
    }
}

function validaPaciente(paciente){
    erros = [];
    validaNome(paciente.nome);
    validaPeso(paciente.peso);
    validaAltura(paciente.altura);

    return erros;
}