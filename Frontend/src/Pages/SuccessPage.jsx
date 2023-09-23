import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import {userAtom} from '../store/userAtom';
const SuccessPage = () => {
  const [, setUsername] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const fetchAuthUser = () => {
   
    fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log('Not properly authenticated');
          throw new Error('Authentication failed');
        }
      })
      .then(data => {
        console.log('User: ', data);
        const newUsername = data.fullname;
        localStorage.setItem('username', newUsername);
        setUsername(newUsername);
        navigate('/concern');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchAuthUser();
    }, 1000);
  }, []);

  return <h2>You are successfully logged in</h2>;
};

export default SuccessPage;
