const fetch = require("node-fetch");

const nodeFetcher = async (url, params) => {
  try {
    const nodeUrl = new URL(url);

    if (params) {
      nodeUrl.search = new URLSearchParams(params).toString();
    }

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    const response = await fetch(nodeUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Unable to fetch data");
  }
};

module.exports = nodeFetcher;
