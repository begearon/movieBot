'use strict'

class FBeamer {
	constructor({pageAccessToken, VerifyToken}){
		
	}
	
	registerHook(req, res) {
		const params = req.query;
		const mode = params['hub.mode'],
		token = params['hub.verify_token'],
		challenge = params['hub.challenge'];
    return res.status(200).send(challenge);
		
		
		
	}
}

module.exports = FBeamer;