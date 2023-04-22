import Navbar from "../components/navbar";
import React, { useState } from "react";
import { Line } from "rc-progress";
import Sidebar from "../components/sidebar";


import ProfileEdit from "../components/ProfileEdit";
import StudyPreference from "../components/studyPreference";
import Experience from "../components/experience";
import Education from "../components/education";
function welcome({user}) {
  const [showmodal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(true)
  console.log(user)
  return (
    <> {showmodal&&<ProfileEdit  setShowModal={setShowModal}/>} 
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <main className="bg-[#f2f2f2] flex pt-14    break-all ">
      
        <Sidebar showmenu={showMenu} setShowMenu={setShowMenu}/>
      
        <div  className={`flex m-auto  flex-wrap  w-full ${showMenu&&"sm:pl-64"} p-5`}>
        <div className="border w-full md:w-1/2 bg-white shadow-md border-solid flex p-2">
          <div className="flex flex-col p-2 ">
            <div className=" rounded-md  bg-red-300 text-black">
              <img
                className="h-24 w-24"
                src={user.profilePicUrl}
              />
            </div>
            <div className="bg-green-200 text-green-600 font bold p-1 rounded-md text-center md:text-base text-sm">
              Add Pic
            </div>
              <h1 className="font-medium text-gray-700 px-6 py-2  md:text-sm text-xs">
              {user.gender}
              </h1>
          </div>
          <div className="flex flex-col p-2  ">
            <h1 className="text-black flex justify-between font-medium md:text-xl text-base">
             <span className="flex">
                {user.name}  
              <img className='my-2 mx-2  w-5 h-5' src="/india.png"></img>
              </span>
              
              <button className="bg-white" onClick={()=>setShowModal(true)}>
                <img className='w-5 h-5' src="/pencil.png"></img></button>
                
            </h1>
            <h1 className="text-gray-400 flex justify-between font-sans font-bold md:text-sm text-xs ">
             Profile Status 
             <span className="font-semibold">{user.progress}% completed</span>
            </h1>

            <div className=" h-7 pt-2 ">
              <Line
                percent={user.progress}
                strokeWidth={2}
                strokeColor="#2d389f"
                trailWidth={1}
                trailColor="#a4abe5"
              />
            </div>
            <div className="flex flex-col justify-between break-allfont-serif px-1">
              <span className="font-semibold md:text-sm text-xs   px-1 pl-2 text-blue-400">
              <span className="text-gray-600 md:text-sm text-xs">Email:</span>  {user.email}
              </span>
              <span className="font-semibold md:text-sm text-xs  px-1 mt-1 pl-2 text-blue-400 font-sans">
              <span className="text-gray-600 md:text-sm text-xs">Phone no:</span> {user.number}
              </span>
              <span className="font-bold md:text-sm text-xs text-red-300  px-1 mt-1 pl-2  font-sans">
                {user.martialStatus}
              </span>
            </div>

         
          </div>
        </div>
    

        <div className="border  shadow-md bg-white border-solid flex p-2 w-full md:w-1/2 ">
    <div className="flex flex-col w-full">
     <div className='flex justify-between p-2'> 
    <h1 className="text-gray-500 md:text-2xl text-lg font-semibold p-2  w-full ">Quick Overview</h1>
    
    </div>

   <hr></hr>
    <div className='grid grid-cols-2'>
    <div className='flex flex-col p-2'>
        <div className='flex '>
        <img src='/mortarboard.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold md:text-base text-sm '>Education</h1>
        <h1 className='font-base md:text-sm text-xs text-gray-600'>None</h1>
    </div>
    </div>
    </div>
      <div className='flex flex-col p-2 '>
     <div className='flex '>
        <img src='/portfolio.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold md:text-base text-sm '>Experience(In Years)</h1>
        <h1 className='font-base md:text-sm text-xs text-gray-600'>None</h1>
    </div>
    </div>
    </div>
     <div className='flex flex-col p-2'>
           <div className='flex '>
        <img src='/flag.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold md:text-base text-sm '>Country Preference</h1>
        <h1 className='font-base md:text-sm text-xs text-gray-600'>None</h1>
        </div>
        </div>
    </div>
    
    
    <div className='flex flex-col p-2'>
         <div className='flex '>
        <img src='/star.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold md:text-base text-sm '>Highest Test Score</h1>
        <h1 className='font-base md:text-sm text-xs text-gray-600'>None</h1>
    </div>
    </div>
    </div>
    
    </div>
    </div>
    </div>






   <StudyPreference/>
   <Experience/>
   <Education/>

      </div>
      </main>
    </>
  );
}

export default welcome;


