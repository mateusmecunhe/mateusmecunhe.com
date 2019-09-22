class PacienteView{

    constructor(element){
        this._element = element;
    }

    

    update(model) {
        this._element.innerHTML = ` 
        <table id="tabela-pacientes">
        <thead>
            <tr id="table-r">
                <th>Nome</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>BMI</th>
            </tr>
        </thead>
        <tbody>
        ${
            model.pacientes.map(p =>{
                return `
                <tr>
                    <td>${p.name}</td>    
                    <td>${p.height}</td>    
                    <td>${p.weight}</td>    
                    <td>${p.BMI}</td>    
                </tr>
                `
            })
        }
        </tbody>
    </table>
    `;
    }

}

