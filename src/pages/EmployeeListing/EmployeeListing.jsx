import SideNav from "../../components/SideNav/sideNav"
import './EmployeeListing.css'
import Button from "../../components/Button"
import InputSelect from '../../components/InputSelect'
import { useNavigate } from "react-router-dom"


import { useGetAllEmployeesQuery , useDeleteEmployeeMutation} from '../../api-client/index'

const EmployeeListing = ()=>{
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetAllEmployeesQuery()
    const [ deleteEmployee] = useDeleteEmployeeMutation()
    console.log(data)
    
    
    const deleteEmployeeById = async (id)=>{
        try {
            await deleteEmployee(id)
            // alert('deleted')
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
            
            <SideNav/>
            <div className="listing">
                <div className="listing-head" >
                        <div className="left-content">
                            <p>Employee List</p> 
                        </div>
                        
                        <div className="right-content">
                            <p>Filter by</p>
                            <div className="sort">
                                    <InputSelect
                                        styleSelect="sort-by"
                                        label=""
                                        options={[ {  key:"active",
                                                    value:"active" 
                                                    }, { 
                                                    key:"inactive",
                                                    value:"inactive" 
                                                } ]}
                                    />  
                            </div>

                            <div className="create-employee">
                                <Button 
                                    style='create-employee-button'
                                    label="+"    
                                    HandleClick={ ()=>{navigate('/create')}}
                                />
                                <p>Create Employee</p>
                            </div>
                        </div>
                        
                </div>

                <div className="listing-content">
                    <table  className="listing-table">
                            <tr className="table-head">
                              <th>Employee Name</th>
                              <th>Employee Id</th>
                              <th>Joining Date</th>
                              <th>Role</th>
                              <th>Status</th>
                              <th>Experience</th>
                              <th>Action</th>
                            </tr>


                            {error ? ( <>Oh no, there was an error</>) : isLoading ? ( <>Loading...</>) : 
                             data ? (
                              <>
                                {
                                    data.map((element)=>{
                                        return(
                                            <tr className="table-content" onClick={() => navigate(`/employee/${element.id}`)} >
                                                    <td>{element.name} </td>
                                                    <td>{element.id}</td>
                                                    <td>5.7.2022</td>
                                                    <td>{element.role}</td>
                                                    <td>
                                                      <div className={element.status} >
                                                          <p>{element.status}</p>
                                                      </div>
                                                    </td>
                                                    <td>{element.experience}</td>
                                                    <td>
                                                        <i class="fa-solid fa-pencil" onClick={(e)=>{
                                                                                                     e.stopPropagation()
                                                                                                     navigate(`/edit/${element.id}`)}} />
                                                        <i class="fa-solid fa-trash" onClick={()=>deleteEmployeeById(element.id)}></i>
                                                    </td>
                                           </tr>
                                        )
                                    })
                                }
                              </>
                            ) : null}


                            

                            
                    </table>


                </div>

               
            


            </div>
        </>
    )
}



export default EmployeeListing