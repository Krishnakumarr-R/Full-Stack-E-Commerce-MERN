const backendDomin ='http://localhost:8080'

const SummaryApi={
    signUp : {
        url:`${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url :`${backendDomin}/api/signin`,
        method : "post"
    },
    current_user :{
        url:`${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url:`${backendDomin}/api/userlogout`,
        method : "get"
    },
    AllUsers : {
        url : `${backendDomin}/api/all-users`,
        method : "get"
    },
    updateUser : {
        url :`${backendDomin}/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url :`${backendDomin}/api/upload-product`,
        method : "post"
    }
}

export default SummaryApi