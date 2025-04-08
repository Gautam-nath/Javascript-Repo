    show();
    function show() {
        console.log("Inside Show Function.....");
        
    }
   var demo = function () {
        console.log("inside Show function.....");//function expression does not show
        
    }

    demo();
   var demo = function demo() {
        console.log("Inside show function....");
        
    }

    var demo = function demo() {
        console.log("Inside show function....");
        
    }
    demo();//function show 