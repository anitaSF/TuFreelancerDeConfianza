import { useUserDataContext, userDataContext } from "./Context/userDataContext";

import { freelanceContext, useFreelanceContext } from "./Context/frelanceContext";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginCustomer from "./pages/logAndRegister/LoginCustomer";
import ProfileFree from "./pages/ProfileFree";
import SearchService from "./pages/SearchService";
import Details from "./pages/Details";
import SelectedService from "./pages/SelectedService";

import FreelanceRegister from "./pages/logAndRegister/FreelanceRegister";
import CustomerRegister from "./pages/logAndRegister/CustomerRegister";
import LoginFree from "./pages/logAndRegister/LoginFree";
import InfoFree from "./pages/InfoFree";
import EditForm from "./pages/EditForm";
//import AuthRoute from "./Auth/AuthRoute";

function App() {
  const userDataContextExport = useUserDataContext();
  const freelanceContextExport = useFreelanceContext();

  return (
    <freelanceContext.Provider value={freelanceContextExport}>
      <userDataContext.Provider value={userDataContextExport}>
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
          <Route path="/info" element={<InfoFree />} /> {/* <AuthRoute component={<InfoFree />} /> */}
          <Route path="/yourProfile/editProfile" element={<EditForm />}></Route>{/* <AuthRoute component={<EditForm />} /> */}

        </Routes>
      </userDataContext.Provider>
    </freelanceContext.Provider>
  )
}

export default App 
