(function(){
    "use strict";

    var mugSect = document.getElementById("mugSect");
    var flashSect = document.getElementById("flashSect");
    var knifeSect = document.getElementById("knifeSect");

    var mugClass = mugSect.getAttribute("class");
    var flashClass = flashSect.getAttribute("class");
    var knifeClass = knifeSect.getAttribute("class");

    var mugText = document.getElementById("mugText");
    var flashText = document.getElementById("flashText");
    var knifeText = document.getElementById("knifeText");

    var mugTextClass = mugText.getAttribute("class");
    var flashTextClass = flashText.getAttribute("class");
    var knifeTextClass = knifeText.getAttribute("class");

 
    mugSect.addEventListener("mouseover", function(){
      mugSect.setAttribute("class", "mugRect");
      mugClass = "mugRect";
      mugText.setAttribute("class", "visible");
    });
    

    mugSect.addEventListener("mouseout", function(){
      mugSect.setAttribute("class", "mugCircle");
      mugClass = "mugCircle";
      mugText.setAttribute("class", "invisible");
    });

    flashSect.addEventListener("mouseover", function(){
      flashSect.setAttribute("class", "flashRect");
      flashClass = "flashRect";
      flashText.setAttribute("class", "visible");
    });
    

    flashSect.addEventListener("mouseout", function(){
      flashSect.setAttribute("class", "flashCircle");
      flashClass = "flashCircle";
      flashText.setAttribute("class", "invisible");
    });

    knifeSect.addEventListener("mouseover", function(){
      knifeSect.setAttribute("class", "knifeRect");
      knifeClass = "knifeRect";
      knifeText.setAttribute("class", "visible");
    });
    

    knifeSect.addEventListener("mouseout", function(){
      knifeSect.setAttribute("class", "knifeCircle");
      knifeClass = "knifeCircle";
      knifeText.setAttribute("class", "invisible");
    });
       


  


}());

