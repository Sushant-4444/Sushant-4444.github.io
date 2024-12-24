import React from "react";
const Header = () =>{
    return(
        <>
            <header className="h-[10vh] bg-[#F3F3F3] font-aeonik">
                <div className="nav-bar flex flex-row max-sm:justify-end">
                    <ul className="nav-links flex flex-row max-sm:hidden" style={{fontSize: "max(1.2vw, 12px)"}}>
                        <li className="m-[0.5vw] ml-[4vw] mt-[2vw]">About me</li>
                        <li className="m-[0.5vw] mt-[2vw]">Resume</li>
                        <li className="m-[0.5vw] mt-[2vw]">Projects</li>
                        <li className="m-[0.5vw] mt-[2vw]">Contact</li>
                    </ul>

                    <div className="hamburger hidden max-sm:visible max-sm:flex flex-col justify-center items-center m-[1vw]">
                        <div className="line w-[4vw] h-[0.5vw] bg-black mb-[0.5vw]"></div>
                        <div className="line w-[4vw] h-[0.5vw] bg-black mb-[0.5vw]"></div>
                        <div className="line w-[4vw] h-[0.5vw] bg-black mb-[0.5vw]"></div>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header