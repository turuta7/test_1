import User, { IUser } from './db/models/User';

const seedUsers = async (): Promise<void> => {
  try {
    // Users fake
    const users: IUser[] = [
      { name: 'Alice', level: 10 },
      { name: 'Bob', level: 20 },
      { name: 'Charlie', level: 15 },
    ];

    // Add users in DB
    await User.create(users);
    console.log('Sample users added');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
  }
};

export default seedUsers;
