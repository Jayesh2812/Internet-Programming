window.onload=()=>{
    title = document.querySelector('title').innerHTML
    header = document.createElement('header')
    header.innerHTML =        
    `<nav class="nav">
        <ul><h3><span> IP Assignments</span></h3>
            <li><a href="../Calci/">Calculator</a></li>
            <li><a href="../Tic Tac Toe/">Tic Tac Toe</a></li>
        </ul>

    </nav>
    <div class="burger">
        <div class="line"></div>
    </div>`

    link = document.createElement("link")
    link.setAttribute('rel',"stylesheet")
    link.setAttribute('href','../Navbar/navbar.css')
    document.querySelector("head").appendChild(link)
    document.body.appendChild(header)


    
    let burger = document.querySelector('.burger')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('open')
        document.querySelector('.nav').classList.toggle("nav-active")
    })


}