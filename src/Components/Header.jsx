import React from "react";
const Header = () =>{
    return(
        <>
            <header className="h-[10vh] font-aeonik flex flex-row justify-between items-center px-10">
                <div className="left-header-side text-[2rem] flex justify-center items-center">Portfolio</div>
                <div className="right-header-side">
                    <ul className="flex flex-row justify-between items-center w-[40vw] text-[1.2rem] mr-[4vw]">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header