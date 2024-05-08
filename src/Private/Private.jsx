import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Private = ({ children }) => {
    const { User, loading } = useContext(AuthContext)


    if (loading) {
        return <div className="min-h-[60vh] flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (User) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default Private;