let nextGamer = true; //true:O false:X
let round = 0;
let isGameOver =false

const gameOver = (str) =>{
    if (str == "平手")
    {alert(str)
    gameBoxs.forEach(gameBox=>{
        gameBox.removeEventListener('click',chose)
    }) }
    else if(str)
    {alert("Game Over\n"+str+" Win ")
    gameBoxs.forEach(gameBox=>{
        gameBox.removeEventListener('click',chose)
    }) }   
}
function chose(){
    if(this.innerText)
        return
    round += 1
    this.innerText = nextGamer ? 'O' : 'X';
    judge()
    nextGamer = !nextGamer;
}
function judge(){
    if(round == 9)
    gameOver ("平手")
    if (gameBoxs[0].innerText && gameBoxs[0].innerText == gameBoxs[4].innerText && gameBoxs[0].innerText == gameBoxs[8].innerText)
        gameOver(gameBoxs[0].innerText)
    else if(gameBoxs[2].innerText && gameBoxs[2].innerText == gameBoxs[4].innerText && gameBoxs[2].innerText == gameBoxs[6].innerText)
        gameOver(gameBoxs[2].innerText)
    for (let i = 0 ;i<3 ; i++){
        if(gameBoxs[i*3].innerText && gameBoxs[i*3].innerText == gameBoxs[i*3+1].innerText && gameBoxs[i*3].innerText == gameBoxs[i*3+2].innerText)
            gameOver(gameBoxs[i*3].innerText)
    }
    for (let i = 0 ;i<3 ; i++){
        if(gameBoxs[i].innerText && gameBoxs[i].innerText == gameBoxs[i+3].innerText && gameBoxs[i].innerText == gameBoxs[i+6].innerText)
            gameOver(gameBoxs[i].innerText)
    }
    
}

const gameBoxs=document.querySelectorAll('.gameBox');
console.log(gameBoxs)
gameBoxs.forEach(gameBox=>{
    gameBox.addEventListener('click',chose)
})


