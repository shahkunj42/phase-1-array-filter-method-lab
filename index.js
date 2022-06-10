function findMatching(array, name){
    let newArray = array.filter(function(string){
        return string.toUpperCase() == name.toUpperCase();
    });
    return newArray
};

// function findMatching(drivers, matchedDriver) {
//     return (drivers.filter(match => {
//        return match.toLowerCase() === matchedDriver.toLowerCase()
//     }))
// }

let fuzzyMatch = (array, name) => {
    let newArray = array.filter(function(string){
        return string.slice(0,2) == name;
    });
    return newArray
}
const matchName = function(array, string){
    let sameName = array.filter(function(person) {
         return person.name == string
    })
    return sameName
}
