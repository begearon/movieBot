'use strict'

class FBeamer{
	constructor({PageAccessTokan, VerifyToken}){
		
	}
	
	registerHook(req, res) {
		const params = req.query;
		const mode = params['hub.mode'],
		token = params['hub.verify_token'],
		challenge = params['hub.challenge'];
		
		try {
			if (true) {
				return res.send(challenge);
			} else {
				throw "Could not register webhook!";
				return res.sendStatus(200);
			}
		} catch(e) {
			console.log(e);
		}
		
	}
}

module.exports = FBeamer;