import {useEffect, useState} from 'react'

function PageNavigationHelper({ history }) {
    const [link, setLink] = useState(window.location.href); 
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [link]);
  
    return (null);
  }
  
export default PageNavigationHelper;    