const getAllProducts = async (req,res)=>{
    res.status(200).json({
        msg : "i am getallproducts"
    })
}

const getAllProductsTesting = async (req,res)=>{
    res.status(200).json({
        msg : "i am getallproductstesting12"
    })
};

module.exports = {getAllProducts , getAllProductsTesting}