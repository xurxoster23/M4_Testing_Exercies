const apiEndPoint   =   'https://jsonplaceholder.typicode.com/';

    fetch(apiEndPoint + 'users/2')
        .then(response => response.json())
        .then(res   => {
            // console.log(res[0]);
            document.getElementById('name').innerHTML   = res.name;
            document.getElementById('email').innerHTML   = res.email;
            document.getElementById('phone').innerHTML   = res.phone;
        })
        .catch(err => console.log(err))

