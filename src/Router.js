import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from "./pages/LogIn"
import Dashboard from "./pages/DashiesPages/Dashboard"
import Profile from "./pages/Profile.js"
import Register from "./pages/Register"
import Visitors from "./pages/VisitorPages/Visitor"
import Settings from "./pages/Settings"
import RegisterSuccess from "./pages/RegisterWelcome"
import Contacts from "./pages/ContactsSetting"
import ProfileSettings from "./pages/ProfileSettings"
import SettingsSuccess from "./pages/SettingSuccess"

function Pages(props) {
  return (
    <Router>
      <Switch>
        <Route path="/login"><Login /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/success"><RegisterSuccess /></Route>
        <Route path="/home" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/customers" component={Visitors} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/settingprofile" component={ProfileSettings}/>
        <Route path="/setting" component={Settings} />
        <Route path="/settingsuccess" component={SettingsSuccess} />
        


        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  )
}
export default Pages;