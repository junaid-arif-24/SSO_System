import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import {userAtom} from '../store/userAtom';
const SuccessPage = () => {
  const [, setUsername] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const fetchAuthUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/auth/user`,
        {
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        const data = response.data;
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

  return <h2>You are successfully logged in</h2>;
};

export default SuccessPage;
