import { useContext } from "react"
import { AuthContext } from "./AuthProvidor/AuthProvidor"

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;