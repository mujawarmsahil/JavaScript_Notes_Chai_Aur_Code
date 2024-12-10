class user {
    constructor(username)
    {
        this.username = username;
    }

    logMe(){
        console.log(`username is : ${this.username}`);
    }

    static createId(){ // when we dont want to give access to outside world;
        return `123`
    }
}
const hitesh = new  user("hitesh");
// console.log(hitesh.createId());

class Teacher extends user {
    constructor(username , email , password)
    {
        super(username);
        this.email = email ;
        this.password = password;
    }
}

const devTeacher = new Teacher("devTeacher","devTeacher@gmail.com","123456");
// console.log(devTeacher.createId())