
import InputField from "../../components/InputField"
import Button from "../../components/Button"
import InputSelect from "../../components/InputSelect"
import './style.css'
import SideNav from "../../components/SideNav/sideNav"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCreateNewEmployeeMutation } from "../../api-client"

const CreateEmployee = ()=>{

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [createNewEmployee, { isLoading }] = useCreateNewEmployeeMutation()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))

      }

    
    const handleSubmit =  async (event) => {
        event.preventDefault();
        inputs["departmentId"]="8e594267-5e32-441e-ac4c-f1a224009833"
        console.log(inputs);
        try {
            await createNewEmployee(inputs).unwrap()
            console.log('data sent')
            setInputs({})
            navigate('/list')
        } catch (error) {
            console.error('Failed to save the post: ', error)
        }
      }





    

    const formFields=[
        {label:"Employee Name" ,name:"name", type:"text" , placeholder:"Employee Name"},
        {label:"password" ,name:"password", type:"password" , placeholder:"password"},
        {label:"email",name:"email" , type:"email" , placeholder:"Employee Email"},
        {label:"Joining Date" , name:"joiningDate",type:"date" , placeholder:"Joining Date"},
        {label:"Experience" ,name:"experience", type:"text" , placeholder:"Experience"},
        {label:"Address" , name:"address",type:"text" , placeholder:"Address"},
        {label:"Upload ID proof" ,name:"Upload ID proof", type:"file" , placeholder:"C"},
    ]
    return(
        <>
        <SideNav/>
        <div className="main">
                <h2 className="head" >
                    Create Employee
                </h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="employee-input">
                        {
                            formFields.map((item)=>{
                                return(
                                    <InputField
                                        style="form-input"
                                        name={item.name}
                                        label={item.label}
                                        type={item.type}
                                        placeholder={item.placeholder}  
                                        handleChange={handleChange}
                                    />                            
                                )
                                
                            })
                        }
                        
                                <InputSelect
                                    style="form-input"
                                    label="role"
                                    handleChange={handleChange}
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
                                    style="form-input"
                                    label="status"
                                    handleChange={handleChange}
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
                    <div className="buttons">
                        <Button
                            label="Submit"
                        />
                        <Button
                            label="Cancel"
                        />
                    </div>
                        
                </form>
        
        
            
        </div>

        </>
    )
}


export default CreateEmployee