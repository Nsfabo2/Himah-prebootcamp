/*Step 1: Identify what variables are needed to determine if a rider can ride the rollercoaster.
#1 an age variable 
#2 a height variable */
// Step 2:  create those variables.
var height;
var age;
/* Step 3: explain what the variables must be set to in order for the rider to ride. 
For the rider to get on the rollercoaster he/she needs to be
42 inches or taller and older than 10 years old 
height => 42
age > 10   */

/*Step 1: Review and edit your variables as needed
Are your variables accurate? Update them if need be.
height > 52
age > 10 */

/*Step 2: Create a conditional where:
If the rider's height is greater than 52, the console.log should say "Get on that ride, kiddo!".
Otherwise, console.log should say "Sorry kiddo. Maybe next year." */
function RightTORide (height){
if(height>52) {
    console.log("Get on that ride, kiddo!")
} else {
    console.log("Sorry kiddo. Maybe next year.")
}
}
/*Stretch Feature 1: require both height and age. */
function BothTORide (height,age){
    if(height>52 && age>10){
        console.log("you are old enouh ! and tall enouh! Get on that ride, kiddo!")
     } else {
        console.log("Sorry kiddo. Maybe next year.") 
     }
}
/*Stretch Feature 2: require either height or age requirements must be met. */
function OneOfwhichTORide (height,age){
    if(height>52 || age > 10){
        console.log("you either old enouh! or tall enouh! Get on that ride, kiddo!")
    } else {
        console.log("Sorry kiddo. Maybe next year.") 
    }
}