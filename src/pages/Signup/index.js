import React from 'react'
import { Input } from '../../components'

const Signup = () => {
  return (
    <main className='max-w-screen-2xl flex items-center h-auto md:h-screen mx-auto bg-gradient-to-r from-sky-500 to-gray-400'>
      <div className='h-full flex-1 bg-sky-200/30 hidden bg-cover bg-center lg:flex'>
          <div className='m-auto'>
            <h1 className='text-4xl text-white font-bold tracking-widest text-shadow-2xl'>Register Form</h1>
          </div>
      </div>
      <div className='shadow-lg p-4 bg-slate-100/30 backdrop-blur-md max-w-sm my-2 mx-auto rounded-md md:my-auto lg:m-0 lg:rounded-none lg:w-full lg:h-full lg:flex-col'>
        <div className='w-full h-full flex'>
          <div className='mx-auto my-10 w-full'>
            <h3 className='text-center font-semibold text-slate-600 mb-3'>Signup</h3>
            <div style={{ borderTop: "1px solid #fff "}} className='mb-3 mx-16 lg:mb-11'></div>
            <Input />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Signup