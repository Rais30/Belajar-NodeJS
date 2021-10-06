exports.createUsers = (req, res, next) => {
  res.json(user1[1]);
  next();
};

exports.getAllUsers =(req, res, next) => {
    res.json({
        message : 'Get ALl Users Succes',
        user1
    });
    next();
};

let user1 = [
    {
        message : 'Succes',
        data : {
            ID: 1,
            nama: "Rais Aryaguna",
            nomer: "081234567890",
            Alamat: "Palsu di cari kagak ketemu",
        }
    },
    {
        message : 'Succes',
        data : {
            ID: 2,
            nama: "Aryaguna",
            nomer: "081234567890",
            Alamat: "Kasihan deh ",
        }
    },
];
