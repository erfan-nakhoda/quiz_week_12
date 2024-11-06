type Tuser = {
    username : string,
    password : string,
    profile? : {
        bio : string,
        age : number,
        city : string,
        skills : string[]
    }
}