import Employer from "../Model/Employe.js";

export const DeleteEmploye = async (req, res) => {
  try {
    const { employeId } = req.params;

    console.log("Employe ID received:", employeId);

    const employe = await Employer.findById(employeId);

    console.log("Employe ID received:", employe);
    if (!employe) {
      return res.status(404).json({ errorMsg: "Employe not found" });
    }

    await employe.deleteOne();
    res.status(200).json({ msg: "Employe deleted successfully", employe });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      errorMsg: "Something went wrong while delete employedata.",
    });
  }
};

export default DeleteEmploye;
