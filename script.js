$(document).ready(function () {
    $("#login").on("click", function () {

        validateForm();

    })

    function validateForm() {
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        var inputVal = []
        inputVal.push(username);
        inputVal.push(password);

        if (inputVal[0] == ""){
            $('#username').after('<div class="error"> Please enter your username </div>');
        } 
        if (inputVal[1]){
            $('#password').after('<span class="error"> Please enter a password </span>');
        }


        // if (username === "" || password === "") {

        // }
    }
});