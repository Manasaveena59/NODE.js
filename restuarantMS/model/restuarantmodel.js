var mongoose = require("mongoose");
const restuarantSchema = mongoose.Schema({ 
    name : String, 
    city_name : String,
    city:Number, 
    area:Number, 
    locality : String,  
    cost: Number, 
})
const restuarant = mongoose.model("restuarants", restuarantSchema);
module.exports = restuarant;