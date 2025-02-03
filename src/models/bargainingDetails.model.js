import mongoose from 'mongoose'
import { BARGAIN_BEHAVIOUR } from '../constants.js';

const bargainingDetailsSchema = new mongoose.Schema(
  {
    productId: { 
        type: String,
        required: true 
    }, 
    behavior: { 
        type: String, 
        enum: BARGAIN_BEHAVIOUR, 
        required: true 
    },
    minPrice: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    isAvailable: {
        type: Boolean
    },
    isActive:{
        type:Boolean
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
  },
  { timestamps: true }
);

export const BargainingDetails = mongoose.model('BargainingDetails', bargainingDetailsSchema);
