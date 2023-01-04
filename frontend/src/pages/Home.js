import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useGetAllAnnouncementsQuery } from '../context/announcement/announcementApiSlice';
import AnnouncementList from '../components/AnnouncementList';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';
import Loading from './Loading';

import "../assets/styles/Home.css"
import { ToastContainer } from 'react-toastify';
import { showErrorToastMessage } from '../components/ToastNotifications';
import CarouselSlide from '../components/CarouselSlide';

const Home= () =>{

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const token = useSelector(selectCurrentToken)  
  const navigate = useNavigate() 
  const role = JSON.parse(atob(token.split('.')[1])).role
  
  const {
    data: announcements,
    isLoading,
    isSuccess,
    isError,
    error 
  } = useGetAllAnnouncementsQuery(undefined, {refetchOnMountOrArgChange: true});

  const forwardToNewAnnouncement = () => {
    navigate('/new/announcement')
  }

  let content 
  if(isLoading){
    content = <Loading/> 
  } else if(isError){
    showErrorToastMessage(error)
    content = <div><ToastContainer/></div>
  } else if(isSuccess){  
      const currentPosts = announcements.announcements.slice(firstPostIndex, lastPostIndex);     
      content = 
      <div>
        <CarouselSlide/>
        <div className="container marketing">
          <AnnouncementList announcementsData={currentPosts} />
            <Pagination
                totalPosts={announcements.announcements.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            { role === "creator" ? <button onClick={forwardToNewAnnouncement}>New Announcement</button> : <div></div>}

        </div>
        <ToastContainer/>
      </div>
  }

  return (
    content
  )
}
export default Home;