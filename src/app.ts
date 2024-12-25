import connectDB from './db/db';
import seedUsers from './seedUsers';
import { app, PORT } from './server';

const main = async () => {
  try {
    // Connect DB
    await connectDB();

    // Add fake Users
    // await seedUsers();

    // start server
    app.listen(PORT, () =>
      console.log(`*****Server running on port ${PORT}*****`),
    );
  } catch (error) {
    console.error('Error start app');
    console.error(error);
    process.exit(1);
  }
};

main();
