// Grabs all node elements with the corresponding class of password.
const passwordField = document.querySelectorAll('.password');

// Assigns the variable charList to the array of ASCII characters.
const charList = `!"#\$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`.split("");

const button = document.querySelector('.btn');


// Attaches a click type event listener that will execute the generatePasswords function once the event is triggered.
button.addEventListener('click', generatePasswords);

function generatePasswords(){
    
    const randomPassword = [];
    
    /*Randomly sorsts charList array, converts the value to a string and assigns the randomString
    variable to it, that will then be pushed to the randomPassword array.*/
    for (let j = 0; j < 4; j++)
    {
        let randomString = charList.sort(randomSort).join("");
        randomPassword.push(randomString);
    }

    function randomSort(a, b)
    {  
        return 0.5 - Math.random();
    }  

    /* Renders the randomly generated passwords in their respective fields
    and attaches an event listener that would allow the user to copy the 
    password their clipboard.*/
    for (let i = 0; i < passwordField.length; i++)
    {
        passwordField[i].value = randomPassword[i].slice(0, 15);
        passwordField[i].addEventListener('click', () => 
        {
            document.execCommand("copy");
        });
    }
    
}







