var gamer=['O','X'];
var round = 0;
var gameIsOver=0


var gameBox=document.querySelector('.gameBox');
$('div.gameBox').click(function(){ 
    if (($(this).text())==""&&gameIsOver==0){ 
        let nowGamer=gamer[round%2]; 
        $(this).text(nowGamer);   
    }
    if(round>3&&gameIsOver==0)
        judgeWin();
    round++;
})

const judgeWin =()=>{
    let jud1 = ($('#box1').text())==($('#box2').text())&&($('#box2').text())==($('#box3').text());
    let jud2 = ($('#box4').text())==($('#box5').text())&&($('#box5').text())==($('#box6').text());
    let jud3 = ($('#box7').text())==($('#box8').text())&&($('#box8').text())==($('#box9').text());
    let jud4 = ($('#box1').text())==($('#box4').text())&&($('#box4').text())==($('#box7').text());
    let jud5 = ($('#box2').text())==($('#box5').text())&&($('#box5').text())==($('#box8').text());
    let jud6 = ($('#box3').text())==($('#box6').text())&&($('#box6').text())==($('#box9').text());
    let jud7 = ($('#box1').text())==($('#box5').text())&&($('#box5').text())==($('#box9').text());
    let jud8 = ($('#box3').text())==($('#box5').text())&&($('#box5').text())==($('#box7').text());

    if(jud1||jud2||jud3||jud4||jud5||jud6||jud7||jud8){
        return alert("Game Over\n"+gamer[round%2]+" Win ");
        gameIsOver = 1 ;
    }
}
