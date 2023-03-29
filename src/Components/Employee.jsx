import { useEffect, useState } from "react";
import { Link} from "react-router-dom";


const Employee = () => {

    let [employee, setEmployee] = useState([])

    let [searchapidata,setapidata] = useState([])

    let [filterVal,setFilterVal] = useState('');
    
    useEffect(() => {
        let fetchingData = () => {
            fetch(`http://localhost:1000/emp`)
            .then(res => res.json())
            .then(user => {
                setEmployee(user)
                setapidata(user)
            })
        }
        fetchingData()     
    },[])

    let handlefilter = (e) => {
        if (e.target.value === '') {
            setEmployee(employee)
        } else {
            const filterresult = searchapidata.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setEmployee(filterresult);
            
        }
        setFilterVal(e.target.value)
    }

     let handleDelete = (id) => {
        fetch(`http://localhost:1000/emp/${id}`,{
            method:"DELETE",
            headers:{'content-type':"application/json"}
        })
        alert('the item has been deleted')
        
    }   
   
    
    
    return (
        <div>
            <div className="d-flex justify-content-end m-3 ">
            <input type="text" placeholder="search" value={filterVal} onChange={(e) => handlefilter(e)} className="rounded w-25 p-2 "/>
            </div>
            <table style={{backgroundColor:"gainsboro"}} className="table  w-lg-100 w-sm-25 bg-gradient-success" border="1px">
             <tr style={{backgroundColor:"gray"}}>
            <th scope="col">id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Course</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" colSpan={2}>Action</th>
                                        </tr>
            {
                employee.map((item,index) => {
                    return(
                        
                                    <tbody>
                                        <tr>
                                        <th scope="row" >{index+1}</th>
                                        <td><img src={item.image} alt="" width="50px" height="50px"/></td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.course}</td>
                                        <td>{item.date}</td>
                                        <td><Link to={`/admin/emp/${item.id}`}><button className="btn btn-primary">Edit</button></Link></td>
                                        <td><button onClick={() => handleDelete(item.id)} className="btn btn-secondary">Delete</button></td>
                                        </tr>
                                        
                                    </tbody>
                                    
                    )
                })
            }
            </table>
        </div>
    );
}

export default Employee;