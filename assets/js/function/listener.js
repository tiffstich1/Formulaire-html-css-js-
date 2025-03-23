var toggleInputType = (ev) =>{
    ev.target.classList.toggle('fa-eye-slash')
    var input = ev.target.parentNode.children[0];

    if (input.type === "password") {

        input.type = "text"
        
    }else{
        input.type = "password"
    }
    

    
}

var setupListener =()=>{
    var icons = document.querySelectorAll('i.icon-password')

    for (let index = 0; index < icons.length; index++) {
        const icon = icons[index];

        icon.onclick = toggleInputType
        
    }
}