




//Jenny Student
function homeWorkJenny(callback) {
    console.log("She had dinner...");
    console.log('She started her homework...');
    console.log('After sometime.she has completed her homework.......');
    console.log("jenny posted her home work in whats app group...");
    callback();
    let completeHomeWork = function () {
        console.log("Hey Finally we both have completed homework ...");
        console.log("===================completeHomeWork=======================");
        
    }
    console.log("===================HomeWorkJenny=======================");
        

    return completeHomeWork;
}

//Elon Student
function copyHomeWorkElon() {
    console.log('when jenny callback.');
    console.log('"He will come and start coping home work... ');
    console.log("complete homework....");
    console.log("Elon posted output in what app group.");
    console.log("===================completeHomeWork=======================");
        

}
let result = homeWorkJenny(copyHomeWorkElon);
result();


