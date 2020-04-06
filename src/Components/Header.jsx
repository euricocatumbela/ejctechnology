import React from "react";

function Header() {
  return (
    <div className="Header">
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

export default Header;
