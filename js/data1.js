const fs = require("fs")

const addPerson = (id, fname, lname, age, city) => {
    
    const allData = loadData()

    const duplicateData = allData.filter((obj)=>{
        return obj.id === id
    })

    if(duplicateData.length == 0){
        allData.push({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
        })
        saveAllData(allData)
    }else{
        console.error("This id is already exist")
    }
    
}

const loadData = () => {
    try{
        const dataJson = fs.readFileSync("data1.json").toString()
        return JSON.parse(dataJson)
    }
    catch{
        return []
    }
}

const saveAllData = (allData) => {
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data1.json", allDataJson)
}

const deleteData = (id) => {
    const allData = loadData()
    const dataToKeep = allData.filter((obj)=>{
        return obj.id !== id
    })
    saveAllData(dataToKeep)
    // console.log(dataToKeep)
    console.log("you have deleted an item")
}

const readData = (id)=>{
    const allData = loadData()
    const itemNeeded = allData.find((obj)=>{
        return obj.id == id
    })
    if(itemNeeded){
        console.log(itemNeeded)
    }else{
        console.log("there is no data with such id")
    }
}

const listData = ()=>{
    const allData = loadData()
    allData.forEach((obj)=>{
        console.log(obj.fname , obj.lname , obj.age)
    })
    
}

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}