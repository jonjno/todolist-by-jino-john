function check() {
    var grid = document.getElementsByClassName("list");
    var check = document.getElementsByTagName("input");
    var count =  0;
    // promise
    let myPromise = new Promise(function(myResolve, myReject) {
    //Loop 
    for (var i = 0; i < check.length; i++) {
      // if loop
        if (check[i].checked) {
            count++;
            if(count ==5){
                alert(" Congrats !!\n5 Tasks have been successfully completed.");
                 myResolve("Successfully completed 5 tasks");
                 console.log("entered if statement");
                $(".list").toggle(this.disabled);
            }
            //   else if(checked>=6){
            //   alert("Cannot access more than 5 task");
             
            //  }  
            else {
                console.log("entered else condition")
              myReject("Error");
           }
        }
       
    }
   });
  }
