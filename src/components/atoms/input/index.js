import React from 'react'

const Input = () => {
    return (
        <div>
            <label className='sm:mb-8'>
            <p className='font-semibold text-slate-600 mb-2'>Label Input</p>
            <input placeholder='Form Input' className='border rounded shadow-lg py-1 px-3 focus:ring-1 focus:border-sky-600 focus:ring-sky-500 focus:outline-none w-full invalid:text-red-500 invalid:focus:border-red-500 invalid:focus:ring-red-500 peer'/>
            </label>
        </div>
    )
}

export default Input
