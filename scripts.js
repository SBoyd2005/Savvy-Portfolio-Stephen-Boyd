var nameChecker = function(){
    var name = prompt('Please Enter Your Name: ');
    // If user leaves prompt blank, throw up a new prompt that says, "For real, enter your name!"//

    if(name === ''){
        name = prompt('Please Enter Your Name: ');
    }
 else{
        document.querySelector('h2').textContent = `Hello, ${name}`;
    }
};