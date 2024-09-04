import contactModel from "../models/contactModel.js";

export const createContactController = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).send({
                success: false,
                message: "All fields are required",
            });
        }

        const contact = new contactModel({ name, email, phone, message });
        await contact.save();

        res.status(201).send({
            success: true,
            message: "Information saved successfully",
            contact,
        });
    } catch (error) {
        console.error("Error saving contact information:", error);
        res.status(500).send({
            success: false,
            message: "Error saving contact information",
            error,
        });
    }
};
