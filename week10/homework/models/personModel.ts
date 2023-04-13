import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A person must have a name"],
        maxLength: [40, "A person must have less or equal to 40 characters"],
        minLength: [4, "A person must have more or equal to 4 characters"]
    },
    age: Number,
    city: {
        type: String,
        enum: ["Bagsværd", "Herlev", "Lyngby"],
        message: "City must be Bagsværd, Herlev or Lyngby"
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    }
})

personSchema.pre(/^find/, function() {
    this.populate({
        path: "address",
        select: "-__v -createdAt",
    })
}
)

personSchema.pre(/^find/, function(next) {
    this.populate({
        path: "address"
    })
    next()
})

const PersonModel = mongoose.model("Person", personSchema)

export default PersonModel