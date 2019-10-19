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



    const ageCategories = ({ age }) => {
        if (age >= 18 && age <= 20) return '20 and younger';
        if (age > 20 && age <= 30) return '21-30';
        if (age > 30 && age <= 40) return '31-40';
        if (age > 40 && age <= 50) return '41-50'
        return '51 and older';
    }

    //console.log(ageCategories)

    const groupAdultsByAgeRange = array =>
        array
            .reduce((groups, person) => {
                const age = ageCategories (person)
                //console.log("age",age)
                return {
                    ...groups,
                    [age]: [...groups[age], person]
                }
            }, {
                '20 and younger': [],
                '21-30': [],
                '31-40': [],
                '41-50': [],
                '51 and older': []
            })



console.log(groupAdultsByAgeRange(grouping))