let rule = document.querySelector('.rule');
let ruleContainer = document.querySelector('.container');
let cross = document.getElementById('cross');

rule.addEventListener('click', function(){
    ruleContainer.style.display = 'block';
})
cross.addEventListener('click', function(){
    ruleContainer.style.display = 'none';
})

let gameButtns = document.querySelectorAll('.gamebtns');
let tri = document.querySelector('.triangle');

let gamecss = document.getElementById('game-css');
let gamephonecss = document.getElementById('game-phone-css');
let gameiphonecss = document.getElementById('game-iphone-css');

let gameHead = document.getElementById('game-head');
let housechoice = document.getElementById('house-choice');
let blankSpace = document.querySelector('.blank-space');
let resul = document.querySelector('.result-screen');

let a = 0;
let b = 3;
let randNum = Math.ceil(a + (b-a)*Math.random());
let Rocks = document.getElementById('Rocks');
let Paper = document.getElementById('Paper');
let Scissors = document.getElementById('Scissors');
let refreshbtn = document.getElementsByClassName('result-btn');
let scoreBoard = document.getElementById('score-board');

function showBtn(btn){
    document.querySelectorAll('.gamebtns').forEach(buttn =>{
            buttn.style.display = 'none';
    });
    document.querySelector(`#${btn}`).style.display = 'block';
}

function house(butt) {
    housechoice.innerHTML = butt;
    blankSpace.style.display = 'none';
}

function result(res){
    resul.innerHTML = `<h1 class = 'result-head'>${res}</h1>
    <button onclick = 'location.reload()' class = "result-btn">PLAY AGAIN</button>`;
    gameHead.style.width = '925px'
}

function score(count){
    scoreBoard.innerHTML = count; 
    localStorage.setItem("score", count);    
}

let points = localStorage.getItem("score");

document.addEventListener('DOMContentLoaded', function() {
    scoreBoard.innerHTML = points; 
    gameButtns.forEach(button => {
        button.onclick = function() {
                gameHead.style.display = 'flex';
                tri.style.display = 'none';
                blankSpace.style.display = 'block';
                showBtn(this.dataset.btns)
                gamecss.href = 'game.css';
                gamephonecss.href = 'game-phone.css';
                gameiphonecss.href = 'game-iphone.css';
                if (randNum == 1) {
                    setTimeout(house, 2000, `<div data-btns="Rocks"  id="Rocks" class="gamebtns position rock-position">
                    <button><img src="./images/icon-rock.svg" alt="Scissors" class="choose"></button>
                    </div>`);
                }
                else if (randNum == 2) {
                    setTimeout(house, 2000, `<div data-btns="Paper" id="Paper" class="gamebtns position">
                    <button><img  src="./images/icon-paper.svg" alt="Rocks" class="choose"></button>
                    </div>`);
                }
                else if (randNum == 3) {
                    setTimeout(house, 2000, `<div data-btns="Scissors"  id="Scissors" class="gamebtns position">
                    <button><img src="./images/icon-scissors.svg" alt="Paper" class="choose"></button>
                    </div>`);
                }
                
                
                let chooseBtns = this.dataset.btns;
                if (chooseBtns == 'Rocks' & randNum == 1){
                    setTimeout(result, 2000, 'DRAW');
                }
                else if (chooseBtns == 'Rocks' & randNum == 2 ){
                    setTimeout(result, 2000, 'YOU LOST');
                    points--;
                    setTimeout(score, 2000, points);
                }
                else if (chooseBtns == 'Rocks' & randNum == 3){
                    setTimeout(result, 2000, 'YOU WON');
                    points++;
                    setTimeout(score, 2000, points);
                }


                if (chooseBtns == 'Paper' & randNum == 1){
                    setTimeout(result, 2000, 'YOU WON');
                    points++;
                    setTimeout(score, 2000, points);
                }
                else if (chooseBtns == 'Paper' & randNum == 2 ){
                    setTimeout(result, 2000, 'DRAW');
                }
                else if (chooseBtns == 'Paper' & randNum == 3){
                    setTimeout(result, 2000, 'YOU LOST');
                    points--;
                    setTimeout(score, 2000, points);
                }


                if (chooseBtns == 'Scissors' & randNum == 1){
                    setTimeout(result, 2000, 'YOU LOST');
                    points--;
                    setTimeout(score, 2000, points);
                }
                else if (chooseBtns == 'Scissors' & randNum == 2 ){
                    setTimeout(result, 2000, 'YOU WON');
                    points++;
                    setTimeout(score, 2000, points);
                }
                else if (chooseBtns == 'Scissors' & randNum == 3){
                    setTimeout(result, 2000, 'DRAW');
                }
                
        }
    });
});
