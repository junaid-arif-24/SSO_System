import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {userAtom} from '../store/userAtom';
const SuccessPage = () => {
  const [, setUsername] = useRecoilState(userAtom);
  const navigate = useNavigate();
  const fetchAuthUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/user`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );

      if (response.ok) {
        const data = await response.json();
        console.log('User: ', data);
        const newUsername = data.fullname;
        localStorage.setItem('username', newUsername);
        setUsername(newUsername);
        navigate('/concern');
      } else {
        console.log('Not properly authenticated');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
    useEffect(() => {
        setTimeout(() => {
          fetchAuthUser();
        }, 1000);
      }, []);
    
  return (
    <h2>You are successfully logged in</h2>
  )
}

export default SuccessPage