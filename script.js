$(document).ready(function () {
    $("#login").on("click", function (event) {
        event.preventDefault()
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();
        if (username.length < 1) {
                $('#username').addClass("error");
                $('#username').after('<div class="error"> Please enter your username </div>');
             // stop it from appending error divs when clicking login twice  
        }
        if( password.length < 1) {
            $('#password').addClass("error");
            $('#password').after('<span class="error"> Please enter a password </span>');
        }
        if (username.length > 1 && password.length >1 ) {
        var queryURL = "http://ip-api.com/json/"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            var ip = res.query

            $.ajax({
                url: "https://fourtonfish.com/hellosalut/?ip=" + ip,
                method: "GET"
            }).then(function (res) {
                var greeting = res.hello;
            
                $("#greeting").html("<span>").text(greeting + " " + username + " you have successfully logged in!");
                var button = $('<button id="logout">Logout</button>');
                $("#logoutBtn").html(button);

                $("#logout").on("click", function (event) {
                    var username = $("#username").val().trim();
                    $("form")[0].reset();
                   
                    $("#greeting").html("<span>").text( "Have a great day " + username);
                     
                 });
                
                
            })
           
        });
    
    } 

    })
     
    $("#mySelect").change( function() {
        
        var langCode = $(this).val();

         return langCode;
    })

    
    
    // $("#username").keyup(function() {
    //     $("#username").removeClass("error");
        
    // })
    // $("#password").keyup(function() {
    //     $("#password").removeClass("error");
    // })

});