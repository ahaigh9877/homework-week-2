const grouping = groupAdultsByAgeRange([
    { name: "pete", age: 10 },
    { name: "dove", age: 17 },
    { name: "dave", age: 18 },
    { name: "hall", age: 19 },
    { name: "donn", age: 20 },
    { name: "trey", age: 21 },
    { name: "hann", age: 29 },
    { name: "chew", age: 30 },
    { name: "cloe", age: 31 },
    { name: "dart", age: 39 },
    { name: "this", age: 40 },
    { name: "dame", age: 41 },
    { name: "henk", age: 49 },
    { name: "anna", age: 50 },
    { name: "olga", age: 51 },
    { name: "bert", age: 52 },
    { name: "oldd", age: 120 },
  ])

  const categories = {
    "20 and younger": [],
    "21-30": [],
    "31-40": [],
    "41-50": [],
    "51 and older": []
  }

  // We have an array of objects that we want to turn into an object of arrays.

  // do we want "categories" to be the accumulator?

  // write the callback function outside?


  function groupAdultsByAgeRange(people, categories) {
      return people.reduce( (acc, obj) => {

      },
      categories)
  }