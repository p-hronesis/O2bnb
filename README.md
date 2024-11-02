<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/p-hronesis/O2bnb" target="_blank">
    <img src="app/favicon.ico" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Airbnb clone app</h3>

  <p align="center">
    A very minimalistic Airbnb clone app
    <br />
    <a href="https://github.com/p-hronesis/O2bnb" target="_blank"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://o2bnb.vercel.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/p-hronesis/O2bnb/issues/new?labels=bug&template=bug-report---.md" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/p-hronesis/O2bnb/issues/new?labels=enhancement&template=feature-request---.md" target="_blank">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><h2>Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://plitter-seven.vercel.app/)

This is a very minimalistic Airbnb clone app that implements some basic functionalities of Airbnb and it user interface.

### Features

  <ul>
    <li>
        <b>User registration and authentication</b>
        <ul>
            <li>
            Credential login with email and password
            </li>
            <li>
            Google authentication
            </li>
            <li>
            Github authentication
            </li>
        </ul>
    <p>
      Registration is done with the use of credentials and third party authentication. Name, email and password are used for credential registration while just email and password are used for credential login. I also used google and github for thirdparty authentication(registration and login).
      <br/>
      There is no special categories of logged in user or special admin role. There is no email verification during credential login and there is forget password option.
      Special user or admin role might be added in future for example I might add special admin role for users that can upload and delete movies or adding special user role to subscribed users. I might add other third party authentication option in the future. I might also add forget password and email verification for credential login
    </p>
    </li>
    <li>
    <b>Pages and routes protection</b>
      The packages I used for user authencation and routes protection are:
      <ul>
        <li>
            <a href="https://www.npmjs.com/package/next-auth/v/4.22.1" target="_blank">next-auth: version 4.22.1</a>
        </li>
        <li>
            <a href="https://www.npmjs.com/package/swr/v/2.2.5" target="_blank">swr: version 2.2.5</a>
        </li>
        <li>
            <a href="https://www.npmjs.com/package/bcrypt/v/5.1.1" target="_blank">bcrypt: version 5.1.1</a> and 
            <a href="https://www.npmjs.com/package/@types/bcrypt/v/5.0.2" target="_blank">types/bcrypt: version 5.0.2</a>
        </li>
        <li>
            <a href="https://www.npmjs.com/package/@next-auth/prisma-adapter/v/1.0.7" target="_blank">next-auth/prisma-adapter: version 1.0.7</a>
        </li>
      </ul>
    </li>
    <li><b>Basic actions that users can perform include</b>
        </br>-- Listing and deleting your property(O2bnb your home)
        </br>-- Property booking and cancellation
        </br>-- Favoriting and unfavoriting a listing
        </br>-- Check your bookings and reservations
        </br>-- Check all your listed properties
        </br>-- Search properties by different filter including category and location filter
    </li>
    <li><b>Image upload using cloudinary</b>
        <p>
            Your listing pictures are uploaded and stored with the use of cloudinary
        </p>
    </li>
    <li><b>Advance property search</b>
        <p>
            You can search properties by different query parameter. You can search properties by location, category, date property is available, number of room, number of guest and number of bathrooms.
        </p>
    </li>
    <li><b>Property Listing</b>
        <p>
            Registered users can listout their properties for rent(O2bnb your home). You select the category you want, the country the property is in, fill out the rest of the form and then create listing
        </p>
    </li>
    <li><b>Responsive user interface</b>
        <p>
            The user interface is made responsive with the use of tailwind css. I used tailwind css for this project because it is one of the best and most popular mobile first css library. 99.99% of the entire css was written exclusively with tail wind css.
        </p>
    </li>
    <li><b>Global state management</b>
        <p>
            I use zustand for global state magement. I used zustand for this project because zustand is light weight, compact, fast, scalable and does everything I need it to do in this project. Also zustand requires less code to use than redux and doesn't rely on a provider
        </p>
    </li>
    <li><b>Database abstration tool</b>
        <p>
            I used prisma for database abstration. I choose prisma because it is compatible with multiple database and it generate data types corresponding to my database schemas.
        </p>
    </li>
    <li><b>Promised-based HTTP Client</b>
        <p>
            I used axios for making http requests to my server. I choose axios because it is simple and easy to use, it is promised based and I can easily handle the errors. axios also has built in XSRF protection, download progress...
        </p>
    </li>
    <li><b>Use of middleware</b>
        <p>
            I used middleware.js file for page redirection for unauthorised users
        </p>
    </li>

  </ul>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This is the list of some of the plugins and frameworks I used, check the <a href="https://github.com/p-hronesis/O2bnb/blob/master/package.json" target="_blank">package.json</a> for a complete list.

