function sum() {
    var MyNumber = parseInt(document.getElementById('txtMyNumber').value);
    var result=(MyNumber *(MyNumber +1))/2;
    console.log(result);
}
function myFunction() {
    var text = "";
    var words = "";
    var x = prompt("Do you want to play a game?");
    do {
        text = prompt("Enter a word");
        words += text;
        x = prompt("Do you want to play again?");
        }
    while (x == "yes");
    console.log(words);
    document.getElementById("words").innerHTML = words;
}
function nameFunction() {
    var text = "";
    var x = prompt("Would you like to print your name?");
    var i = 1;
    if (x != "no") {
        var name = prompt("What is your name?");
    }
    var ans = "Hello, my name is " + name;
    console.log(ans);
    var kg = prompt("Would you like to print this again?");
    while (kg != "no") {
        kg = prompt("Would you like to print this again?");
        var exp;
        exp = "!".repeat(i);
        var full = ans + exp;
        console.log(full);
        document.getElementById("answer").innerHTML = full;
        i++;
    }
}
function foodFunction(){
    var x = prompt("Morning, Noon, or Evening?");
    var times = ["morning", "noon", "evening"];
    var mealtype = {morning:"breakfast. ", noon:"lunch. ", evening:"dinner. "};
    var food = {morning:"eggs and toast. ", noon:"a salad. ", evening:"chicken and rice. "};
    var parts = ["Since it is ",", you should be eating ", "We suggest "];

    if (x == times[0] ){
        console.log(parts[0] + times[0] + parts[1] + mealtype.morning + parts[2] + food.morning);
    }
    else if (x == times[1]){
        console.log(parts[0] + times[1] + parts[1] + mealtype.noon + parts[2] + food.noon);
    }
    else if (x == times[2]){
        console.log(parts[0] + times[2] + parts[1] + mealtype.evening + parts[2] + food.evening);
    }
}