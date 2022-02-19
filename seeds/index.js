const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedRepost = require('./repost-seeds');
const seedFavorite = require('./favorite-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedPost();
  console.log('\n----- POST SEEDED -----\n');

  await seedRepost();
  console.log('\n----- REPOST SEEDED -----\n');

  await seedFavorite();
  console.log('\n----- FAVORITE SEEDED -----\n');

  process.exit(0);
};

seedAll();