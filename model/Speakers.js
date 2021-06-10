import mongoose from 'mongoose';

const SpeakersSchema = new mongoose.Schema({
    isNewProduct: { type: Boolean, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    features: { type: String, required: true },
    inTheBox: { type: Array, required: true }
});

export default mongoose.models.Speakers || mongoose.model('Speakers', SpeakersSchema);
