import mongoose from 'mongoose';

const EarphonesSchema = new mongoose.Schema({
    isNewProduct: { type: Boolean, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    features: { type: String, required: true },
    inTheBox: { type: Array, required: true }
});

export default mongoose.models.Earphones || mongoose.model('Earphones', EarphonesSchema);
