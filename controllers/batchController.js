var validate = require("validate.js");
var validator = require("validator");
var moment = require("moment");

var db = require("../config/db");
var yona = require("../library/Yona.js");
var naomi = require("../library/Naomi.js");
var Model = require("../model/totalExternalID");

var batch = (function(){

	var chargeBatchStart = function(request, response){ 

		// Declaration of JSON Object 
		var ChargeRequests  = request.body.ChargeRequests;
		var ExternalId 		= request.body.ChargeRequests[0].ExternalId;
		var MerchantId		= request.body.ChargeRequests[0].Merchant.MerchantId;
		var TerminalId		= request.body.ChargeRequests[0].Merchant.TerminalId;
		var AccountId		= request.body.ChargeRequests[0].User.AccountId;
		var AppTypeId		= request.body.ChargeRequests[0].User.AppTypeId;		
		var Amount 			= request.body.ChargeRequests[0].Charge.Amount;
		var CommissionFee 	= request.body.ChargeRequests[0].Charge.CommissionFee;
		var Description		= request.body.ChargeRequests[0].Charge.Description;
		var References		= request.body.ChargeRequests[0].Charge.References;

		// for (var i = 0; i < References.length; i++) {
		// 		console.log("even " + References[i].Key);
		// 		console.log("odd " + References[i].Value);	
		// }

		// validation start
		var resultChargeRequests 	= yona.valid(ChargeRequests, 'chargerequests', 'FAILED_ERROR_TECHNICAL ChargeRequests - jumlah concurent tidak boleh lebih dari 100');
		var resultExternalId 		= yona.valid(ExternalId, 'externalid', 'FAILED_ERROR_TECHNICAL ExternalId - jumlah length lebih dari 40');
		var resultMerchantId 		= yona.valid(MerchantId, 'merchant.merchantid', 'FAILED_ERROR_TECHNICAL MerchantId - tipe data bukan int');
		var resultTerminalId 		= yona.valid(TerminalId, 'merchant.terminalid', 'FAILED_ERROR_TECHNICAL TerminalId - tipe data bukan int');
		var resultAccountId 		= yona.valid(AccountId, 'user.accountid', 'FAILED_ERROR_TECHNICAL AccountId - jumlah string lebih dari 100');
		var resultAppTypeId 		= yona.valid(AppTypeId, 'user.apptypeid', 'FAILED_ERROR_TECHNICAL AppTypeId - tipe data bukan integer');
		var resultAmount 			= yona.valid(Amount, 'charge.amount', 'FAILED_ERROR_TECHNICAL Amount - tipe data bukan decimal');
		var resultCommissionFee		= yona.valid(CommissionFee, 'charge.commissionfee', 'FAILED_ERROR_TECHNICAL CommissionFee - tipe data bukan decimal');
		var resultDescription		= yona.valid(Description, 'charge.description', 'FAILED_ERROR_TECHNICAL Description - jumlah string lebih dari 255');
		var resultReferences		= yona.valid(References, 'charge.references', 'FAILED_ERROR_TECHNICAL');
		// var resultReferencesKey		= yona.valid(ReferenceKey, 'charge.references.referencekey', 'FAILED_ERROR_TECHNICAL Key - jumlah char lebih dari 20');
		// var resultReferencesVal 	= yona.valid(ReferenceVal, 'charge.references.referenceval', 'FAILED_ERROR_TECHNICAL - jumlah string lebih dari 100');

		if ( resultChargeRequests === "OK") {

			if ( resultExternalId === "OK") {

				if ( resultMerchantId === "OK") {

					if ( resultTerminalId === "OK") {

						if ( resultAccountId === "OK") {

							if ( resultAppTypeId === "OK") {

								if ( resultAmount === "OK") {

									if ( resultCommissionFee === "OK" ) {

										if ( resultDescription === "OK" ) {

											if ( resultReferences === "optional" ) {

												response.json({'ResultCode' : 'OK'});

												// if ( resultReferencesKey == 'OK' ) {

												// 	if ( resultReferencesVal ) {

												// 		response.json({'ResultCode' : 'OK'});

												// 	} else {
												// 		response.json({'ResultCode' : resultReferencesVal});
												// 	}

												// } else {
												// 	response.json({'ResultCode' : resultReferencesKey});
												// }

											} else if ( resultReferences === "OK" ) {
												response.send({'ResultCode' : 'OK'});
											} else {
												response.send({'ResultCode' : resultReferences});
											}

										} else {
											response.send({'ResultCode' : resultDescription});
										}

									} else {
										response.send({'ResultCode' : resultCommissionFee});
									}

								} else {
									response.send({'ResultCode' : resultAmount});
								}												

							} else {
								response.send({'ResultCode' : resultAppTypeId});
							}

						} else {
							response.send({'ResultCode' : resultAccountId});
						}

					} else {
						response.send({'ResultCode' : resultTerminalId});
					}

				} else {
					response.send({'ResultCode' : resultMerchantId});
				}

			} else {
				response.send({'ResultCode' : resultExternalId});
			}

		} else {
			response.send({'ResultCode' : resultChargeRequests});
		}

		let select = "SELECT count(account_id) FROM cellum.t_account WHERE account_id = '" + AccountId + "'";
	  	db.manual.query(select, (err, res) => {
	  		
	  		var checkAccountID = res.rows[0].count;

	  		let balance = "SELECT balance FROM cellum.t_account WHERE account_id = '" + AccountId + "'";
	  		db.manual.query(balance, (err, res) => {

				var	checkBalance = res.rowCount;
				if (checkBalance == 0) {
					var check = 0;
				} else {
					var check = res.rows[0];
				}
				
		  		if (checkAccountID == 0) {
		  			console.log("masuk ke new");

					/* Store to JSON
					** External ID
					** Tanggal Pemotongan Balance
					** Account ID
					** Balance Terakhir
					** Status (Sukses / Gagal)
					*/	  			

					var CutDate = moment.utc().format();
					var Status = "success";
					var Saldo = 800000;
					var LastBalance = Saldo - Amount;

					let insert = {
					  text: 'INSERT INTO cellum.t_account VALUES($1, $2)',
					  values: [AccountId, LastBalance],
					}

				  	db.manual.query(insert, (err, res) => {
				  		console.log("Insert Success");

						let insert_trx = {
						  text: 'INSERT INTO cellum.t_account_trx(account_id, trx_amount, cmn_id, external_id, trx_date, status) VALUES($1, $2, $3, $4, $5, $6)',
						  values: [AccountId, Amount, '0e962417-7ed3-4d60-aff8-49b03bbdf31b', ExternalId, CutDate, Status],
						}

					  	db.manual.query(insert_trx, (err, res) => {
					  		console.log("Insert trx Success");
						});


					});

		  		} else {
		  			console.log("masuk ke update");

					var CutDate = moment.utc().format();
					var Status = "success";
					var Saldo = check.balance;
					var LastBalance = Saldo - Amount;

					let update = {
					  text: "UPDATE cellum.t_account SET balance = $2 WHERE account_id = $1",
					  values: [AccountId, LastBalance],
					}

				  	db.manual.query(update, (err, res) => {

				  		console.log("Update Success");

						let insert_trx = {
						  text: 'INSERT INTO cellum.t_account_trx(account_id, trx_amount, cmn_id, external_id, trx_date, status) VALUES($1, $2, $3, $4, $5, $6)',
						  values: [AccountId, Amount, '0e962417-7ed3-4d60-aff8-49b03bbdf31b', ExternalId, CutDate, Status],
						}

					  	db.manual.query(insert_trx, (err, res) => {
					  		console.log("Insert trx Success");
						});


					});

		  		}
			
	  		});

		});

	};		

	var chargeProcessQuery = function(request, response){ 

		var ExternalId = request.body.ExternalIds;
	    Model(ExternalId,response);

    // where account id and external id
	}

	return {
		chargeBatchStart,
		chargeProcessQuery
	}


})();

module.exports = batch;