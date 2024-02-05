import React from 'react'
import Profile from './Profile'
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { PiTelegramLogoThin } from "react-icons/pi";
const ayushaImg = "https://images.pexels.com/photos/14213917/pexels-photo-14213917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const Post = () => {
  return (
    <div style={{marginTop : "3vw", height: "460px", width: "700px", backgroundColor: "white", padding: "10px",display : "flex",flexDirection :"column",gap : '.9vw',borderRadius : "5px"}}>
    <div className="uppper-create-post" style={{ display: "flex", gap: "1.2vw", alignItems: "center",justifyContent : "space-between" }}>
      <div className="leftside" style={{display :"flex",alignItems :"center", gap : "1.2vw"}}>
      <Profile />
      <li style={{listStyle : 'none'}}>
        <h4>Your Name</h4>
        <p style={{fontSize :"12px", opacity : "60%"}}>12 minutes ago</p>
        </li>
      </div>
      <div className="rightside">
      <BsThreeDotsVertical />
      </div>
     

    </div>
    <div className="text-section-for-post">
      <p>the way i live in this world is to much difficult for you.</p>
    </div>
    <div className="image-container" style={{height : "50%",width : "100%",border : "0.5px solid grey"}}>
    <img src={ayushaImg} style={{height : "100%", width : "100%",objectFit : "cover"}} alt="" />
    </div>
    <div className="react-section-lower" style={{display  : "flex",justifyContent : "space-between"}}>
      <div className="left-react-section" style={{display : "flex",gap : "2vw"}}>
      <AiOutlineLike  size={18}/>
      <FaRegComment size={18}/>
      <MdFavoriteBorder size={18}/>
      </div>
      <div className="right-react-section"></div>
      <PiTelegramLogoThin size={18}/>
    </div>
      <div className="comment-section" style={{display : "flex", alignItems : "center",gap:"1.2vw"}}>
        <Profile/>
        <div style={{
          width: "90%",
          height: "40px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F3F3F3",
          justifyContent: "space-between",
          padding: "5px",
          borderRadius: "5px"
        }}>
                   <input type="text" id='search' style={{ background: "none", border: "none", outline: "none", }} placeholder='Share something' />

          </div>
      </div>
      
  </div>
  )
}

export default Post