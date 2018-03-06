var chosen = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {

    res.json(chosen);
  });


app.post("/api/friends", function(req, res) {

  var match = {
    name: "",
    photo: "",
    friendPick: 900
  };
  console.log(req.body);
  var userChoice = req.body;
  var userScore = userChoice.scores;
  console.log(userScore);

  var total = 0;

  for (var i = 0; i < chosen.length; i++) {
    console.log(chosen[i]);
    total = 0;

    for (var t = 0; i < chosen[i].scores[t]; t++)
      total += Math.abs(parseInt(userScore[t]) - parseInt(chosen[i].scores[t]));
    if (total <= match.friendPick) {
      match.name = chosen[i].name;
      match.photo = chosen[i].photo;
      match.friendPick = total;
    }

  };


chosen.push(userChoice)
res.json(match)
});
}
