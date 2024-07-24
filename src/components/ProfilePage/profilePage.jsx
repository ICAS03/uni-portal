import "./profilePage.css";
import Navbar from "../Navbar/navbar";
import LatestProjectCard from "./latestProjectCard";
import ProjectCard from "./projectCard";


const ProfilePage = () => {
  return (
    <div className="profile-page">
        <Navbar/>
        <div className="profile-body">
            <div className="profile-card">
                <img className="profile-pic" src="https://media.istockphoto.com/id/1018078858/photo/gorgeous-ginger-cat-on-isolated-black-background.webp?b=1&s=170667a&w=0&k=20&c=EwlaB19d5gWoUp_8O71QU22eAzTcittlZ-A_-EwYgnk=" alt="profile" ></img>
                <div className="personal-details">
                    <h1>Uwe Uwe Miaomi</h1>
                    <h3>Bachelor's of Architecture (Hons)</h3>
                    <p className="personal-desc">I am a passionate computer science student who sleeps at 5am everyday #worklifebalance</p>
                </div>
                <div className="edit-tag">Edit</div>
            </div>
        <hr/>
        <h2 className="title-h2">Latest Project</h2>
        <LatestProjectCard/>
        <h2 className="title-h2">Previous Project</h2>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>
        
    </div>
  );
}

export default ProfilePage