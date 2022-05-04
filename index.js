const express = require("express");

const Game = require("./models/").game;

const app = express();

const port = 4000;

app.listen(port, () => console.log(`Listening on :${port}`));

app.get("/", async (req, res) => {
  try {
    const allGames = await Game.findAll();
    res.status(200).send(allGames);
  } catch (e) {
    console.log("error", e);
  }
});
