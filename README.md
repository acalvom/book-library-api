## TODOs
🟨 Endpoints por Author  
🟨 Update the API documentation  
🟨 Entity User for logged users

## Description

API for a book seller application
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database commands

```bash
# database up
$  npm run db:up

# database down
$  npm run db:down

# reset db
$ npx prisma migrate reset 

# migrate db
$ npx prisma migrate dev --name "update" 

# seed db
$ npx prisma db seed   
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
