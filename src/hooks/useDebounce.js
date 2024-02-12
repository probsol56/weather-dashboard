import  { useEffect, useRef } from 'react'

export default function useDebounce(callback,delay) {
    const timeoutRef = useRef(null);
    let timeoutId = timeoutRef.current;

    useEffect(()=>{
        return ()=>{
            if(timeoutId){
                clearTimeout(timeoutId)
            }
        }
    },[timeoutId])

    const debouncedCallBack=(...args)=>{
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(()=>{
            callback(...args)
        },delay);
    }
    return debouncedCallBack;
  
}
