
var listenerFuunction = {
    toggleInputType : (ev) =>{
        ev.target.classList.toggle('fa-eye-slash') //si l 'icone est visible on le cache et vice versa
        var input = ev.target.parentNode.children[0];
    
        if (input.type === "password") {
    
            input.type = "text"
            
        }else{
            input.type = "password"
        } 
    },
    checkFirstName : (ev) =>{
        var input = ev.target
        var content = input.value.trim() //trim permet de suprimer les espaces
        document.getElementById("error-firstname").innerHTML = ''
        var error = ''
        if (!content) {
            error='Your first name must not be empty'
            
        }else if(!/^[a-zA-Z]{2,15}$/.test(content)){
            error='Your firt name is not valide'

        }
        if (error) {
            document.getElementById("error-firstname").innerHTML = error
            
        }

        console.log(error);
        

    },
    checkLastName : (ev) =>{
        var input = ev.target
        var content = input.value.trim() //trim permet de suprimer les espaces
        document.getElementById("error-lastname").innerHTML = ''
        var error = ''
        if (!content) {
            error='Your last name must not be empty'
            
        }else if(!/^[a-zA-Z]{2,15}$/.test(content)){
            error='Your last name is not valide'

        }
        if (error) {
            document.getElementById("error-lastname").innerHTML = error
            
        }

        
        

    },
    checkEmail : (ev) =>{
        var input = ev.target
        var content = input.value.trim() //trim permet de suprimer les espaces
        document.getElementById("error-email").innerHTML = ''
        var error = ''
        if (!content) {
            error='Your email must not be empty'
            
        }else if(!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(content)){
            error='Your email is not valide'

        }
        if (error) {
            document.getElementById("error-email").innerHTML = error
            
        }

        
        

    }

}



var setupListener =()=>{
    var icons = document.querySelectorAll('i.icon-password')

    var firstname = document.forms[0]['firstname']
    var lastname = document.forms[0]['lastname']
    var email = document.forms[0]['email']
    

    if (firstname) {
        firstname.onkeyup = listenerFuunction.checkFirstName
        
    }
    if (lastname) {
        lastname.onkeyup = listenerFuunction.checkLastName
        
    }
    if (email) {
        email.onkeyup = listenerFuunction.checkEmail
        
    }

    for (let index = 0; index < icons.length; index++) {
        const icon = icons[index];

        icon.onclick = listenerFuunction.toggleInputType
        
    }
}