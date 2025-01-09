const PGList = require('../models/pglist-model');

exports.registerPG = async (req, res, next) => {
  try {
    const {
      ownerid,
      pg_name,
      description,
      details,
      location,
      email,
      mobile_no,
      nearby_details,
      room_rent,
      security_deposit,
      facilities,
    } = req.body;

    let images = [];
    if (req.files) {
      images = req.files.map((file) => file.path.replace(/\\/g, "/")); // Normalize file paths
    }

    // Create a new PG
    const newPG = await PGList.create({
      ownerid,
      pg_name,
      description,
      details,
      location,
      email,
      mobile_no,
      nearby_details,
      room_rent,
      security_deposit,
      facilities,
      images,
    });

    res.status(201).json({
      success: true,
      message: `PG registered successfully!`,
      pg: newPG,
    });
  } catch (error) {
    res.status(201).json(error)
  }
};


// Get all PGs
exports.getAllPGs = async (req, res) => {
  try {
    const pgs = await PGList.find();
    res.status(200).json({ pgs });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PGs', error });
  }
};

exports.getSinglepg = async(req,res) => {
  try{
    const {id} = req.params;
    const singlepg =await PGList.findById(id)
    console.log(singlepg);
    res.status(200).json({message: 'get single pg',singlepg});
  }catch(error){
    res.status(500).json({ message: 'Error fetching PGs', error });
  }
}

// Update a PG
exports.updatePG = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPG = await PGList.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPG) return res.status(404).json({ message: 'PG not found' });
    res.status(200).json({ message: 'PG updated successfully', updatedPG });
  } catch (error) {
    res.status(500).json({ message: 'Error updating PG', error });
  }
};

// Delete a PG
exports.deletePG = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPG = await PGList.findByIdAndDelete(id);
    if (!deletedPG) return res.status(404).json({ message: 'PG not found' });
    res.status(200).json({ message: 'PG deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting PG', error });
  }
};
