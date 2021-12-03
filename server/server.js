const express = require("express");

const app = express();

app.use(express.static("../client/public"));

// 3 dummy data date. just get the current epoch time and subtract a week, 2 weeks, 3 weeks
app.get("/api/v1/", (req, res) =>
	res.json([
		{
			date: Date.now() - 1000 * 60 * 60 * 24 * 14,
			title: "How to keep your cooking simple",
			body: "Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.",
			imageSrc: "./img/food.jpg",
			imageAlt: "two dumplings on a wood plate with chopsticks",
		},
		{
			date: Date.now() - 1000 * 60 * 60 * 24 * 21,
			title: "Simplicity and work",
			body: "Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out.",
			imageSrc: "./img/work.jpg",
			imageAlt: "a chair white chair at a white desk on a white wall",
		},
		{
			date: Date.now() - 1000 * 60 * 60 * 24 * 28,
			title: "Simple decorations",
			body: "A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before.",
			imageSrc: "./img/deco.jpg",
			imageAlt: "a green plant in a clear, round vase with water in it",
		},
	])
);

app.listen("3100", () => console.log(`listening to port 3100`));
