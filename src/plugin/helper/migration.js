const DBMigrate = require("db-migrate");

const applyMigration = async () =>
  new Promise((resolve, reject) => {
    const dbmigrate = DBMigrate.getInstance(true);
    dbmigrate.silence(true);
    // dbmigrate.reset((err) => {
    //   if (err) {
    //     reject(err);
    //   }
    // });
    dbmigrate.up((error, result = []) => {
      if (error) {
        reject(error);
      }
      resolve(result.length);
    });
  });
module.exports = applyMigration;
