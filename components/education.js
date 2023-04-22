import React from 'react'

function Education() {
  return (
   <>
   <div className="border mt-4 shadow-md bg-white border-solid flex p-2 w-full">
   <div className="flex flex-col w-full">
   <div className='flex justify-between'>
   <h1 className="text-gray-500 text-2xl font-semibold p-2  w-full ">Education</h1>
    <button className="bg-white" onClick={()=>setShowModal(true)}>
        <img className='w-5 h-5' src="/plus.png"></img>
        </button>
   </div>
 
   
   <hr/>
     <div className='flex flex-col p-2'>
        <div className='flex '>
        <img src='/mortarboard.png' className='h-8 w-8 m-2'></img>
        <div className='flex flex-col mt-2 w-full'>
        <div className='flex justify-between'>
        <h1 className='font-semibold text-base text-gray-900 '>12th</h1>
         <button className="bg-white" onClick={()=>setShowModal(true)}>
        <img className='w-5 h-5' src="/pencil.png"></img>
        </button>
        </div>

      
        <h1 className='font-semibold   text-sm text-gray-600 mt-4'>None</h1>
        </div>
        
    </div> 
    </div>
    <hr/>
 
    <div className='flex justify-between p-2 ml-2 mt-2'>  
     <div className='flex flex-col'>
           <div className='flex '>
        <img src='/mortarboard.png' className='h-8 w-8 m-2'></img>
        <div className='flex flex-col'>
            
        <h1 className='font-semibold text-base text-gray-900 '>Total Years Of Education</h1>
        <h1 className='font-base text-sm text-gray-600 mt-2'>None</h1>
        </div>
        </div>
        </div>  
      <div className='flex flex-col'>
          <div className='flex '>
        <img src='/homework.png' className='h-8 w-8 m-2'></img>
        <div className='flex flex-col'>
        <h1 className='font-semibold text-base text-gray-900 '>Total Backlogs</h1>
        <h1 className='font-base text-sm text-gray-600 mt-2'>None</h1>
    </div>  
    </div> 
    </div>
    <button className="bg-white" >
    <img src='/pencil.png' className='h-5 w-5'></img>
    </button>
    </div> 
   </div>
   </div>

   </>
  )
}

export default Education