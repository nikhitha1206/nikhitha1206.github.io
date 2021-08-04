$(document).ready(function(){ 
    $.getJSON("data.json",function(data){
        $.each(data, function (index, value) {           
            $(".container").append("<img src='"+value.url+"' />") 
                });  
            })
    }); 
                     