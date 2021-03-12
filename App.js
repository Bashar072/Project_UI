import React from "react";
import users from "./components/pages/users";
import students from "./components/pages/students";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from "react-router-dom";

function App(props) {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/users" component={users} />
                    <Route exact path="/students" component={students} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;