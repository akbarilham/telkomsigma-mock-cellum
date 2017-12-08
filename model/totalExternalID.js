const db = require("../config/db");
const async = require('async');
var i = 0;
var chargerequests = [];
var test = function(ExternalId,response){
async.forEach(ExternalId, function (item, callback){ 

    async.waterfall([
        function (callback) {
            let qaccountid = "SELECT cellum.t_account.balance, cellum.t_account.account_id FROM cellum.t_account JOIN cellum.t_account_trx ON cellum.t_account.account_id = cellum.t_account_trx.account_id WHERE external_id = '" + item + "'";
            db.manual.query(qaccountid, (err, res)=> {
                i++;
                if (res.rowCount == 0) {
                    var points = 0;
                    var account_id = "";
                    var balance = "";
                } else {
                    var points = i;
                    var account_id = res.rows[0].account_id;
                    var balance = res.rows[0].balance;                  
                }
                callback(null, {qitem: item, qpoints: points, qaccount_id: account_id, qbalance: balance});
            });
        },
        function (params, callback) {

            if(params.qpoints > 0){
                var data = {
                    ExternalId : params.qitem,
                    CmnId : "0e962417-7ed3-4d60-aff8-49b03bbdf31b",
                    ProcessStatus : "FinishedSuccessfully",
                    ResultCode : "OK",
                    StartDate : "2017-09-14T09:05:35.7466815Z",
                    TransferDate: "2017-11-07T03:20:42.4051154Z",
                    BalanceInfo: {
                        AccountId : params.qaccount_id,
                        BalanceAmount : params.qbalance,
                        BalanceQueriedAt : "2017-11-07T03:20:44.0071966Z"
                    }
                };
                // console.log('iterating berjalan');
                chargerequests.push(data);
            }else{
                var data = {
                    ExternalId : params.qitem,
                    CmnId : "0e962417-7ed3-4d60-aff8-49b03bbdf31b",
                    ProcessStatus : "FinishedFailure",
                    ResultCode : "FAILED_ERROR_TECHNICAL_FATAL_CONFIGURATION",
                    StartDate : "2017-09-14T09:05:35.7466815Z"
                };
                // console.log('ada external id yang tidak sama');
                i=0
                chargerequests.push(data);
            }
            callback(null, {qitem: params.qitem, qpoints: params.qpoints, qaccount_id: params.qaccount_id, qbalance: params.qbalance}, chargerequests);
        }        
    ], function (err, result) {
        // console.log(result); return false;

        if(chargerequests.length == ExternalId.length){
            response.json({"ChargeProcessStatuses" : chargerequests});
            console.log("Iterating sudah done");
            // chargerequests.pop();
            chargerequests = [];
        } else {
            console.log("Iterating belum done");
        }
        

    });

}, function(err) {

    console.log("error " + err);

}); 
  
      
};

module.exports = test;