module.exports.groupAdultsByAgeRange = function(array) {
    const result = {
        "20 and younger": array.filter(obj => obj.age >= 18 && obj.age <= 20),
        "21-30": array.filter(obj => obj.age > 20 && obj.age <= 30),
        "31-40": array.filter(obj => obj.age > 30 && obj.age <= 40),
        "41-50": array.filter(obj => obj.age > 40 && obj.age <= 50),
        "51 and older": array.filter(obj => obj.age >= 51)
    }

    // this line works to remove any empty arrays but it doesn't use reduce.
    //Object.keys(result).filter(key => result[key].length < 1 ? delete result[key] : result[key])


    // const keys = Object.keys(result)

    // console.log(Object.entries(result))



    result.reduce((fullObj, key) =>
                typeof result[k] === "object"
                ? { ...fullObj, [key]: removeEmpty(obj[key]) } // Recurse.
                : { ...fullObj, [key]: obj[key] }, // Copy value.
    )
    //values = Object.values(result)

    //Object.values(result).filter( key => key.length < 1 ? delete key : key)
    //.reduce( (a,b) => b.length > 1 ? a + b : b)
    

    return result
}