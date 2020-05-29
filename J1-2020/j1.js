//J1 2020
function findResult(){
    var small_treat = document.getElementById("small_treats").value;
    var medium_treat = document.getElementById("medium_treats").value;
    var large_treat = document.getElementById("large_treats").value;
    var score = 1 * small_treat + 2 * medium_treat + 3 * large_treat;
    if (score >= 10){
        alert("Happy");
    }
    else {
        alert("Sad");
    }
}