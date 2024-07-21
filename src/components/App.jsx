import { useUserDataContext, userDataContext } from "./Context/userDataContext";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginCustomer from "./pages/logAndRegister/LoginCustomer";
import ProfileFree from "./pages/ProfileFree";
import SearchService from "./pages/SearchService";
import Details from "./pages/Details";
import FreelanceRegister from "./pages/logAndRegister/FreelanceRegister";
import CustomerRegister from "./pages/logAndRegister/CustomerRegister";
import LoginFree from "./pages/logAndRegister/LoginFree";
import AuthRoute from "./Auth/AuthRoute";
import { freelanceContext, useFreelanceContext } from "./Context/frelanceContext";

function App() {
  const userDataContextExport = useUserDataContext();

  const useFreelanceContextExport = useFreelanceContext();

  return (
    <freelanceContext.Provider value={useFreelanceContextExport}>
      <userDataContext.Provider value={userDataContextExport}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customerLogin" element={<LoginCustomer />} />
          <Route path="/freelanceLogin" element={<LoginFree />} />
          <Route path="/customerRegister" element={<CustomerRegister />} />
          <Route path="/freelancerRegister" element={<FreelanceRegister />} />

          <Route path="/yourProfile" element={<AuthRoute component={<ProfileFree />} />} />
          <Route path="/services" element={<AuthRoute component={<SearchService />} />} />
          <Route path="/freelanceProfile/:idFreelance" element={<AuthRoute component={<Details />} />} />

        </Routes>
      </userDataContext.Provider>
    </freelanceContext.Provider>
  )
}

export default App 
