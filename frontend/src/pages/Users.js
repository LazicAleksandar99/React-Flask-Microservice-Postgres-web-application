import React, {useState} from 'react';
import { useGetAllUsersQuery } from '../context/user/usersApiSlice';
import Pagination from "../components/Pagination";
import UserList from '../components/UserList';
import { ToastContainer } from 'react-toastify';

const Users= () =>{

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    let content  
  
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error 
    } = useGetAllUsersQuery(undefined, {refetchOnMountOrArgChange: true});


    if(isLoading){
        content = <div><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br></div> 
    }else if(isSuccess){
        console.log(users)
        const currentPosts = users.users.slice(firstPostIndex, lastPostIndex);
        content = 
        <div>
        <UserList usersData={currentPosts} />
                <Pagination
                    totalPosts={users.users.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
        <ToastContainer/>
        </div>
        
    }else if(isError){
        console.log(error)
        content = <p>Error</p>
    }


    return content
}
export default Users;