import React from "react";

const Home = () =>{
    return(
        <>
        <div className="home-coantiner flex flex-row items-center">
        <div className="left-home flex flex-col justify-center items-center w-[54vw] h-[90vh] space-y-[2.6rem]">
            <div className="upper-left-home flex flex-col justify-center w-[80%]">
            <span className="text-[2.4rem] font-bold">Hello It's me</span>
            <span className="text-[4rem] font-bold">Sushant Arora</span>
            <span className="text-[2.4rem] font-bold">And I'm a <span className="text-[#01eeff]">Front-end Developer</span></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio inventore in doloremque placeat quas, illum quia dicta nulla excepturi, recusandae laborum rerum ratione est amet modi id, tempora cumque saepe?</p>
            </div>
            <div className="lower-left-home w-[80%] space-y-[1.6rem]">
                <div className="social-links-home ">
                    <ul className="flex flex-row justify-between items-center w-[60%]">
                        <li><a href="">a</a></li>
                        <li><a href="">a</a></li>
                        <li><a href="">a</a></li>
                        <li><a href="">a</a></li>
                    </ul>
                </div>
                <button className="bg-[#01eeff] p-[1.4rem] rounded-[2rem] w-[16em] shadow-xl shadow-[0_0_20px_#01eeff]">Download CV</button>
            </div>
        </div>
        <div className="right-home-side flex justify-center items-center w-[46vw] h-[90vh]">
            <div className="circle bg-[#01eeff] w-[28vw] h-[28vw] mt-[4rem] rounded-full shadow-xl shadow-[0_0_20px_#01eeff]"></div>
        </div>
        </div>
        </>
    )
}

export default Home;