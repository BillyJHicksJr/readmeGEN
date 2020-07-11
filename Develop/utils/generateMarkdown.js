
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**


## Description 

${data.description}


## GitHub

![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;
