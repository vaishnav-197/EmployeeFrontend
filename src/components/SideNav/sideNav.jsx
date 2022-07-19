
import logo from "./kv-logo.png"
import listImg from './List.png'
import './SideNav.css'
const SideNav = ()=>{


    return(
        <div className="sidenav">
        <a href="">
            <img src={logo} alt="logo" srcset=""/>
        </a>
        <nav>
            <div className="list">
                <div className="round">
                    <img src={listImg} alt="" srcset=""/>
                </div>
                <p>Employee list</p>
            </div>
            
            
        </nav>
           
        
</div>
    )
}



export default SideNav