import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { Provider } from "./context";

class App extends React.Component {
  render() {
    return (
      <Provider>
        {/* Everything needs to wrapped in provider because of the context sharing. All components sharing states need to be wrapped*/}
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                {/*Switch to surround all routes */}
                <Route
                  exact
                  path={["/", "/lyric-searcher-app"]}
                  component={Index}
                />
                <Route
                  exact
                  path="/lyric-searcher-app/lyrics/track/:id"
                  component={Lyrics}
                />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
