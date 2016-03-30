//takes a username as a parameter and returns "Hello, USERNAME!". If the username is Joe or Bob only say "Hello!"
module.exports = function(username) {

  if ((username === "Bob") || (username === "Joe")) {
    return ("Hello!")

  } else {
    return ("Hello," + " " + username.toUpperCase() + '!')


  }


};
//
// var greetings = function (username){
//
//   if ((username === "Bob") || (username === "Joe")) {
//     console.log ("Hello!")
//
//   }
//   else {
//     console.log ("Hello," + " " + username.toUpperCase() + '!');
//
//   }
// };
// greetings("Bob");
// greetings("Cara");
