
let started = false;

let isGreen = false;

let hasToReset = false;

let colorChangeTimestamp = 0;
let clickTimestamp = 0;

function changeColor() {
    document.getElementById("reaction_button").style.backgroundColor = "#00FF00";
    colorChangeTimestamp = Date.now();
    isGreen = true;
}

function restart() {
    var btn = document.getElementById("reaction_button");
    started = false;
    btn.style.backgroundColor = "lightblue";
    btn.innerHTML = "Click here to start";
    document.getElementById("result_label").innerHTML = "Result: -";
    colorChangeTimestamp = 0;
    clickTimestamp = 0;
}

function reactionButtonClicked() {
    var btn = document.getElementById("reaction_button");

    if (hasToReset) {
        restart();
        hasToReset = false;
        return;
    }

    if (!started) {
        started = true;
        
        btn.style.backgroundColor = "blue";
        btn.innerHTML = "Wait..."
        setTimeout(changeColor, Math.floor(Math.random() * 10000) + 500);
        clickTimestamp = Date.now()
        return;
    }

    if (isGreen) {
        var dt = Date.now() - colorChangeTimestamp;
        document.getElementById("result_label").innerHTML = "Result: " + dt.toString() + " milliseconds.";
        hasToReset = true;
        isGreen = false;
        if (dt < 250) btn.innerHTML = "You're fast as fuck boiiii. Click to try again.";
        else if (dt > 250 && dt < 300) btn.innerHTML = "You are kinda fast. Click to try again.";
        else if (dt > 300 && dt < 350) btn.innerHTML = "Your reaction time is average. Click to try again.";
        else btn.innerHTML = "Are you 80? Click to try again.";
    }
    else {
        errorTimestamp = Date.now();
        btn.style.backgroundColor = "red";
        btn.innerHTML = "You clicked too early!";
        hasToReset = true;
    }




}
