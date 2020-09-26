window.onload = () => {

    // Matrix board representation
    start =()=>{
        board = [
            ['','',''],
            ['','',''],
            ['','','']
        ]
        turn = 'X'
        available=[]
    }
    let board 
    let turn 
    let available
    function updateAvailable(){
        available = []
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(!board[i][j] != ''){
                    available.push([i,j])
                }
            }
        }

    }
    function changeturn() {
        turn = turn == 'X' ? 'O' : 'X'
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
                if(board[i][j]==''){

                    board[i][j] = turn
                    draw()
                    changeturn()
                    // randomAI()
                    minimax()
                    draw()
                }
                setTimeout(check,100)
            })
        }
    }

    // draw
    draw = ()=>{
        available = []
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let cell = cells[i][j]
                if(!board[i][j] != ''){
                    available.push([i,j])
                }
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
            return

        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(board[i][j] == ''){
                    return
                }
            }
        }
        alert("Game Tied")
        start()


    }

    randomAI =()=>{
        if(available.length){

            let index = Math.floor(Math.random() * available.length)
            // console.log(available)
            // console.log(index, available[index])
            let i = available[index][0]
            let j = available[index][1]
            board[i][j] = turn
            changeturn()
        }

    }
    minimax =()=>{
        let s
        let finalSpot = available[0]
        for (let index = 0; index < available.length; index++) {
            const spot = available[index];
            if(s < score(spot)  ){
                s = score(spot)
                finalSpot = spot

            }
            if(s==1){
                break;
            }
        }
        let i = finalSpot[0]
        let j = finalSpot[1]
        board[i][j] = 'O'
        changeturn()
    }
    score = (spot)=>{

        return 1

    }


    setInterval(draw,10)
    start()

}