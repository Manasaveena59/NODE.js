var express = require("express");
var router = express.Router();
var restuarantSchema = require("../model/restuarantmodel");
router.post('/addProduct', (req, res) => {
    var restuarantToAdd = new restuarantSchema({
    name : req.body.name, 
    city_name : req.body. city_name,
    city: req.body.city, 
    area: req.body.area, 
    locality : req.body.locality,  
    cost: req.body.cost, 
    address:req.body.address,
    })
    restuarantToAdd.save((err, response) => {
        if(err)
        res.send("Exception ocuured");
        else
        res.send({status:200, message:"restuarant added successfully", restuarant:response})
    })
});
/*get all restuarants using MongoDB */
router.get('/getAllRestuarants', (req, res) => {
    restuarantSchema.find((err, response) => {
        if(err)
        res.send("Exception occured");
        else
        res.send (response);
    })
});
/* get restuarant by location */
router.get('/getrestuarantByLocality', (req, res) => {
    restuarantSchema.find({"locality": req.query.locality}, (err, response) => {
        if (err)
        res.send("Exception ocuured !!");
        else
        res.send(response);
    });
});
/* get restuarnts by city_Name */
router.get('/getrestuarantBycity_name', (req, res) => {
    restuarantSchema.find({"city_name": req.query.city_name}, (err, response) => {
        if (err)
        res.send("Exception ocuured !!");
        else
        res.send(response);
    });
});

module.exports = router;