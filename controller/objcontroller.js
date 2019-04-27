let data = require('../models/objmodels');


exports.create= function (req, res) {
    let defaulttitle = {
    title: '',
    complete: true,
}

    let {title}= Object.assign({}, defaulttitle, req.body) //merge vs req.body.title và default.title
    let {complete}= defaulttitle;

    if(!title) {
        return res.send({
            success:false,
            error: 'Title is emty'
        })
    }
    let post= new data({title,complete,});
    post.save()
        .then((doc)=> {
        return res.send(doc) })
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
                error:err.message

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
                error:err.message

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
            error: 'Title is emty'
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
                error:err.message

            })
        })

};




