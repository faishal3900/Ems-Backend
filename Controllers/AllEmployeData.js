import Employer from "../Model/Employe.js";

export const AllEmployeData = async (req, res) => {
  try {
    const employes = await Employer.find();
    res.status(200).json({ employes });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      errorMsg: "Something went wrong while fetching employedata.",
    });
  }
};
export default AllEmployeData;
