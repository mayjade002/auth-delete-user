const User = require('../models/userModel');

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        await user.destroy();
        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
