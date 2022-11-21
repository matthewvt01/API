const mongoose = require('mongoose');

const pengabdianSchema = new mongoose.Schema({
    judul : String,
    tempat : String,
    deskripsi : String,
    tgl_pengabdian : Date,
    dosen : [String],
    mahasiswa : [String]
});

mongoose.model('Pengabdian', pengabdianSchema, 'pengabdian');