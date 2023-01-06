const { useEffect } = require("react")

const useInterval = (callback, delay)=>{
    const savedcallback = useRef()

    useEffect(()=>{
        savedcallback.current = callback
    }, [callback])


    useEffect(()=>{
        const tick = ()=>{
            savedcallback.current()
        }


        if(delay !==null){
            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }


    }, [delay])


}