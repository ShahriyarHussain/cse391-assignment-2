let toggle = true;

const clearit = () => {
    document.getElementById("textArea").value = "";
};

const toggleCase = () => {
    if (toggle) {
        let x = document.getElementById("textArea").value.trim().toLowerCase();
        document.getElementById("textArea").value = x;
        toggle = !toggle;
    } else {
        let x = document.getElementById("textArea").value.trim().toUpperCase();
        document.getElementById("textArea").value = x;
        toggle = !toggle;
    }
};

const sortAll = () => {
    let array = [];
    document
        .getElementById("textArea")
        .value.split("\n")
        .forEach((element) => {
            let temp = element.trim();
            if (temp != "") array.push(element.trim());
        });

    document.getElementById("textArea").value = array.sort().join("\n");
};

const reverseAll = () => {
    let array = [];
    document
        .getElementById("textArea")
        .value.split("\n")
        .forEach((element) => {
            let temp = element.trim();
            if (temp != "") array.push(element.trim());
        });

    document.getElementById("textArea").value = array.reverse().join("\n");
};

const stripBlank = () => {
    let array = [];
    document
        .getElementById("textArea")
        .value.split("\n")
        .forEach((element) => {
            let temp = element.trim();
            if (temp != "") array.push(element.trim());
        });

    document.getElementById("textArea").value = array.join("\n");
};

const addNum = () => {
    let array = [];
    document
        .getElementById("textArea")
        .value.split("\n")
        .forEach((element, index) => {
            let temp = element.trim();
            if (temp != "") array.push(index + 1 + ". " + temp);
        });

    document.getElementById("textArea").value = array.join("\n");
};

const shuffle = () => {
    let array = document.getElementById("textArea").value.split("\n");
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    document.getElementById("textArea").value = array.join("\n");
};

function suffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
