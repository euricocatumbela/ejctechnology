import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
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
          <a href="/">
            <img src="/images/ejc-techno.svg" alt="" width="60" />
          </a>
          {/* <a href="/contact">Contact</a> */}
          <a href="/careers">Careers</a>
          <a href="/signin">Sign in</a>
          <a href="/team">Team</a>
          <a href="/quote">
            <button>Free Quote</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
