import React from 'react'

function StudyPreference() {
  return (
   <>
    <div className="border mt-4 shadow-md bg-white border-solid flex p-2 w-full">
    <div className="flex flex-col w-full">
     <div className='flex justify-between p-2'> 
    <h1 className="text-gray-500 text-2xl font-semibold p-2  w-full ">Your Study Preferences</h1>
     <button className="bg-white" >
    <img className='w-5 h-5' src="/pencil.png"></img>
    </button>
    </div>

   <hr></hr>
    <div className='grid grid-cols-2'>
    <div className='flex flex-col p-2'>
        <div className='flex '>
        <img src='/mortarboard.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-base '>Course Level</h1>
        <h1 className='font-base text-sm text-gray-600'>None</h1>
    </div>
    </div>
    </div>
      <div className='flex flex-col p-2 '>
     <div className='flex '>
        <img src='/calendar.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-base '>Intake</h1>
        <h1 className='font-base text-sm text-gray-600'>None</h1>
    </div>
    </div>
    </div>
     <div className='flex flex-col p-2'>
           <div className='flex '>
        <img src='/flag.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-base '>Country Preference</h1>
        <h1 className='font-base text-sm text-gray-600'>None</h1>
        </div>
        </div>
    </div>
    <div className='flex flex-col p-2 '>
      <div className='flex '>
        <img src='/save-money.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-base '>Budget</h1>
        <h1 className='font-semibold text-red-400 text-sm'>None</h1>
    </div>
    </div>
    </div>
   
      <div className='flex flex-col p-2 '>
         <div className='flex '>
        <img src='/homework.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-base '>Prefered Course</h1>
        <h1 className='font-base text-sm text-gray-600'>None</h1>
    </div>
    </div>
    </div>
     <div className='flex flex-col p-2 '>
         <div className='flex '>
        <img src='/target.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-base '>Objective</h1>
        <h1 className='font-base text-sm text-gray-600'>None</h1>
    </div>
    </div>
    </div>
    <div className='flex flex-col p-2'>
         <div className='flex '>
        <img src='/star.png' className='h-6 w-6 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-base '>Specialization</h1>
        <h1 className='font-base text-sm text-gray-600'>None</h1>
    </div>
    </div>
    </div>
    
    </div>
    </div>
    </div>
   </>
  )
}

export default StudyPreference