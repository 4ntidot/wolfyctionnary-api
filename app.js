const express = require("express");
const app = express();

(async function () {
	'use strict'
	window.onLoad = function () {
		app.get("/", (req, res)) {
			res.send("Welcome to the Naoctionnary api.");
		}
		fetch("./api/words.json") {
			.then(response => response.json())
			.then(data => {
				app.get("/words", (req, res)) {
					res.send(words);
				}
				app.get("/words/:word", (req, res)) {
					var word = data.indexOf(req.word.name);
					res.send(data[word]);
				}
				app.get("/words/letter/:letter", (req, res)) {
					var foundWords = [];
					var i = 0;
					for (i==0, i < data.length, i++) {
						if (data[i].name.charAt(0) == req.word.name) {
							foundWords.push(data[i]);
						}
						i += i;
					}
					res.send(foundWords);
				}
			})
	}
})();
