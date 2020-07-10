const generateMarkdown = data => {
    // return JSON.stringify(data)
    return `
  <a href="${data.link}" style="float:right"><img src="${data.avatar}" alt="${data.name}" title="${data.name}" width="120" height="120"></a>
  