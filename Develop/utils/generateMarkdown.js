
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**


## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 



## GitHub

![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;
