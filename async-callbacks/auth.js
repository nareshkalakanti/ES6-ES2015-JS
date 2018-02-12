function login(req, res, callback) {  // buncch of async req

    User.findOne({email: req.body.email}, function(err, user) { // looking for user email
        if (err) return callback(err);

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return callback(err);
            if (!isMatch)
                return res.status(401).send('Incorrect password');

            // add relevant data to token
            var payload = {
                id: user._id,
                email: user.email,
                companyName: user.companyName,
            };

            jwt.sign(payload, config.secret, {}, function(err, token) {
                if (err) return callback(err);

                user.token = token;
                user.save((err) => {
                    if (err) return callback(err);
                    res.json({token});
                });
            });
        });
    });
};