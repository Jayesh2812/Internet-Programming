window.onload =()=>{
    let inputs = document.querySelectorAll('input')
    inputs.forEach(input=>{
        if (input.type != "button"){

            input.onfocus = (e)=>{
                e.target.parentElement.classList.add("section_focused")
            }

            input.onblur = (e)=>{
                if (!e.target.value)
                e.target.parentElement.classList.remove("section_focused")
            }
        }
    })




    document.getElementById("submit__form").onsubmit =(e)=>{
        e.preventDefault()

        let username = document.getElementById("submit__username").value
        let password = document.getElementById("submit__password").value
        let email = document.getElementById("user_email").value
        let mobile_no = document.getElementById('ph_no').value


        if (password.length < 4){
            alert("Password is too short")
            return
        }
        if(!email.match(/.+@.+\..+/)){
            alert("Email is badly formatted")
            return
        }
        if (!mobile_no.match(/\d/)){
            alert("Mobile number is badly formatted")
            return
        }
        console.log(username, password)
    }
    document.getElementById('google_login').onclick = (e)=>{
        alert("Coming soon continue with email and password for now")
    }
}
