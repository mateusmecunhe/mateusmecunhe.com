class Paciente{
    
    constructor(name, weight, height){
        this._name = name;
        this._weight = weight;
        this._height = height;
        Object.freeze(this);
        console.log('paciente criado!!');
        
    }

    get name(){
        return this._name;
    }

    get weight(){
        return this._weight;
    }

    get height(){
        return this._height;
    }

    get BMI(){
        let BMI = this._weight/((this._height/100)*(this._height/100));
        return BMI.toFixed(2);
    }


}