const mongoose = require('mongoose');

let penelitian = mongoose.model('Penelitian');

const penelitianShow = (req, res) => {
    penelitian.find({},
        function (err, result) {
            if (err) {
                res.status(500)
                    .json({
                        'status': 'failed'
                    });
            } else {
                res.status(200)
                    .json(result)
            }
        }
    )
};

const penelitianCreate = (req, res) => {
    penelitian.create({
        judul: req.body.judul,
        deskripsi: req.body.deskripsi,
        tgl_publikasi: req.body.tgl_publikasi,
        jurnal_publikasi: req.body.jurnal_publikasi,
        dosen_peneliti: req.body.dosen_peneliti
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

const penelitianReadOne = (req, res) => {
    penelitian.
    findById(req.params.id).
    exec((err, pnl) => {
        res.
        status(200).
        json(pnl);
    });
};

const penelitianUpdateOne = (req, res) => {
    penelitian.
    findById(req.params.id).
    exec((err, pnl) => {
        pnl.judul = req.body.judul;
        pnl.deskripsi = req.body.deskripsi;
        pnl.tgl_publikasi = req.body.tgl_publikasi;
        pnl.jurnal_publikasi = req.body.jurnal_publikasi;
        pnl.dosen_peneliti = req.body.dosen_peneliti;
        pnl.save((err, result) => {
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

const penelitianDeleteOne = (req, res) => {
    penelitian.
    findById(req.params.id)
        .exec((err, pnl) => {
            pnl.remove((err, result) => {
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
    penelitianShow,
    penelitianCreate,
    penelitianReadOne,
    penelitianUpdateOne,
    penelitianDeleteOne
}