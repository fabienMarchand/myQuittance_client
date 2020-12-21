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
import ReceiptsList from "./pages/ReceiptsList";
import ViewPDF from "./pages/ViewPDF";

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
        <Route exact path="/receipt/new" component={CreateReceipt} />
        <Route exact path="/tenant/new" component={CreateTenant} />
        <Route exact path="/owner/new" component={CreateOwner} />
        <Route exact path="/rental/new" component={CreateRental} />
        {/* View route */}
        <Route exact path="/receiptsList" component={ReceiptsList}/>
        <Route exact path="/details" component={Details}/>
         {/* Edit route */}
        <Route exact path="/receipt/:id" component={EditReceipt} />
        <Route exact path="/tenant/:id" component={EditTenant} />
        <Route exact path="/owner/:id" component={EditOwner} />
        <Route exact path="/rental/:id" component={EditRental} />
        {/* PDF */}
        <Route exact path="/pdf/:id" component={ViewPDF} />
      </Switch>
    </div>
  );
}

export default App;
