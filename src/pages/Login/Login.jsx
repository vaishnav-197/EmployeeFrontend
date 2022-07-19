
import InputField from "../../components/InputField"
import Button from "../../components/Button"
import kvLogo from './kv-logo.png'
import loginImg from './login.png'
import './Login.css'
import {useState , useEffect}  from 'react';
import { useNavigate } from "react-router-dom";

const Login = () =>{    

    const navigate = useNavigate();
    const [ login ,setLogin]  = useState({})


    return(
        <div className="login">

        <div className="left">
            <img src={loginImg} alt="?" srcset="" />
        </div>
        
        <div className="right">

            <div className="login-input">
                <img src={kvLogo} alt="?" srcset="" />
                <InputField label="Username"  placeholder="Username" style="login-input-input" />
                <InputField label="Password" type='password' placeholder="Password" style="login-input-input"  />
                <div className="btn">
                    <Button style="login-button" label="Login In" HandleClick={ ()=>{navigate('list')}}/>
                </div>
            </div>
            
        </div>
        
            
        </div>
    )
}


export default Login