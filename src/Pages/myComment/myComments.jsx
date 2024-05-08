import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
// import axios from "axios";
import CommentCard from "../Home/CommentCard";
import useAxios from "../../useAxios";

const MyComments = () => {
    const { User, Reload } = useContext(AuthContext);
    const uri = `/comment?name=${User?.displayName}`
    const [myData, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxios();

    useEffect(() => {
        // axios.get(uri, { withCredentials: true })
        axiosSecure.get(uri)
            .then(data => {
                setData(data.data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [Reload])



    return (
        <div>
            {
                loading ? <div className="min-h-[60vh]  flex justify-center items-center">
                    <span className="loading loading-bars loading-lg"></span>
                </div> :
                    <div className="grid  md:grid-cols-4 gap-8 py-10">
                       { myData?.map(Data => <CommentCard key={Data._id} data={Data} />) }
                    </div>

            }
        </div>
    );
};
export default MyComments;

