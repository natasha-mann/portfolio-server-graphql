const nodeFetcher = require("../fetchers/nodeFetcher");

const repos = async (_, args) => {
  const data = await nodeFetcher(
    `https://api.github.com/users/${args.username}/repos`,
    { sort: args.sortBy, per_page: args.number, page: args.page }
  );

  return data.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      gitHubUrl: repo.html_url,
      homepage: repo.homepage,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      branch: repo.default_branch,
      size: repo.size,
    };
  });
};

module.exports = repos;
