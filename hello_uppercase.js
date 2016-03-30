//takes a username as a parameter and returns "Hello, USERNAME!"
module.exports = function(username) {

if (username) {
  return ("Hello," + " " + username.toUpperCase() + "!");
}

//"should return uppercase hello if no parameter supplied  - 'HELLO!'"

else {
  return ("HELLO!");
}

};
