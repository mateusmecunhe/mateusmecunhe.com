var botao = document.querySelector("#adicionar-paciente");
var tabela = document.querySelector('#tabela-pacientes');
var tableR = document.querySelector('#table-r');
var filterField = document.querySelector('.filter');

botao.addEventListener('click', function(e){
    e.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);

    var listaDeErros = validaPaciente(paciente);

    if(listaDeErros == 0){
        tabela.classList.remove('no-show');
        pacienteTr = montaTr(paciente);
        tabela.appendChild(pacienteTr);
    
        tableR.classList.remove('no-show');
        filterField.classList.remove('no-show');

        form.reset();
        document.querySelector('#nome').focus();
    } 
});

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var imcTd = document.createElement("td");
  
    nomeTd.textContent = paciente.nome;
    nomeTd.classList.add('info-nome');
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    imcTd.textContent = calculaImc(paciente.peso, paciente.altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

tabela.addEventListener('dblclick', function(e){
    console.log('oi');
    
        if(e.target.tagName == 'TD'){
            e.target.parentNode.classList.add('fade-out');
            setTimeout(function(){
                e.target.parentNode.remove()}, 500)
    }
});
