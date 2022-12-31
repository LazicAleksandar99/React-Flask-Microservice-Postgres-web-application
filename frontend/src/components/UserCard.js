import React from 'react';
import { useChangeUserVerificationStatusMutation } from '../context/user/usersApiSlice';

const UserCard= ({ birthday, email, name, last_name, role, status}) =>{

  const [changeUserVerificationStatus] = useChangeUserVerificationStatusMutation()

  let content

  const verifyUser = async() => {
    sendStatusForVerification("verified")
  }
  
  const denyUser = async() => {
    sendStatusForVerification("denied")
  }

  const sendStatusForVerification = async (action) => {
    console.log(action)
      try{
        const response = await changeUserVerificationStatus({action,email})
        console.log(response)
      }catch(error){

      }
    // try{
    //   const response = await register({name, last_name, email, birthday, password,type})

    //   if(response?.data[0]?.error){
    //     alert(response?.data[0]?.error)
    //   }
    //   else{
    //     alert(response?.data[0]?.registered)
    //     navigate('/signin')
    //   }

    // }catch(errorMsg){
    //   console.log("u kecu sam")
    //   if (!errorMsg?.response) {
    //   } else if (errorMsg.response?.status === 400) {
    //       alert('Missing Username or Password')
    //   } else if (errorMsg.response?.status === 401) {
    //       alert('Unauthorized')
    //   } else {
    //       alert('Login Failed')
    //   }
    // }
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
          content = status == "pending"? <div>
          <button type="button" onClick={verifyUser} className="btn btn-success">Accept</button>
          <button type="button" onClick={denyUser} className="btn btn-danger">Deny</button>
          </div> : <div></div>
        }
      </td>
    </tr>
  );
}
export default UserCard;