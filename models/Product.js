const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    abbreviation:{
        type: String,
        required: true,
        trim: true
    }
  },{
      versionKey: false,
  })
    
module.exports = model("Product", ProductSchema);

