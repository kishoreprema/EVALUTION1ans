function reverse (sentence) {
    sentence= sentence.split(" ").reverse().join(" ")
    return sentence

}
sentence = 'u and me'
console.log(reverse(sentence))