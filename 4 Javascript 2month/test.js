function validname(name) {
    return /^[A-Za-z ]+$/.test(name);
}

function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validPassword(password) {
    return password.length >= 8;
}

const userdata = [
    ['siya sharma', 'siya.sharma@gmail', 'siya@1234'],
    ['komal kashyap', 'komal.kashyap@gmail.com', 'komal@1234'],
    ['Ritik Roshan', 'ritik.roshan@gmail.com', 'R@1234']
];

for (let user of userdata) {
    if (validname(user[0].trim())) {
        console.log('validName =>', user[0].trim());
    } else {
        console.log('Invalid Name');
    }

    if (validEmail(user[1].trim())) {
        console.log('validEmail =>', user[1].trim());
    } else {
        console.log('Invalid Email');
    }

    if (validPassword(user[2].trim())) {
        console.log('validPassword =>', user[2].trim());
    } else {
        console.log('Invalid Password');
    }
}