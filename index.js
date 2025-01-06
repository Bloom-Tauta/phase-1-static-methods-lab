class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(str) {
    const exclusions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    return str
      .split(" ")
      .map((word, index) => {
        const lowerWord = word.toLowerCase();
        // Always capitalize the first word in the sentence
        if (index === 0 || !exclusions.includes(lowerWord)) {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        }
        return lowerWord;
      })
      .join(" ");
  }
}


let str = 'a tale of two cities'
console.log(Formatter.capitalize(str))