const mongoose = require('mongoose');

let pengabdian = mongoose.model('Pengabdian');

const pengabdianShow = (req, res) => {
    pengabdian.find({},
        function (err, result) {
            if (err) {
                res.status(500)
                    .json({
                        'status': 'failed'
                    });
            } else {
                res.status(200)
                    .json({
                        'status': 'success',
                        'data': result
                    });
            }
        }
    )
};

const pengabdianCreate = (req, res) => {
    pengabdian.create({
        judul: req.body.judul,
        tempat: req.body.tempat,
        deskripsi: req.body.deskripsi,
        tgl_pengabdian: req.body.tgl_pengabdian,
        dosen: req.body.dosen,
        mahasiswa: req.body.mahasiswa
    }, (err, result) => {
        if (err) {
            res.status(400)
                .json(err);
        } else {
            res.status(201).
            json(result);
        }
    })
};

const pengabdianReadOne = (req, res) => {
    pengabdian.
    findById(req.params.id).
    exec((err, pnb) => {
        res.
        status(200).
        json(pnb);
    });
};

const pengabdianUpdateOne = (req, res) => {
    pengabdian.
    findById(req.params.id).
    exec((err, pnb) => {
        pnb.judul = req.body.judul;
        pnb.tempat = req.body.tempat;;
        pnb.deskripsi = req.body.deskripsi;;
        pnb.tgl_pengabdian = req.body.tgl_pengabdian;;
        pnb.dosen = req.body.dosen;;
        pnb.mahasiswa = req.body.mahasiswa;
        pnb.save((err, result) => {
            if (err) {
                res.
                status(404).
                json(result);
            } else {
                res.
                status(200).
                json(result);
            }
        });
    });
};

const pengabdianDeleteOne = (req, res) => {
    pengabdian.
    findById(req.params.id)
        .exec((err, pnb) => {
            pnb.remove((err, result) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res.
                    status(200).
                    json({
                        'status': 'success',
                        'message': 'Data Telah Terhapus'
                    });
                }
            });
        });
}

module.exports = {
    pengabdianShow,
    pengabdianCreate,
    pengabdianReadOne,
    pengabdianUpdateOne,
    pengabdianDeleteOne
}