window.onload=()=>{
    var btns = document.querySelectorAll('.btn')
    var input = document.getElementById('input')
    btns.forEach(btn => {
        btn.addEventListener('click',()=>{input.value+=btn.innerHTML})
    });
}
