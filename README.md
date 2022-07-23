# Learning prisma

## Doc

- Quickstart: [https://www.prisma.io/docs/getting-started/quickstart](https://www.prisma.io/docs/getting-started/quickstart)
- DB Connections (link to MYSQL): [https://www.prisma.io/docs/concepts/database-connectors/mysql](https://www.prisma.io/docs/concepts/database-connectors/mysql)
- How create a schema: [https://www.prisma.io/docs/concepts/components/prisma-schema](https://www.prisma.io/docs/concepts/components/prisma-schema)
- How create a migration: [https://www.prisma.io/docs/concepts/components/prisma-migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- How to create a basic CRUD: [https://www.prisma.io/docs/concepts/components/prisma-client/crud](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
- How seeding your database: [https://www.prisma.io/docs/guides/database/seed-database](https://www.prisma.io/docs/guides/database/seed-database)

## Videos
https://www.youtube.com/watch?v=7RrgSh4k3nM&ab_channel=LeighHalliday
https://www.youtube.com/watch?v=HCJmlvgO2WY&t=1072s&ab_channel=yoursTRULY

## Installation

```
git clone https://github.com/mfloresss/learning-prisma.git # using https
or
git git@github.com:mfloresss/learning-prisma.git # using ssh

cd learning-prisma
npm i # install dependencies
```

### Database creation

```
npm run db:setup # Runs migrations and seeds
```

### Run the app

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

```
npm start
```

## Environment Variables

By default, env files have been removed from the repo to securize our process. To work, you need to generate the env files.

Ensure the `.env` file has required environment variables:

```
DATABASE_URL="mysql://<USER>:<PASSWORD>@localhost:3306/prisma"
```
