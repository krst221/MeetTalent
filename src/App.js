import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import VerifyMail from './pages/Login/Recover/VerifyMail';
import RecoverPassword from './pages/Login/Recover/RecoverPassword';
import Chat from './pages/User/Chat/Chat';
import Profile from './pages/User/Profile/Index';
import Detail from './pages/User/Profile/Detail/Index';
import Map from './pages/User/Profile/Detail/Map/Map';
import Sync from './pages/Register/Sync/Sync';
import Candidates from './pages/User/Candidates/Candidates';
import Create from './pages/User/Create/Create';
import Offer from './pages/User/Create/Offer/Offer';
import Multiposting from './pages/User/Create/Offer/Form/Multiposting/Multiposting';
import Test from './pages/User/Create/Test/Test';
import NewHackathon from './pages/User/Create/Test/NewHackathon/NewHackathon';
import Evaluation from './pages/User/Create/Test/Evaluation/Evaluation';
import Notifications from './pages/User/Notifications/Notifications';
import Form from './pages/User/Create/Offer/Form/Form';
import Offers from './pages/User/Offers/Offers';
import Id from './pages/User/Offers/Id/Id';
import Candidate from './pages/User/Offers/Id/Candidate/Candidate';
import Hackathon from './pages/User/Offers/Id/Hackathon/Hackathon';
import Meeting from './pages/User/Offers/Id/Meeting/Meeting';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './pages/Register/User/User';
import Company from './pages/Register/Company/Company';
import { UserContext } from './shared/contexts/UserContext';
import { isCompanyContext } from './shared/contexts/isCompanyContext';
import { useState } from 'react';
import CandidateProfile from './pages/User/Candidates/Profile/CandidateProfile';
import Denied from './pages/User/Profile/Denied/Denied';
import UserOffers from './pages/User/Profile/Offers/Offers';


function App() {
  const verify = localStorage.getItem('verify') || null;
  const [isCompany, setCompany] = useState(localStorage.getItem('isCompany') || null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <Provider store={store}>
      <UserContext.Provider value={{user, setUser}}>
      <isCompanyContext.Provider value={{isCompany, setCompany}}>
        <Router> 
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>  
            <Route path="/register/user" element={<User></User>}></Route>
            <Route path="/register/company" element={<Company></Company>}></Route>
            <Route path="/register/sync" element={<Sync></Sync>}></Route> 
            <Route path="/login" element={<Login></Login>}></Route> 
            <Route path="/login/verify" element={<VerifyMail></VerifyMail>}></Route>
            <Route path="/login/recover" element={verify==='true' ? <RecoverPassword></RecoverPassword> : <VerifyMail/>}></Route>
            <Route path="/user" element={user ? <Profile></Profile> : <Login></Login>}></Route>
            <Route path="/user/chat" element={user ? <Chat></Chat> : <Login></Login>}></Route>
            <Route path="/user/profile/" element={user ? <Detail></Detail> : <Login></Login>}></Route>
            <Route path="/user/profile/offers" element={user ? <UserOffers></UserOffers> : <Login></Login>}></Route>
            {/* <Route path="/user/profile/messages" element={user ? <Messages></Messages> : <Login></Login>}></Route> */}
            <Route path="/user/profile/map" element={user ? <Map></Map> : <Login></Login>}></Route>
            <Route path="/user/candidates" element={user ? <Candidates></Candidates> : <Login></Login>}></Route>
            <Route path="/user/candidates/:id" element={user ? <CandidateProfile></CandidateProfile> : <Login></Login>}></Route>
            <Route path="/user/create" element={user ? isCompany === 'true' ? <Create></Create> : <Denied></Denied> : <Login></Login>}></Route>
            <Route path="/user/create/offer" element={user ? <Offer></Offer> : <Login></Login>}></Route>
            <Route path="/user/create/offer/form" element={user ? <Form></Form> : <Login></Login>}></Route>
            <Route path="/user/create/offer/form/multiposting" element={user ? <Multiposting></Multiposting> : <Login></Login>}></Route>
            <Route path="/user/create/test" element={user ? <Test></Test> : <Login></Login>}></Route>
            <Route path="/user/create/test/hackathon" element={user ? <NewHackathon></NewHackathon> : <Login></Login>}></Route>
            <Route path="/user/create/test/evaluation" element={user ? <Evaluation></Evaluation> : <Login></Login>}></Route>
            <Route path="/user/notifications" element={user ? <Notifications></Notifications> : <Login></Login>}></Route>
            <Route path="/user/offers" element={user ? <Offers></Offers> : <Login></Login>}></Route>
            <Route path="/user/offers/:id" element={user ? <Id></Id> : <Login></Login>}></Route>
            <Route path="/user/offers/:id/candidate" element={user ? <Candidate></Candidate> : <Login></Login>}></Route>
            <Route path="/user/offers/:id/hackathon" element={user ? <Hackathon></Hackathon> : <Login></Login>}></Route>
            <Route path="/user/offers/:id/meeting" element={user ? <Meeting></Meeting> : <Login></Login>}></Route>       
          </Routes>
        </Router>
        </isCompanyContext.Provider>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
