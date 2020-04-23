import React from "react";
import { createClient } from "contentful";
class Article extends React.Component {
  constructor() {
    super();
    this.state = { articles: [] };
    this.client = createClient({
      accessToken: "ktzJBosg2ycZifvJEhm5TMr2s1VyRrGQuCAdzhxF7gs",
      space: "b1uti8s55y9c",
    });
  }
  componentDidMount() {
    this.client
      .getEntries({ content_type: "article" })
      .then((response) => this.setState({ articles: response.items }));
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.articles.map((article) => (
            <h2 txt={article.fields.body}> {article.fields.title}</h2>
          ))}
        </h1>
      </div>
    );
  }
}

export default Article;
