import {useEffect} from 'react'

const SuccessPage = () => {
    useEffect(() => {
        setTimeout(() => {
          window.close();
        }, 1000);
      }, []);
    
  return (
    <h2>You are successfully logged in</h2>
  )
}

export default SuccessPage