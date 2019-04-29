let data = require('../models/objmodels');


exports.create= function (req, res) {
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
    let post= new data({title,});
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
exports.getbyID= (req, res)=> {
    let {id}= req.params;
    data.findById(id)
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

exports.deleteById = ( req, res) => {
    let {id}= req.params;
   data.findOneAndRemove({_id:id})
        .then((doc)=>{
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
exports.updateById = ( req, res) => {
    let {id}= req.params;
    let {title}= req.body;
    console.log(title);
    if(!title) {
        return res.send({
            success: false,
            message: 'Title is emty'
        })
    }
    data.findOneAndUpdate({_id:id}, {title})
        .then((doc)=>{

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




