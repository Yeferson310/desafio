let inmobiliarias = require("../Inmobiliarias")

exports.list = (req, res) => {
    res.json(inmobiliarias)
}

exports.searchInmueble = (req, res) => {
    const id = Number(req.params.id)
    const result = inmobiliarias.find((inmobiliaria) => inmobiliaria.id === id)
    if (!result) {
        res.status(400).json({
            error: 'no se encontraron registros con id: ${id}'
        })
    }
    res.json(result)
}

exports.addInmueble = (req, res) => {
    const nuevoInmueble = req.body;
    const validarId = inmobiliarias.find(
        (inmobiliaria) => inmobiliaria.id === nuevoInmueble.id
    );

    if (validarId) {
        res.status(400).json({
            error: 'el id esta siendo utilizado'
        });

    }
    inmobiliarias.push(nuevoInmueble)
    res.status(200).json(inmobiliarias)
};
