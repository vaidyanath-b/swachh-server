const mongoose = require('mongoose')

const CollectionReport = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    collectorName: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        requried: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    wastedata: {
        typeofwaste: {
            ewaste: {
                iscollected: Boolean,
                quantity: String,
                value: String
            },
            plastic: {
                iscollected: Boolean,
                quantity: String,
                value: String,
            },
            foodwaste: {
                iscollected: Boolean,
                quantity: String,
                value: String
            },
            other: {
                iscollected: Boolean,
                quantity: String,
                value: String
            }
        }
    }

}

)
module.exports = mongoose.model("collection-reports", CollectionReport);
