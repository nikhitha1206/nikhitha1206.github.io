            function validate()
            {
               const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               var name=document.getElementById("name").value;
               var email=document.getElementById("email").value;
               var message=document.getElementById("msg").value;
               if(!name)
               {
                document.getElementById("info").innerHTML="";
                   document.getElementById("Message1").innerHTML="required";
               } 
               if(!email)
               {
                document.getElementById("info").innerHTML="";
                   document.getElementById("Message2").innerHTML="required";
               }
               if(!message)
               {
                document.getElementById("info").innerHTML="";
                   document.getElementById("Message3").innerHTML="required";
               }
               if(email)
               {
                if(!re.test(String(email).toLowerCase()))
                {
                    document.getElementById("info").innerHTML="";
                 document.getElementById("Message2").innerHTML="enter valid email";
                    
                }  
               }
            if(name && email!=null && message && re.test(String(email).toLowerCase()))
            {
               document.getElementById("info").innerHTML="Successfull";
            }
             
            }
            function validateEmail(email) {
                        
                   if(email)
                   {
                    document.getElementById("Message2").innerHTML="";
                   }
            }
            function validateName(name){
                if(name)
                document.getElementById("Message1").innerHTML="";
            }
            function validateMessage(message){
                if(message)
                document.getElementById("Message3").innerHTML="";
            }
