const getMessage   =   () => {
    const alumno    =   document.getElementById('name').value;
    const nota      =   parseFloat(document.getElementById('nota').value);
    const message   =   document.getElementById('message');
    if (alumno === '' || typeof(nota) !== 'number' || nota < 0 || nota > 10) {
       return message.innerHTML = 'Datos no válidos'
    } else {
       return message.innerHTML =   nota < 5 ? `El alumno ${alumno} No Apto con una nota final de ${nota}` : `El alumno ${alumno} Apto con una nota final de ${nota}`;
    }
}

document.getElementById('get-note').addEventListener('click',getMessage);