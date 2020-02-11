(function(){
    
    "use strict";

     // listen for the submission of the form
    document.getElementById("myForm").addEventListener("submit", function(event){
        // prevent the default behavior
        event.preventDefault();

        // get all the text fields from the form
        const formData = document.querySelectorAll("input[type=text]");
        // create an array to hold values from the form
        const words = [];

        //loop through the fields and add the words to the array, one at a time.
        for( let i=0; i<formData.length; i++){
            words.push(formData[i].value);    
        }
        //You can see the array in the console, if you want...
        console.log(words);

        //run a function to put the words into the madlib... Function below...
        //Pass the array of words the user typed into the function
        makeMadLib(words);

    });

    //This function takes an array input, then constructs the madlib, peppering
    //in the user's words where necessary.
    function makeMadLib(theWords){
        const madlib = `Today, I will wear a/an ${theWords[0]} ${theWords[1]}, ${theWords[2]} ${theWords[3]} on my ${theWords[4]}, and a/an ${theWords[5]} ${theWords[6]}.`;

        //Get the madlib container
        const mlContainer = document.getElementById('madlib');

        //Change the guts of the container to your madlib
        mlContainer.innerHTML = `<h2>${madlib}</h2>`;

        //change the class on the madlib container so you can see it.
        mlContainer.setAttribute("class", "visible");
    }

}()); 
 
