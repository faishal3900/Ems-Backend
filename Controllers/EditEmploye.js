// import Employer from "../Model/Employe.js";

// export const EditEmploye = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = req.body; // get the actual updated fields

//     const employe = await Employer.findById(id);
//     if (!employe) {
//       return res.status(404).json({ message: "Employee not found." });
//     }

//     const updatedEmploye = await Employer.findByIdAndUpdate(
//       id,
//       updatedData,
//       { new: true } // return the updated document
//     );

//     res.status(200).json({
//       message: "Employee updated successfully",
//       employee: updatedEmploye,
//     });
//   } catch (error) {
//     console.error("Error updating employee:", error);
//     res.status(500).json({
//       message:
//         "An error occurred while updating the employee. Please try again later.",
//     });
//   }
// };

// export default EditEmploye;



// controllers/editEmploye.js


import Employer from "../Model/Employe.js";

export const EditEmploye = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    console.log("Edit request for:", id);
    console.log("Data to update:", updatedData);

    const employe = await Employer.findById(id);
    if (!employe) {
      return res.status(404).json({ message: "Employee not found." });
    }

    const updatedEmploye = await Employer.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmploye,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({
      message: "Error updating employee. Try again later.",
    });
  }
};
export default EditEmploye;