- [![Next][Nextjs-image]][Nextjs-url]
- [![React][React-image]][React-url]
- [![Next-auth][Nextauth-image]][Nextauth-url]
- [![Next-auth prisma-adapter][Nextauthprismaadapter-image]][Nextauthprismaadapter-url]
- [![Prisma][Prisma-image]][Prisma-url]
- [![Prisma client][Prismaclient-image]][Prismaclient-url]
- [![Axios][Axios-image]][Axios-url]
- [![Bcrypt][BCrypt-image]][Nextauth-url]
- [![React-Icons][Reacticons-image]][Reacticons-url]
- [![swr][Swr-image]][Swr-url]
- [![zustand][Zustand-image]][Zustand-url]
- [![Tailwindcss][Tailwindcss-image]][Tailwindcss-url]
- [![Typescript][Typescript-image]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT STRUCTURE -->

### Project Structure

```bash
|-- components           # Reusable UI components
|-- hooks                # Custom React hooks
|-- lib                  # Prisma and server-side utilities
|-- app                  # Next.js pages, including API routes
|   |-- api              # API routes for server-side functionalities: it contains both protected and unprotected routes
|       |-- auth         # API routes for server-side authentication
|   |-- components       # website reusable UI components
|   |-- favorites        # website /favorites page: its a protected page
|   |-- fonts            # contains used font
|   |-- hooks            # hooks for fetching data
|   |-- libs             # contains the prisma global variable used
|   |-- listings         # the /listings page: its a protected page
|   |-- properties       # website /properties page: its a protected page
|   |-- providers        # website /providers page: its a protected page
|   |-- reservations     # website /reservations page: its a protected page
|   |-- trips            # website /trips page: its a protected page
|   |-- types            # contains the custom type declaration used
|   |-- index.tsx        # Main page (Billboard)
|-- prisma               # Prisma schema for database models
|-- public               # Public assets like images and favicon
|-- styles               # Global CSS styles
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/p-hronesis/O2bnb.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Set up the environment variables:
   ```bash
    DATABASE_URL="<your_mongodb_database_url>"
    NEXTAUTH_JWT_SECRET="<your_next_auth_jwt_secret>"
    NEXTAUTH_SECRET="<your_next_auth_secret>"
    NEXTAUTH_COOKIE_AUTH_NAME="next-auth.session-token"
    GITHUB_ID="<your_github_client_id>"
    GITHUB_SECRET="<your_github_client_secret>"
    GOOGLE_CLIENT_ID="<your_google_client_id>"
    GOOGLE_CLIENT_SECRET="<your_google_client_secret>"
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<your_cloudinary_cloud_name>"
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
5. Push the prisma schema to your database server
   ```sh
   npx prisma db push
   ```
6. In your cloudinary account you will need to create and use an upload present that is unsigned

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This project allow users to rent properties and also put out their properties for rent, add a property to their favorite list, advance property search filter and algorithm, delete properties and bookings.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Add search properties by key words in property description
- [ ] Create an algorithm to show user property feed based on their activities
- [ ] Integrate payment gateway for property reservation
- [ ] User verification before listing
- [ ] Verified badge for verified users
- [ ] Multi-language Support
  - [ ] Mandarin
  - [ ] Spanish

See the [open issues](https://github.com/p-hronesis/O2bnb/issues) for a full list of proposed features and known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="www.linkedin.com/in/dipekehinde">
  <img src="https://avatars.githubusercontent.com/u/90449299?s=400&u=376b1e49250b259b857184804ae8635c6e403613&v=4" alt="contrib.rocks image" width=50px/>
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Name: Dipe Kehinde
- Linkedin: (https://www.linkedin.com/in/dipekehinde)
- Email: dipekehinde@gmail.com

Project Link: [https://github.com/p-hronesis/O2bnb](https://github.com/p-hronesis/O2bnb)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Big thank you to Code with Anthonio

- Code with Anthonio [Website](https://www.codewithantonio.com/)
  [Youtube](https://www.youtube.com/@codewithantonio) [Github](https://github.com/antonioerdeljac)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--








 -->

[product-screenshot]: screenshot.png
[Nextjs-url]: https://nextjs.org/
[Nextjs-image]: https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=nextdotjs&logoColor=white
[React-image]: https://img.shields.io/badge/React-ddd?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Nextauth-image]: https://img.shields.io/badge/next--auth-61DAFB?style=for-the-badge&logo=nextdotjs&logoColor=000
[Nextauth-url]: https://next-auth.js.org/
[Prisma-image]: https://img.shields.io/badge/prisma-000?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[Nextauthprismaadapter-image]: https://img.shields.io/badge/nextauth%20prisma%20adapter-20B2AA?style=for-the-badge
[Nextauthprismaadapter-url]: https://next-auth.js.org/v3/adapters/prisma
[Prismaclient-image]: https://img.shields.io/badge/prisma%20client-20B2AA?style=for-the-badge&logo=prisma&logoColor=white
[Prismaclient-url]: https://www.prisma.io/nextjs
[Axios-image]: https://img.shields.io/badge/axios-20232A?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/
[Bcrypt-image]: https://img.shields.io/badge/bcrypt-20B2AA?style=for-the-badge
[Bcrypt-url]: https://www.npmjs.com/package/bcrypt
[Zustand-image]: https://img.shields.io/badge/zustand-20B2AA?style=for-the-badge
[Zustand-url]: https://zustand.docs.pmnd.rs/getting-started/introduction
[Reacticons-image]: https://img.shields.io/badge/react%20icons-20232A?style=for-the-badge
[Reacticons-url]: https://www.npmjs.com/package/react-icons
[Typescript-image]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Tailwindcss-image]: https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwindcss-url]: https://tailwindcss.com/
[Swr-image]: https://img.shields.io/badge/swr-20232A?style=for-the-badge&logo=swr&logoColor=white
[Swr-url]: https://swr.vercel.app/
