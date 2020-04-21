import { createClient } from "contentful";
import React from "react";
export default class ContentfulClient {
  getClient = async () => {
    const client = await createClient({
      space: "b1uti8s55y9c",
      accessToken: "bKzlriEzmhw6Mxjakeq1a4MRmY5xIZ17bnpNmfbahZA",
    });
    return client;
  };
  // Add method to ContentfulClient class
  // getEntry method fetches data by content Id
  getEntry = async (id) => {
    const client = await this.getClient();
    const entry = await client.getEntry(id, { include: 10 });
    return entry;
  };
}
