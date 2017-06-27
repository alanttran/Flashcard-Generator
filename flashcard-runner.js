var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");


// "Who was the first president of the United States?"
console.log("\nBasicCard front: " + firstPresident.front); 

// "George Washington"
console.log("BasicCard back: " + firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
     "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log("\n=============================\n")
console.log("ClozeCard cloze: " + firstPresidentCloze.cloze); 

// " ... was the first president of the United States."
console.log("ClozeCard partial: " + firstPresidentCloze.partial); 

// "George Washington was the first president of the United States. "
console.log("ClozeCard fullText: " + firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");