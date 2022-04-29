mongoose = require("mongoose");
// const { Schema } = mongoose;

const Schema = mongoose.Schema;

let user = new Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    surname: {
      type: "string",
      required: true,
    },
    dob: {
      type: Number,
    },
    grade: {
      type: Number,
    },
  },
  { collection: "users" }
);

// module.exports = mongoose.model("students", studentsSchema);

// module.exports = studentsSchema = mongoose.model("students", studentsSchema);
// module.exports = User = mongoose.model("users", UserSchema);
module.exports = mongoose.model("users", user);
