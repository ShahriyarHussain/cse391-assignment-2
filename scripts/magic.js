let toggle = false;
let htmlElement = document.getElementById("textArea");

const clearit = () => {
    htmlElement.value = "";
};

const toggleCase = () => {
    if (toggle) {
        let x = htmlElement.value.toLowerCase();
        htmlElement.value = x;
        toggle = !toggle;
    } else {
        let x = htmlElement.value.toUpperCase();
        htmlElement.value = x;
        toggle = !toggle;
    }
};

const sortAll = () => {
    let array = [];
    htmlElement.value.split("\n").forEach((element) => {
        array.push(element);
    });

    htmlElement.value = array.sort().join("\n");
};

const reverseAll = () => {
    let array = [];
    htmlElement.value.split("\n").forEach((element) => {
        array.push(element);
    });

    htmlElement.value = array.reverse().join("\n");
};

const stripBlank = () => {
    let array = [];
    htmlElement.value.split("\n").forEach((element) => {
        let temp = element.trim();
        if (temp != "") array.push(temp);
    });

    htmlElement.value = array.join("\n");
};

const addNum = () => {
    let array = [];
    htmlElement.value.split("\n").forEach((element, index) => {
        array.push(index + 1 + ". " + element);
    });

    htmlElement.value = array.join("\n");
};

const shuffle = () => {
    let array = htmlElement.value.split("\n");
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    htmlElement.value = array.join("\n");
};
