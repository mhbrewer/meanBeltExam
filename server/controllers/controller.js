const Pet = require("../models/models.js");


module.exports = {
    allPets: (req, res) => {
        Pet.find({})
        .sort('type')
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    newPet: (req, res) => {
        // Pet.pre("save",function(next, done) {
        //     var self = this;
        //     Pet.findOne({name : self.name},function(err, results) {
        //         if(err) {
        //             done(err);
        //         } else if(results) { //there was a result found, so the email address exists
        //             self.invalidate("name","name must be unique");
        //             done(new Error("name must be unique"));
        //         } else {
        //             done();
        //         }
        //     });
        //     next();
        // });

        // Pet.create(req.body)
        //         .then(data => res.json(data))
        //         .catch(err => res.json(err))
        Pet.findOne({name: req.body.name}, function(err, results) {
            if(err) {
                console.log(err);
                res.json(err);
            } else if (results) {
                err = {};
                err.custErrors = { message: "Name must be unique." };
                console.log(err);
                res.json(err);
            } else {
                Pet.create(req.body)
                .then(data => res.json(data))
                .catch(err => res.json(err))
            }
        })
    },
    deletePet: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    updatePet: (req, res) => {
        console.log("IN UPDATING CONTROLLER")
        Pet.find({name: req.body.name}, function(err, results) {
            console.log("RESULTSSSSSSSS", results);
            if(err) {
                console.log(err);
                res.json(err);
            } else if (results.length && results[0]._id != req.body._id) {
                err = {};
                err.custErrors = { message: "Name must be unique." };
                console.log(err);
                res.json(err);
            } else {
                Pet.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {runValidators: true})
                .then(data => res.json(data))
                .catch(err => res.json(err))
            }
        })
    },
    viewPet: (req, res) => {
        Pet.findById({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
    // addQuote: (req, res) => {
    //     Author.findByIdAndUpdate({_id: req.params.authorId}, {$push: {quotes: [req.body]}}, {runValidators: true})
    //     .then(data => res.json(data))
    //     .catch(err => res.json(err))
    // },
    // deleteQuote: (req, res) => {
    //     Author.findByIdAndUpdate({_id: req.params.authorId}, {$pull: {quotes: req.body}})
    //     .then(data => res.json(data))
    //     .catch(err => res.json(err))
    // },
    // updateQuote: (req, res) => {
    //     Author.findOneAndUpdate({_id: req.params.authorId, "quotes._id": req.body._id},
    //         { $set: {"quotes.$.content": req.body.content, "quotes.$.votes":req.body.votes}},
    //         {runValidators: true})
    //     .then(author => console.log("success")||res.json(author))
    //     .catch(err => console.log("success")||res.json(err))
    // },
}