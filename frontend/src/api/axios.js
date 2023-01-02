import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000',
    cloudinaryURL: 'https://api.cloudinary.com/v1_1/dfms5eutq/image/upload'
});