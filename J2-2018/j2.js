//J2 2018
function findResult() {
    //getting the values
    var parking_spaces = document.getElementById("no_of_parking_spaces").value;
    var yesterdays_record = document.getElementById("yesterdays_record_of_parking_space").value;
    var todays_record = document.getElementById("todays_record_of_parking_space").value;
    var yesterday_record = yesterdays_record.split("");
    var today_record = todays_record.split("");
    var no_of_occupied_space = 0;
    for (i=0; i<=parking_spaces; i++){
        //comparing the records
        if (yesterday_record[i] == "C" && today_record[i] == "C"){
            no_of_occupied_space += 1;
        }
    }
    //displaying the result
    document.getElementById("result").innerHTML = no_of_occupied_space;
}
