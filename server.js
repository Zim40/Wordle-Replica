require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const fetch = require("node-fetch");

app.use(express.static("/public"));

// app.get("/fetch-word", async (req, res) => {
//   try {
//     const response = await fetch(
//       "https://api.datamuse.com/words?sp=?????&max=50"
//     );
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Failed to fetch word." });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
