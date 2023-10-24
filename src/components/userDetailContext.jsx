import React, { useState } from "react";

export const UserDetailContext=React.createContext();

function UserDetails({children}){
    const [mail,setMail]=useState("")
    const[pass, setPass]=useState("")
    let [OTP, setOTP] = useState(false);

return(
    <UserDetailContext.Provider value={{mail,setMail,pass, setPass,OTP,setOTP}}>
        {children}
    </UserDetailContext.Provider>
)
}
export default UserDetails;