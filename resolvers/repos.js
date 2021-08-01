const nodeFetcher = require("../fetchers/nodeFetcher");

const repos = async (_, args) => {
  const data = await nodeFetcher(
    `https://api.github.com/users/natasha-mann/repos`,
    { sort: "created" }
  );

  return data.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      gitHubUrl: repo.html_url,
      homepage: repo.homepage,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
    };
  });
};

module.exports = repos;
