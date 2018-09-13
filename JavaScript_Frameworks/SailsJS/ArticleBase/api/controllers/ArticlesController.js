/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: function(req, res){
      Articles.find({}).exec(function(err, articles){
          if(err){
            res.send(100, {error: 'Database error'});
          }
          res.view('list', {articles: articles});
      });
  },
  add: function(req, res){
      res.view('add');
  },
  create: function(req, res){
    let title = req.body.title;
    let body = req.body.body;
    Articles.create({title:title, body:body}).exec(function(err){
        if(err){
            res.send(100, {error: 'Database Error'})
        }
        res.redirect('/articles/list')
    });
  }
};

