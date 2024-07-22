//este es la pantalla para el inicio de sesión de los freelancer
import { useLocation } from 'react-router-dom';
import HeaderLogin from '../../Login/HeaderLogin';
import MainLogin from '../../Login/MainLogin';

export default function LoginFree() {
  const location = useLocation()
  const userType = location.state

  return (
    <>
      <HeaderLogin userType={userType} />
      <MainLogin userType={userType} />
    </>
  )
}
