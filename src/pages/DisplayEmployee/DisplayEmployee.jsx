import './DisplayEmployee.css'
import SideNav from "../../components/SideNav/sideNav"
import { useGetEmployeeByIdQuery } from "../../api-client"
import {  useParams , useNavigate } from 'react-router-dom';

const DisplayEmployee = ()=>{
    let { id } = useParams();
    const { data, error, isLoading } = useGetEmployeeByIdQuery(id)
    
    const options = {
        0:"ADMIN", 
        1:"HR",
        2:"ADMIN",
        3:"MANAGER"
     }

     



    const formFields=[
        {label:"Name" ,name:"name",},
        {label:"Email",name:"email" , },
        {label:"Experience" ,name:"experience", },   
        {label:"Status",name:"status" , }, 
    ]

    return(
        <>
        
        <SideNav/>
        <div className="main">
                <h2 className="head" >
                    Employee Details
                </h2>


                {error ? ( <>Oh no, there was an error</>) : isLoading ? ( <>Loading...</>) : 
                             data ? (
                              <>
                                
                                {     
                                      
                                <div className="details">
                                {
                                    formFields.map((item)=>{
                                        return(
                                            <div className="block">
                                                <div className="label">{item.label}</div>
                                                <div className="value">{data[item.name]} </div>  
                                            </div>
                                                            
                                        )
                                        
                                    })  
                                }  
                                <div className="block">
                                                <div className="label">Role</div>
                                                <div className="value">{options[data.role]} </div>  
                                            </div>

                                    
                                </div> 
                                }
                                      </>
                                    ) : null}
                            
                            
                        
                
        </div>
        </>
    )
}


export default DisplayEmployee