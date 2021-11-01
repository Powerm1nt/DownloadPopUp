import React, {Component} from 'react';
import "./DownloadView.scss";
import {Button} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faJava } from "@fortawesome/free-brands-svg-icons";

class DownloadView extends Component {
    render() {
        return (
            <div className="download-view">
                <div className="download-ui">
                    <header className="ui-header">
                        <div className="hd-sub1">TheAlfigame Launcher</div>
                    </header>


                    <div className="btns-container">
                        <div className="dnl-title">Téléchargements</div>
                        <div className="btns">
                            <Button className="download-btn">
                                <FontAwesomeIcon icon={faWindows} size="5x"/>
                                <div className="lbl-arch">x64</div>
                            </Button>
                            <Button className="download-btn">
                                <FontAwesomeIcon icon={faJava} size="5x"/>
                                <div className="lbl-arch">Universel (.jar)</div>
                            </Button>
                        </div>

                        <div className="lnk-other-arch">
                            Just looking for : <a href="#">arch</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadView;