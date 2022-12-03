let fields = [];

let currentShape = 'cross';
let gameOver = false;
let winner;

function fillShape (id){
    if(!fields[id] && !gameOver){
        if(currentShape == 'cross'){
            currentShape = 'circle';
            document.getElementById('player-1').classList.add('playerInactive');
            document.getElementById('player-2').classList.remove('playerInactive');
        }else{
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('playerInactive');
            document.getElementById('player-2').classList.add('playerInactive');
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
        checkForDraw();
    }
}

function draw (){
    for (let i = 0; i <  fields.length; i++) {
        if(fields[i] != null){
            document.getElementById(`${fields[i]}-${i}`).classList.remove('d-none');
        }
    }
}

function restartGame(){
    gameOver = false;
    fields = [];
    document.getElementById('table').style.opacity = 1;
    document.getElementById('gameoverPic').classList.add('d-none');
    document.getElementById('restartBtn').classList.add('d-none');
    for(let i = 1; i < 4; i++){
        document.getElementById('line-' + i).style.transform = 'scaleX(0)';
    }
    for(let i = 4; i < 7; i++){
        document.getElementById('line-' + i).style.transform = 'rotate(90deg) scaleX(0)';
    }
    document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(0)';
    document.getElementById('line-8').style.transform = 'rotate(45deg) scaleX(0)';
    for(i = 0; i < 9; i++){
        document.getElementById('cross-' + i).classList.add('d-none');
        document.getElementById('circle-' + i).classList.add('d-none');
    }
}

function checkForDraw(){
    let counter = 0;
    for(let i = 0; i < 9; i++){
        if(fields[i]){
            counter++;
        }
    } 
    if(counter == 9){
        endGame();
    }
}

function checkForWin(){
    checkHorizontal();
    checkVertical();
    checkVerticalHorizontal();
}

function checkHorizontal(){
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
        console.log('dejknac');
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('line-2').style.transform = ' scaleX(1)';
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    if(winner){
        endGame();
    }
}

function checkVertical(){
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if(winner){
        endGame();
    }
}

function checkVerticalHorizontal(){
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }
    if(winner){
        endGame();
    }
}

function endGame(){
    gameOver =true;
    winner = null;
    setTimeout(function(){
        document.getElementById('gameoverPic').classList.remove('d-none');
        document.getElementById('restartBtn').classList.remove('d-none');
        document.getElementById('table').style.opacity = 0.4;
    }, 1000);
}