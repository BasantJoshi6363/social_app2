import React from 'react'
import Profile from './Profile'
import { RiArtboardLine, RiEmojiStickerFill, RiIeLine, RiVideoAddLine  } from '@remixicon/react'
import { RiImage2Line } from '@remixicon/react'
import { RiVideoLine} from '@remixicon/react'
import { RiArticleLine} from '@remixicon/react'
import { RiChat1Line } from '@remixicon/react'




const CreatePost = () => {
  
  return (
    <div style={{ height: "120px", width: "700px", backgroundColor: "white", padding: "10px",display : "flex",flexDirection :"column",gap : '1.3vw',borderRadius : "5px"}}>
      <div className="uppper-create-post" style={{ display: "flex", gap: "1.2vw", alignItems: "center" }}>
        <Profile />
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
          <RiEmojiStickerFill style={{
            cursor: "pointer"
          }} />
        </div>
      </div>
        <div className="lower-create-post" style={{display :"flex",justifyContent : "space-between",}}>
          <div className="left-side-lower-post"style={{display : "flex",gap : "1.5vw"}}>
            <li style={{display : "flex", alignItems :"center",gap:"5px"}}>
              <RiImage2Line size={18} />
              <h3 style={{fontSize : "13px"}}>Image</h3>
            </li>
            <li style={{display : "flex", alignItems :"center",gap:"5px"}}>
              <RiVideoLine size={18} />
              <h3 style={{fontSize : "13px"}}>Video</h3>
            </li>
            <li style={{display : "flex", alignItems :"center",gap:"5px"}}> 
              <RiChat1Line size={18} />
              <h3 style={{fontSize : "13px"}}>Poll</h3>
            </li>
          </div>
          <div className="right-side-lower-post">
          <li style={{display : "flex", alignItems :"center",gap:"5px"}}> 
              <RiArticleLine size={18} />
              <h3 style={{fontSize : "13px"}}>Poll</h3>
            </li>
          </div>
        </div>
        
    </div>
  )
}

export default CreatePost