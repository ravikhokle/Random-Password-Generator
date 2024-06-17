const upperSet = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const lowerSet = upperSet.toLowerCase();
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()";

const passbox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const copyBTN = document.getElementById("copybtn")

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    truncatePass = truncateString(password, totalChar.value);
    passbox.innerText = truncatePass;

    copyBTN.addEventListener("click", function(){
        navigator.clipboard.writeText(truncatePass);
        copyBTN.textContent = "Copied!";
        setTimeout(function() {
            copyBTN.textContent = "Copy";
        }, 2000);
    })
}

document.getElementById("btn").addEventListener("click",function () {
    generatePassword();
})

function truncateString(str,num){
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}

generatePassword();