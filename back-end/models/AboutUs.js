const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
  {
    bio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const About = mongoose.model('About', aboutSchema)

// export the model so other modules can import it
module.exports = {
  About,
}
