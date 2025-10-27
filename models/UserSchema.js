const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    name: { 
        type: String, 
        required: true, 
        trim: true 
        },
    email: {
        type: String,
        required: true,
        unique: true,        
        lowercase: true,      
    },
    age: {
        type: Number,
        min: 18,              
        max: 120             
    },
    active: {
        type: Boolean,
        default: true       
    },
    roles: {
        type: [String],      
        enum: ['usuario', 'editor', 'admin'], 
        default: ['usuario']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now 
    }
},{
  timestamps: true 
}); 

const modelProject = mongoose.model('User', projectSchema);
module.exports = modelProject;