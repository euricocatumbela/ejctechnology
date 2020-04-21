import React from "react";
import { createClient } from "contentful";
class Article extends React.Component {
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
      <div className="App">
        {/* <h1>{this.state.articles.title}</h1> */}
        <h2>
          {this.state.links.map((link) => {
            return <p key={link.id}>{link.fields.title}</p>;
          })}
        </h2>
      </div>
    );
  }
}

export default Article;
