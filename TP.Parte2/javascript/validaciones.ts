
function ValidarCamposVacios(campo:string):boolean{
    if (campo.length != 0) {
        return true;
    }else{
        return false;
    }
}

function ValidarRangoNumerico(numValidar:number,min:number,max:number):boolean{
    if (numValidar > min && numValidar < max) {
        return true;      
    }else{
        return false;
    }
}
function ValidarCombo(valorCorrecto:string,valorIncorrecto:string):boolean{
    if (valorCorrecto != valorIncorrecto) {
        return true;
    }else{
        return false;
    }
}

function ObtenerTurnoSeleccionado():string{
    if ((<HTMLInputElement>document.getElementById('rdoTurno')).checked){
        return (<HTMLInputElement>document.getElementById('rdoTurno')).value;
    }    
    return '';
}

function ObtenerSueldoMaximo(turno:string):number{
    var retorno:number = 0;
    switch (turno) {
        case 'Mañana':
            retorno = 20000;
            //(<HTMLInputElement>document.getElementById('Sueldo')).max = '20000';
        break;
        case 'Tarde':
            retorno = 18500;
            //(<HTMLInputElement>document.getElementById('Sueldo')).min = '18500';
        break;
        case 'Noche':
            retorno = 25000;
            //(<HTMLInputElement>document.getElementById('Sueldo')).max = '25000';
        break;
        default:
        break;
    }
    return retorno;
}