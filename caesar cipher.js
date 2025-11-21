function caesarCipher(text, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let char of text.toLowerCase()) {
        if (alphabet.includes(char)) {
            const index = (alphabet.indexOf(char) + shift) % 26;
            result += alphabet[index];
        } else {
            result += char; // пробіли, цифри, символи лишаються
        }
    }

    return result;
}

console.log("Encrypted:", caesarCipher("hello world", 3));
