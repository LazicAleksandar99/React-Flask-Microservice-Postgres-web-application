import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000',
    cloudinaryURL: 'https://api.cloudinary.com/v1_1/dfms5eutq/image/upload'
});
//CLOUDINARY_URL=cloudinary://319854841752268:HQa86nLhkmp2RIL9sLEaHp8GCEE@dfms5eutq