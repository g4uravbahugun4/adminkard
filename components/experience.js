import React from 'react'

function Experience() {
  return (
  <>
  <div className="border mt-4 shadow-md bg-white border-solid flex p-2 w-full">
  <div className="flex flex-col w-full">
    <div className='flex justify-between p-2'>
      <h1 className="text-gray-500 text-2xl font-semibold p-2  w-full ">Experience</h1>
        <button className="bg-white" onClick={()=>setShowModal(true)}>
    <img className='w-5 h-5' src="/plus.png"></img>
    </button>
      </div>
 
   <hr></hr>
   <button className='p-3 border border-[#bcbcbc] rounded-md bg-[#e6e6e6] text-center font-bold text-red-600'>
    Add Work Experience For 5%
   </button> 
    <hr></hr>    
     <div className='flex flex-col p-2'>
        <div className='flex justify-between'>       
         <h1 className='font-semibold text-base text-gray-900 '>Total Work Experience</h1>
        <button className="bg-white" >
        <img className='w-5 h-5' src="/pencil.png"></img>
        </button>
        </div>

        <h1 className='font-base text-sm text-gray-600'>None</h1>
    </div>   
    </div> 
    </div>
  </>
  )
}

export default Experience