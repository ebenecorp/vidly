import  http from "./httpService";


// console.log(process.env.REACT_APP_NAME);

const apiEndpoint = 'users';

export function register(user){
    return http.post(apiEndpoint, {
        email: user.email,
        password: user.password,
        name: user.name
    });
};
