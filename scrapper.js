const actors = require("./actors.json");
const fs = require("fs");
let finalActors = [];

actors.forEach((actor) => {
  delete actor.image_path;
  delete actor.alternative_name;
});

console.log(actors[6].name);

fs.writeFile("./actor-data.json", JSON.stringify(actors), () => {
  console.log("DONE");
});
