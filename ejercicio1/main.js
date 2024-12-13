const users     =   [
    {
        user:   'xurxoster@gmail.com',
        dni :   '44433698K'
    },
    {
        user:   'andrearoa@hotmail.com',
        dni :   '66897415M'
    },
    {
        user:   'unaxroa@gmail.com',
        dni :   '88796451O'
    },
    {
        user:   'thiagoborroa@gmail.com',
        dni :   '78477945J'
    }
]   


function getUserLogin(dni) {
    const results    =   users.filter(element => element.dni === dni);
    return results.length > 0 ? results[0] : 'Usuario no registrado';
}

console.log(getUserLogin('44433698K'));


module.exports  =   {users,getUserLogin};

