class User {
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`USername : ${this.username}`);
  }

  static createId(){
    return `123`
  }
}

const User1 = new User("priya");
// console.log(User1.createId());

class Teacher extends User{
  constructor(username , email){
    super(username);
    this.email = email;
  }
}
const user2 = new Teacher("singh" , "singh@123.com")
// user2.logMe();
console.log(user2.createId());