const getColor = () => {
   const randomNumber = Math.floor(Math.random() * 16777215);
   const randomCode = "#" + randomNumber.toString(16);
   document.body.style.backgroundColor = randomCode;
   console.log(randomCode) // for print in to the console this line is not neseecary //
   document.getElementById("color-code").innerText = randomCode;
   navigator.clipboard.writeText(randomCode)
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();