import InputField from "../../components/InputField"
import Button from "../../components/Button"
import InputSelect from "../../components/InputSelect"
import SideNav from "../../components/SideNav/sideNav"
import { useGetEmployeeByIdQuery } from "../../api-client"
import {  useParams , useNavigate } from 'react-router-dom';

const DisplayEmployee = ()=>{
    let { id } = useParams();
    const { data, error, isLoading } = useGetEmployeeByIdQuery(id)





    const formFields=[
        {label:"Employee Name" ,name:"name", type:"text" , placeholder:"Employee Name"},
        {label:"email",name:"email" , type:"email" , placeholder:"Employee Email"},
        {label:"Experience" ,name:"experience", type:"text" , placeholder:"Experience"},    
    ]

    return(
        <>
        
        <SideNav/>
        <div className="main">
                <h2 className="head" >
                    Employee Details
                </h2>

                <form className="form" >

                {error ? ( <>Oh no, there was an error</>) : isLoading ? ( <>Loading...</>) : 
                             data ? (
                              <>
                                {              
                                <div className="employee-input">
                                {
                                    formFields.map((item)=>{
                                        return(
                                            <InputField
                                                defaultValue={data[item.name]}
                                                style="form-input"
                                                name={item.name}
                                                label={item.label}
                                                type={item.type}
                                                placeholder={item.placeholder}  
                                                disabled="disabled"
                                            />                            
                                        )
                                        
                                    })  
                                }   
                                    <InputSelect
                                        defaultValue={data.role}
                                        style="form-input"
                                        label="role"
                                        disabled="disabled"
                                        options = {[ 
                                            {  key:"ADMIN",
                                               value:"0" 
                                            }, { 
                                                key:"HR",
                                                value:"1" 
                                            } ,{ 
                                            key:"ENGINEER",
                                            value:"2" 
                                        } ,{ 
                                            key:"MANAGER",
                                            value:"3" 
                                        } ]}
                                        />
                                    <InputSelect
                                        defaultValue={data.status}
                                        style="form-input"
                                        label="status"
                                        disabled="disabled"
                                        options = {[ {  key:"active",
                                                        value:"active" 
                                                    }, { 
                                                        key:"inactive",
                                                        value:"inactive" 
                                                    }, { 
                                                        key:"probation",
                                                        value:"probation" 
                                                    } ]}
                                        />
                                </div> 
                                }
                                      </>
                                    ) : null}
                            
                            
                        
                </form>
        </div>
        </>
    )
}


export default DisplayEmployee