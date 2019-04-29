let data = require('../models/objmodels');


exports.create= async (req, res) => {
    let defaulttitle = {
    title: '',
}

    let {title}= Object.assign({}, defaulttitle, req.body) //merge vs req.body.title và default.title

    if(!title) {
        return res.send({
            success:false,
            message: 'Title is emty'
        })
    }
    let post= new data({title: 'Hello'});
    post.save()
        .then((doc)=> {
        return res.send({
            data: doc.toJSON(),
            success: true
        }) 
    })
    .catch((err) => {
        return res.send ( {
            success:false,
            error:err.message
        })
    })
}
exports.getbyID=async (req, res)=> {
    let {id}= req.params;
    await data.findOne({_id: id})
        .then((doc)=>{
          
            
            res.send({
                success: true,
                data: doc
            })
            })
        .catch((err)=> {
            res.send({
                success: false,
                message: 'Dont found'

            })
        })
}

exports.deleteById =async ( req, res) => {
    let {id}= req.params;
    await data.findOne({_id:id})
        .then(async (doc)=>{
            await data.deleteOne({_id:id})
            res.send({
                success: true,
                data: true
            })
        })
        .catch((err)=> {
            res.send({
                success: false,
                message: 'Dont found'

            })
        })

};
exports.updateById =async ( req, res) => {
    let {id}= req.params;
    let {title}= req.body;
    if(!title) {
        return res.send({
            success: false,
            message: 'Title is emty'
        })
    }
    await data.findOne({_id:id})
        .then(async (doc)=>{
            await data.updateOne({_id:id},
                {$set: {title}})
            res.send({
                success: true,
                data: true
            })
        })
        .catch((err)=> {
            res.send({
                success: false,
                message: err.message

            })
        })

};




