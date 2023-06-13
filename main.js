const contacts = require ('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS

const allInsectus = contacts.filter( contact => contact.company === "INSECTUS")

// console.log(allInsectus)

//2. an array all of the contacts, with only the name property

const justNames = contacts.map( contact => contact.name)

// console.log(justNames)

//3. an array of all of the contacts over the age of 50

const over50 = contacts.filter( contact => contact.age > 50)

// console.log(over50)

//4. the first ten contacts when alphabetically ordered by name

const first10sorted = contacts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
    return 0;
    }
  }).slice(0,9);

// console.log(first10sorted)

//5. the oldest person's name

const geezerName = contacts.sort((a,b) => a.age - b.age).pop().name

    // console.log(geezerName)


//6. the contact id with the name Isabella Burke

const findBurke = contacts.find( contact => contact.name === "Isabella Burke" )

// console.log(findBurke)

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties

const splitNames = contacts.map( contact => {
    return {
        firstName: contact.name.split(' ')[0],
        lastName: contact.name.split(' ')[1]
    }
})

// console.log(splitNames)

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

const tooManyFriends = contacts.map(contact => {
    return {
        id: contact.id,
        age: contact.age,
        name: contact.name,
        company: contact.company,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        friends: contact.friends.map( friend => {   
            let friendObj = contacts.find( contact => contact.id === friend)

            let spreadObj = ({...friendObj})

            return spreadObj.name
        })
    }
})

// console.log(tooManyFriends)

//9. the average age of the contacts

const averageAge = contacts.reduce((accum, current) => {
    return accum + current.age / contacts.length
}, 0)

// console.log(averageAge)

//10. the median age of the contacts

const len = contacts.length / 2

const medianAge = contacts.sort((a,b) => a.age - b.age).slice(len, len + 1).pop().age

console.log(medianAge)


//trouble with sort
//why pop on last thing?