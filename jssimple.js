//let word = document.getElementById('word').value;

            //let number = document.getElementById('num').value;

            //let output = document.getElementById('output').value;

            for(var i = 0;i<=5;i++) {
                function check(word, number) {
                    const pickedLetter = word[2];
                    
                    const pickedNum = number[3];
    
                     let combined = pickedLetter + pickedNum;

                return combined;
    
                   // return output.innerHTML = combined;
                }
                //console.log(check(["Denis", "12345"], ["Mary", "55911"], ["Mumbi", "325678"], ["Winnie", "7829017"])); - Output is NaN
                //console.log(check("Denis", "Winnie", "537289", "12345")); - the first two arguments are passed as parameters
                
                /*console.log(check("Denis", "12345"));// a combination of 6 groups - then repeats
                console.log(check("Winnie", "728192"));
                console.log(check("John", "392830"));
                console.log(check("Mark", "219202"));
                console.log(check("Chris", "382037"));
                console.log(check("Mary", "271203"));
                */

                console.log(check("Denis", "12345"));



            }

        //console.log(combined); //Notice that this will output // Referrence error: combined is not defined - That is because, combined is a local scope var and not global
            
//each loop must have a different output - I think a user must input a different word and numbers / or maybe we need an object or function for this?
//each output has more than 2 combinations


//A program that picks the 3 letter of every inputted word, and combines the letters - 
//if the combination is an english word, user is a winner!

//we need to know how to input different inputs for every loop, so that, if the combination is not an english word, we move on to the next round

function englishWord(wordOne, wordTwo, wordThree, wordFour) {
    const pickeddLetter1 = wordOne[2];

    const pickeddLetter2 = wordTwo[2];

    const pickeddLetter3 = wordThree[2];

    const pickeddLetter4 = wordFour[2];

    let formedWord = pickeddLetter1 + pickeddLetter2 + pickeddLetter3 + pickeddLetter4;


    if(formedWord !== "easy" || formedWord !== "decide" || formedWord !== "bold" || formedWord !== "girl" || formedWord !== "corn") {
        console.log("Try Again!");
    }
}


englishWord("Mary", "Denis", "John", "Hellen"); // expected output is "Try Again!" - since rnhl is not any of the defined words - 

//but then - what is the probabibility that the word will be any of the words suggested, assuming the words are selected at random;
/*
we can assume though, that the player has no idea of the algorithm - 
that is, the code picks out the 3rd letter of each word, (but they will soon figure it out - 
    if we show them the output - which we could hide, and just output - try again)
if not, we can place a word combination that gives one of the defined words, 

To increase the probability that player wins, or basically make it fair - 
we can create an equal chance of winning or failing - in what ways?

Is this a lucky game or a logic game - 

The game is a lucky game -

a logic game would require a little bit more involved algorithm - e.g code loops 4 times, 
randomizing picked letter, and then repeats using for example the flow of the alphabet, or the number system or just any logical pattern
*/

/* rules of the game
One of the following word combinations will make you a winner

1. Select four word combinations of your choice.
2. Input a word into a box, for the four boxes and press play.

*/


//console.log(englishWord("Mary", "Denis", "John", "Hellen")); //expected output is rnhl - not an english word, so repeat



/*
This reminds me of a question and answer app 
// we have questions, and answer choices, if selected answer matches an answer predefined by teacher, then , correct
//see below */

//Notice this is just for one question - if we want to loop all questions - ???
function checker(answer) {
    if(answer === "Na") {
        console.log("Correct!");
    }else{
        if(answer === "NA") {
            console.log("That was close!")
        }
        console.log("Please, Try Again"); //We can give a student three chances, how? or one?
    }
}


//eg . What is the chemical formula for Sodium? ANSWER = Na;

checker("Cl"); //Notice we do not use console.log, we already have locally, we just need to call the function;
//if we used console.log, expected output is undefined, though we still get the result of the function 

//if we have many questions, a possible approach - 

let questions = 0;

for(questions = 0;questions<=10; questions++) {
    function checking(ans) {
        if(ans !== "Na") {
            console.log("Next time!");
        }
        console.log("Correct!");
    }
}

checking("Na");