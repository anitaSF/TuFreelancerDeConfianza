import { userDataContext } from "./Context/userDataContext";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginCustomer from "./pages/LoginCustomer";
import LoginFree from "./pages/LoginFree";
import CustomerRegister from "./pages/CustomerRegister";
import ProfileFree from "./pages/ProfileFree";
import SearchService from "./pages/SearchService";
import Details from "./pages/Details";
import { useContext } from "react";

function App() {
  const userDataContextExport = useContext(userDataContext);


  return (
    <userDataContext.Provider value={userDataContextExport}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customerLogin" element={<LoginCustomer />} />
        <Route path="/freelanceLogin" element={<LoginFree />} />
        <Route path="/customerRegister" element={<CustomerRegister />} />

        <Route path="/yourProfile" element={<ProfileFree />} /> {/* <AuthRoute component={<ProfileFree />} /> */}
        <Route path="/services" element={<SearchService />} /> {/* <AuthRoute component={<SearchService />} /> */}
        <Route path="/freelanceProfile/:idFreelance" element={<Details />} /> {/* <AuthRoute component={<Details />} /> */}

      </Routes>
    </userDataContext.Provider>
  )
}

export default App 
