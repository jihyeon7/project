// 컴퓨터는 게임이 시작할때 랜덤한 숫자를 뽑는다
// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That's right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI


let inputNumber = document.getElementById("inputNumber");
let playButton = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");
let resultArea = document.getElementById("resultArea");
let chanceArea = document.getElementById("chanceArea");
let resultNumber = 0;
let gameOver = false;
let chances = 3;
let history = [];
playButton.addEventListener('click',play);
resetButton.addEventListener('click',reset);
inputNumber.addEventListener('focus',function(){inputNumber.value=''});




function play(){
    let insertNumber = inputNumber.value;

    if(insertNumber<1 || insertNumber >100){
        resultArea.textContent = "1과 100사이의 숫자를 입력해주세요.";
        gameOver = true;
        return;
    }
    if(history.includes(insertNumber)){
        resultArea.textContent = "같은 값을 입력하셨습니다."
        gameOver = true;
        return;
    }
    history.push(insertNumber);
    chances --;
    chanceArea.textContent = `( 정답 : ${resultNumber} ) 남은기회는 ${chances} 번 입니다.`;
    if(insertNumber<resultNumber){
        resultArea.textContent = "UP!!!!";
    }else if(insertNumber>resultNumber){
        resultArea.textContent = "DOWN!!!!";
    }else{
        resultArea.textContent ="정답입니다~^___^";
    }

    if(chances<1){
        chanceArea.textContent = "기회를 다 사용하셨어요";
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }

    
}
function randomNumber(){
    resultNumber = Math.floor(Math.random()*100)+1;
    console.log("정답은 " , resultNumber);
    chanceArea.textContent = `총 기회는 ${chances}번`;
}

function reset(){
    inputNumber.value = "";
    chances = 3;
    gameOver=false;
    playButton.disabled = false;
    resultArea.textContent="리셋되었습니다 >__<";
    randomNumber();
}

randomNumber();
