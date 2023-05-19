<a name="readme-top"></a>
![](https://img.shields.io/badge/SPACETRAVELLERSHUB-violetpink)

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 SpaceX Launch List

<a name="about-project"></a>

# SpaceX Launch List

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

A small, sample application that display SpaceX launches in a data table. 

The pagination relies exclusively on the [SpaceX-API](https://github.com/r-spacex/SpaceX-API). As far as I could see in the docs there was no option to find out the total number of launches without actually fetching all of the records. In practice the full list of launches is fairly small (94 as of today). Performance-wise fetching the whole list upfront, or even in a staggered fashion, would still be very performant. But doing that would side-step most of the API's GET options, which include offsets, limits and sorting. For this reason the 'Last' pagination button stays disabled until the end of the list is reached and a maximum list size is 'discovered.' Once a maxium offset has been determined the 'Last' pagination option will remain enabled.

## 🛠 Built With <a name="built-with"></a>

- Angular CLI
- Visual Studio Code
- Git & Github

### Key Features

- SpaceX Launch List

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running follow these simple example steps.

- Open terminal
- Clone this project by the command `git clone https://github.com/mumo-esther/spacex-launch List.git`
- `cd <clone>` folder
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Prerequisites

- IDE to edit and run the code (We use Visual Studio Code 🔥).
- [Node.js](https://nodejs.org/en/download/) already downloaded.

### Setup

Clone this repository to your desired folder:
cd my-folder
git clone https://github.com/mumo-esther/space-x-launch-list-angular.git

### Run tests

To run tests, run the following command:

- npm test

### Future Features

- Add more css properties
- Add more filter functionalities 
- Add a profile page

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Esther Mawioo**

- [Github](https://github.com/mumo-esther/mumo-esther)
- [Linkedin](https://www.linkedin.com/in/esther-mawioo-58b636225/)
- [Twitter](https://twitter.com/EstherMawioo)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project you can give it a ⭐️.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Hat tip to anyone whose code was used 🔰
- Inspiration 💘

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.
