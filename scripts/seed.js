const { db } = require('@vercel/postgres');
const {
  users
} = require('../src/app/lib/initialdata.js');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        tempMin FLOAT NOT NULL,
        tempMax FLOAT NOT NULL,
        sun VARCHAR(255) NOT NULL,
        wind VARCHAR(255) NOT NULL,
        rain VARCHAR(255) NOT NULL,
        availability BOOL[]
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (users) => {
        return client.sql`
        INSERT INTO users (tempMin, tempMax, sun, wind, rain, availability)
        VALUES (${users.tempMin}, ${users.tempMax}, ${users.sun}, ${users.wind}, ${users.rain}, ${users.availability})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    return {
      createTable,
      userss: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding userss:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
