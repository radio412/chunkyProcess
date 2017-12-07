# chunkyProcess
A JavaScript for loop processor that can be throttled. THIS WAS FOR LEGACY BROWSERS IN A GALAXY FAR FAR AWAY. I am keeping it here in case i need it again. Use threads.

Example usage:
    
    //create a list you want to work with. It can be a multidimensional array.
    var myArray = ["gracias", "ustedes", "llaves", "cartas", "ceno", "mujer", "hombre"];

    
    //Parameters: the array, the function to run at each iteration, milliseconds between loops, the number of items to process per loop
    processIterate(myArray, function(myArray, iterator ){
      console.log(myArray[iterator]);
      //single out the last loop
      if(myArray.length-1 == iterator){
        console.log("vamos a starbucks.");
      }
    }, 250, 2);
    
Note the last two parameters. the 250 in this case is milliseconds between loop iterations. 
The last integer, in this case 2, is how many items you want to process per process iteration. 
If you set the last integer to be the length of your array, it will process as a normal for loop,
with the caveat that it will start, in this case, after 250 ms. 

Why??? By processing a for loop in this way, we can allow the browser to repaint during intensive loops such as loading multiple kml files.
