var randomNumber1 = Math.floor(Math.random()* 6) + 1 ;

 var randomdiceimage = "dice" + randomNumber1 + ".png";

 var randomimgsource = "images/" + randomdiceimage ;

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomimgsource);

 var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

 var randomdiceimage2 ="dice" + randomNumber2 + ".png";

  var randomimgsource2 ="images/" + randomdiceimage2 ;

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomimgsource2);

   if(randomNumber1 > randomNumber2)
   {
       document.querySelector("h1").innerHTML=" ✌️ player 1 is winner";
   }
   else if 
      ( randomNumber2 > randomNumber1)
   {
       document.querySelector("h1").innerHTML ="✌️  player 2 is winner";
   }
   else
   {
       document.querySelector("h1").innerHTML = " 🎌 match draw";
   }
