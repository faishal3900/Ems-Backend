import Employer from "../Model/Employe.js";


export const editProfile = async (req, res) => {
  const employeId = req.id;
  const { username, email, bio, gender } = req.body;

  const updateEmploye = {
    username,
    email,
    bio,
    gender,
  };

  try {
    const updatedUser = await Employer.findByIdAndUpdate(employeId, updateEmploye, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });

  } catch (error) {
    console.error("Edit profile error:", error);
    res.status(500).json({ error: "Failed to update user profile" });
  }
};
