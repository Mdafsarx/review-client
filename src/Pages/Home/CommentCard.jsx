import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const CommentCard = ({data}) => {
   const {Reload,setReload}=useContext(AuthContext)
   
   const handleDelete=()=>{
     axios.delete(`https://review-server-mdafsars-projects.vercel.app/comments/${data?._id}`)
     .then(data=>{
        if(data.data.deletedCount===1){
            alert('deleted successful')
            setReload(!Reload)
        }
          
     })
   }


    return (
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button className="btn btn-square btn-sm" onClick={handleDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <h1><span className="font-bold text-xl">Name:  </span>{data?.name}</h1>
                    <p>{data?.comment}</p>
                </div>
            </div>
    );
};

export default CommentCard;