import React, { Component } from "react";
import "./DownloadView.scss";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faJava } from "@fortawesome/free-brands-svg-icons";
import Emoji from "react-emoji-render";

class DownloadView extends Component {
  ua = window.navigator.userAgent;

  constructor(props) {
    super(props);
    this.state = {
      err: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("/config/dllinks.json")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res,
          });
        },

        (err) => {
          this.setState({
            isLoaded: true,
            err,
          });
        }
      );
  }

  render() {
    const { err, isLoaded, items } = this.state;

    return (
      <div className="download-view">
        <div className="download-ui">
          <header className="ui-header">
            <div className="hd-sub1">TheAlfigame Launcher</div>
          </header>

          {err ? <Emoji className="errMsg" text="An error occured 😭" /> : isLoaded ? (
            <div className="btns-container">
              <div className="dnl-title">Téléchargements</div>

              <div className="btns">
                <Button className="download-btn" onClick={
                e => {
                  e.preventDefault();
                  window.location.href = (this.ua.includes("x64") ? items.x86_64 : items.x86);
                }}>
                  <FontAwesomeIcon icon={faWindows} size="5x" />
                  <div className="lbl-arch">
                    {this.ua.includes("x64") ? "x86_64" : "x86"}
                  </div>
                </Button>
                
                <Button className="download-btn" onClick={
                e => {
                  e.preventDefault();
                  window.location.href = items.universal;
                }}>
                  <FontAwesomeIcon icon={faJava} size="5x" />
                  <div className="lbl-arch">Universel (.jar)</div>
                </Button>
              </div>

              <div className="lnk-other-arch">
                <Emoji text="⚙️Pas la bonne architecture ? Essayer la version" /> {this.ua.includes("x64") 
                ? <a href={items.x86}>x86</a>
                : <a href={items.x86_64}>x86_64</a>}
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default DownloadView;
