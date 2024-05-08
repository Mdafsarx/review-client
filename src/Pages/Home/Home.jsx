import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useLoaderData } from "react-router-dom";
import CommentCard from "./CommentCard";
import { useState } from "react";
const Home = () => {

    const { User , Reload , setReload} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        axios.post('https://review-server-mdafsars-projects.vercel.app/comments',
            { comment: text, name: User?.displayName, url: User?.photoUrl })
            .then(data => {
                if (data.data.insertedId) {
                    alert('successful ❤🧡💚💙🤎')
                    setReload(!Reload)
                }
            })
    }
    const loadedData = useLoaderData();
    const [Data,setData] = useState(loadedData);

    useEffect(()=>{
        axios('https://review-server-mdafsars-projects.vercel.app/comments')
        .then(data=>setData(data.data))
    },[Reload])

       

    return (
        <div className="flex relative min-h-[calc(100vh-64px)]">

            <div className="w-[70%] my-10">
                <div className=" grid md:grid-cols-3 gap-3">
                {
                    Data?.map(data => <CommentCard key={data._id} data={data}/>)
                }
                </div>
            </div>


            <div className="w-[30%] ">
                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12  text-gray-100 absolute bottom-0 right-0">
                    <div className="flex flex-col items-center w-full">
                        <form onSubmit={handleSubmit} className="flex flex-col w-full">
                            <textarea rows="3" name="text" placeholder="Message..." className="p-4 rounded-md border-2 border-black text-black"></textarea>
                            <button type="submit" className="py-4 my-8 btn bg-black text-white ">Leave feedback</button>
                        </form>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Home;