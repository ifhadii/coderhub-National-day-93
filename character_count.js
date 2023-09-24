function character_count(word) {
  let small = word.toLowerCase();
  let sp = small.split("");
  let sortSp = sp.sort();

  let countChar = {};

  sortSp.forEach((element) => {
    countChar[element] = (countChar[element] || 0) + 1;
  });

  let res = "";

  for (let element in countChar) {
    res += element + countChar[element];
  }

  return res;
}

console.log(character_count("aabbbcccc"));
