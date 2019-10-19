const grouping = ([
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

    // A function that assigns an age category, given an age.

    const ageCategories = ({ age }) => {
        if (age < 18) return 'child';
        if (age >= 18 && age <= 20) return '20 and younger';
        if (age > 20 && age <= 30) return '21-30';
        if (age > 30 && age <= 40) return '31-40';
        if (age > 40 && age <= 50) return '41-50';
        return '51 and older';
    }

    // callback function to use in reduce. First categorises the person (the current element),
    // then assigns that person to one of the age groups.

    const callback = function(groups, person) {
        const ageCat = ageCategories(person);
        return {
            ...groups, [ageCat]: [...groups[ageCat], person]
        }
    }

    const ageGroups = {
        'child' : [],
        '20 and younger': [],
        '21-30': [],
        '31-40': [],
        '41-50': [],
        '51 and older': []
    }

    const groupAdultsByAgeRange = function(array) {
        const allCategories = array.reduce(callback,ageGroups)
            delete allCategories.child;
            return allCategories
        }

console.log(groupAdultsByAgeRange(grouping))