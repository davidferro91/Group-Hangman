var wordBank = ["Apples", "Ate", "Avocado", "Bacon", "Bagels", "Banana", "Batter", "Berries", "Biscuit", "Blueberries"]
//  this is a comment
       //  the computer picks a letter

       var random = Math.floor(Math.random() * wordBank.length);
       var word = wordBank[random];
       var wins=0;
       var losses=0;
       var lives=6;
       var choice= [];