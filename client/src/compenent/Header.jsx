import React from 'react'
import { RiChat1Line, RiCompass3Line, RiHome7Fill, RiHome7Line, RiNotionLine } from '@remixicon/react'
import { RiNotificationLine } from '@remixicon/react'
import { RiGroupLine } from '@remixicon/react'


const Header = () => {
    let displayAlignJustify = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1vw",
        flex: "1"
    }
    let iconstyling = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3vw",
    }
    const profileImage = "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    return (
        <div style={{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            height: "80px",
            width: "100%",
            backgroundColor: "white",
            position: "fixed"
        }}>
            <div className="left" style={displayAlignJustify}>
                <h1 style={{ cursor: "pointer" }}><a href='/' style={{ letterSpacing: "-3px" }}>Fusion Flock</a></h1>
                <input type="text" style={{
                    width: "20vw",
                    height: "40px",
                    outline: "none",
                    padding: "20px",
                    borderRadius: "10px",
                    border: "1px solid grey"
                }} placeholder='search' />
            </div>
            <div className="middle">
                <div className="icon" style={iconstyling}>
                    <RiHome7Line style={{ cursor: "pointer      " }} />
                    <RiCompass3Line style={{ cursor: "pointer       " }} />
                    <RiChat1Line style={{ cursor: "pointer      " }} />
                    <RiNotificationLine style={{ cursor: "pointer       " }} />
                    <RiGroupLine style={{ cursor: "pointer      " }} />

                </div>
            </div>
            <div className="right" style={displayAlignJustify}>
                <div className="right-left" style={displayAlignJustify} >
                    <div className="profile" style={{
                        border: "1px solid red",
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src={profileImage} alt="" />
                    </div>
                    <span>Prakash Joshi</span>
                </div>
                <a href="#" style={{
                    color: "blue",
                    fontWeight: "600",
                    textDecoration: "none"
                }}>Switch</a>


            </div>
        </div>
    )
}

export default Header