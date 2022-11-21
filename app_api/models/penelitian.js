const mongoose = require('mongoose');

const penelitianSchema = new mongoose.Schema({
    judul : String,
    deskripsi : String,
    tgl_publikasi : Date,
    jurnal_publikasi : String,
    dosen_peneliti : [String]
});

mongoose.model('Penelitian', penelitianSchema, 'penelitian');
