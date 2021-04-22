const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.info("Successfully connected to the database"))
  .catch((error) =>
    console.error(
      `An error ocurred trying to connect to de database mongodb://localhost:27017/test`,
      error
    )
  );

mongoose.set("useFindAndModify", false);
