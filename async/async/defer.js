/*

Async or defer is used generally while loading the external script ( some script from outside)

to load a external scriput in out web page 

we cover 3 scenarios here 

1. using normal script tag
2. using async with script tag
3. using defer with script tag 


when you load your webpage generally 2 things happen
1. parsing the html 
2. loading the scripts -> again 2 ways one is loading from network , the other is our self

*/

// scenario 1 : 

{/* <script src=""></script>  */}

//If neither async or defer is present: The script is downloaded and executed immediately, blocking parsing until the script is completed
// in this scenario browser will keep running and once it sees or encounters the script tag 
//it stops then and der and loads the script from network and runs then and der and once
//script is completed , html parsing continous.

//Scenario 2 :

{/* <script  async src=""></script> */}


//If async is present: The script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes)
// in this case , while the parsing of html is going on the scripts from the network are 
// fetched asynchronously (parlelly) , as soon as scripts are fetched and available in browere , parsing
// is stopped and executes scripts and once done , html parsing continous

//Scenario 3 : 

{/* <script  defer src=""></script> */}

//The defer attribute is a boolean attribute.
//Note: The defer attribute is only for external scripts (should only be used if the src attribute is present).

// in this case , html parsing goes on and scripts are feteched simultaneously , 
//but it does not matter when the scripts are available in network , scripts will 
//be executed only after html parsing is completed