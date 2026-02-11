class User {
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username , email , password){
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const User1 = new Teacher("User" , "user@google.com" , "123")
User1.addCourse();

const user2 = new User("Priya")
user2.logMe();