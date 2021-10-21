const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

const createCommitStatus = async () => {
  try {
    const response = await octokit.request(
      "POST /repos/{owner}/{repo}/statuses/{sha}",
      {
        context: process.env.CONTEXT,
        description: process.env.DESCRIPTION,
        owner: "lukehedger",
        repo: "actions-workflow-run",
        sha: process.env.SHA,
        state: process.env.STATE,
        target_url: process.env.TARGET_URL,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

createCommitStatus();
