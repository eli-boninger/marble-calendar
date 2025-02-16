# Marble Calendar

This project contains a calendar with a two-way data flow - events are displayed from a PostgreSQL database and new events created are saved to that database.

## Setup
You will need some PostgreSQL database url to point to.

1. Run `npm i`.
2. Create a `.env` file. 
3. Create a new postgres database (e.g. named `marble_calendar`)
4. Add variable `DATABASE_URL` to your `.env` file. This should point to your newly created database (e.g `"postgresql://db_user:db_pass@localhost:5432/marble_calendar"`)
5. Run migrations with `npm run migrate:dev`
6. (optional) Create seed data with `npx prisma db seed`
7. Run app with `npm run dev`