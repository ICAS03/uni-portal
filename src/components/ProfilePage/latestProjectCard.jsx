import "./latestProjectCard.css";

const LatestProjectCard = () => {
    return(
        <div className="latest-project-card">
            <img className="latest-project-pic" src="https://media.istockphoto.com/id/1018078858/photo/gorgeous-ginger-cat-on-isolated-black-background.webp?b=1&s=170667a&w=0&k=20&c=EwlaB19d5gWoUp_8O71QU22eAzTcittlZ-A_-EwYgnk=" alt="project" ></img>
            <div className="latest-project-details">
                <h3>Project Title</h3>
                <p>The Willow Creek Community Center was conceived as a multifunctional space that serves as a hub for community activities, social gatherings, and educational events. The goal was to create a welcoming environment that fosters connection and growth among residents of all ages.</p>
                <h3>Project Description</h3>
                <p>Our design philosophy centered around three core principles: sustainability, functionality, and aesthetics. We aimed to blend modern architectural elements with natural materials to create a harmonious and eco-friendly space. The center features an open floor plan, maximizing natural light and promoting an airy, spacious feel.</p>
            </div>        
        </div>
    )
}

export default LatestProjectCard