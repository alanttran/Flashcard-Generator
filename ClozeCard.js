"use strict";
(function() {
    function ClozeCard(text, cloze) {        
        if (text.includes(cloze)) {
        	this.fullText = text; // George Washington was the first president of the United States
        	this.cloze = cloze; // George Washington
            this.partial = text.replace(cloze, '...'); // was the first president of the United States
        } else {
            throw "There's no '" + cloze + "' in '" + text + "'";
        }
        this.print = function() {
            // "George Washington"
            console.log("\n=============================\n")
            console.log("ClozeCard cloze: " + this.cloze);

            // " ... was the first president of the United States."
            console.log("ClozeCard partial: " + this.partial);

            // "George Washington was the first president of the United States. "
            console.log("ClozeCard fullText: " + this.fullText);
        }

    }
    module.exports = ClozeCard;
})();
