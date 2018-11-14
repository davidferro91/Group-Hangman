var wordBank = ["Apples", "Ate", "Avocado", "Bacon", "Bagels", "Banana", "Batter", "Berries", "Biscuit", "Blueberries"]
//  this is a comment
       //  the computer picks a letter

        var word = "";
        var random = -1;
       var wins=0;
       var losses=0;
       var lives=6;
       var choice= [];
       var under="";

document.onkeyup = function(event){
    var userGuess = event.key;
    console.log(userGuess);
    
    if(random == -1){
        random = Math.floor(Math.random() * wordBank.length);
        word = wordBank[random];
        console.log(word);
        console.log(random);

        for(var i=0;i<word.length;i++){
            under=document.createElement("li");
            under.setAttribute("class", "col-1");
            var textUnder=document.createTextNode("_");
            under.appendChild(textUnder);
            document.getElementById("letterHolder").appendChild(under);
        }
    }

    else{
        for(var i=0;i<word.length;i++){
            if(word.charAt(i) == userGuess){
                var letter = document.createElement("li");
                letter.setAttribute("class", "col-1");
                var textLetter=document.createTextNode("" + userGuess.toUpperCase());
                letter.appendChild(textLetter);
                
            }
        }
    }


}