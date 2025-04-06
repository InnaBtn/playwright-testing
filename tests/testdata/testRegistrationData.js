module.exports = {
    // Registration data
    validUser: {
        firstName: 'Torytest',
        lastName: 'Smithtest',
        password: 'Qwerty123',
        repeatPassword: 'Qwerty123',
        trimmedFirstNameLastName: ' Johnterrysloufordyut ',
    },
    invalidUser: {
        firstNameInvalid: '1111',
        lastNameInvalid: '111',
        emailInvalid: 'innatestgmail.com',
        passwordInvalid: 'qwerty123', // incorrect password
        passwordNotMatch: 'Qwerty12', //valid passowrd used for the test with not matching passwords
        shortLastName: 'I',
        longFirstName: 'Johnterrysloufordyutr', // too long name
        emailInvalidFormat: 'innatestgmail.com',
    },
    // Data for dynamic email
    dynamicEmail: () => `innatest${Date.now()}@gmail.com`,
};
 