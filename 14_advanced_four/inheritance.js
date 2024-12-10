class User {
    constructor(username)
    {
        this.username;
    }

    logMe()
    {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,subject,email,password)
    {
        super(username)
        this.subject = subject ; 
        this.email = email ;
        this.password = password;
    }
}