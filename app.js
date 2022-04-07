const express = require("express");
const app = express();

(async function () {
	'use strict'
	window.onLoad = function () {
		app.get("/", (req, res)) {
			res.send("Welcome to the Naoctionnary api.");
		}
		fetch("./api/words.json")
			.then(response => response.json())
			.then(data => {
				var words = data;
				app.get("/words", (req, res)) {
					res.send(words);
				}
				app.get("/words/:word", (req, res)) {
					res.send(data.(req.user.name));
				}
			})
	}
})();
