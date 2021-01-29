const board = document.querySelector('.board');
const winnerDiv = document.querySelector('.winner');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
const player1win = ['X', 'X', 'X'];
const player2win = ['O', 'O', 'O'];
const winComp = (a, b) => a.length === b.length && a.every((v,i) => v === b[i]);

let player;
let winner;

let winV0;
let winV1;
let winV2;
let winH0;
let winH3;
let winH6;
let winD0;
let winD2;

let game;

resetBoardDiv();

board.addEventListener('click', addPiece);
reset.addEventListener('click', resetBoardDiv);

function addPiece(elem) {
    // console.log(elem.target);
    if( !elem.target.classList.contains('board') && winner == ""){
        if (!(elem.target.innerHTML == "X" || elem.target.innerHTML == "O")){
            elem.target.innerHTML = "<span class='" + player + " wiggles'>" + player + "</span>";
            //elem.target.classList.add(player);

            for (let i = 0; i < board.children.length; i++){
                if(board.children[i] === elem.target) {                
                    switch(i) {
                        case 0:
                            winV0[0] = player;
                            winH0[0] = player;
                            winD0[0] = player;
                            break;
                        case 1:
                            winV1[0] = player;
                            winH0[1] = player;
                            break;
                        case 2:
                            winV2[0] = player;
                            winH0[2] = player;
                            winD2[0] = player;
                            break;
                        case 3:
                            winV0[1] = player;
                            winH3[0] = player;
                            break;
                        case 4:
                            winV1[1] = player;
                            winH3[1] = player;
                            winD0[1] = player;
                            winD2[1] = player;
                            break;
                        case 5:
                            winV2[1] = player;
                            winH3[2] = player;
                            break;
                        case 6:
                            winV0[2] = player;
                            winH6[0] = player;
                            winD2[2] = player;
                            break;
                        case 7:
                            winV1[2] = player;
                            winH6[1] = player;
                            break;
                        case 8:
                            winV2[2] = player;
                            winH6[2] = player;
                            winD0[2] = player;
                            break;
                    }
                }
            }
        }
                
        winCheck(elem);           

        if (player === player1 && winner == "") player = player2;
        else player = player1;
    }        
}

function winCheck(elem){    
    let tie = true;    
    for (xo = 0; xo < game.length; xo++){
        console.log(game[xo]);
        if(winComp(game[xo], player1win)){
            winner = "<span class='" + player + " wiggles'>X Wins!</span>";
        } else if (winComp(game[xo], player2win)){
            //o wins
            winner = "<span class='" + player + " wiggles'>O Wins!</span>";
        } else if (game[xo].includes("")) {
            tie = false;            
        }
    }

    if (tie && winner == "") {
        winner = "<span class='X wiggles'>I</span><span class='O wiggles'>t</span><span class='X wiggles'>'</span><span class='O wiggles'>s</span> <span class='X wiggles'>a</span> <span class='O wiggles'>T</span><span class='X wiggles'>i</span><span class='O wiggles'>e</span><span class='X wiggles'>!</span>"
        winnerDiv.classList.add("X", "O");
    }

    winnerDiv.innerHTML = winner;    
}

// div version
function resetBoardDiv() {
    player = player1;
    winner = "";
    winV0 = ['','',''];
    winV1 = ['','',''];
    winV2 = ['','',''];
    winH0 = ['','',''];
    winH3 = ['','',''];
    winH6 = ['','',''];
    winD0 = ['','',''];
    winD2 = ['','',''];

    game = [winV0, winV1, winV2, winH0, winH3, winH6, winD0, winD2];
    
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
    board.innerHTML += '<div></div>';    
    }

    winnerDiv.innerHTML = '';

    console.log(winner);

}

