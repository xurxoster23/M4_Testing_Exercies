const {users, getUserLogin} =   require('../main');

describe('Prueba main.js', () => {
    test('Coincidencia dni user', () => {
        expect(getUserLogin(users[1].dni)).toBe(users[1]);
    })
    test('Sin coincidencias de dni', () => {
        expect(getUserLogin('22159784P')).toBe('Usuario no registrado');
    })
})