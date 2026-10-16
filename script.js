let val=Math.floor(Math.random()*10+1);
        
       
        function guess(){
             let your= +(document.getElementById("your").value);
            if(your === val){
            document.getElementById("dis").innerHTML="Correct";
            }else{
                if(val < your){
                    document.getElementById("dis").innerHTML="Hint : Your number is high";
                }else{
                    document.getElementById("dis").innerHTML="Hint : Your number is low";
                }
            }
        }