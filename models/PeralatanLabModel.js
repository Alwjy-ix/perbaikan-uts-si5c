const mongoose = require('mongoose');

const spesifikasiSchema = new mongoose.Schema({
  merek: String,
  tahun: String,
}, { _id: false });

const peralatanLabSchema = new mongoose.Schema({
  kodeAlatLab : { type: String, required: [true, 'kode wajib diisi'], unique: true, trim: true },
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  jumlah: { type: String, required: [true, 'jumlah wajib diisi'], trim: true },
  kondisi: { type: String, required: [true, 'kondisi wajib diisi'], trim: true },
  spesifikasi: spesifikasiSchema,
  laboratoriumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Laboratorium' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PeralatanLab', peralatanLabSchema);