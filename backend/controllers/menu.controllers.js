const Menu = require("../models/Menu");
const menuControllers = {};
const { ObjectId } = require('mongodb');


menuControllers.showMenu = async (req, res) => {
  const menus = await Menu.find();
  res.status(200).json(menus);
};

menuControllers.create = async (req, res) => {

  if(req.decoded.role === 1){
    const {name, price, description, type} = req.body
    const menu = new Menu({name, price, description, type})
    await menu.save()
    
  
    res.status(201).json({message: "un nuevo menu ha sido creado", menu, user: req.decoded}) 
    
  } else {
    res.status(401).json({message: "Tu no puedes crear un menu"})
  }
  
} 
menuControllers.delete = async (req, res) => {
  if(req.decoded.role === 1){
    try {
      const {id} = req.params
      console.log(id)
      const response = await Menu.findByIdAndDelete(id)
      if (!response) {
        res.status(404).json({msg: 'No existe el menu a eliminar'}) 
        return
      } else {
        res.status(201).json({msg: 'Eliminado correctamente'}) 
      }
    } catch (error) {
      res.status(500).json({msg: 'No se pudo eliminar'}) 
    }
  } else {
    res.status(401).json({msg: 'No fue eliminado por permisos'})
  }
} 

menuControllers.showById = (req, res) => {
  const {id} = req.params;
  Menu.findById(id, function(err, menu) {
    console.log(menu);
    res.status(201).json(menu) 
  })
}

menuControllers.edit = (req, res) => {
  const menu = req.body;
  console.log(menu)
  console.log(menu._id)
  Menu.findOneAndUpdate({_id: menu._id}, { $set: menu }, { new: true }, function(err, doc) {
    console.log(doc);
    res.status(201).json(doc) 
  })
}
module.exports = menuControllers;
