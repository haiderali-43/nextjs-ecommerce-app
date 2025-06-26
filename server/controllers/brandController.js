import Brand from '../models/brandModel.js';


export const createBrand = async (req, res) => {
    try {
        const { brandName } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Image upload is required." });
        }

        const imageUrl = req.file.path;

        const brand = new Brand({
            brandName,
            brandLogo: imageUrl
        });

        await brand.save();

        res.status(200).json(brand);

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};


export const getBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};


export const updateBrand = async (req, res) => {
    try {
        const { brandName } = req.body;
        
        // Check if an image file is uploaded
        let updateData = { brandName };
        if (req.file) {
            updateData.brandLogo = req.file.path; // Only update the image if a new file is uploaded
        }

        // Find and update the brand, return the updated document
        const brand = await Brand.findOneAndUpdate(
            { _id: req.params.id },
            updateData,
            { new: true, runValidators: true } // Return updated doc and validate input
        );

        if (!brand) {
            return res.status(404).json({ msg: "Brand not found" });
        }

        res.status(200).json(brand);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: error.message });
    }
};

export const deleteBrand = async (req, res) => {
    try {
      
        const deleteBrand = await Brand.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ deleteBrand, msg: "Brand deleted successfully." });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};