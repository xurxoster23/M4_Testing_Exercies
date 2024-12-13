const {weekDays,getNewDate} = require('../main');

describe('Function getNewDate()', () => {
    test('Fecha concreta', () => {  
        const newDate = new Date('1978-1-19');  
        const message   =   `
            ${weekDays[newDate.getDay()]}, ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;  
        expect(getNewDate(newDate)).toBe(message);         
    })
    test('Fecha incorrecta', () => {
        const newDate   =   'arguments';
        const message   =   'El valor de fecha es incorrecto';
        expect(getNewDate(newDate)).toBe(message);
    })
})
    