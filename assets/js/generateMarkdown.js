
function renderLicenseBadge(license) {
  const badges = {
    'GNU AGPLv3':
      '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU GPLv3':
      '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'GNU LGPLv3':
      '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    'Mozilla Public License 2.0':
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'Apache License 2.0':
      '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'MIT License':
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Boost Software License 1.0':
      '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'The Unlicense':
      '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'none': '',
  };

  return badges[license];
}


function renderLicenseLink(license) {
  const licenseLinks = {
    'GNU AGPLv3': '[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU GPLv3': '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
    'GNU LGPLv3': '[GNU LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)',
    'Mozilla Public License 2.0':
      '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)',
    'Apache License 2.0':
      '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    'MIT License': '[MIT License](https://opensource.org/licenses/MIT)',
    'Boost Software License 1.0':
      '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)',
    'The Unlicense': '[The Unlicense](http://unlicense.org/)',
    'none': '',
  };

  return licenseLinks[license];
}


function renderLicenseSection(license) {
  return license !== 'none' ? `Licensed under ${renderLicenseLink(license)}` : '';
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${data.license !== 'none' ? renderLicenseBadge(data.license) : ''}

  ## Description:
  ___
  ${data.description}

  ## Table of Contents:
  ___
  1) [Description](#description)
  2) [Installation](#installation)
  3) [Usage](#usage)
  4) [Video](#video)
  5) [Collaboration](#collaboration)
  6) [Tests](#tests)
  7) [Questions?](#questions?)
  8) [GitHub](#gitHub)
  ${data.license !== 'none' ? `9) [License](#license)` : ''}

  ## Usage
  ___
  ${data.usage}

  ## Video
  ___
  [![Demo Video](${data.image})](${data.video} "Demo Video")

  ## Collaboration:
  ___
  ${data.collaboration}

  ## Tests
  ___
  ${data.tests}

  ## Questions?
  ___
  Please contact me at:
  [GitHub](https://github.com/${data.githubId})
  
  Or Email:
  <${data.email}>

  
  ${data.license !== 'none' 
  ? `## License: 
  ___
  ${renderLicenseSection(data.license)}` 
  : ''}`;
}

module.exports = generateMarkdown;
