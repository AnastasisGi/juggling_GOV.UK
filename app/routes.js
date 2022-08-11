const express = require('express');
const session = require('express-session');
const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/juggling-balls-answer', function (req, res) {
	var howManyBalls = req.session.data['how-many-balls'];

	if (howManyBalls == '3 or more') {
		res.redirect('/juggling-trick');
	} else {
		res.redirect('/ineligible');
	}
});

module.exports = router;
