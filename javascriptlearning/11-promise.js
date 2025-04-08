 
/*
let isNotesPrepared = true;//promise true
const promiseNote = new Promise( function(resolve, reject) {
    if(isNotesPrepared){
        resolve("Guys.. Here is your notes");
    }
});
promiseNote.then(function(success){
    console.log(success);
    console.log("Thanks You Sir.. For sharing the notes...");
});

let isNotesPrepared = false;//promise false
const promiseNote = new Promise( function(resolve, reject) {
    if(isNotesPrepared){
        resolve("Guys.. Here is your notes");
    }else{
        reject("I am not able to share today's notes")
    }
});
promiseNote.then(function(success){
    console.log("========then=========");
    console.log(success);
    console.log("Thanks You Sir.. For sharing the notes...");
}).catch(function(failure){
    console.log("=======catch==========");
    console.log(failure);
    console.log('No problem Sir...');
    console.log("Bahut kadhoos hai ye Teacher....");
    
}).finally(function() {
    console.log("=======finally==========");
    console.log("I must have my own notes");
    console.log("My notes is prepared....");
    
})*/

let isNotesPrepared = false;//arrow function
const promiseNote = new Promise( function(resolve, reject) {
    if(isNotesPrepared){
        resolve("Guys.. Here is your notes");
    }else{
        reject("I am not able to share today's notes")
    }
});
promiseNote.then(success =>{
    console.log(success);
    console.log("Thanks You Sir.. For sharing the notes...");
}).catch(failure =>{
    console.log("=======catch==========");
    console.log(failure);
    console.log('No problem Sir...');
    console.log("Bahut kadhoos hai ye Teacher....");
    
}).finally(() =>{
    console.log("=======finally==========");
    console.log("I must have my own notes");
    console.log("My notes is prepared....");
    
});

