boxes = document.querySelectorAll("#main div"), choice = 0;

function WinnerBox(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    move.innerHTML = "<p style='font-size: 2.5rem'><strong>"+b1.innerHTML+"</strong><span style='font-size: 2rem'> is winner!</p>";
    move.style.fontSize = "26px";
}

function getWinner() {
    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");

    // possibilites
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        WinnerBox(box1, box2, box3);
        document.getElementById('winner').innerHTML = 'You win! Rematch?';
        document.getElementById('winner').style.paddingTop = '100px';
        document.getElementById('winner').style.display = 'block';
    }

    else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        WinnerBox(box4, box5, box6);
        document.getElementById('winner').innerHTML = 'You win! Rematch?';
        document.getElementById('winner').style.paddingTop = '100px';
        document.getElementById('winner').style.display = 'block';
    }
    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        WinnerBox(box7, box8, box9);
        document.getElementById('winner').innerHTML = 'You win! Rematch?';
        document.getElementById('winner').style.paddingTop = '100px';
        document.getElementById('winner').style.display = 'block';
    }
    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        WinnerBox(box1, box4, box7);
        document.getElementById('winner').innerHTML = 'You win! Rematch?';
        document.getElementById('winner').style.paddingTop = '100px';
        document.getElementById('winner').style.display = 'block';
    }

    else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
        WinnerBox(box2, box5, box8);
        document.getElementById('winner').innerHTML = 'You win! Rematch?';
        document.getElementById('winner').style.paddingTop = '100px';
        document.getElementById('winner').style.display = 'block';
    }

    else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
        WinnerBox(box3, box6, box9);
        document.getElementById('winner').innerHTML = 'You win! Rematch?';
        document.getElementById('winner').style.paddingTop = '100px';
        document.getElementById('winner').style.display = 'block';
    }

    else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
        WinnerBox(box1, box5, box9);
        document.getElementById('winner').innerHTML = 'You win! Rematch?';
        document.getElementById('winner').style.paddingTop = '100px';
        document.getElementById('winner').style.display = 'block';
    }

    else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
        WinnerBox(box3, box5, box7);
        document.getElementById('winner').innerHTML = 'You win! Rematch?';
        document.getElementById('winner').style.paddingTop = '100px';
        document.getElementById('winner').style.display = 'block';
    }

} onclick
for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (choice % 2 === 0) {
                this.innerHTML = "X";
                move.innerHTML = "O - it's your turn!";
                getWinner();
                choice += 1;


            } else {
                this.innerHTML = "O";
                move.innerHTML = "X - it's your turn!";
                getWinner();
                choice += 1;
            }
            if (choice === 9) {
                restart()
            }
        }
    };
}

function restart() {
     for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        move.innerHTML = "Pick your choice!";
        move.style.fontSize = "25px";
        document.getElementById('winner').style.display = 'none'; //resetuje slogan You win
    }

}

