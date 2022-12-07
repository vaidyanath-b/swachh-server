const mongoose = require('mongoose')

wastetype = mongoose.Schema({
    iscollected: { type: Boolean, default: false },
    quantity: String,
    value: String
})

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
            ewaste: wastetype,
            plastic: wastetype,
            foodwaste: wastetype,
            other: wastetype
        }
    }

}

)
module.exports = mongoose.model("collection-reports", CollectionReport);
