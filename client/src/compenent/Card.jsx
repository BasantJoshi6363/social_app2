import React from 'react'

const Card = () => {
  const profileImage = "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const cardImage = "https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <div>
      <div style={{
        height: "250px",
        width: "230px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
        alignItems:"center",
        display :"flex",
        flexDirection : "column"

      }}>
        <div className="profile-card" style={{
          height: "30%",
          width: "100%",
          backgroundColor: "blue",
          borderRadius: "10px"
        }}>
          <img src={cardImage} style={{ height: "100%", width: "100%" }} alt="" />
        </div>
        <div className="profile" style={{
          border: "1px solid red",
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          margin: "-25px auto"
        }}>
          <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src={profileImage} alt="" />
        </div>
        <div className="userinfo" style={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "30px", flexDirection: "column",gap : "1.1vw" }}>
          <div className="info">

            <h3>Your Name</h3>
            <p>@username</p>
          </div>
          <div className="analytics-user" style={{display : "flex",gap : "1vw"}}>
            <div className='post'>
              <h4>Post</h4>
              <p>123</p>
            </div>
            <div className='followers'>
              <h4>followers</h4>
              <p>123</p>

            </div>
            <div className='following'>
              <h4>following</h4>
              <p>123</p>
            </div>
          </div>
          <button style={{
            height : "30px",
            backgroundColor : "blue",
            border : "none",
            color : "white",
            fontWeight : "600"
          }}>My Profile</button>
        </div>

      </div>
    </div>
  )
}

export default Card