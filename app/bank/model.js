const mongoose = require("mongoose");

let bankSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama Pemilik Harus Diisi"],
  },
  bankName: {
    type: String,
    require: [true, "Nama Bank Harus Diisi"],
  },
  noRekening: {
    type: String,
    require: [true, "Nomor rekening bank harus diisi"],
  },
},{ timestamps: true });

module.exports = mongoose.model("Bank", bankSchema);
