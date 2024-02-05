import React from 'react'

const Profile = () => {
  const profileImage = "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <div style={{
        height : "50px",
        width : "50px",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }}>
        <img src={profileImage} style={{
            height : "100%",
            width : "100%",
            borderRadius : "50%"
        }} alt="" />
    </div>
  )
}

export default Profile