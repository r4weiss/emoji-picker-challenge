//VARIABLES
let myEmojis = []
const saveBtn = document.getElementById("save-btn")
const loadBtn = document.getElementById("load-btn")
const clearBtn = document.getElementById("clear-btn")
const msg = document.getElementById("msg")
const emojiBtn = document.getElementById("emoji-btn")
const emojiInput = document.getElementById("emoji-input")
const picker = new EmojiButton()

emojiBtn.addEventListener("click", () => {
	picker.togglePicker(emojiBtn)
})

picker.on("emoji", (emoji) => {
	document.querySelector("input").value += emoji
})

loadBtn.addEventListener("click", () => {
	const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))
	if (emojisFromLocalStorage) {
		myEmojis = emojisFromLocalStorage
		emojiInput.value = myEmojis
		msg.innerHTML = "Successfully loaded! 🚚"
	} else {
		msg.innerHTML = "🔎 We could not find any emojis! 🔍 "
	}
})

saveBtn.addEventListener("click", function () {
	if (emojiInput.value) {
		myEmojis = emojiInput.value
		localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
		emojiInput.value = ""
		msg.innerHTML = "Successfully saved! 🥳"
	} else {
		msg.innerHTML = "👉 It takes one to save one! 🤓"
	}
})

clearBtn.addEventListener("click", function () {
	myEmojis = []
	localStorage.removeItem("myEmojis")
	emojiInput.value = ""
	msg.innerHTML =
		"💀 All emojis have been eliminated with extreme prejudice! 💀"
})

if (emojiInput.value === "") {
	msg.innerHTML = ""
}
