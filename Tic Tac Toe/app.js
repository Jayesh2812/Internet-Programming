window.onload = () => {
    let section = document.getElementById('ttt')

    // Matrix board representation
    start =()=>{
        board = [
            ['','',''],
            ['','',''],
            ['','','']
        ]
        turn = 'X'
    }
    let board 
    let turn 

    const changeturn  = ()=>{
        turn = turn == 'X' ? 'O' : 'X';
    }

    const isEqual = (a, b, c) =>{
        return a == b && b==c && c == a && a!=''
    }



    let p = document.querySelectorAll('.p')
    cells = [[p[0], p[1], p[2]],
        [p[3], p[4], p[5]],
        [p[6], p[7], p[8]]]
    // click feature

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = cells[i][j]
            cell.addEventListener('click',()=>{
                board[i][j] = turn
                changeturn()
                setTimeout(check,100)
                section.classList.toggle('second')
                cell.removeEventListener('click',()=>{})

            })
        }
    }

    // draw
    draw = ()=>{
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let cell = cells[i][j]
                cell.innerHTML = board[i][j]


            }
        }
    }

    check=()=>{
        for (let i = 0; i < 3; i++) {
            if(isEqual(board[i][0], board[i][1], board[i][2])){
                alert(`Player ${board[i][0]} wins`)
                start()
                return 
            }
        }
        for (let i = 0; i < 3; i++) {
            if(isEqual(board[0][i], board[1][i], board[2][i])){
                alert(`Player ${board[0][i]} wins`)
                start()
                return
            }
        }
        if(isEqual(board[0][0], board[1][1], board[2][2])){
            alert(`Player ${board[0][0]} wins`)
            start()
            return
        }

        if(isEqual(board[2][0], board[1][1], board[0][2])){
            alert(`Player ${board[2][0]} wins`)
            start()

        }

    }

    setInterval(draw,1)
    start()

}