// const { User } = require("../src/db/models");
import { User } from "../src/db/models"


export const seed = async () => {
  // create tables
  await User.sync({ force: true });
  //insert data
  await Promise.all([
    User.create({
      id: 1,
      email: "john@mail.com",
      password: "sa,[;e",

    }),
    User.create({
      id: 2,
      email: "jane@mail.com",
      password: "sampel",
    }),
  ]);
}

// module.exports = {
//   seed,
// };