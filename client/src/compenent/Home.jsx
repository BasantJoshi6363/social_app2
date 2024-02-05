import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import Friends from './Friends'
import CreatePost from './CreatePost'
import Profile from './Profile'
import Post from './Post'
import Activity from './Activity'
import PeopleYouKnow from './PeopleYouKnow'

const Home = () => {
  let flexStyle = {

  }
  return (
    <div style={
      {
        height: "100vh",
        width: "100%",
        backgroundColor: "#F6F6F6",
        position:"relative"
      }
    }>
      <div className="navigation" style={{height:"10%"}}>
      <Header/>

      </div>
      <div className="homepage" style={{display : "flex", alignItems :"center",height : "90%",gap:"2vw",padding:"20px"}}>
      <div className='left' style={{display : "flex",flexDirection : "column",gap : "1vw"}}>
        <Card/>
        <Friends/>
      </div>
      <div className='middle' style={{marginTop:"110px",}}>
        <CreatePost/>
        <Post/>
      </div>
      <div className='right' style={{display : "flex",flexDirection : "column",gap : "1vw",marginTop:"63px",}}>
        <Activity />
        <PeopleYouKnow />

      </div>
      </div>
      





    </div>
  )
}

export default Home