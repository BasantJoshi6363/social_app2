import React from 'react'

const Friends = () => {
    let profileStyle = {
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    }
    let profileImageStyle = {
        height : "100%",
        width : "100%",
        borderRadius : "50%"
    }
    
    const profileData = [
        {
            imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Alexa Bliss"
        },
        {
            imageUrl: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Prakash joshi"
        },
        {
            imageUrl: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Basant joshi"
        },
        {
            imageUrl: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name: "Subarna joshi"
        },
    ]

    return (
        <div>
            <div style={{
                height: "250px",
                width: "230px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column"

            }}>
                <div className="upper-friends" style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1.8vw",
                    alignItems: "center",
                    // backgroundColor : "Red",
                    width: "100%"
                }}>
                    <h2 style={{ fontSize: "13px" }}>Your Shortcut</h2>
                    <h4 style={{ fontSize: "13px", opacity: "40%" }}>see all</h4>
                </div>
                <div className="lower-content" style={{width : "100%"}}>
                {
                    profileData.map((value,i)=>{
                        return <div style={{display : "flex",gap :"1.4vw",alignItems : "center",marginTop : "10px"}}>
                            <div style={profileStyle}>
                            <img src={value.imageUrl} style={profileImageStyle} alt="" />
                            </div>

                            <a href="#" style={{color : "black",fontSize : "13px",fontWeight :"600"}}>{value.name}</a>
                             </div>
                    })
                }   
                </div>
              
            </div>
        </div>
    )
}



export default Friends