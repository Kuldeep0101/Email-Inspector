const API_KEY = "ema_live_h4Ic84dkvqLqh0g3hNlu7q9oDNNEz12mFnszlnl9"

const button = document.querySelector("button")
const inputValues = document.querySelector("input")
let fetchedData = document.querySelector(".fetchedData")

button.addEventListener("click", async function (e) {
    e.preventDefault()
    fetchedData.innerHTML = `<img id="loading-img" alt="" src="/image/loading.svg" style="margin-top: 20px; height: 90px">`
    if (inputValues.value == "") {
        alert("please enter a valid email")
    } else {
        let Email = inputValues.value
        const URL = `https://api.emailvalidation.io/v1/info?apikey=${API_KEY}&email=${Email}`
        let res = await fetch(URL)
        let result = await res.json()
        let str = ""

        for (const key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                str = str + `<div>${key}: ${result[key]}</div>`
            }
        }
        fetchedData.innerHTML = str
    }
})