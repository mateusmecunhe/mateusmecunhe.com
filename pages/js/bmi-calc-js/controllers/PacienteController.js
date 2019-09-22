class PacienteController {

    constructor() {

        let $ = document.querySelector.bind(document);
        
        this.inputName = $("#nome");
        this.inputWeight = $("#peso");
        this.inputHeight = $("#altura");
        this._listaPacientes = new ListaPacientes();

        this._pacienteView = new PacienteView($('#pacienteView'));

        this._pacienteView.update(this._listaPacientes);
        
    }

    adiciona(event){
        event.preventDefault();
        console.log(this.inputName.value);
        
        let paciente = new Paciente(this.inputName.value, this.inputWeight.value, this.inputHeight.value);
        console.log(paciente);

        this._listaPacientes.adiciona(paciente);
        console.log(this._listaPacientes.pacientes);

        this._pacienteView.update(this._listaPacientes);
        this._limpaFormulario();

        // console.log(this._pacienteView.template());
        
    }   
    
    _limpaFormulario(){
        this.inputName.value = "";
        this.inputWeight.value = 0;
        this.inputHeight.value = 0;

        this.inputName.focus();
    }
        
}
    
