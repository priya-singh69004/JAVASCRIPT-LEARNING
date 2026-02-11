function SetUsername(username){
  this.username = username;
  console.log("called")
}
function createUSer(username,email,password){
  SetUsername.call(this , username)
  this.email = email;
  this.password = password;
}
const User = new createUSer("priya" , "priya@123", "123")
console.log(User);
// console.log(User.email);