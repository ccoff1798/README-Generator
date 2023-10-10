// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'BSD 3-Clause':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && renderLicenseLink(license)) {
    return `## License

This project is licensed under the ${license} License - see the [LICENSE](${renderLicenseLink(license)}) file for details`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseSection
};