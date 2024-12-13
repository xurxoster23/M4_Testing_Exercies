const {message,add,checkAdult,miniumValue,genders,userMail}   =   require('./app');

// ** Sintaxis Básica y Matchers

describe('Sintaxis Básica de Jest', () => {
    // ** Sintáxis Básica de Jest **
    test('Mensajes Hola Mundo', () => {
        expect(message).toBe('¡Hola Mundo!');
    });
    test('Function add', ()  => {
        expect(add(2,78)).toEqual(80);
    });
    // * Matchers de veracidad *
    test('Check mayoría de edad usuario', () => {
        expect(checkAdult(18)).toBeTruthy();
        expect(checkAdult(6)).toBeFalsy();
    });
    // * Matcher numérico *
    test('Check Mínimo Valor 100', () => {
        const x =   79;
        const y =   160;
        expect(miniumValue(x, y)).toBeGreaterThanOrEqual(100);
        expect(miniumValue(y, x)).toBeGreaterThanOrEqual(100);
        expect(miniumValue(x, x)).toBeGreaterThanOrEqual(100);
    });
    // * Matcher usados en Strings y Arrays *
    test('Matchers Strings-Arrays', () => {
        const patron    =   /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        expect(userMail).toMatch(patron);
        expect(genders).toContain('hombre');
        expect(genders).toContain('mujer');
        expect(genders).toContain('No S/C');
    })
})
