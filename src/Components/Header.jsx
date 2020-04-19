import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };
  render() {
    return (
      <div
        className={this.state.hasScrolled ? " Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src="/images/Logo.svg" alt="" width="20" />
          </Link>
          {/* <a href="/contact">Contact</a> */}
          <Link className="Links" to="/careers">
            Careers
          </Link>
          <Link className="Links" to="/signin">
            Sign in
          </Link>
          <Link className="Links" to="/team">
            Team
          </Link>
          <Link to="/quote">
            <button>Free Quote</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
