import { Navigate } from "react-router-dom"
const ProtectedRoute = ({isAllowed,Children})=>{
    if(!isAllowed){
        return <Navigate to="/paginaPrincipal"/>
    }else{ 
    return Children
    }
}

export default ProtectedRoute;