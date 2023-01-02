import React from 'react';
import { useDeleteAnnouncementMutation } from '../context/announcement/announcementApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';
import { showErrorToastMessage, showSuccessToastMessage } from './ToastNotifications';

const AnnouncementCard= ({ heading, description, picture, left, id}) =>{

  const token = useSelector(selectCurrentToken) 
  const role = JSON.parse(atob(token.split('.')[1])).role
  const [deleteAnnouncement] = useDeleteAnnouncementMutation()

  const deleteAnnouncementById = async() => {
    try{
        const response = await deleteAnnouncement(id)

        if(response?.data[0]?.error){
          const message = response.data[0].error
          showErrorToastMessage(message)
        }
        else if(response?.data[0]?.deleted){
          const message = response.data[0].deleted
          showSuccessToastMessage(message)
        }
    }catch(error){
        showErrorToastMessage(error)
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
                <img className="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto" src={picture} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            </div>
        </div>

        <hr className="featurette-divider"/>
    </div>
  );
}
export default AnnouncementCard;