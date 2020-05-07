import React from 'react';
import './POPUPCSS.css';
import ProfilePic from './profile.jpg';
import Textfält from './Textfält';

function PopupProfile(props) {
  return (
    <div>
      <div className={props.className}>
        <a href="#myProfile" class="trigger-btn" data-toggle="modal">
          <i class="fas fa-user-circle"></i> Profil
        </a>
      </div>
      <div id="myProfile" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <div className="user-info">
                <img
                  src={ProfilePic}
                  alt="user profile picture"
                  className="user-pic"
                ></img>
                <div className="user-name">
                  <h1>Josephine</h1>
                  <h3>Halkola Persson</h3>
                  <h6>#43567</h6>
                </div>
              </div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div class="modal-body" className="profile-info">
              <Textfält titel="Namn" />
              <Textfält titel="#" />
              <Textfält titel="Titel" />
              <Textfält titel="Telefon" />
              <Textfält titel="E-mail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopupProfile;
