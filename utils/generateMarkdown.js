// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
[![](https://img.shields.io/badge/License-${response.license}-green)](#license)
## Description
${response.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${response.installation}
## Usage
${response.usage}
## Contributing
${response.contributing}
## Tests
${response.test}
## License
${getLicenseNotice(response.license)}
## Questions
* Please raise a request at [github](https://github.com/${response.username})
* For any enquiries, please reach out to my email: ${response.email}`;
}

function getLicenseNotice(license) {
  return license === "None" ? `This application is not covered under any license currently` : `This application is covered by ${license} license`;
}



module.exports = generateMarkdown;  