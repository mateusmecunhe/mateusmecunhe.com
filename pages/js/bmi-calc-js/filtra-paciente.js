var campoFiltro = document.querySelector('#filter');

console.log(campoFiltro);

campoFiltro.addEventListener('input', function(){
    var pacientes = document.querySelectorAll('.paciente');
    console.log(this.value);
        
    if(this.value.length > 0){
        pacientes.forEach(function(p){
            p.classList.add('no-show');
            var nome = p.querySelector('.info-nome').textContent;
            var regEx = new RegExp(campoFiltro.value, "i");
            
            if(regEx.test(nome)){                
                p.classList.remove('no-show');
            } else{
                p.classList.add('no-show')
            }
        })
    } else{
        pacientes.forEach(function(p){
            p.classList.remove('no-show');
        })
    }
});
