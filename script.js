window.onload = function(){
    var img = document.getElementById("doge1");
    var count = document.getElementById("score");
    var score = 0;

    img.addEventListener('mousedown', function (){
        increaseScore();
        img.src = 'doge2.png';
    })
    
    img.addEventListener('mouseup', function (){
        img.src = 'doge1.png';
    })

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}