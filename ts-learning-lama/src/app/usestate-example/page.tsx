'use client'

import { useState } from "react";

type UserType = {
  sessionId:number,
  name:string,
};
export default function Page(){
    const [username, setUserName] = useState("");
    const [user, setUser] = useState<UserType | null>(null);

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value)
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setUser({
            name:username,
            sessionId:Math.random(),
        })
    }
    return (
      <div className="useStateExample">
        {user ?(`${user.name} Logged in`):(<form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>)}
        {/* Be aware */}
        {user?.name}
      </div>
    );
}