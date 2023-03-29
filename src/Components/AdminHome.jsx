import Navbar from "./Navbar";
import AdminPage from "./AdminPage";
import Employee from "./Employee";
import { Routes, Route } from "react-router-dom";
import CreateEmp from "./CreateEmp";



const AdminHome = () => {
    
   return(
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<AdminPage/>}/>
            <Route path="/create" element={<CreateEmp/>} />
            <Route path="/employee" element={<Employee/>}/>
        </Routes>
    </div>
   )
}
 
export default AdminHome;