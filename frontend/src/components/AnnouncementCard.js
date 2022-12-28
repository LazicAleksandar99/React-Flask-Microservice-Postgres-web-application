import React from 'react';
import { createRoutesFromChildren } from 'react-router-dom';
import { useDeleteAnnouncementMutation } from '../context/announcement/announcementApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';

const AnnouncementCard= ({ heading, description, picture, left, id}) =>{

  const token = useSelector(selectCurrentToken) 
  const role = JSON.parse(atob(token.split('.')[1])).role
  const [deleteAnnouncement] = useDeleteAnnouncementMutation()

  const deleteAnnouncementById = async() => {
    try{
        const response = await deleteAnnouncement(id)
    }catch(error){
        console.log(error)
    }
  }

  return (
    <div>
        <div className="row featurette">
            <div className={ left ? "col-md-7 order-md-2" : "col-md-7"}>
                <h2 className="featurette-heading fw-normal lh-1">{heading}</h2>
                {role == "creator" ? <button type="button" onClick={deleteAnnouncementById} className="btn btn-danger">Delete</button>: <div></div>}
                <p className="lead">{description}</p>
            </div>
            <div className={left ? "col-md-5 order-md-1": "col-md-5"}>
            {/* <img 
              src="https://res.cloudinary.com/dfms5eutq/image/upload/v1671932374/adfj2ppy7ied6xdtnhnc.png" 
              className="featurette-image img-fluid mx-auto" 
              alt="Responsive image" 
              style={{width: '500',height: '500', preserveAspectRatio: 'xMidYMid slice', focusable: "false"}}

              /> */}

                <img className="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto" src={picture} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            </div>
        </div>

        <hr className="featurette-divider"/>
    </div>
  );
}
export default AnnouncementCard;