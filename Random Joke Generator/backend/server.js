// const express = require("express");
import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Dad Joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything.",
    },
    {
      id: 2,
      title: "Pun Joke",
      content: "I used to play piano by ear, but now I use my hands.",
    },
    {
      id: 3,
      title: "One-Liner",
      content:
        "I'm reading a book on anti-gravity. It's impossible to put down.",
    },
    {
      id: 4,
      title: "Classic Joke",
      content: "What do you call a bear with no teeth? A gummy bear.",
    },
    {
      id: 5,
      title: "Knock-Knock Joke",
      content:
        "Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here.",
    },
    {
      id: 6,
      title: "Pun Joke",
      content:
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    {
      id: 7,
      title: "Dad Joke",
      content:
        "What's a skeleton's least favorite room in the house? The living room.",
    },
    {
      id: 8,
      title: "One-Liner",
      content: "I'm on a seafood diet. I see food, and I eat it.",
    },
    {
      id: 9,
      title: "Classic Joke",
      content: "How does a penguin build its house? Igloos it together.",
    },
    {
      id: 10,
      title: "Knock-Knock Joke",
      content:
        "Knock, knock. Who's there? Boo. Boo who? Don't cry, it's just a joke.",
    },
    {
      id: 11,
      title: "Dad Joke",
      content:
        "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
    },
    {
      id: 12,
      title: "Pun Joke",
      content: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 13,
      title: "One-Liner",
      content:
        "I'm friends with all electricians. We have great current connections.",
    },
    {
      id: 14,
      title: "Classic Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
    {
      id: 15,
      title: "Knock-Knock Joke",
      content: "Knock, knock. Who's there? Hatch. Hatch who? Bless you!",
    },
    {
      id: 16,
      title: "Pun Joke",
      content: "I used to be a tailor, but I wasn't suited for the job.",
    },
    {
      id: 17,
      title: "Dad Joke",
      content: "I'm reading a book on anti-gravity. It's hard to put down.",
    },
    {
      id: 18,
      title: "One-Liner",
      content: "I'm writing a book on reverse psychology. Do *not* read it.",
    },
    {
      id: 19,
      title: "Classic Joke",
      content:
        "Parallel lines have so much in common. It's a shame they'll never meet.",
    },
    {
      id: 20,
      title: "Knock-Knock Joke",
      content: "Knock, knock. Who's there? Atch. Atch who? Bless you!",
    },
    {
      id: 21,
      title: "Pun Joke",
      content: "I'm a big fan of whiteboards. I find them quite re-markable.",
    },
    {
      id: 22,
      title: "Dad Joke",
      content: `How do you organize a space party? You "planet"!`,
    },
    {
      id: 23,
      title: "One-Liner",
      content: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 24,
      title: "Classic Joke",
      content: "I used to be a baker, but I couldn't make enough dough.",
    },
    {
      id: 25,
      title: "Knock-Knock Joke",
      content:
        "Knock, knock. Who's there? Boo. Boo who? Don't cry, it's just a joke.",
    },
    {
      id: 26,
      title: "Pun Joke",
      content:
        "I'm friends with all electricians. We have great current connections.",
    },
    {
      id: 27,
      title: "Dad Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
    },
    {
      id: 28,
      title: "One-Liner",
      content:
        "Why don't scientists trust atoms? Because they make up everything.",
    },
    {
      id: 29,
      title: "Classic Joke",
      content: "I'm a big fan of whiteboards. I find them quite re-markable.",
    },
    {
      id: 30,
      title: "Knock-Knock Joke",
      content: "Knock, knock. Who's there? Hatch. Hatch who? Bless you!",
    },
    {
      id: 31,
      title: "Pun Joke",
      content: "I'm reading a book on anti-gravity. It's hard to put down.",
    },
    {
      id: 32,
      title: "Dad Joke",
      content: "I'm writing a book on reverse psychology. Do *not* read it.",
    },
    {
      id: 33,
      title: "One-Liner",
      content: `How do you organize a space party? You "planet"!`,
    },
    {
      id: 34,
      title: "Classic Joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything.",
    },
    {
      id: 35,
      title: "Knock-Knock Joke",
      content:
        "Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here.",
    },
    {
      id: 36,
      title: "Pun Joke",
      content:
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    {
      id: 37,
      title: "Dad Joke",
      content:
        "What's a skeleton's least favorite room in the house? The living room.",
    },
    {
      id: 38,
      title: "One-Liner",
      content: "I'm on a seafood diet. I see food, and I eat it",
    },
  ];
  res.status(200).json({
    data: jokes,
  });
});

// app.get("/", (req, res) => {
//   res.json(jokes);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
