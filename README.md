# crispy-worker

Daemon process to run migrations

## Local setup

### Prerequisites

- NodeJS version 12
- NVM - https://github.com/nvm-sh/nvm
- yarn - https://github.com/yarnpkg/yarn
- Typescript 3.7.5 - https://www.typescriptlang.org/
- Docker - https://www.docker.com/

### Project setup

To setup this project you have to run following commands:

- `nvm use` To activate specified NodeJS version
- `yarn` Install dependencies

The project can be run by building the docker contained and then starting it
```bash
docker build -t crispy-worker .
docker run --rm -d -p 4000:4000 crispy-worker
```
### Running

- `yarn start` Running nodemon for local development
- `yarn build` Compile Typescript to `./dist` directory
- `yarn clean` Remove & Install dependencies

## CONTRIBUTING

Contributions are always welcome, no matter how large or small
