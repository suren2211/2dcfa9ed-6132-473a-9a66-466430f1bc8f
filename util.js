exports.generateText = (name, age) => {
    // Returns output text
    return `${name} (${age} years old)`;
};

exports.createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
};

exports.validateInput = (text, notEmpty, isNumber) => {
    // Validate user input with two pre-defined rules
    if (!text) {
        return false;
    }
    if (notEmpty && text.trim().length === 0) {
        return false;
    }
    if (isNumber && +text === NaN) {
        return false;
    }
    return true;
};


exports.longestCommonSubsequence = (inputString) => {
    var input = [];
    input = inputString.split(' ');
    if (input.length === 0) {
        return [];
    }

    var lisLenPerIndex = [];
    let max = { index: 0, length: 1 };

    for (var i = 0; i < input.length; i++) {
        lisLenPerIndex[i] = 1;
        for (var j = i - 1; j >= 0; j--) {
            if (input[i] > input[j] && lisLenPerIndex[j] >= lisLenPerIndex[i]) {
                var length = lisLenPerIndex[i] = lisLenPerIndex[j] + 1;
                if (length > max.length) {
                    max = { index: i, length };
                }
            }
        }
    }

    var lis = [input[max.index]];
    for (var i = max.index; i >= 0 && max.length !== 0; i--) {
        if (input[max.index] > input[i] && lisLenPerIndex[i] === max.length - 1) {
            lis.unshift(input[i]);
            max.length--;
        }
    }
    return lis.join(' ').trim();
};