window.onload=()=>{
    var btns = document.querySelectorAll('.btn')
    var input = document.getElementById('input')
    btns.forEach(btn => {
        btn.addEventListener('click',()=>{input.value+=btn.innerHTML})
    });

    var input = document.getElementById("input")
    input.oninput = (e)=>{
        console.log(e.target.value)
        console.log(e.target.value.match(/(\d)*/))
        e.target.value = e.target.value.match(/(\d)*/)
    
    }
}
