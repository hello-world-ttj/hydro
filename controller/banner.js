const response = require("../helpers/response/response");
const cloudinary = require("cloudinary").v2;

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const banner_controller = async (req, res) => { 
    try {
        const folder = "banner"; 
        cloudinary.api.resources(
        {
            type: "upload",
            prefix: `${folder}/`
        },
        (error, result) => {
            if (error) {
            console.error("Error retrieving images:", error);
            } else {
                return response(res, 200, "User Banner data", result.resources);
            }
        }
        );
    } catch (error) {
        return response(res, 500, "Something Went Wrong " + error, null);
    }
}

module.exports = banner_controller