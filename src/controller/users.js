exports.createUsers = (req, res, next) => {
  const id = req.body.id;
  const nama = req.body.nama;
  const nomer = req.body.nomer;
  const alamat = req.body.alamat;

  res.json({
    id: id,
    nama: nama,
    nomer: nomer,
    alamat: alamat,
  });
  next();
};

exports.getAllUsers = (req, res, next) => {
  res.json({
    message: "Get ALl Users Succes",
    user1,
  });
  next();
};

let user1 = [
  {
    message: "Get ALl Users Succes",
  },
  {
    message: "Succes",
    data: {
      ID: 1,
      nama: "Rais Aryaguna",
      nomer: "081234567890",
      Alamat: "Palsu di cari kagak ketemu",
    },
  },
  {
    message: "Succes",
    data: {
      ID: 2,
      nama: "Aryaguna",
      nomer: "081234567890",
      Alamat: "Kasihan deh ",
    },
  },
];
