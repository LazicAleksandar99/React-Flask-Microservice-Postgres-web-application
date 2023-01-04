import React, {useState} from 'react';
import { useGetAllUsersQuery } from '../context/user/usersApiSlice';
import Pagination from "../components/Pagination";
import UserList from '../components/UserList';
import { ToastContainer } from 'react-toastify';
import Loading from './Loading';
import { showErrorToastMessage } from '../components/ToastNotifications';

const Users= () =>{

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
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
        content = <Loading/>
    }else if(isSuccess){
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
        showErrorToastMessage(error)
        content = <div><ToastContainer/></div>
    }
    return content
}
export default Users;