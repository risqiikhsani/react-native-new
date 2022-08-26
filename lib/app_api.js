import instance from "./api";

const AppApi{
    login(username,password){
        return instance.post('login/',{
            username:username,
            password:password,
        })
    }
    register(username,email,password){
        return instance.post('register',{
            username:username,
            email:email,
            password:password,
        })
    }
}

export default new AppApi();