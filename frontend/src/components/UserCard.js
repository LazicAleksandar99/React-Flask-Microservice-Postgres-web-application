import React from 'react';
import { useChangeUserVerificationStatusMutation } from '../context/user/usersApiSlice';
import { showErrorToastMessage, showSuccessToastMessage } from './ToastNotifications';

const UserCard= ({ birthday, email, name, last_name, role, status}) =>{

  const [changeUserVerificationStatus] = useChangeUserVerificationStatusMutation()

  const verifyUser = async() => {
    sendStatusForVerification("verified")
  }
  
  const denyUser = async() => {
    sendStatusForVerification("denied")
  }

  const sendStatusForVerification = async (action) => {
      try{
        const response = await changeUserVerificationStatus({action,email})
        if(response?.data[0]?.error){
          const message = response?.data[0]?.error
          showErrorToastMessage(message)
        }
        else if(response?.data[0]?.verified){
          const message = response?.data[0]?.verified
          showSuccessToastMessage(message)
        }
      }catch(error){
        showErrorToastMessage(error)
      }
  }

  return (
    <tr>
      <td>
          <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width: "45px", height: "45px"}}
              className="rounded-circle"
              />
          <div className="" style={{width: "100%"}}>
              <p className="fw-bold mb-1">{name} {last_name}</p>
              <p className="text-muted mb-0">{email}</p>
          </div>
          </div>
      </td>
      <td>
          <p className="fw-normal mb-1">{birthday}</p>
      </td>
      <td>
          <p className="fw-normal mb-1">{role}</p>
      </td>
      <td>{status}</td>
      <td>
        {
          status === "pending" ? <div>
          <button type="button" onClick={verifyUser} className="btn btn-success">Accept</button>
          <button type="button" onClick={denyUser} className="btn btn-danger">Deny</button>
          </div> : <div></div>
        }
      </td>
    </tr>
  );
}
export default UserCard;