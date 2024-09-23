const msg = document.getElementById("message")
const category = document.querySelector(".category")
async function flirt(){
    try {
        const response = await fetch("https://rizzapi.vercel.app/random");
        if (!response.ok) {
            console.error('Network response was not ok:', response.statusText);
            return;
        }
        const data = await response.json();
        msg.innerHTML = data.text;
        category.innerHTML = "category: " + data.category;
        console.log(data);
    } catch (error) {
        document.write('There was a problem with the fetch operation:', error);
    }
}

flirt();