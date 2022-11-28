const { useEffect } = require("react")

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - MOTO DREAM`;
    }, [title])
}

export default useTitle;