/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: (req, res)=>{
      Articles.find({}).exec((err, articles)=>{
          if(err){
            res.send(100, {error: 'Database error'});
          }
          res.view('list', {articles: articles});
      });
  },
  add: (req, res)=>{
      res.view('add');
  },
  create: (req, res)=>{
    let title = req.body.title;
    let body = req.body.body;
    Articles.create({title:title, body:body}).exec(err=>{
        if(err){
            res.send(100, {error: 'Database Error'})
        }
        res.redirect('/articles/list')
    });
  },
  delete: (res, req) =>{
      Articles.destroy({id:req.params.id}).exec(err=>{
        if(err){
            res.send(100, {error: 'Database Error'})
        }
        res.redirect('/articles/list')
    });
    return false;
  },
  edit:(res,req) =>{
    Articles.findOne({id:req.params.id}).exec((err, articles)=>{
        if(err){
            res.send(100, {error: 'Database Error'})
        }
        res.view('edit', {article:article});
    });
  },
  update:(res,req) =>{
    let title = req.body.title;
    let body = req.body.body;
    Articles.update({id: req.params.id},{title:title, body:body}).exec(err=>{
        if(err){
            res.send(100, {error: 'Database Error'})
        }
        res.redirect('/articles/list')
    });
    return false;
  }
};

