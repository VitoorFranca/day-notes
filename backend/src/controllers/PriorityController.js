const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(req, res){
        const priority = req.query;

        const priorityNotes = await Annotations.find(priority);

        return res.json(priorityNotes);
    },

    async update(req, res){
        const { id } = req.params;

        try{
            const annotation = await Annotations.findOne({
                _id: id
            });
    
            annotation.priority = !annotation.priority;
    
            await annotation.save();
    
            return res.json({
                success: true,
                annotation
            });
        }catch(err){
            return res.json({
                success: false,
                error: err
            });
        };

    }

};