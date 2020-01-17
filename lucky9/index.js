function generateCard() {
   var suitsInner = ["h", "s", "d", "c"];
   var suitsOuter = ["h", "s", "d", "c"];
   var ranksInner = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
   var ranksOuter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k']
   var suitIndex = Math.floor(Math.random() * suitsOuter.length)
   var suit = [suitsOuter[suitIndex], suitsInner[suitIndex]];
   var rankIndex = Math.floor(Math.random() * ranksOuter.length);
   var rank = [ranksOuter[rankIndex], ranksInner[rankIndex]];
   document.getElementById('card1').innerHTML = "<img class='img-responsive img-fluid c1' src='pix/"+suit[0]+rank[0]+".png'>";
   var r1 = rank[0];
   var suitIndex = Math.floor(Math.random() * suitsOuter.length)
   var suit = [suitsOuter[suitIndex], suitsInner[suitIndex]];
   var rankIndex = Math.floor(Math.random() * ranksOuter.length);
   var rank = [ranksOuter[rankIndex], ranksInner[rankIndex]];
   document.getElementById('card2').innerHTML = "<img class='img-responsive img-fluid c2' src='pix/"+suit[0]+rank[0]+".png'>";
   var r2 = rank[0];
   if (r1=='j'||r1=='q'||r1=='k'){
      r1=0;
   }
   if (r2=='j'||r2=='q'||r2=='k'){
      r2=0;
   }
   lucky(r1,r2);
}


function lucky(r1,r2){
   total = r1+r2;
   if (total>10){
      total-=10;
   }
   if (total == 9){
      document.getElementById('lucky').innerHTML = "<h1 class='win'>You Win</h1>";
   }
   else {
      document.getElementById('lucky').innerHTML = "<h1 class='lose'>You Lose</h1>";
   }
}