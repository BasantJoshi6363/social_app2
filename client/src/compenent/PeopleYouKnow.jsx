import React from 'react'
import Profile from './Profile'

const PeopleYouKnow = () => {
  return (
    <div>
        <div>
            <div style={{
                height: "280px",
                width: "230px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column"

            }}>

                <div className="upper-activity" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1.8vw",
                    alignItems: "center",
                    // backgroundColor : "Red",
                    width: "100%"
                }}>
                    <h2 style={{ fontSize: "13px" }}>Activity</h2>
                    <h4 style={{ fontSize: "13px", opacity: "40%" }}>see all</h4>

                </div>
                <div className="id-activity" style={{listStyle : "none",}}>
                    <li  style={{display : "flex", gap : "1.2vw"}}>
                        <Profile /> <p><h4>prakash</h4> Started following you. 5 m</p>

                    </li>
                    <li style={{display : "flex", gap : "1.2vw"}}>
                        <Profile /> <p><h4>prakash</h4> likes your Photo. 5 m</p>

                    </li>
                    <li  style={{display : "flex", gap : "1.2vw"}}>
                        <Profile /> <p><h4>prakash</h4> Started following you. 5 m</p>

                    </li>
                    <li style={{display : "flex", gap : "1.2vw"}}>
                        <Profile /> <p><h4>prakash</h4> likes your Photo. 5 m</p>

                    </li>
                </div>
        
                

            </div>
        </div>
    </div>
  )
}

export default PeopleYouKnow