import React from "react";

const About = () => {
    return (
        <>
        <div className="about w-[100%] h-[100vh] bg-[#F3F3F3] font-aeonik flex flex-row justify-center text-[#7b7b7b]">
            <div className="left-about w-[30%] flex flex-col justify-start items-start p-[2vw]">
                <span className="mt-[5vw] mb-[1vw] text-[#000]" style={{fontSize:'max(2vw,20px)'}}>About Me</span>
                <p>
                    I am a Frontend Developer with a passion for creating beautiful and responsive websites. I have a good knowledge of HTML, CSS, JavaScript, React and Next.js. I have a keen eye for design and I am always looking to improve my skills.
                </p>
            </div>
            <div className="center-about w-[30%] flex flex-col justify-center items-center p-[2vw]">
                <div className="skills-card bg-white p-[2vw] w-[80%] h-[40%] flex flex-col justify-center items-center shadow-lg rounded-lg">
                    <span className="text-[#000] mb-[1vw]" style={{fontSize:'max(2vw,20px)'}}>Skills</span>
                    <ul className="text-center">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                    </ul>
                </div>
            </div>
            <div className="right-about w-[30%] flex flex-col justify-end items-start p-[2vw]">
                <span className="text-[#000] mb-[1vw]" style={{fontSize:'max(2vw,20px)'}}>Why Choose Me?</span>
                <ul className="text-start mb-[5vw]">
                <li>Innovative Frontend Solutions.</li>
                <li>Passionate About Creating User-Centric Designs.</li>
                <li>Proficient in Modern Web Technologies.</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default About;