import React, { Component } from "react";
import "./MainWindow.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DownloadView from "./Views/DownloadView/DownloadView";
import Config from "../../shared/config.json"

class MainWindow extends Component {
  render() {
    return (
      <div className="main-window">
        <BrowserRouter>
          <div className="main-view">
            <Switch>
              <Route path="/downloads">
                <DownloadView />
              </Route>
              <Route path="*">
                <Redirect to="/downloads" />
              </Route>
            </Switch>
            <span className="footer">© 2021 - {Config.siteName} </span>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default MainWindow;
