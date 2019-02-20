export default function nameChecker(){
    var name = prompt('Please Enter Your Name: ');

    if(name === ''){
        nameChecker();
    }
    else{
        document.querySelector('h1').textContent = `Hello, ${name}`;
    }
}

