# Decentralized Creator 🌍 Web Application

![License](https://img.shields.io/badge/license-Apache%20V2-blue.svg)
![NPM Version](https://img.shields.io/badge/npm-v6.4.1-blue.svg)
![Node Version](https://img.shields.io/badge/node-v10.14.1-blue.svg)
![Angular Version](https://img.shields.io/badge/angular-v7.1.3-blue.svg)

Decentralized Creator is a platform devoted to free speech. We believe that free speech is a fundamental human right. Decentralized Creator is a platform that intends to mitigate and respond to concerns revolved around censorship.

## Running the web app for development

```bash
# install node modules
yarn

# run dev server
ng serve --port 4200
```

## Building for beta and production environments

```bash
# build for the beta environment
ng build -c beta

# build for the production environment
ng build -c production # `ng build --prod` works too

# launch and serve with pm2
yarn global add pm2
pm2 serve.js --name beta-dc
```

*Please note that the build configurations are pulled from `src/environments`. You will need to have the API setup in order for the web application to work. Make sure to update the base API urls according to your own custom build.*

## Quality of Life Roadmap

- [ ] Unit Testing both E2E and Unit.

- [ ] Testing done on CI (Travis for now, until eaxops).

- [ ] Documentation of functions, Formatted comments.

- [ ] Stricter Typescript syntax with Interfaces and Types.

## Additional Notes

- Apache V2 License

- All development and source code will eventually migrate to https://eaxops.com

- Have a question? :mailbox: Email hello@chriscates.ca
