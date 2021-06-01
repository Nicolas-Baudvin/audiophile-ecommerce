import mongoose from 'mongoose';

const SpeakersSchema = new mongoose.Schema({
    isNewProduct: { type: Boolean, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true }
});

export default mongoose.models.Speakers || mongoose.model('Speakers', SpeakersSchema);
