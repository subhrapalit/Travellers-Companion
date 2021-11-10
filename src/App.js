import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Notfound from './pages/Notfound/Notfound';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login/Login';
import Authprovider from './Contexts/Authprovider';
import Privateroute from './pages/Login/Privateroute/Privateroute';
import Booking from './pages/Booking/Booking/Booking';
import Admin from './pages/Admin/Admin/Admin';
import Addoffer from './pages/Admin/Addoffer/Addoffer';
import Manageoffer from './pages/Admin/ManageOffer/Manageoffer';
import Mybookings from './pages/Admin/Mybookings/Mybookings';
import ConfirmBooking from './pages/Admin/ConfirmBooking/ConfirmBooking';


function App() {
  return (
    <div className="App">

      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Privateroute path='/admin'>
              <Admin></Admin>
            </Privateroute>
            <Privateroute path='/addoffer'>
              <Addoffer></Addoffer>
            </Privateroute>
            <Privateroute path='/manageoffer'>
              <Manageoffer></Manageoffer>
            </Privateroute>
            <Privateroute path='/mybookings'>
              <Mybookings></Mybookings>
            </Privateroute>
            <Privateroute path='/confirmbooking'>
              <ConfirmBooking></ConfirmBooking>
            </Privateroute>
            <Privateroute path='/booking/:offerId'>
              <Booking></Booking>
            </Privateroute>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
