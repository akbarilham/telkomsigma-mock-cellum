const db = require("../config/db");
const async = require('async');
var i=0;
var chargerequests = [];
var test = function(ExternalId,response){

    // let qaccountid = "SELECT cellum.t_account.balance, cellum.t_account.account_id FROM cellum.t_account JOIN cellum.t_account_trx ON cellum.t_account.account_id = cellum.t_account_trx.account_id WHERE external_id = '" + ExternalId + "'";
    // db.manual.query(qaccountid, (err, res)=> {
    // 	console.log(res); return false;
    // });

	async.waterfall([
	    function (callback) {
		    let qaccountid = "SELECT cellum.t_account.balance, cellum.t_account.account_id FROM cellum.t_account JOIN cellum.t_account_trx ON cellum.t_account.account_id = cellum.t_account_trx.account_id WHERE external_id = '" + ExternalId + "'";
		    db.manual.query(qaccountid, (err, res)=> {
		    	i++;
		        if (res.rowCount == 0) {
			        var item = ExternalId;
			        var points = 0;
			        var account_id = "";
			        var balance = "";
		        } else {
			        var item = ExternalId;
			        var points = i;
			        var account_id = res.rows[0].account_id;
			        var balance = res.rows[0].balance;		        	
		        }
		        // callback(null, item);
		        callback(null, {qitem: item, qpoints: points, qaccount_id: account_id, qbalance: balance});
		    });
	    },
	    function (item, callback) {
		    let qaccountid = "SELECT cellum.t_account.balance, cellum.t_account.account_id FROM cellum.t_account JOIN cellum.t_account_trx ON cellum.t_account.account_id = cellum.t_account_trx.account_id WHERE external_id = '" + ExternalId + "'";
		    db.manual.query(qaccountid, (err, res)=> {
		      	var points = i;
		        var item = ExternalId;
		        var account_id = res.rows[0].account_id;
		        var balance = res.rows[0].balance;
		        callback(null, {qitem: item, qpoints: points, qaccount_id: account_id, qbalance: balance});
		    });
	        
	    }
	], function (err, result) {
	    console.log('Main Callback --> ' + JSON.stringify(result));
	 	if(result.qpoints==ExternalId.length){
			var data = {
				ExternalId : result.qitem[0],
				CmnId : "0e962417-7ed3-4d60-aff8-49b03bbdf31b",
				ProcessStatus : "FinishedSuccessfully",
				ResultCode : "OK",
				StartDate : "2017-09-14T09:05:35.7466815Z",
				TransferDate: "2017-11-07T03:20:42.4051154Z",
				BalanceInfo: {
					AccountId : result.qaccount_id,
					BalanceAmount : result.qbalance,
					BalanceQueriedAt : "2017-11-07T03:20:44.0071966Z"
				}
			};
			chargerequests.push(data);
	    }else{
	    	var data = {
				ExternalId : result.qitem[0],
				CmnId : "0e962417-7ed3-4d60-aff8-49b03bbdf31b",
				ProcessStatus : "FinishedFailure",
				ResultCode : "FAILED_ERROR_TECHNICAL_FATAL_CONFIGURATION",
				StartDate : "2017-09-14T09:05:35.7466815Z"
			};
		    console.log('ada external id yang tidak sama');
		    i=0
		    chargerequests.push(data);
		}
		response.json({"ChargeRequests" : chargerequests});
	});
};

module.exports.test = test;