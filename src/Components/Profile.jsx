import React,{useContext} from "react";
import UserContext from "../Context/UserContext"

function Profile (){
    const {user} = useContext(UserContext)
    if (!user) return <div className="px-auto text-center">Please Login</div>
    return <div className="px-auto text-center">Welcome {user.userName} & {user.password}</div>

}
export default Profile