const msg = document.getElementById("message")
const category = document.querySelector(".category")
const copyBtn = document.getElementById("copyBtn")
const genNew = document.getElementById("genBtn")

async function flirt(){
    try {
        const response = await fetch("https://rizzapi.vercel.app/random");
        if (!response.ok) {
            console.error('Network response was not ok:', response.statusText);
            return;
        }
        const data = await response.json();
        msg.innerHTML = data.text;
        category.innerHTML = "Category: " + data.category;
        genNew.classList.remove("hide");
        copyBtn.classList.remove("hide");
    } catch (error) {
        document.write('There was a problem with the fetch operation:', error);
    };
};

flirt();

genNew.addEventListener("click", flirt);

copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(msg.innerText)
});
