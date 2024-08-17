let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string).toString(); // Convert result to string
            } catch (error) {
                string = "Error";
            }
            input.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = ""; // Clear the string
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1); // Ensure string type
            input.value = string;
        } else {
            string += e.target.innerHTML; // Concatenate as string
            input.value = string;
        }
    });
});
