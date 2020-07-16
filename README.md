# hello-app

The objective of the Hello app is to leverage geolocation to obtain the users country so it can then generate a customized greeting in the users native language.

## User Stories

- [ ] User can see a mock login panel containing a user name text input field,
        a password text input field, and 'Login' and 'Logout' buttons.
- [ ] User can enter a mock login name into the User Name field.
- [ ] User can enter a mock password into the Password field. Input should
        be masked so the user see's asterisks (`*`) for each character that is entered
        rather than the plaintext password.
- [ ] User can click the 'Login' button to perform a mock login.
- [ ] User can see a message if either or both of the input fields are empty
        and the border color of the field(s) in error should be changed to red.
- [ ] User can see a login acknowledgement message in the format:
        `<hello-in-native-language> <user-name> you have successfully logged in!`
- [ ] User can click the 'Logout' button to clear the text input fields and
        any previous messages.
- [ ] User can see a new message when successfully logged out in the format:
        `Have a great day <user-name>!`

## Bonus features

-   [ ] User can see an additional text input field for a language code which
        will be used to override the IP obtained through geolocation. Hint:
        this is a great feature for testing your app.
-   [ ] User can see additional geolocation information after logging on that
        includes at least the local IP address, city, region, country name, zip code,
        longitude, latitude, and timezone.

## Useful links and resources

-   [Form Follows Function (Wikipedia)](https://en.wikipedia.org/wiki/Form_follows_function)
-   [Personalization (Wikipedia)](https://en.wikipedia.org/wiki/Personalization)
-   [Fourtonfish](https://www.fourtonfish.com/hellosalut/hello/)
-   [IP-API](http://ip-api.com/docs/api:json)
