let marks=prompt("enter your marks");
let result=0;
switch(true){
    case (marks>=90):
result="a";
    break;
case (marks>=70):
    result="B";
    break;
    case (marks>=50):
        result="C";
        break;
        default:
            result="F";


}
console.log(`your grade is ${result}`)