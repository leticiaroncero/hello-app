$(document).ready(function () {
    $("#login").on("click", function (event) {
        event.preventDefault()
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();
        if (username.length < 1) {
                $('#username').after('<div class="error"> Please enter your username </div>');
             }
             if (password.length < 1) {
                $('#password').after('<span class="error"> Please enter a password </span>');
             }
        // validateForm();

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
                var greeting = res.hello
                $("#greeting").text(greeting).html("<span>").text(username + " you have successfully logged in!");
                var button = $('<button id="logout">Logout</button>');
                $("#logoutBtn").append(button);
                $("#logout").on("click", function (event) {
                    var username = $("#username").val().trim();
                    $("form")[0].reset();
                    $("#greeting").html("<span>").text( "Have a great day " + username);
                     
                 });
                
                
            })
           
        });
       

    })
    
});