import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import {userAtom} from '../store/userAtom';
const SuccessPage = () => {
  const [username, setUsername] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const fetchAuthUser = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, {
        credentials: 'include' 
      });  
      const data = await response.json();
      localStorage.setItem('username', data.fullname);
      setUsername(data.fullname); 
      navigate('/concern');
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchAuthUser();
    }, 1000);
  }, []);

  return <h2>You are successfully logged in</h2>;
};

export default SuccessPage;
