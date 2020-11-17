
    title = document.querySelector('title').innerHTML
    header = document.createElement('header')
    header.innerHTML =        
    `<nav class="nav">
        <ul><h3><span> IP Assignments</span></h3>
            <li><a href="../Calci/">Calculator</a></li>
            <li><a href="../Tic Tac Toe/">Tic Tac Toe</a></li>
            <li><a href="../Tic Tac Toe AI/">Tic Tac Toe AI</a></li>
            <li><a href="../Login/">Animated Login</a></li>
        </ul>

    </nav>
    <div class="burger">
        <div class="line"></div>
    </div>`

    let link = document.createElement("link")
    link.setAttribute('rel',"stylesheet")
    link.setAttribute('href','../Navbar/navbar.css')
    document.querySelector("head").appendChild(link)
    
    let fontlink1 = document.createElement("link")
    fontlink1.setAttribute("rel","preconnect") 
    fontlink1.setAttribute("href", "https://fonts.gstatic.com")
    document.querySelector("head").appendChild(fontlink1)

    let fontlink2 = document.createElement("link")
    fontlink2.setAttribute('rel',"stylesheet")
    fontlink2.setAttribute("href",`"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"`)
    document.querySelector("head").appendChild(fontlink2)

    document.body.insertBefore(header,document.body.childNodes[0])
   
    let burger = document.querySelector('.burger')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('open')
        document.querySelector('.nav').classList.toggle("nav-active")
    })


