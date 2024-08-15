import React, { useState } from "react";
import "./Register.css";
import {Button,TextField} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import axios from "axios";
import Appbar from "./Appbar";


const label={}
export default function Register(){
    const[name,setName]=useState("");

    const [pass,setPass]=useState();
    const [email,setemail]=useState();
    const [mobile,setmobile]=useState();
    const[error,Error]=useState(false);
    const handleSubmit = async (e) => {
      await axios.post("http://localhost:3001/user",{"Name":name,"Password":pass,"email":email,"mobile":mobile});
    }

    return(
      <div>
          {/* <Appbar/> */}
        <div className="bodyr">
            <div className="container">

        
                
               <div className="boxsection">
                <div className="box1">
                <h1 className="rec">REGISTER</h1>
                </div>
                
                <TextField
                
                id="name" label="USERNAME" variant="outlined" onChange={(e)=>setName(e.target.value)}
                InputLabelProps={{className:"textfield_label"}}
                
                />

                <TextField
                
                id="email" label="EMAIL ID" variant="outlined"
                InputLabelProps={{className:"textfield_label"}}
                onChange={(e)=>setemail(e.target.value)}
                />

                <TextField
                
                id="phone" label="PHONE NO" variant="outlined"
                InputLabelProps={{className:"textfield_label"}}
                onChange={(e)=>setmobile(e.target.value)}
                pattern="[A-Za-z]{10}"
                />      
                <TextField
                
                type="password"
                id="pass" label="PASSWORD" variant="outlined"
                InputLabelProps={{className:"textfield_label"}}
                onChange={(e)=>setPass(e.target.value)}
                />
                <TextField
            
                type="password"
                id="conpass" label="CONFIRM PASSWORD" variant="outlined"
                InputLabelProps={{className:"textfield_label"}}
                
                />
                
                <div className="box1">
                    
                <Checkbox {...label} />REMEMBER ME
                </div>
               <Link to='/login'>

            <Button className="but" type='submit' variant="contained" onClick={handleSubmit}>REGISTER</Button>
               </Link>
           
               </div>
               

            </div>
            </div>
            </div>
            

    );
}