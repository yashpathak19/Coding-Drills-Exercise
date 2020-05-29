//J3 2019
//this programme is not complete, I have done multiple attempts to solve it but I couln't figure it out.
//I wrote down the thing that I want to do, and coded that way but somehow I am not able to solve it.

function findResult() {
    var no_of_lines = document.getElementById("no_of_lines").value;
    var text;
    var previous_string;
    var count;
    var output;
    var skip;
    for (i=0; i<no_of_lines; i++){
        line = i + 1;
        //getting the line
        text = (document.getElementById("line_" + line).value).split("");
        previous_string = "";
        count = 1;
        output = "";
        last_value_recorded = false;
        //looping through the values
        for (j=0; j<text.length; j++){
            skip = false;
            debugger
            if (previous_string != text[j] && previous_string != ""){  
                output += count + " " + previous_string + " ";
                count = 1;
            }
            
            if (previous_string == text[j]){
                previous_string = text[j];
                count += 1;
            }
            else if (previous_string == ""){
                previous_string = text[j];
                skip = true;
            }
        }
        //if not skip then print the output
        if (!skip){
            document.getElementById("result_" + line).innerHTML = output;
        }
    }
}
