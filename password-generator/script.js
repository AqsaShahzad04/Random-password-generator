const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let length = 15;
let PassBtn = document.querySelector('.pass-btn');
let password1 = document.querySelector('.pass-1');
let password2 = document.querySelector('.pass-2');
let copymsg = document.querySelector('.copy');
let charbtn = document.getElementById('chars');
let numbbtn = document.getElementById('num');
let bothbtn = document.getElementById('both');
let pass1 = '';
let pass2 = '';
PassBtn.onclick = ()=>{

     if (charbtn.checked) {
        let newarray = characters.filter((char) => {
            return !(char >= '0' && char <= '9')
        });
        console.log(newarray);
       pass1 = generatePassword(newarray);
       pass2 = generatePassword(newarray);
    }
    else if(numbbtn.checked) {
        let array = characters.filter((char) => {
            return (char >= '0' && char <= '9');
        })
        console.log(array);
       pass1 = generatePassword(array);
       pass2 =  generatePassword(array);
    }
     else {
          pass1 =  generatePassword(characters);
          pass2 =  generatePassword(characters);
    }
   
    document.querySelector('.pass-1').textContent = pass1;
    document.querySelector('.pass-2').textContent = pass2;
    
    password1.onclick = () => {
        copyMessage(pass1);
    }
    password2.onclick = () => {
        copyMessage(pass2);
    }

}
function generatePassword(array) {
    let randompass = '';  
   for (let i = 0; i < length; i++){
        let randomchar = Math.floor(Math.random() * array.length);
        randompass += array[randomchar];
    }  

     return randompass;
 }

function copyMessage(pass) {
    navigator.clipboard.writeText(pass)
        .then(() => {
        copymsg.classList.add('copy-message');
        copymsg.classList.remove('copy');
        setTimeout(() => {
        copymsg.classList.add('copy');
        copymsg.classList.remove('copy-message');
        },2000)
    })
    
}
 
charbtn.onclick = () => {
    togglebtn(charbtn);
}
numbbtn.onclick = () => {
    togglebtn(numbbtn);
}
bothbtn.onclick = () => {
    togglebtn(bothbtn);
}
let isChecked = false;
function togglebtn(btn) {
 if (isChecked == false) {
        btn.checked = true;
        isChecked = true;
    }
    else {
        btn.checked = false;
        isChecked = false;
    }   
}
