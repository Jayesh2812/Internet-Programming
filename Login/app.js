window.onload=()=>{
    let username_input = document.getElementById("login__username")
    let password_input = document.getElementById("login__password")
    let username = username_input.value
    let password = password_input.value

    password_input.oninput = (e)=>{
        password = e.target.value
    }
    username_input.oninput = (e)=>{
        username = e.target.value
    }
    
    username_input.onfocus=(e)=>{
        e.target.parentElement.classList.add("section_focused")
    }
    username_input.onblur=(e)=>{
        if (!e.target.value)
        e.target.parentElement.classList.remove("section_focused")
    }
    password_input.onblur=(e)=>{
        if (!e.target.value)
        e.target.parentElement.classList.remove("section_focused")
    }
    password_input.onfocus=(e)=>{
        e.target.parentElement.classList.add("section_focused")
    }

    document.getElementById("login__form").onsubmit =(e)=>{
        e.preventDefault()
        if (password.length < 4){
            alert("Password is too short")
            return
        }
        console.log(username, password)
    }
    document.getElementById('google_login').onclick = (e)=>{
        alert("Coming soon continue with email and password for now")
    }

}