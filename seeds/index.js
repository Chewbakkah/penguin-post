const seedUser = require("./user-seeds");
const seedPost = require("./post-seeds");
const seedRepost = require("./repost-seeds");
const seedFavorite = require("./favorite-seeds");
const seedFact = require("./fact-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  await seedPost();
  console.log("\n----- POSTS SEEDED -----\n");

  await seedRepost();
  console.log("\n----- REPOSTS SEEDED -----\n");

  await seedFavorite();
  console.log("\n----- FAVORITE SEEDED -----\n");

  await seedFact();
  console.log("\n----- FACT SEEDED -----\n");

  process.exit(0);
};

seedAll();
