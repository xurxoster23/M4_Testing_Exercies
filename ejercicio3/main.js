const weekDays  =   [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
];

const getNewDate    =   (newDate)   => {
    if (newDate instanceof Date) {
        return `
            ${weekDays[newDate.getDay()]}, ${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;
    } else {
        return 'El valor de fecha es incorrecto';
    }
} 




module.exports  =   {weekDays,getNewDate};