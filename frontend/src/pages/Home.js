import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useGetAllAnnouncementsQuery } from '../context/announcement/announcementApiSlice';
import AnnouncementList from '../components/AnnouncementList';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';
import Loading from './Loading';

import "../assets/styles/Home.css"
const Home= () =>{

  //const [left,setLeft] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const token = useSelector(selectCurrentToken)  
  const navigate = useNavigate()
  let content  
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

  if(isLoading){
    content = Loading 
  }else if(isSuccess){
    console.log("announcements:")
    console.log(announcements)
      const currentPosts = announcements.announcements.slice(firstPostIndex, lastPostIndex);
      content = 
      <div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#0d6efd"/></svg>

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>                <br></br>

                  {/* <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/3000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#0d6efd"/></svg>

              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>                <br></br>

                  {/* <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#0d6efd"/></svg>

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <br></br>
                  {/* <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p> */}
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container marketing">
          <AnnouncementList announcementsData={currentPosts} />
            <Pagination
                totalPosts={announcements.announcements.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            { role == "creator" ? <button onClick={forwardToNewAnnouncement}>New Announcement</button> : <div></div>}

        </div>
      </div>
      
  }else if(isError){
    content = <p>Error</p>
  }
  return (
    content
  )
}
export default Home;