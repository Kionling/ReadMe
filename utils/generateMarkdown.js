const generateMarkdown = data => {
    // return JSON.stringify(data)
    return `
  <a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="${data.name}" title="${data.name}" width="120" height="120"></a>
  
  # ${data.title.toUpperCase()}

![License: ${(data.lic) ? data.lic : 'None'}](https://img.shields.io/badge/License-${(data.lic) ? data.lic : 'None'}-brightgreen)

_Repo by ${data.name}_

___

__Installation:__
${data.inst}

__Usage:__
${data.use}

__Contributors:__
${data.con}

__Tests:__
${data.test}

__Questions:__
${data.question}
`
}

module.exports = generateMarkdown