let gameSeq=[];
let userSeq = [];
let btns = ["red" , "yellow" ,"purple" , "blue"];   // listof the pallette color

let begin = false;
let level = 0;
let highestScore = 0;

document.addEventListener("keypress" , function() {
    if(begin == false)
    {
        begin = true;
        levelup();
    }
    
});

function gameFlash(btn)
{
    btn.classList.add('game-flash');
    setTimeout(function(){
        btn.classList.remove("game-flash");
    } , 200);
}

function userFlash(btn)
{
    btn.classList.add('user-flash');
    setTimeout(function(){
        btn.classList.remove('user-flash' );
    } , 200);
}

function flashScreen()   // flash the screen when the wrong input is given
{
    let body = document.querySelector('body');
    body.classList.add('body-flash');
    setTimeout(function() {
        body.classList.remove('body-flash');
    } , 200);
}

function levelup()
{
    level++;
    userSeq = [];   // so that user input the colors from the starting at each levelUP
    let h3 = document.querySelector('h3');
    h3.innerHTML = `Game is Started <br> Level : ${level}`;

    // choose random button
    let randomIdx = Math.floor(Math.random() * 4);
    let btnColor = btns[randomIdx];
    gameSeq.push(btnColor);
    let btn = document.querySelector(`.${btnColor}`);
    gameFlash(btn);
}

function checkAns(idx)
{
    if(userSeq[idx] === gameSeq[idx]) // checks if the current input color is correct or not
    {
        if(userSeq.length === gameSeq.length)   // checks if the user input all the colors of the level or not to levelUp
        {
            setTimeout(function() {
                levelup();
            }, 1000);
        }
    }
    else
    {
        flashScreen();
        highestScore = Math.max(highestScore , level-1);
        let h3 = document.querySelector('h3');
        h3.innerHTML = `<b>Game is over !!!!
                        <br> Your Score is : ${level-1}
                        <br>Highest Score is : ${highestScore}
                        <br>Press any key to start the game !!
                        </b>`;
        
        resetGame();
    }
}

function buttonClicked()
{
    // Is the game is not started notinng will happen on clicking the buttons
    if(level == 0)
    return ;

    let btn = this;     // this will represent for which button the functin is called
    userFlash(btn);
    let btnColor = btn.getAttribute('id');
    userSeq.push(btnColor);

    let idx = userSeq.length-1; // index of the last input color
    checkAns(idx); 
}

let buttons = document.querySelectorAll('.btn');
for(let btn of buttons)
{
    btn.addEventListener("click" , buttonClicked);
}

function resetGame()
{
    begin = false;  // to  restart the game
    level = 0;
    gameSeq = [];
    userSeq = [];
}