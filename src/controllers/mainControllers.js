const {validationResult} = require('express-validator');

module.exports = {
    index: (req,res) => {
        return res.render('index.ejs')
    },
    form: (req,res) => {
        res.render('form.ejs', {title: 'Session & Cookies', color: req.body.color})
    },
    welcome: (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let user = {
                name: req.body.name,
                color: req.body.color,
                email: req.body.email,
                age: req.body.age
            }

            req.session.usuario = user;
            req.session.color = req.body.color;

            if(req.body.recordar){
                res.cookie("color", user.color, {maxAge: 100000000000});
            }
            return res.redirect('form');

        } else {
            return res.render('form.ejs', {errors: errors.mapped(), old: req.body, title: 'Session & Cookies'})
        }
    },
    thanks: (req,res) => {
        try {
            return res.render('welcomeUser.ejs')
        } catch (error) {
            console.log(error);
        }
    },
    deletePreferences: (req,res) => {
        if(res.cookies){
            res.cookies.color = undefined;
        }
        if(req.session.color){
            req.session.color = undefined;
        }
        res.redirect('form');
    }
}