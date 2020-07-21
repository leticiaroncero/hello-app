$(document).ready(function () {
    $("#login").on("click", function (event) {
        event.preventDefault()
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
            })

        });

    })

    function validateForm() {
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        // var inputVal = []
        // inputVal.push(username);
        // inputVal.push(password);

        // if (inputVal[0] == "") {
        //     $('#username').after('<div class="error"> Please enter your username </div>');
        // }
        // if (inputVal[1]) {
        //     $('#password').after('<span class="error"> Please enter a password </span>');
        // }


        // if (username !== "" || password !== "") {

        // }
    }
});