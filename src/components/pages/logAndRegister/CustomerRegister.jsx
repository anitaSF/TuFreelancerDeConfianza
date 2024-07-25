import { useLocation } from 'react-router-dom';

import HeaderRegisterCustomer from "../../Register/HeaderRegisterCustomer"
import MainRegisterCustomer from "../../Register/MainRegisterCustomer"


function CustomerRegister() {
  const location = useLocation();
  const userType = location.state;
  return (
    <>
      <HeaderRegisterCustomer />
      <MainRegisterCustomer userType={userType} />
    </>
  )
}

export default CustomerRegister
