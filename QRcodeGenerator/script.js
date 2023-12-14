let input = document.getElementById('input')
let generateBtn = document.getElementById('generateBtn')
let main = document.querySelector('main')
let img = document.getElementById('img')



function generateQrCode() {
    if (!input.value) return
    generateBtn.textContent = "Generating..."
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`

    img.onload = () => {
        generateBtn.textContent = "Generate"
        main.classList.add('show')
    }
}