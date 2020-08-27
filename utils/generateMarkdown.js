// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
[![](https://img.shields.io/badge/License-${data.license}-green)](#license)
## Description
${data.projectDesc}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.InstalInst}
## Usage
${data.usageInfo}
## Contributing
${data.contriGuide}
## Tests
${data.testInst}
## License
${getLicenseNotice(data.license)}
## Questions
* Please raise a request at [github](https://github.com/${data.gitHubUser})
* For any enquiries, please reach out to my email: ${data.email}`;
}

function getLicenseNotice(license) {
  return license === "None" ? `This application is not covered under any license currently` : `This application is covered by ${license} license`;
}



module.exports = generateMarkdown;  