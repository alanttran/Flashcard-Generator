"use strict";
(function() {
    function BasicCard(front, back) {
        this.front = front;
        this.back = back;
        this.print = function() {
            // "Who was the first president of the United States?"
            console.log("\nBasicCard front: " + this.front);

            // "George Washington"
            console.log("BasicCard back: " + this.back);
        }
    }
    module.exports = BasicCard;
})();
