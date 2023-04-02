import React, { useState } from 'react'
import './forminput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className='w-[90%] md:w-[80%] lg:w-[65%] max-w-[600px] mx-auto flex flex-col py-2'>
            <label className='text-scred text-[20px] sm:text-[22px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[30px] pb-1 font-titan text-busride'>{label}</label>
            <input
                className='rounded bg-[#d4c0c0] font-ubuntu border border-scred text-slate-800 font-[500] p-2'
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                // onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
                focused={focused.toString()} />
            <span className='fispan text-xs text-aboutbg font-ubuntu font-semibold mt-2 error'>{errorMessage}</span>
        </div>
    )
}

export default FormInput