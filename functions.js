const functions = {
    add: (num1, num2) => num1 + num2,  
    isNull: ()=> null,
    isUndefined: ()=> undefined,
    checkValue: (x)=> x,
    createUser:()=>{
        const user = { 
            firstName: 'Maycon'
        };
        user['lastName'] = 'Santos';
        return user;
    },
}

module.exports = functions;