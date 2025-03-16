const fs = require('fs')
const path = require('path')

const dbPath = path.join(__dirname, "database")

//will check whether db is created or not
if(!dbPath) {
    fs.mkdirSync(dbPath)
}

const getCollectionPath = (collection) => path.join(dbPath, `${collection}.json`)

console.log(getCollectionPath('users'))
//create
const add = (collection, data = []) => {
    const collectionPath = getCollectionPath(collection)
    const temp = JSON.parse(fs.readFileSync(collectionPath, "utf-8"))
    const newArr = [...temp, ...data]
    fs.writeFileSync(collectionPath, JSON.stringify(newArr,null,2))
    console.log("temp", temp)
}

console.log(add("users", [
    {"test": "test"}
]))

//read

//update

//delete