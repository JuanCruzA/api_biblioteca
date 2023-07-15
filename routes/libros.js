const express = require('express');
const { findByIdAndUpdate, findByIdAndDelete } = require('../models/Libro');
const router = express.Router();

const Libro = require('../models/Libro');

router.get('/', async (req, res) => {
    try {
    const libros = await Libro.find();
    res.json(libros);
    } catch (error) {
        res.status(500).json({ error: 'libro no encontrado' });
    }

});

//crear un libro
router.post('/', async (req, res) => {
    try {
        const libroNuevo = new Libro(req.body);
        await libroNuevo.save();
        res.json(libroNuevo);
    } catch (error) {
        res.status(500).json({ error: "no se pudo crear libro" })
    }
});

//actualizar libro
router.put('/:id', async (req, res) => {
    try {
        const Libro = await findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
     res.json(Libro);
    } catch (error) {
        res.status(500).json({ error: "error al actualizar el Libro"})
    }
});

//para eliminar un libro
router.delete('/:id', async (req, res) => {
    try {
         await Libro.findByIdAndDelete(req.params.id);
         res.json({ message: 'libro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: "error al eliminar el libro" });
    }
});

module.exports = router;