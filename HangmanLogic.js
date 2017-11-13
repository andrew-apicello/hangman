//select random word
wordList = ["tiger","lion","bobcat","cougar","panther","cheetah","jaguar","linx","leopard"];
word = wordList[Math.floor(Math.random()*wordList.length)];
// console.log(word);

//create arrays
wordArray = [];
for (i = 0; i < word.length; i++){
	wordArray.push("_ ");
}
// console.log("wordArray",wordArray);
document.querySelector("#blank").innerHTML = wordArray;


finalWordArray = []
for (i = 0; i < word.length; i++){
	finalWordArray.push(word[i]);
}
console.log("Hint: " + finalWordArray);



missedLettersArray = []
document.querySelector("#missedLetters").innerHTML = missedLettersArray;
attempts = 6;
document.querySelector("#attempts").innerHTML = attempts;


//turn array into string
// wordString = "";
// console.log(wordString);
// for(i = 0 ; i < wordArray.length ; i++){
// 	wordString =  wordString + wordArray[i];
// }


document.onkeyup = function(event){
	userInput = event.key;

	// console.log("userInput: ",userInput);


//array.indexOf(input) ::gives the index in an array of a given input
//finalWord  = wordArray.splice(i, 0, userInput);

	// arrayPositions = wordArray.indexOf(userInput);
	// console.log("arrayPositions",arrayPositions)

	for (var i = 0; i <= word.length; i++) {

		if (word.charAt(i) === userInput){
			wordArray[i] = userInput;
			document.querySelector("#blank").innerHTML = wordArray;

		} else if (finalWordArray.indexOf(userInput) >= 0){

		} else if (missedLettersArray.indexOf(userInput) >= 0) {
			document.querySelector("#missedLetters").innerHTML = missedLettersArray;
			document.querySelector("#attempts").innerHTML = attempts;


		} else  {
			missedLettersArray.push(userInput);
			document.querySelector("#missedLetters").innerHTML = missedLettersArray;
			attempts = attempts - 1
			document.querySelector("#attempts").innerHTML = attempts;
		}
	}

	draw(attempts);
	// console.log("wordArray",wordArray);
	// console.log("finalWordArray",finalWordArray);

	if (attempts <= 0){
		document.write("<h1>Game Over =(</h1><h2><a href='https://andrew-apicello.github.io/hangman/'>Click Here to Play Again</a></h2>")
	}

	if(wordArray.indexOf("_ ") < 0){
		document.write("<h1>You Win!!!</h1><h2><a href='https://andrew-apicello.github.io/hangman/'>Click Here to Play Again</a></h2>")
	}

};




//===================Canvas========================


console.log("attempts: " + attempts)

W = 400;
H = 400;

var canvas = document.getElementById("myCanvas"),
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(W*5/6,H*8/8);
ctx.lineTo(W*5/6,H*1/8);
ctx.lineTo(W/2,H*1/8);
ctx.lineTo(W/2,H*3/8);
ctx.stroke();


function draw(attempts){

if (attempts <= 5){
ctx.beginPath();
ctx.arc(W/2,W/3,H/15,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
}

if (attempts <= 4){
ctx.beginPath();
ctx.moveTo(W/2,H*3/8);
ctx.lineTo(W/2,H*5/8);
ctx.stroke();
}

if (attempts <= 3){
ctx.beginPath();
ctx.moveTo(W/2,H*5/8);
ctx.lineTo(W/2.5,H*6/8);
ctx.stroke();
}

if (attempts <= 2){
ctx.beginPath();
ctx.moveTo(W/2,H*3/8);
ctx.lineTo(W/2,H*5/8);
ctx.lineTo(W/1.65,H*6/8);
ctx.stroke();
}

if (attempts <= 1){
ctx.beginPath();
ctx.moveTo(W/2,H*4/8);
ctx.lineTo(W/2.5,H*3/8);
ctx.stroke();
}



}