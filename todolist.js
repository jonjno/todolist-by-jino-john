function validate(){
    let email=document.getElementById("user"); 
    console.log(email.value);
    let pass = document.getElementById("pass"); 
    console.log(pass.value);
    
    function caller(email,pass){
        return new Promise((resolve,reject)=>{
            if((email.value=="admin")&&(pass.value==12345)){

                resolve("entered if");
                document.location.href = "secondpage.html"
                
                return true
            }
            else{
                reject("entered else");
                alert("invalid")
                return false;
            }
        })
    
    }
    caller(email,pass).then((msg)=>{
        console.log(msg);
        console.log("entered then");
       
    }).catch((msd)=>{
        console.log(msd);
        console.log("entered catch")
        
    })
}