import hotelModel from '../models/hotel.models.js'

export const createHotel = async (req, res) => {
    const newHotel = new hotelModel(req.body);
    try {
     const savedHotel = await newHotel.save()
     res.status(200).json("Saved hotel");
    } catch (error) {
     console.log(error);
     res.status(500).json({ message: "Error on creating hotel"});
    }
}