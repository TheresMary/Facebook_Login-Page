$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required: true,
                minlength: 3,
                maxlength: 7
            },
            sname:{
                required : true,
            },
            email:{
                required: true,
            },
            psw:{
                required: true,
                minlength: 5
            },
            day:{
                required: true,
            },
            month: {
                required: true,
            },
            year:{
                required: true,
            },
            gender:{
                required: true,
            }

        },
        messages:{
            fname:{
                required: "Please enter your firstname",
                minlength: "Must be atleat 3 characters long",
                maxlength: "Must have atmost 7 characters only"
            },
            sname: "Please enter your surname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address or mobile no."
            
        }
        
    })

})