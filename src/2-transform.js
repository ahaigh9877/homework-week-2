module.exports.groupAdultsByAgeRange = function(array) {
    
    const result = {
        "20 and younger": array.filter(obj => obj.age >= 18 && obj.age <= 20),
        "21-30": array.filter(obj => obj.age > 20 && obj.age <= 30),
        "31-40": array.filter(obj => obj.age > 30 && obj.age <= 40),
        "41-50": array.filter(obj => obj.age > 40 && obj.age <= 50),
        "51 and older": array.filter(obj => obj.age >= 51)
    }

    Object.keys(result).filter(key => result[key].length < 1 ? delete result[key] : result[key])

    return result
}
