const mongoose=require("mongoose")

async function  connestDB(){
    try {
        await mongoose.connect(process.env.MONGOdb_URI)
        
    } catch (err) {
        console.log(err)
    }

}

module.exports = connestDB;