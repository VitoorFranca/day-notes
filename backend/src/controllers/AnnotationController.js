const Annotations = require('../models/AnnotationData');

module.exports = {

        //  Read Annottations
    async read(req, res) {
        try{
            const annotationList = await Annotations.find();

            return res.json({
                success: true,
                annotationList
            });
        }catch(err){
            res.json({
                success: false,
                error: err
            });
        };
    },

        //  Create Annotation
    async create(req, res) {
        const { title, notes, priority } = req.body;

        if(!notes || !title) {
            return res.status(400).json({
                success: false,
                error: 'Is required a title/notes' });
        };

        try{
            const anotationCreated = await Annotations.create({
                success: true,
                title,
                notes,
                priority
            });

            return res.json(anotationCreated);
        }catch(err){
            res.json({
                success: false,
                error: err
            });
        };
    },

        //  Delete Annotation
    async delete(req, res){
        const { id } = req.params;

        if(!id){
            return res.status(400).json({
                success: false,
                error: 'is required a id'
            });
        };
        
        try{
            const anotationDeleted = await Annotations.findOneAndDeleteOne({
                _id: id
            });

            if(anotationDeleted){
                return res.json({
                    success: true,
                    anotationDeleted
                });
            };
        }catch(err){
            return res.json({
                success: false,
                error: err
            });
        };
    }

};