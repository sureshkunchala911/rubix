import { Component } from "react";
import Navbar from "./Navbar";
import "./styles.css";

class App extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    nameErrMess: false,
    emailErrMess: false,
    numberErrMess: false,
    isFormSubmitted: false
  };

  validateName = () => {
    const { name } = this.state;
    return name !== "";
  };

  validateEmail = () => {
    const { email } = this.state;
    return email !== "";
  };

  validateNum = () => {
    const { number } = this.state;
    return number !== "";
  };

  onBlurName = () => {
    const isValidName = this.validateName();

    this.setState({ nameErrMess: !isValidName });
  };

  onBlurEmail = () => {
    const isValidEmail = this.validateEmail();

    this.setState({ emailErrMess: !isValidEmail });
  };

  onBlurNum = () => {
    const isValidNum = this.validateNum();

    this.setState({ numberErrMess: !isValidNum });
  };

  renderFormContainer = () => {
    const { emailErrMess, nameErrMess, numberErrMess } = this.state;
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="input-element">{this.renderName()}</div>
        {nameErrMess && <p className="error-message">Required</p>}
        <div className="input-element">{this.renderEmail()}</div>
        {emailErrMess && <p className="error-message">Required</p>}
        <div className="input-element">{this.renderNum()}</div>
        {numberErrMess && <p className="error-message">Required</p>}
        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
    );
  };

  submitForm = (event) => {
    event.preventDefault();
    const isValidName = this.validateName();
    const isValidEmail = this.validateEmail();
    const isValidNum = this.validateNum();

    if (isValidName && isValidEmail && isValidNum) {
      this.setState({ isFormSubmitted: true });
    } else {
      this.setState({
        nameErrMess: !isValidName,
        emailErrMess: !isValidEmail,
        numberErrMess: !isValidNum,
        isFormSubmitted: false
      });
    }
  };

  renderName = () => {
    const { name, nameErrMess } = this.state;
    const showError = nameErrMess ? "error-field" : "";
    return (
      <>
        <label className="label-text" htmlFor="first_name">
          NAME
        </label>
        <input
          type="text"
          value={name}
          className={`user-input ${showError}`}
          id="first_name"
          placeholder="Name"
          onChange={this.onChangeName}
          onBlur={this.onBlurName}
        />
      </>
    );
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  renderEmail = () => {
    const { email, emailErrMess } = this.state;
    const showError = emailErrMess ? "error-field" : "";
    return (
      <>
        <label className="label-text" htmlFor="last_name">
          Email
        </label>
        <input
          type="text"
          value={email}
          className={`user-input ${showError}`}
          id="last_name"
          placeholder="Last Name"
          onChange={this.onChangeEmail}
          onBlur={this.onBlurEmail}
        />
      </>
    );
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  renderNum = () => {
    const { number, numberErrMess } = this.state;
    const showError = numberErrMess ? "error-field" : "";
    return (
      <>
        <label className="label-text" htmlFor="last_name">
          Number
        </label>
        <input
          type="text"
          value={number}
          className={`user-input ${showError}`}
          id="last_name"
          placeholder="Last Name"
          onChange={this.onChangeNum}
          onBlur={this.onBlurNum}
        />
      </>
    );
  };

  onChangeNum = (event) => {
    this.setState({ number: event.target.value });
  };

  renderSuccessContainer = () => (
    <div className="success-container">
      <p className="success-heading">Registered Successfully</p>
    </div>
  );

  render() {
    const { isFormSubmitted } = this.state;
    return (
      <>
        <Navbar />
        <div className="App">
          <img
            className="image2"
            alt="section1"
            src="https://res.cloudinary.com/dxwppeplp/image/upload/v1675934733/students_dtl4bd.png"
          />
        </div>
        <div className="section3">
          <div className="whoweare">
            <h1 className="head1">WHO WE ARE</h1>
            <p className="para1">
              Rubixe™ is a global technology company specializing in disruptive
              technologies – Artificial Intelligence (AI), Machine Learning,
              Robotic Process Automation (RPA), BlockChain and Internet of
              Things (IoT).
            </p>
            <p className="para1">
              Rubixe mission to enable businesses to leverage the full potential
              of disruptive technologies to stay competitive in the market.
            </p>
          </div>
          <div>
            <img
              className="image3"
              alt="whoweare"
              src="https://res.cloudinary.com/dxwppeplp/image/upload/v1675935396/why-gamification-is-important-1024x461.jpg_tnrj8c.webp"
            />
          </div>
        </div>
        <div className="section4Bg">
          <div className="whoweare2">
            <h1 className="head1 textColor">WHERE WE STARTED</h1>
            <p className="para1 textColor">
              We started in 2015, With a passionate team who want to bring
              game-changing solutions through disrupting technologies. We
              expertise in delivering enterprise-level solutions in the field of
              Artificial Intelligence (AI), Cyber Security, Robotic Process
              Automation (RPA), Internet of Things (loT), and BlockChain
              technology.
            </p>
          </div>
        </div>
        <div className="section5Bg">
          <p className="para2">TECH FOR TEENS - A RUBIXE ® INITIATIVE</p>
          <div className="cards">
            <div className="card1">
              <p className="para4">1</p>
              <img
                alt=" image4"
                className="image4"
                src="https://res.cloudinary.com/dxwppeplp/image/upload/v1675943523/ai_1_m3nzbw.png"
              />
              <p className="para3">
                Introducing Al to children in an age appropriate manner.
              </p>
            </div>
            <div className="card2">
              <p className="para3">
                Gain awareness on Al and build an Interactive story around it
              </p>
              <img
                alt=" image4"
                className="image4"
                src="https://res.cloudinary.com/dxwppeplp/image/upload/v1675943724/artificial-intelligence_2_fpv1dv.png"
              />
              <p className="para4">2</p>
            </div>
            <div className="card1 card3">
              <p className="para4">3</p>
              <img
                alt=" image4"
                className="image4"
                src="https://res.cloudinary.com/dxwppeplp/image/upload/v1675943338/artificial-intelligence_1_yslomz.png"
              />
              <p className="para3">
                Acquire programming skills in a user-friendly format
              </p>
            </div>
            <div className="card2 card4">
              <p className="para3">
                Exposure to mini projects on diverse topics
              </p>
              <img
                alt=" image4"
                className="image4"
                src="https://res.cloudinary.com/dxwppeplp/image/upload/v1675944426/ai_2_b3qubb.png"
              />
              <p className="para4">4</p>
            </div>
            <div className="card1 card5">
              <p className="para4">5</p>
              <img
                alt=" image4"
                className="image4"
                src="https://res.cloudinary.com/dxwppeplp/image/upload/v1675944697/teachings_aeax44.png"
              />
              <p className="para3">Train the teachers programme</p>
            </div>
          </div>
        </div>
        <div className="section6">
          <div className="section6Part2">
            <div className="getintouchCont">
              <h1 className="getintouch">GET IN TOUCH</h1>
              <p className="para5">
                Please complete the form and we will get back to you.
              </p>
            </div>
            <hr className="hrline" />
            {isFormSubmitted
              ? this.renderSuccessContainer()
              : this.renderFormContainer()}
          </div>
        </div>
        <div className="footer">
          <div className="footerPart1">
            <div className="aboutUsCont">
              <p>ABOUT US</p>
              <p className="ruby">
                Rubixe™ is a global technology company specializing in
                disruptive technologies – Artificial Intelligence (AI), Machine
                Learning, Robotic Process Automation (RPA), BlockChain and
                Internet of Things (IoT). Rubixe mission to enable businesses to
                leverage the full potential of disruptive technologies to stay
                competitive in the market.
              </p>
            </div>
            <div className="menusCont">
              <p>MENUS</p>
              <p>Home</p>
              <p>Services</p>
              <p>Product</p>
              <p>Career</p>
            </div>
            <div className="learnMore">
              <p>LEARN MORE</p>
              <p>About</p>
              <p>Contact Us</p>
            </div>
            <div>
              <div>
                <p>ADDRESS</p>
                <p className="addressDetail">
                  Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
                  Karnataka 560068 <br /> Phone: 0804-717-8999 <br /> Email:
                  hi@rubixe.com
                </p>
              </div>
              <div>
                <p>SOCIAL MEDIA</p>
                <p>FB</p>
                <p>INSTA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer footer2">
          <div className="copyrightCont">
            <p className="copyright">
              ©Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD
              INNOVATIONS PVT. LTD. | All Rights Reserved
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
