
function AdministrarValidaciones(){
    //validaciones campos vacios
    if(!ValidarCamposVacios((<HTMLInputElement>document.getElementById('txtDni')).value)){
        alert('El campo DNI se encuentra vacio, por favor ingrese un Dni');
    }
    if(!ValidarCamposVacios((<HTMLInputElement>document.getElementById('nombre')).value)){
        alert('El campo NOMBRE se encuentra vacio, por favor ingrese un nombre');
    }
    if(!ValidarCamposVacios((<HTMLInputElement>document.getElementById('apellido')).value)){
        alert('El campo APELLIDO se encuentra vacio, por favor ingrese un apellido');
    }
    if(!ValidarCamposVacios((<HTMLInputElement>document.getElementById('txtLegajo')).value)){
        alert('El campo LEGAJO se encuentra vacio, por favor ingrese un legajo');
    }
    if(!ValidarCamposVacios((<HTMLInputElement>document.getElementById('txtSueldo')).value)){
        alert('El campo SUELDO se encuentra vacio, por favor ingrese un sueldo');
    }

    //validacion rango numerico
    //DNI
    var numeroValidarDni:number = parseInt((<HTMLInputElement>document.getElementById('txtDni')).value);
    var numeroMinDni:number= parseInt((<HTMLInputElement>document.getElementById('txtDni')).min);
    var numeroMaxDni:number = parseInt((<HTMLInputElement>document.getElementById('txtDni')).max);
    if(!ValidarRangoNumerico(numeroValidarDni,numeroMinDni,numeroMaxDni)){
        alert('El valor del DNI no esta en el rango correcto');
    }
    //LEGAJO
    var numeroValidarLegajo:number = parseInt((<HTMLInputElement>document.getElementById('txtLegajo')).value);
    var numeroMinLegajo:number = parseInt((<HTMLInputElement>document.getElementById('txtLegajo')).min);
    var numeroMaxLegajo:number = parseInt((<HTMLInputElement>document.getElementById('txtLegajo')).max);

    if(!ValidarRangoNumerico(numeroValidarLegajo,numeroMinLegajo,numeroMaxLegajo)){
        alert('El valor del Legajo no esta en el rango correcto');
    }
    //SUELDO
    var numeroValidarSueldo:number = parseInt((<HTMLInputElement>document.getElementById('txtSueldo')).value);
    var numeroMinSueldo:number = parseInt((<HTMLInputElement>document.getElementById('txtSueldo')).min);
    var numeroMaxSueldo:number = ObtenerSueldoMaximo(ObtenerTurnoSeleccionado());

    if(!ValidarRangoNumerico(numeroValidarSueldo,numeroMinSueldo,numeroMaxSueldo)){
        alert('El valor del Sueldo no esta en el rango correcto');
    }

    //validar combobox
    var valorCombo:string = (<HTMLInputElement>document.getElementById('cboSexo')).value;
    if(!ValidarCombo(valorCombo,'---')){
        alert('NO ha seleccionado un sexo');
    }
    
}