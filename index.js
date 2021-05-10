module.exports = {
  addDashes: (string) => {
    console.log("Warning only spaces are allowed here"


    const newString = string.replace(/\s+/g, '-').toLowerCase();

    return newString;

  }

}
