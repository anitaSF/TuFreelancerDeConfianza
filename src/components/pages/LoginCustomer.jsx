import { useLocation } from 'react-router-dom';
import HeaderLogin from "../Login/HeaderLogin";
import MainLogin from "../Login/MainLogin";

export default function LoginCustomer() {
  const location = useLocation()
  const userType = location.state
  console.log(userType);

  return (
    <>
      <HeaderLogin userType={userType} />
      <MainLogin userType={userType} />
    </>
  );
}
