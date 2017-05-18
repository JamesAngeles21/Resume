var programTitle = "";
var numberOfButtonClicks = 0;
var maxNumberOfDays = 0;
var exercise = "";
var sets = 0;
var reps = 0;
var time = 0;


function storeInfo() {
    exercise = document.getElementById("exercise").value;
    sets = document.getElementById("sets").value;
    
    if(document.getElementById("typeOfActivity").textContent == "# of Reps") {
        reps = document.getElementById("type-of-exercise").value;
    }
    else {
        time = document.getElementById("type-of-exercise").value;
    }
    
    document.getElementById("exercise").value = "0";
    document.getElementById("sets").value = "";
    document.getElementById("type-of-exercise").value = "";
    document.getElementById("measurement").style.display = "none";
}

function clearContent() {
    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("type-of-exercise").value = "";
    document.getElementById("measurement").style.display = "none";
    
}



function storeTitle() {
    programTitle = document.getElementById("input-11").value;
    document.getElementById("input-11").value = "";
    document.getElementById("program-heading").innerHTML = programTitle;
}



function incrementClicks() {
    
    if(numberOfButtonClicks  < maxNumberOfDays) {
    
        numberOfButtonClicks++;
        updatePage(numberOfButtonClicks);
        
    
    }
    
}


function TimedExercise(sets, time) {
    this.sets = sets; 
    this.time = time;
}

function RepExercise(sets, reps) {
    
    this.sets = sets;
    this.reps = reps;
    
}

function changeMaxNumOfDays(max) {
    
    maxNumberOfDays = max;
}

function updatePage(num) {
        document.getElementById('title-day').innerHTML = "Day #" + num;
    
    
}

function showDiv() {
    document.getElementById("fourth-page").style.display = "block";
}

function showExerciseType(type) {
    document.getElementById("typeOfActivity").textContent = type;
    document.getElementById("measurement").style.display = "block";
}
