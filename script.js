let bubblearea = document.querySelector(".container .bubblearea");
let hitran
let score = 0

function makeBubble() {
  let clutter = "";
  
  for (let i = 1; i <= 60; i++) {
    let randomnum = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${randomnum}</div>`;
    bubblearea.innerHTML = clutter;
  }
}

function bubbleTarget(){
    bubblearea.addEventListener("click",function(dets){
        let targetvalue = Number(dets.target.textContent)
        if(targetvalue === hitran){
            increaseScore()
            makeBubble()
            hitChange()
        }
    })
}

function increaseScore(){
    
    let scorebox = document.querySelector(".scorebox")
    score += 10
    scorebox.textContent = score
}


function hitChange(){
    let hit = document.querySelector(".hitbox")
    hitran = Math.floor(Math.random()*10)
    hit.textContent = hitran
}

function setTimer(){
    let timer = 60
    let timebox = document.querySelector(".timerbox")
    let newtime = setInterval(() => {
        timer = timer - 1
        timebox.textContent = timer
        if(timer === 0){
            clearInterval(newtime)
        }
    }, 1000);
}
setTimer()

hitChange()

makeBubble()

bubbleTarget()