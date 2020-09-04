window.onload = () => {
    let p = document.querySelectorAll('.p')
    let section = document.getElementById("ttt")
    let board;
    let positions;
    let turn;
    function start() {

        board = [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]

        // console.log(board)

        positions = [[p[0], p[1], p[2]],
        [p[3], p[4], p[5]],
        [p[6], p[7], p[8]]]


        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                positions[i][j].setAttribute('onclick', `draw(${i},${j})`)
                positions[i][j].innerHTML = ""
            }

        }
        turn = 1;
    }
    function draw(i, j) {

        // console.log(board)
        board[i][j] = turn == 1 ? 1 : 2
        section.classList.toggle('second');
        if (turn == 1) {
            positions[i][j].innerHTML = 'X';
        }
        else {
            positions[i][j].innerHTML = 'O';

        }
        turn = turn == 1 ? 2 : 1;
        positions[i][j].removeAttribute('onclick')
        check()

    }
    function check() {
        sum = 0
        board.forEach(element => {
            element.forEach(num => {
                sum += num
            });
        });
        // console.log(sum)
        lines(1)
        lines(2)
        if (sum == 13) {
            start()
        }

    }
    function lines(val) {
        if (board[0][0] == val && board[1][1] == val && board[2][2] == val) {
            alert(`Player ${board[0][0]} wins `)
            start()
            return true
        }
        if (board[2][0] == val && board[1][1] == val && board[0][2] == val) {
            alert(`Player ${board[0][2]} wins `)
            start()
            return true

        }
        if (board[0][0] == val && board[0][1] == val && board[0][2] == val) {
            alert(`Player ${board[0][2]} wins `)
            start()
            return true

        }
        if (board[1][0] == val && board[1][1] == val && board[1][2] == val) {
            alert(`Player ${board[1][0]} wins `)
            start()
            return true

        }
        if (board[2][0] == val && board[2][1] == val && board[2][2] == val) {
            alert(`Player ${board[2][0]} wins `)
            start()
            return true

        }
        if (board[0][0] == val && board[1][0] == val && board[2][0] == val) {
            alert(`Player ${board[0][0]} wins `)
            start()
            return true

        }
        if (board[0][1] == val && board[1][1] == val && board[2][1] == val) {
            alert(`Player ${board[0][1]} wins `)
            start()
            return true

        }
        if (board[0][2] == val && board[1][2] == val && board[2][2] == val) {
            alert(`Player ${board[0][2]} wins `)
            start()
            return true

        }
        else {
            return false
        }
    }
    start()
}
