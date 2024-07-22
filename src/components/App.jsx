import { useUserDataContext, userDataContext } from "./Context/userDataContext";

import { freelanceContext, useFreelanceContext } from "./Context/frelanceContext";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginCustomer from "./pages/LoginCustomer";
import LoginFree from "./pages/LoginFree";
import CustomerRegister from "./pages/CustomerRegister";
import ProfileFree from "./pages/ProfileFree";
import SearchService from "./pages/SearchService";
import Details from "./pages/Details";
import FreelanceRegister from "./pages/FreelanceRegister";
import SelectedService from "./pages/SelectedService";

function App() {
  const userDataContextExport = useUserDataContext();

  const freelanceContextExport = useFreelanceContext();


  return (
    <userDataContext.Provider value={userDataContextExport}>
      <freelanceContext.Provider value={freelanceContextExport}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customerLogin" element={<LoginCustomer />} />
          <Route path="/freelanceLogin" element={<LoginFree />} />
          <Route path="/customerRegister" element={<CustomerRegister />} />
          <Route path="/freelancerRegister" element={<FreelanceRegister />} />

          <Route path="/yourProfile" element={<ProfileFree />} /> {/* <AuthRoute component={<ProfileFree />} /> */}
          <Route path="/services" element={<SearchService />} /> {/* <AuthRoute component={<SearchService />} /> */}
          <Route path="/freelancers" element={<SelectedService />} /> {/* <AuthRoute component={<SelectedService />} /> */}
          <Route path="/freelancers/:idFreelancer" element={<Details />} /> {/* <AuthRoute component={<Details />} /> */}

        </Routes>
      </freelanceContext.Provider>
    </userDataContext.Provider>
  )
}

export default App 
