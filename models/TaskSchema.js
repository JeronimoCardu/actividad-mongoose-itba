const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({ 
  title: { 
    type: String, 
    required: true, 
    trim: true 
  }, 
  description: String, 
  project: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project', 
    required: true 
  }, 
  assignedTo: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }, 
  status: { 
    type: String, 
    enum: ['todo', 'in-progress', 'review', 'completed'], 
    default: 'todo' 
  }, 
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'], 
    default: 'medium' 
  }, 
  dueDate: {type: Date}, 
  estimatedHours:{type: Number}, 
  actualHours: {type: Number}, 
  tags: [String], 
  dependencies: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Task' 
  }], 
  attachments: [{ 
    filename: {type: String}, 
    url: {type: String}, 
    uploadedAt: { 
      type: Date, 
      default: Date.now
    } 
  }] 
}, { 
  timestamps: true 
}); 

const modelTask = mongoose.model('Task', taskSchema);
module.exports = modelTask;
