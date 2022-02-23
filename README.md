# FrankSinatraInformationBackend

A backend app using express to display simple information about Frank Sinatra. 

## Usage

``` node FrankSinatraInformationBackend.js```

```curl http://localhost:8080/``` 

GET on / will give a random Frank Sinatra song of amongst a pool of 20.

GET on /birth_date will give Frank Sinatra's birthday.

GET on /birth_city will give Frank Sinatra's birth city.

GET on /wives will give all the names of Frank Sinatra's wives.

Get on /picture will give Frank Sinatra's picture

Get on /public will print "Everybody can see this page"

Get on /protected is protected by a HTTP basic authentication and print "Welcome, authenticated client". The login is admin and the password is admin, otherwise it will provide a 401 not authorized. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
