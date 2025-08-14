import employe from "../Model/Employe.js";

export const AddEmploye = async (req, res) => {
  const { name, Position, email, phone, address, salary } = req.body;

  if (!name || !Position || !email || !salary) {
    return res.status(422).json({
      errorMsg: "Please fill all the details",
    });
  }
  try {
    const add = new employe({
      name,
      Position,
      email,
      phone,
      address,
      salary,
    });
    add.save();
    res.status(201).json({
      msg: "Post created successfully!!",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      errorMsg: "Something went wrong while creating the post.",
    });
  }
};

export default AddEmploye;
