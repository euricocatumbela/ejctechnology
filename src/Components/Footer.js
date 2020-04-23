import React from "react";
import data from "./Footerdata";
import styled from "styled-components";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

const FooterGroup = styled.div`
  background: #161f3d;
  margin-top: 150px;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: white;
  max-width: 500px;
  margin: auto;
`;
const Button = styled.button`
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgb(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;
const LinkGroup = styled.div`
  width: 1200px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  a {
    transition: 0.8s;
  }
  a:hover {
    color: white;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100px;
  }
`;
const Copyright = styled.div`
  color: white;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 14px;
`;
const time = new Date();
const currentYear = time.getFullYear();

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { links: [] };
    this.client = createClient({
      accessToken: "ktzJBosg2ycZifvJEhm5TMr2s1VyRrGQuCAdzhxF7gs",
      space: "b1uti8s55y9c",
    });
  }

  componentDidMount() {
    this.client
      .getEntries({ content_type: "link" })
      .then((response) => this.setState({ links: response.items }));
  }

  render() {
    return (
      <FooterGroup>
        <Text>
          Startups always trying to find the best ideas to setup their own
          business
        </Text>
        <Button>Tweet</Button>
        <LinkGroup>
          <p style={{ color: "white" }}>{data[0].title}</p>
          <p style={{ color: "white" }}>{data[1].title}</p>
          <p style={{ color: "white" }}>{data[2].title}</p>
          {this.state.links.map((link) => (
            <Link to={link.fields.url}>{link.fields.title}</Link>
          ))}
        </LinkGroup>

        <Copyright>
          Backgrounds made in Cinema 4D, iOS app in Swift, site in React.
          <a href="mailto:infoejctechnology.co.za"> Email us </a>
          to ask anything. Copyright Ejc Technology © {currentYear} -{" "}
          <a href="/"> Terms of Service - Privacy Policy </a>
        </Copyright>
      </FooterGroup>
    );
  }
}

export default Footer;
