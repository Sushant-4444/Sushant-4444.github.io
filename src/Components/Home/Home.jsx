import React from "react";

const Home = () =>{
    return(
        <>
            <div className="Home flex flex-row h-[90vh] w-full max-md:flex-col-reverse">
                <div className="left-home flex flex-col justify-end items-center w-[49vw] mb-[10vw] max-md:w-full">
                    <span className="" style={{fontSize: "max(14vw, 84px)"}}>Hello</span>
                    <h1>It's Sushant Arora</h1>
                </div>
                <div className="right-home w-[49vw]  min-w-[300px] flex justify-start items-end max-md:justify-center max-md:w-full">
                    <img src="Sushant.png" alt="" className="w-[44vw] h-[44vw] min-w-[300px] min-h-[300px]" />
                </div>
            </div>
        </>
    )
}

export default Home;