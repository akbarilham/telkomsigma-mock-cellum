var validate = require("validate.js");
var validator = require("validator");
var moment = require("moment");
const async = require('async');

var db = require("../config/db");
var yona = require("../library/Yona.js");
var naomi = require("../library/Naomi.js");
var Model = require("../model/totalExternalID");
var panggil = require("../library/Winston.js");

var balance = (function(){

	var balanceInfoList = function(request, response){ 

		var BalanceInfoItems = [];
		var data = '';

		let select = "SELECT * FROM cellum.t_account ORDER BY account_id ASC";
  		db.manual.query(select, (err, res) => {
  			for (var i = 0; i < 15; i++) {

	  			var AccountId = res.rows[i].account_id;
	  			var BalanceAmount = res.rows[i].balance;

				data = {
			      "AccountId": AccountId,
			      "BalanceAmount": BalanceAmount,
			      "BalanceQueriedAt": "2017-11-06T03:00:41.6939521Z"
				}
				BalanceInfoItems.push(data);
			}
			response.json({"BalanceInfoItems": BalanceInfoItems});
		});

	}

	return {
		balanceInfoList
	}

})();

module.exports = balance;