// ES6

class User {
  constructor(username, email , password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password} abc`
  }
  changeUSername(){
    return `${this.username.toUpperCase()}`
  }

}

const User1 = new User("User1" , "User1@gmail.com" , "123")
console.log(User1.encryptPassword());
console.log(User1.changeUSername());