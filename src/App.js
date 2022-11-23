import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { RecoverPassword } from './pages/Login/Recover/RecoverPassword';
import Register from './pages/Register/Register';
import Chat from './pages/User/Chat/Chat';
import Profile from './pages/User/Profile/Index';
import Index from './pages/User/Index';
import Admin from './pages/User/Profile/Admin/Admin';
import Config from './pages/User/Profile/Config/Config';
import Detail from './pages/User/Profile/Detail/Index';
import Map from './pages/User/Profile/Detail/Map/Map';
import Help from './pages/User/Profile/Help/Help';
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


function App() {
  return (
    
    <Router> 
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>  
        <Route path="/register" element={<Register></Register>}></Route> 
        <Route path="/register/sync" element={<Sync></Sync>}></Route> 
        <Route path="/login" element={<Login></Login>}></Route> 
        <Route path="/login/recover" element={<RecoverPassword></RecoverPassword>}></Route>
        <Route path="/user" element={<Index></Index>}></Route>
        <Route path="/user/chat" element={<Chat></Chat>}></Route>
        <Route path="/user/profile" element={<Profile></Profile>}></Route>  
        <Route path="/user/profile/admin" element={<Admin></Admin>}></Route>
        <Route path="/user/profile/config" element={<Config></Config>}></Route>
        <Route path="/user/profile/detail" element={<Detail></Detail>}></Route>
        <Route path="/user/profile/detail/map" element={<Map></Map>}></Route>
        <Route path="/user/profile/help" element={<Help></Help>}></Route>
        <Route path="/user/candidates" element={<Candidates></Candidates>}></Route>
        <Route path="/user/create" element={<Create></Create>}></Route>
        <Route path="/user/create/offer" element={<Offer></Offer>}></Route>
        <Route path="/user/create/offer/form" element={<Form></Form>}></Route>
        <Route path="/user/create/offer/form/multiposting" element={<Multiposting></Multiposting>}></Route>
        <Route path="/user/create/test" element={<Test></Test>}></Route>
        <Route path="/user/create/test/hackathon" element={<NewHackathon></NewHackathon>}></Route>
        <Route path="/user/create/test/evaluation" element={<Evaluation></Evaluation>}></Route>
        <Route path="/user/notifications" element={<Notifications></Notifications>}></Route>
        <Route path="/user/offers" element={<Offers></Offers>}></Route>
        <Route path="/user/offers/:id" element={<Id></Id>}></Route>
        <Route path="/user/offers/:id/candidate" element={<Candidate></Candidate>}></Route>
        <Route path="/user/offers/:id/hackathon" element={<Hackathon></Hackathon>}></Route>
        <Route path="/user/offers/:id/meeting" element={<Meeting></Meeting>}></Route>
        
        
        
      </Routes>
    </Router>
      
  );
}

export default App;
