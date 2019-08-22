//Note: Try landscaping mode for better code's visibility on your mobile.

//SEQUENCE OF LETTERS
//Tell me about the sequence of these letters as follows below...
var letters = ['A', 'B', 'C', undefined, 'E'],
    output = "",
    ind = 0;

for (; letters[ind];) {
    output += letters[ind];
    ind++;
}

//What will the 'output' variable alert on the screen?
////////////////////////////////
//YOUR OPTIONS:

//A) ABCundefinedE
//B) ABC
//C) SyntaxError
//D) ABCE
//E) undefined















































































































































































//You are a curious person hehe Perhaps you are here interested to know about the  self typing effect...cool, isn't it? (=

//Then here you can check it out
window.onload = function() {
    var probcaseTitle = "PROB CASE: Sequence of Letters",
        buttonOutput = document.getElementsByClassName("buttonOutput")[0];
    buttonOutput.addEventListener("click", showAnswer);

    function showAnswer() {
        setTimeout(function() {
            var messageIntro = "Tell me. Did you analyze the question and have the answer?\nThen you can click OK. Otherwise go solving the Prob Case!";
            var messageAnsw = probcaseTitle + "\noutput:\n" + output + "\n\n\n\n\n I congratulate you if you got it right.\nOtherwise try other prob cases!";
            if (confirm(messageIntro)) {
                alert(messageAnsw);
            } else {
                //it does not exactly close on mobile.
                window.close();
            }
        }, 2000);
    }

    (function selfTyping() {
        var targetText = probcaseTitle,
            leng = targetText.length,
            targetElement = document.querySelector(".backgroundCode span"),
            indLetter = 0,
            speedLetter = 400;

        setInterval(function() {
            targetElement.innerHTML += targetText.charAt(indLetter);
            indLetter++;
            leng--;

            if (leng < 0) {
                clearInterval(this);
                return;
            }
        }, speedLetter); //milliseconds
    })();



};


/*
By: Luis Febro
Goal: MY JS PROB CASES - Creating some Practical Problems for honing and training programming skills, particularly for Javascript language.
Date: 03/24/19
*/