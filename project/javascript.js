let string = "ROSEH";

document.write(string);
document.write("<br>");
function getvalue(){
    var userAnswer = document.getElementById('answer1').value;
    document.write(userAnswer);
    string = userAnswer;
    Testcase();
}
function Testcase(){
    if(string[0] == 'H' && string[2] =="R" && string[3] == "S"){
        document.write("WIN");
    }else{
        document.write("LOOSE");
    }
}