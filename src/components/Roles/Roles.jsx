import { useState } from "react";

const Roles = () => {

    const list_role = ["Frontend", "Ux-Ui", "Backend", "Mobile", "HR", "Testing"];
    const user_list = [
        {
            id:1, name:"Mukhammad", age:19
        },
        {
            id:2, name:"Alihan", age:18
        }
    ]
    const [role, setRole]=useState("");
    const edit_role_fn=(item)=>{
        setRole(item)
    }
  return (
    <div>
      {list_role.map((item)=>{
        return (
                <button onClick={()=>edit_role_fn(item)} key={item}>{item}</button>
        );
      })}
      <p>{role}</p>
    </div>
  )
};

export default Roles;