import { useEffect, useState } from "react";

export function useViewport() {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth || document.documentElement.clientWidth)
    useEffect(() => { 
        function handleWidth() {
            const width = window.innerWidth || document.documentElement.clientWidth
            setWindowWidth(width)
        }
        handleWidth()
        window.addEventListener("resize",handleWidth)

        return () => window.removeEventListener("resize",handleWidth)
    },[])
    return [windowWidth]
}