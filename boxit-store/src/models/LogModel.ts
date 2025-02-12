import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    action: String,
    timestamp: { type: Date, default: Date.now },
    details: Object
});

export const Log = mongoose.model('Log', logSchema);