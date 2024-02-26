const data1 = require("./data1")
const yargs = require("yargs")

yargs.command({
    command : "add",
    discribe : "adding data items",
    builder : {
        id : {
            describe : "adding persons' ids",
            demandOption : true,
            type : "number"
        },
        fname : {
            describe : "adding first name",
            demandOption : true,
            type : "string"
        },
        lname : {
            describe : "adding last name",
            demandOption : true,
            type : "string"
        },
        age : {
            describe : "adding age",
            demandOption : true,
            type : "number"
        },
        city : {
            describe : "adding city",
            demandOption : true,
            type : "string"
        },
    },
    handler : (x)=>{
        data1.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})

yargs.command({
    command : "delete",
    describe : "deleting data items",
    handler : (x) => {
        data1.deleteData(x.id)
    }
})

yargs.command({
    command : "read",
    describe : "reading data items",
    builder : {
        id : {
            describe : "this is id",
            demandOption : true,
            type : "number"
        }
    },
    handler : (x) => {
        data1.readData(x.id)
    }
})

yargs.command({
    command : "list",
    describe : "listing data items",
    handler : () => {
        data1.listData()
    }
})

yargs.parse()