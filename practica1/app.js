let message =   '¡Hola Mundo!';

const add   =   (a,b) =>  {
    return a + b;
}

const checkAdult    =   age =>  {
    return age >= 18 ? true : false;
}

const miniumValue   =   (a,b) => {
    if (a >= b && a >= 100) {
        return a;
    } 
    else if (b >= a && b>= 100) {
        return b;
    } else {
        return 100;
    }
}

const userMail  =   'juanGomez@gmail.con';

const genders   =   [
    'hombre',
    'mujer',
    'No S/C'
];

module.exports  =   {message,add,checkAdult,miniumValue,userMail,genders};