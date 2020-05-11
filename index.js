"use strict";

// import Animations from "./datajson.js";

window.addEventListener("DOMContentLoaded", start);

const animation = bodymovin.loadAnimation({
	container: document.getElementById("bm"),
	renderer: "svg",
	loop: true,
	autoplay: true,
	path: "star-comp.json",
});

function start() {
	console.log("start");
}
