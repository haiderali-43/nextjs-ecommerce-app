import Vendor from '../models/vendorModel.js';

//create vendor
export const createVendor = async (req, res) => {
    try {
        const { name, email, password, profileImage, address, status } = req.body;
        if (!name || !email || !password || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const alreadyExists = await Vendor.findOne({ email });
        if (alreadyExists) {
            return res.status(400).json({ message: "Vendor already exists" });
        }

        const imageUrl = req.file.path;

        const newVendor = new Vendor({
            name,
            email,
            profileImage: imageUrl,
            address,
            status
        });
        await newVendor.save();
        res.status(201).json({ message: "Vendor created successfully" });


    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });

    }
};

//get all vendors
export const getVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json({ vendors });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}

//get vendor by id
export const getVendorbyid = async (req, res) => {
    try {
        const { id } = req.params;
        const vendor = await Vendor.findById(id);
        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        res.status(200).json({ vendor });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}
//update vendor
export const updateVendor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, profileImage, address, status } = req.body;
        const vendor = await Vendor.findById(id);
        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        vendor.name = name || vendor.name;
        vendor.email = email || vendor.email;
        vendor.profileImage = profileImage || vendor.profileImage;
        vendor.address = address || vendor.address;
        vendor.status = status || vendor.status;
        await vendor.save();
        res.status(200).json({ message: "Vendor updated successfully", vendor });


    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}

//delete vendor
export const deleteVendor = async (req, res) => {
    try {
        const { id } = req.params;
        const vendor = await Vendor.findById(id);
        if (!vendor) {
            return res.status(404).json({ message: "Vendor not found" });
        }
        await vendor.delete();
        res.status(200).json({ message: "Vendor deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}