import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import CreateReceipt from "./pages/CreateReceipt";
import CreateTenant from "./pages/CreateTenant";
import CreateOwner from "./pages/CreateOwner";
import CreateRental from "./pages/CreateRental";
import Details from './pages/Details';
import EditReceipt from './pages/EditReceipt';
import EditOwner from './pages/EditOwner';
import EditTenant from './pages/EditTenant';
import EditRental from './pages/EditRental';

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        {/* Create Route */}
        <Route exact path="/receipts/new" component={CreateReceipt} />
        <Route exact path="/tenant/new" component={CreateTenant} />
        <Route exact path="/owner/new" component={CreateOwner} />
        <Route exact path="/rental/new" component={CreateRental} />
        {/* View route */}
        <Route exact path="/details" component={Details}/>
         <Route exact path="/receipts/:id" component={EditReceipt} />
        <Route exact path="/tenant/:id" component={EditTenant} />
        <Route exact path="/owner/:id" component={EditOwner} />
        <Route exact path="/rental/:id" component={EditRental} />
        
      </Switch>
    </div>
  );
}

export default App;
