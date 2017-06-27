"use strict";
(function(){
	function ClozeCard(text ,cloze){
		this.fullText = text; // George Washington was the first president of the United States
		this.cloze = cloze; // George Washington
		if(text.includes(cloze)){
			this.partial = text.replace(cloze, '...'); // was the first president of the United States
		}
		else{
			throw "There's no '" + cloze + "' in '" + text + "'";
		}
		
	}
    module.exports = ClozeCard;
})();

