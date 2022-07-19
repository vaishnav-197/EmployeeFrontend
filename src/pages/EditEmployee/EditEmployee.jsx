import InputField from "../../components/InputField"
import Button from "../../components/Button"
import InputSelect from "../../components/InputSelect"
import { useSelector } from 'react-redux'
import SideNav from "../../components/SideNav/sideNav"
import { useState } from "react"
import { useGetEmployeeByIdQuery , useUpdateEmployeeMutation } from "../../api-client"


import {  useParams  , useNavigate} from 'react-router-dom';



const EditEmployee = ()=>{
    const navigate = useNavigate();
    let { id } = useParams();

    const { data, error, isLoading } = useGetEmployeeByIdQuery(id)
    
    const [updateEmployee, { isLoading: isUpdateLoading }]  = useUpdateEmployeeMutation()
    const [editedinputs, seteditedInputs] = useState({});

    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        seteditedInputs(values => ({...values, [name]: value}))

      }



      const handleSubmit =  async (event) => {
        event.preventDefault();
        
        try {
            let Updatedata={
                name:data.name,
                email:data.email,
                experience:data.experience,
                role:data.role,
                status:data.status
            }
            const body = {...Updatedata,...editedinputs}
            const params = {id,body}
            console.log(typeof(Updatedata.email))
            // console.log('params',params)
            await updateEmployee(params)
            console.log('data updated')
            seteditedInputs({})
            navigate('/list')
        } catch (error) {
            console.error('Failed to edit the post: ', error)
        }
      }


    



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
                    Edit Employee
                </h2>
                <form className="form" >

                {error ? ( <>Oh no, there was an error</>) : isLoading ? ( <>Loading...</>) : 
                             data ? (
                              <>
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
                                                    handleChange={handleChange}  
                                                />                            
                                            )
                                            
                                        })
                                    }
                                            <InputSelect
                                                defaultValue={data.role}
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
                                                defaultValue={data.status}
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
                              </>
                            ) : null}


  
                    <div className="buttons">
                        <Button
                            label="Submit"
                            HandleClick={handleSubmit}
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


export default EditEmployee