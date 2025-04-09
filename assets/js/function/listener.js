    var icons = document.querySelectorAll('i.icon-password')
    
    var formRegister = document.forms['register']
    var formLogin = document.forms['login']


    var firstname = document.forms[0]['firstname']
    var lastname = document.forms[0]['lastname']
    var email = document.forms[0]['email']
    var password = document.forms[0]['password']
    var passwordConfirm = document.forms[0]['passwordConfirm']
    var check = {}
    

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
            check = {...check, firstname: false}
            document.getElementById("error-firstname").innerHTML = error
            
        }else{
            check = {...check, firstname: true}
        }

        setSubmitButton()
        

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
            check = {...check, lastname: false}
            document.getElementById("error-lastname").innerHTML = error
            
        }else{
            check = {...check, lastname: true}
        }

        
        setSubmitButton()

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
            check = {...check, email: false}
            document.getElementById("error-email").innerHTML = error
            
        }else{
            check = {...check, email: true}
        }

        
        setSubmitButton()

    },
    checkPassword : (ev) =>{
        var input = ev.target
        var content = input.value.trim() //trim permet de suprimer les espaces
        document.getElementById("error-password").innerHTML = ''
        var error = ''
        if (!content) {
            error='Your password must not be empty'
            
        }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(content)){
            error='Your password is not valide'

        }
        if (error) {
            check = {...check, password: false}
            document.getElementById("error-password").innerHTML = error
            
        }else{
            check = {...check, password: true}
        }
        setSubmitButton()

    },
    checkPasswordConfirm : (ev) =>{
        var input = ev.target
        var content = input.value.trim() //trim permet de suprimer les espaces
        document.getElementById("error-password-confirm").innerHTML = ''
        var error = ''
        if (!content) {
            error='Your confirm password must not be empty'
            
        }else if(content !== password.value){
            error='Confirmation passwort does not match'

        }
        if (error) {
            check = {...check, passwordConfirm: false}
            document.getElementById("error-password-confirm").innerHTML = error
            
        }else{
            check = {...check, passwordConfirm: true}
        }
        setSubmitButton()

    },
    submitLoginForm:(ev)=>{
        ev.preventDefault() //permet de suspendre des action par defaut ( ex: evoie de donnee par une page de traitement)
        var formData = new FormData(formLogin)
        //Requete vers le serveur de traitement
    }

}
// voir si tout les format sont valide (check = true)
var checkFormValidity = () =>{
    var result = true
    if (formRegister) {
        var verification = Object.keys(check) // voir le nombre de propriete dans check
        

        if(verification.length === 5 ){ //la longueur du tableau
            for (const key in check) {
                
                    const value = check[key];
                    result = result && value
                    if (!result) return result
            }
            return result
        }
    }
    if (formLogin) {
        var verification = Object.keys(check) // voir le nombre de propriete dans check
        

        if(verification.length === 2 ){ //la longueur du tableau
            for (const key in check) {
                
                    const value = check[key];
                    result = result && value
                    if (!result) return result
            }
            return result
        }
    }
    return false

}

var setSubmitButton =() =>{

    if (formRegister) {
        if (checkFormValidity()) {
            if (formRegister.elements[5]) {
                formRegister.elements[5].disabled = false
                return
            }
            
        }
        formRegister.elements[5].disabled = true
        
    }
    if (formLogin) {
        if (checkFormValidity()) {
            if (formLogin.elements[2]) {
                formLogin.elements[2].disabled = false
                return
            }
            
        }
        formLogin.elements[2].disabled = true
        
    }

}



var setupListener =()=>{
    // var icons = document.querySelectorAll('i.icon-password')

    // var firstname = document.forms[0]['firstname']
    // var lastname = document.forms[0]['lastname']
    // var email = document.forms[0]['email']
    // var password = document.forms[0]['password']
    // var passwordConfirm = document.forms[0]['passwordConfirm']
    

    if (firstname) {
        firstname.onkeyup = listenerFuunction.checkFirstName
        
    }
    if (lastname) {
        lastname.onkeyup = listenerFuunction.checkLastName
        
    }
    if (email) {
        email.onkeyup = listenerFuunction.checkEmail
        
    }
    if (password) {
        password.onkeyup = listenerFuunction.checkPassword
        
    }
    if (passwordConfirm) {
        passwordConfirm.onkeyup = listenerFuunction.checkPasswordConfirm
        
    }
    if(formLogin){
        formLogin.onsubmit = listenerFuunction.submitLoginForm
    }

    for (let index = 0; index < icons.length; index++) {
        const icon = icons[index];

        icon.onclick = listenerFuunction.toggleInputType
        
    }
}