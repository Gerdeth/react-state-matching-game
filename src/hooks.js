import{useEffect, useRef, useState} from 'react'



function useHover(){
 const ref =useRef()
 const [hovered, setHovered]= useState(false)

 useEffect(()=>{
     const refCopy= ref
     refCopy.current.addEventListener('mouseenter',()=>{})
     refCopy.current.addEventListener('mouseleave',()=>{})
     return ()=>{

     }
 })
 return [ref,hovered]

}
export default useHover