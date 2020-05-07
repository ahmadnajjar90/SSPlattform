import React from 'react';
import './LoginPages.css';
import Inputfält from '../../Komponenter/UI-komponenter/InputfältText';
import PrimaryButton from '../../Komponenter/UI-komponenter/PrimaryButton';
import SecondaryButton from '../../Komponenter/UI-komponenter/SecondaryButton';
import FrostatGlas from '../../Komponenter/UI-komponenter/Frostatglas';
import Boll from '../../Komponenter/Bollar/Boll';
import MaskotBoll from '../../Komponenter/Bollar/maskotboll';
import {
  SSMailValidator,
  SSCombinedValidator,
} from '../../Komponenter/UI-komponenter/Validators';

class Forgotform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      isLoggedIn: false,
    };
    this.mailValidator = new SSMailValidator();
    this.formValidator = new SSCombinedValidator(this.mailValidator);
  }

  onMailChange = (e) => {
    const mail = e.target.value;
    this.mailValidator.validate(mail);
    this.setState({
      mail: mail,
    });
  };

  handleSubmit = () => {
    const data = {
      mail: this.state.mail,
    };
  };

  handleCancel = () => {
    this.setState({
      mail: '',
    });
    this.props.changeView('login');
  };

  render() {
    return (
      <div className="forgot-container">
        <FrostatGlas id="forgot-glas" />
        <form className="forgot-form" onSubmit={this.handleSubmit}>
          <h3 className="headline">Ange e-mail</h3>

          <Inputfält
            type="text"
            labeltext="E-mail"
            name="mail"
            value={this.state.mail}
            onChange={this.onMailChange}
            error={this.mailValidator.invalid}
            id="forgot-mailinput"
          />

          <PrimaryButton
            text="Skicka"
            onClick={this.handleSubmit}
            isDisabled={this.formValidator.invalid}
            id="forgot-primbutton"
          />

          <SecondaryButton
            text="Tillbaka"
            onClick={this.handleCancel}
            isDisabled={false}
            id="forgot-secbutton"
          />
        </form>

        <MaskotBoll top="68%" right="1%" />
        <Boll className="grönboll" top="8%" left="5%" />
        <Boll className="gulboll" left="15%" bottom="-20%" />
        <Boll className="blåboll" right="13%" top="-5%" />
      </div>
    );
  }
}

export default Forgotform;