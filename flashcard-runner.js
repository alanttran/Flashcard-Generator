var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

firstPresident.print();

var firstPresidentCloze = new ClozeCard(
     "George Washington was the first president of the United States.", "George Washington");

firstPresidentCloze.print();

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");