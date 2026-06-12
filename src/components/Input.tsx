    import React from "react";
    type InputProps={
        type?:string;
        value?:string;
        placeholder?:string
        onchange?:(event:React.ChangeEvent<HTMLInputElement>)=>void;
        value1?:React.ReactNode

    };


    const Input:React.FC<InputProps>=({type,value,placeholder,onchange,value1}:InputProps)=>{
        return(
            <>
            <div>
            <p className="text-[13px] font-medium">{value}</p>
            <input  onChange={onchange} className="border border-gray-400 rounded-sm text-sm w-45 h-7"  type={type} name={value} id={value} placeholder={placeholder} value={value1}  autoComplete="on"/>
            </div>
            </>
        )
    }

    export default Input