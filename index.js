const fs = require("fs");

function findTop10Words(filePath) {
  const text = fs.readFileSync(filePath, "utf-8");
  const words = text.toLowerCase().match(/\b\w+\b/g);

  if (!words) {
    console.log("No words in txt file.");
    return;
  }

  const wordFreqMap = {};
  words.forEach((word) => {
    if (wordFreqMap[word]) {
      wordFreqMap[word]++;
    } else {
      wordFreqMap[word] = 1;
    }
  });

  const wordFreqList = Object.keys(wordFreqMap).map((word) => ({
    word: word,
    freq: wordFreqMap[word],
  }));

  wordFreqList.sort((a, b) => b.freq - a.freq);

  const top10Words = wordFreqList.slice(0, 10);

  return top10Words;
}

const filePath = "./sample.txt";
const top10Words = findTop10Words(filePath);
console.log(top10Words);
