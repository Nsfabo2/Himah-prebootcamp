/*Step1:answare the following
#1 How do we know we need a loop here? 

2# What's the starting point of the loop?
starts at 2 miles
3# When should the loop stop?
ends at 6 miles
4# How will it know to stop?
using less than opreator will stop it 
5# What's the incrementing for each iteration of the loop?
increments by 2 
6# What variables do we need? 
only a counter */
function forloop(){
    for(var i = 2; i < 6; i + 2){
        console.log("here is a candy for you, good job!")
    }
}

function whileloop(){
    var miles;
    var i =2;
    while(i>=2 && miles == 5.5){
        console.log("here is a candy for you, good job!")
        i+=2;

    }
}