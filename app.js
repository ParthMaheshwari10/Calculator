let string = "";
let dot = true;

let h2 = document.querySelector('h2');
let p = document.querySelector('p');

function swap () {
    h2.classList.remove("h2");
    h2.classList.add("p");
    p.classList.remove("p");
    p.classList.add("h2");

}

function reset () {
    h2.classList.remove("p");
    h2.classList.add("h2");
    p.classList.remove("h2");
    p.classList.add("p");
} 

let buttons = document.querySelectorAll("button");

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let bool = true;
        reset();
        if (event.target.innerText == '=') {
            swap();
        }
        else if (event.target.innerText == "AC") {
            string = " ";
            document.querySelector("p").innerText = "= 0";
            reset();
            bool = false;
            dot = true;
        }
        else if (event.target.innerText == "C") {
            if (string [string.length-1] == ".") {
                dot = true;
            }
            let arr = [...string];
            string = "";
            for (let i=0; i<arr.length-1; i++) {
                string += arr[i];
            }
        }
        else if (event.target.innerText == ".") {
            if (dot) {
                string += (event.target.innerText);
                dot = false;
            }
        }
        else {
            string += (event.target.innerText);
        }

        document.querySelector("h2").innerText = string;
        if (bool) {
            try {
                document.querySelector("p").innerText = "= " + eval(string);
            }
            catch(error) {
                console.dir(error);
            }
        }

    
    })
}

