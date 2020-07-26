$(document).ready(function () {

    var hasUsername = false;
    var hasPassword = false;

    var langCode;

    $("#mySelect").change(function () {
        langCode = $(this).val();
    })

    $("#login").on("click", function (event) {

        console.log(langCode)
        event.preventDefault()
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        if (username.length < 1) {
            $('#username').addClass("error");
            if (!hasUsername) { $('#username').after('<span class="error"> Please enter your username </span>') };
            hasUsername = true;
            // stop it from appending error divs when clicking login twice  
        }
        if (password.length < 1) {
            $('#password').addClass("error");
            if (!hasPassword) { $('#password').after('<span class="error"> Please enter a password </span>') };
            hasPassword = true;
        }
        if (username.length > 1 && password.length > 1) {

            if (langCode) {
                var queryURL = "https://fourtonfish.com/hellosalut/?lang="
                $.ajax({
                    url: queryURL + langCode,
                    method: "GET"
                }).then(function (res) {
                    var greeting = res.hello;
                    console.log(greeting)
                    $("#greeting").html("<span>").text(greeting + " " + username + " you have successfully logged in!");
                    var button = $('<button id="logout">Logout</button>');
                    $("#logoutBtn").html(button);

                })

            } else {
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
                            $("input").removeClass('error')
                            $("input").next("span").remove();
                            $("#greeting").html("<span>").text("Have a great day " + username);

                        });


                    })

                });
            }

        }

    })





    // $("#username").keyup(function() {
    //     $("#username").removeClass("error");

    // })
    // $("#password").keyup(function() {
    //     $("#password").removeClass("error");
    // })

});