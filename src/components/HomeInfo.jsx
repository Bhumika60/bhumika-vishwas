import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box' >
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm-leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I'm <span className='font-semibold' >Bhumika</span> 👋
            <br />
            A Frontend Engineer from India.
        </h1>
    ),
    2: (
        <InfoBox
        text="Aspiring Frontend Developer with an MCA degree, picking up skills through hands-on projects."
        link="/about"
        btnText= "Learn more about me"
        />
        
    ),
    3: (
        <InfoBox
        text="Built numerous projects and gained valuable skills along the way. Curious about what I’ve created?"
        link="/projects"
        btnText= "Explore My Portfolio"
        />
    ),
    4: (
        <InfoBox
        text="Need a fresh perspective on your project or looking for a new developer? I’m just a few keystrokes away!"
        link="/contact"
        btnText= "Get in Touch"
        />
    )
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo