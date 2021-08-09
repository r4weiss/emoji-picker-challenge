//NEXT STEPS

//Adding Features
// store and render the emojis from local storage
// if no items are in local storage when you press "Load", deliver an error message
// TODO allow a user to save and render a bunch of emojis to different groups/containers
// TODO Allow the user to increase or decrease the size of a particular emoji
// TODO Allow the user to type out an emoji and have it rendered
// TODO set a limit to how many emojis you can add, once reached, disable the add button

//Refactoring the code
// TODO Decrease the amount of code needed to run the base functions

//Change the design
// TODO Change the design to a modern style

//VARIABLES

let myEmojis = []
const emojiContainer1 = document.getElementById("emoji-container-1")
// const emojiContainer2 = document.getElementById("emoji-container-2")
const emojiInput = document.getElementById("emoji-input")
const loadBtn = document.getElementById("load-btn")
const pushBtn = document.getElementById("push-btn")
const popBtn = document.getElementById("pop-btn")
const clearBtn = document.getElementById("clear-btn")
const errorMsg = document.getElementById("error-msg")

const emojiBtn = document.getElementById("emoji-btn")
const picker = new EmojiButton()

emojiBtn.addEventListener("click", () => {
	picker.togglePicker(emojiBtn)
})

picker.on("emoji", (emoji) => {
	document.querySelector("input").value += emoji
})

//BUTTONS

loadBtn.addEventListener("click", () => {
	const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))
	if (emojisFromLocalStorage) {
		myEmojis = emojisFromLocalStorage
		renderEmojis()
	} else {
		errorMsg.innerHTML = "No emojis found 🔍"
	}
})

pushBtn.addEventListener("click", function () {
	if (emojiInput.value) {
		myEmojis.push(emojiInput.value)
		localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
		errorMsg.innerHTML = ""
		renderEmojis()
	}
})

popBtn.addEventListener("click", function () {
	myEmojis.pop()
	localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
	renderEmojis()
})

clearBtn.addEventListener("click", function () {
	myEmojis = []
	localStorage.removeItem("myEmojis")
	renderEmojis()
})

//FUNCTIONS

function renderEmojis() {
	if (myEmojis) {
		let emojiSpan = ""
		for (let i = 0; i < myEmojis.length; i++) {
			emojiSpan += `<span>${myEmojis[i]}</span>`
		}
		emojiContainer1.innerHTML = emojiSpan
		// emojiContainer2.innerHTML = emojiSpan
		emojiInput.value = ""
	}
}

//Make a function that does the following:

// Listens if you want to add and what you want to add, then adds and renders
// Listens if you want to remove, then removes and renders
// Listens if you want to clear all, then clears all and renders

function render(action, emoji) {
	const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))
	// Listens if you want to load, then loads and renders
	if (emojisFromLocalStorage) {
		myEmojis = emojisFromLocalStorage
		renderEmojis()
	} else {
		errorMsg.innerHTML = "No emojis found 🔍"
	}

	if (myEmojis) {
		let emojiSpan = ""
		for (let i = 0; i < myEmojis.length; i++) {
			emojiSpan += `<span>${myEmojis[i]}</span>`
		}
		emojiContainer.innerHTML = emojiSpan
		emojiInput.value = ""
	}
}

// import { EmojiButton } from "@joeattardi/emoji-button"

// const picker = new EmojiButton()
// const trigger = document.querySelector(".trigger")

// picker.on("emoji", (selection) => {
// 	trigger.innerHTML = selection.emoji
// })

// trigger.addEventListener("click", () => picker.togglePicker(trigger))
