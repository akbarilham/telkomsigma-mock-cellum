var balance = (function(){

	var balanceInfoList = function(request, response){ 

		var BalanceInfoItems = [];

		for (var i = 0; i < 110; i++) {
			var data = {
		      "AccountId": "6282111105453",
		      "BalanceAmount": 0,
		      "BalanceQueriedAt": "2017-11-06T03:00:41.6939521Z"
			}
			BalanceInfoItems.push(data);
		}
		response.json({"BalanceInfoItems": BalanceInfoItems});

	}

	return {
		balanceInfoList
	}

})();

module.exports = balance;

// {
//   "BalanceInfoItems": [
//     {
//       "AccountId": "6282111105453",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:41.6939521Z"
//     },
//     {
//       "AccountId": "6282111105450",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:56:23.3147944Z"
//     },
//     {
//       "AccountId": "6282111105457",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:24.9150938Z"
//     },
//     {
//       "AccountId": "6285884392210",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:54:46.5678721Z"
//     },
//     {
//       "AccountId": "62811275654",
//       "BalanceAmount": 36000,
//       "BalanceQueriedAt": "2017-11-06T02:57:45.2419688Z"
//     },
//     {
//       "AccountId": "62811273911",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:49:19.2992095Z"
//     },
//     {
//       "AccountId": "62895332738393",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:45:51.6216339Z"
//     },
//     {
//       "AccountId": "6282111577335",
//       "BalanceAmount": 42500,
//       "BalanceQueriedAt": "2017-11-06T03:00:03.924029Z"
//     },
//     {
//       "AccountId": "6282111105373",
//       "BalanceAmount": 192000,
//       "BalanceQueriedAt": "2017-11-06T02:50:16.900139Z"
//     },
//     {
//       "AccountId": "6282111105370",
//       "BalanceAmount": 256000,
//       "BalanceQueriedAt": "2017-11-06T03:00:37.5007339Z"
//     }, // 10
//     {
//       "AccountId": "6282111105371",
//       "BalanceAmount": 144000,
//       "BalanceQueriedAt": "2017-11-06T02:53:37.2223384Z"
//     },
//     {
//       "AccountId": "6281386606879",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:37.8656444Z"
//     },
//     {
//       "AccountId": "6282111105482",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:57:47.3450708Z"
//     },
//     {
//       "AccountId": "6282111105483",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:56:12.8142601Z"
//     },
//     {
//       "AccountId": "628121087087",
//       "BalanceAmount": 100000,
//       "BalanceQueriedAt": "2017-11-06T03:00:01.1658864Z"
//     },
//     {
//       "AccountId": "6282111105480",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:46:52.4797325Z"
//     },
//     {
//       "AccountId": "6282111105377",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:52.7764611Z"
//     },
//     {
//       "AccountId": "6282111105374",
//       "BalanceAmount": 256000,
//       "BalanceQueriedAt": "2017-11-06T02:58:14.6984668Z"
//     },
//     {
//       "AccountId": "6282111105375",
//       "BalanceAmount": 304000,
//       "BalanceQueriedAt": "2017-11-06T03:00:08.1352406Z"
//     },
//     {
//       "AccountId": "628111510165",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:10.5183065Z"
//     }, // 20
//     {
//       "AccountId": "6282111105487",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:50:14.8020376Z"
//     },
//     {
//       "AccountId": "6282111105485",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:31.5423773Z"
//     },
//     {
//       "AccountId": "6282111105378",
//       "BalanceAmount": 10000,
//       "BalanceQueriedAt": "2017-11-06T02:58:50.4402918Z"
//     },
//     {
//       "AccountId": "628111252772",
//       "BalanceAmount": 34000,
//       "BalanceQueriedAt": "2017-11-06T02:58:08.349148Z"
//     },
//     {
//       "AccountId": "6282111105489",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:56:27.5180089Z"
//     },
//     {
//       "AccountId": "6282111105491",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:39.9587592Z"
//     },
//     {
//       "AccountId": "6282111105496",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:55:45.5018721Z"
//     },
//     {
//       "AccountId": "6285242025389",
//       "BalanceAmount": 2000,
//       "BalanceQueriedAt": "2017-11-06T02:59:44.3880316Z"
//     },
//     {
//       "AccountId": "6282111105498",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:14.433562Z"
//     },
//     {
//       "AccountId": "6287782833244",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:50.6793539Z"
//     }, // 30
//     {
// 	  "AccountId": "628121104745",
//       "BalanceAmount": 24000,
//       "BalanceQueriedAt": "2017-11-06T03:00:43.7930559Z"
//     },
//     {
//       "AccountId": "62811225010",
//       "BalanceAmount": 100000,
//       "BalanceQueriedAt": "2017-11-06T02:52:23.6935973Z"
//     },
//     {
//       "AccountId": "6285655590798",
//       "BalanceAmount": 40000,
//       "BalanceQueriedAt": "2017-11-06T02:56:25.4188999Z"
//     },
//     {
//       "AccountId": "62811963124",
//       "BalanceAmount": 100000,
//       "BalanceQueriedAt": "2017-11-06T02:56:14.9183671Z"
//     },
//     {
//       "AccountId": "6281310027897",
//       "BalanceAmount": 51000,
//       "BalanceQueriedAt": "2017-11-06T02:53:45.6277671Z"
//     },
//     {
//       "AccountId": "6281221609918",
//       "BalanceAmount": 64000,
//       "BalanceQueriedAt": "2017-11-06T02:45:22.2401376Z"
//     },
//     {
//       "AccountId": "6281310219999",
//       "BalanceAmount": 60000,
//       "BalanceQueriedAt": "2017-11-06T02:58:23.1128939Z"
//     },
//     {
//       "AccountId": "6282111105383",
//       "BalanceAmount": 240000,
//       "BalanceQueriedAt": "2017-11-06T02:53:20.4064813Z"
//     },
//     {
//       "AccountId": "6282111105386",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:18.6237734Z"
//     },
//     {
//       "AccountId": "628118787808",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:27.3381635Z"
//     }, // 40
//     {
//       "AccountId": "6282111105391",
//       "BalanceAmount": 80000,
//       "BalanceQueriedAt": "2017-11-06T02:58:48.3481808Z"
//     },
//     {
//       "AccountId": "6281214900360",
//       "BalanceAmount": 14000,
//       "BalanceQueriedAt": "2017-11-06T02:59:42.2779223Z"
//     },
//     {
//       "AccountId": "62811196400",
//       "BalanceAmount": 50000,
//       "BalanceQueriedAt": "2017-11-06T02:59:33.6404816Z"
//     },
//     {
//       "AccountId": "62811109913",
//       "BalanceAmount": 36000,
//       "BalanceQueriedAt": "2017-11-06T02:59:29.43427Z"
//     },
//     {
//       "AccountId": "6281224598424",
//       "BalanceAmount": 4000,
//       "BalanceQueriedAt": "2017-11-06T02:59:39.9568041Z"
//     },
//     {
//       "AccountId": "6281319531605",
//       "BalanceAmount": 100000,
//       "BalanceQueriedAt": "2017-11-06T02:56:59.0326137Z"
//     },
//     {
//       "AccountId": "6287852474740",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:44.1559662Z"
//     },
//     {
//       "AccountId": "6282136618800",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:25.2350572Z"
//     },
//     {
//       "AccountId": "628113343542",
//       "BalanceAmount": 117499,
//       "BalanceQueriedAt": "2017-11-06T02:53:14.107163Z"
//     },
//     {
//       "AccountId": "62811103259",
//       "BalanceAmount": 50000,
//       "BalanceQueriedAt": "2017-11-06T02:52:46.8097729Z"
//     }, // 50
//     {
//       "AccountId": "6281294458267",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:16.7965717Z"
//     },
//     {
//       "AccountId": "6281586424293",
//       "BalanceAmount": 8000,
//       "BalanceQueriedAt": "2017-11-06T02:57:57.8506093Z"
//     },
//     {
//       "AccountId": "6285210809393",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:02.0528249Z"
//     },
//     {
//       "AccountId": "628116605386",
//       "BalanceAmount": 14000,
//       "BalanceQueriedAt": "2017-11-06T02:49:40.2962743Z"
//     },
//     {
//       "AccountId": "6281396087600",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:35.4056303Z"
//     },
//     {
//       "AccountId": "6281904120479",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:56.7496096Z"
//     },
//     {
//       "AccountId": "6281215285000",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:29.4702192Z"
//     },
//     {
//       "AccountId": "6281223453565",
//       "BalanceAmount": 14000,
//       "BalanceQueriedAt": "2017-11-06T03:00:06.0231351Z"
//     },
//     {
//       "AccountId": "62811236796",
//       "BalanceAmount": 31250,
//       "BalanceQueriedAt": "2017-11-06T02:58:12.5753568Z"
//     },
//     {
//       "AccountId": "6281908000547",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:53:39.3224478Z"
//     }, // 60
//     {
//       "AccountId": "6282114392565",
//       "BalanceAmount": 10000,
// 	  "BalanceQueriedAt": "2017-11-06T03:00:29.115309Z"
//     },
//     {
//       "AccountId": "6282111105422",
//       "BalanceAmount": 384000,
//       "BalanceQueriedAt": "2017-11-06T02:56:04.4148324Z"
//     },
//     {
//       "AccountId": "6282111105432",
//       "BalanceAmount": 96000,
//       "BalanceQueriedAt": "2017-11-06T02:59:35.7375912Z"
//     },
//     {
//       "AccountId": "6282111105433",
//       "BalanceAmount": 256000,
//       "BalanceQueriedAt": "2017-11-06T02:59:59.0707825Z"
//     },
//     {
//       "AccountId": "628174873638",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:55:24.4468001Z"
//     },
//     {
//       "AccountId": "6282111105430",
//       "BalanceAmount": 96000,
//       "BalanceQueriedAt": "2017-11-06T02:58:33.6674308Z"
//     },
//     {
//       "AccountId": "628111334235",
//       "BalanceAmount": 50000,
//       "BalanceQueriedAt": "2017-11-06T02:54:06.621839Z"
//     },
//     {
//       "AccountId": "62811372374",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:31.2134152Z"
//     },
//     {
//       "AccountId": "6282111105434",
//       "BalanceAmount": 112000,
//       "BalanceQueriedAt": "2017-11-06T02:57:15.8244679Z"
//     },
//     {
//       "AccountId": "6282111105435",
//       "BalanceAmount": 96000,
//       "BalanceQueriedAt": "2017-11-06T02:56:29.6151178Z"
//     }, // 70
//     {
//       "AccountId": "6282111105401",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:52.5473919Z"
//     },
//     {
//       "AccountId": "6282111634041",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:56:21.2136916Z"
//     },
//     {
//       "AccountId": "6281291667788",
//       "BalanceAmount": 200000,
//       "BalanceQueriedAt": "2017-11-06T02:58:21.0057877Z"
//     },
//     {
//       "AccountId": "6282111105404",
//       "BalanceAmount": 208000,
//       "BalanceQueriedAt": "2017-11-06T02:55:49.7060839Z"
//     },
//     {
//       "AccountId": "6281316067047",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:12.6194138Z"
//     },
//     {
//       "AccountId": "6282133429972",
//       "BalanceAmount": 71256,
//       "BalanceQueriedAt": "2017-11-06T02:59:00.9598262Z"
//     },
//     {
//       "AccountId": "62811197093",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:56:44.3268639Z"
//     },
//     {
//       "AccountId": "6282111105415",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:57:59.9467159Z"
//     },
//     {
//       "AccountId": "6282111105463",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:45.8871645Z"
//     },
//     {
//       "AccountId": "6282111105460",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:39.5988411Z"
//     }, // 80
//     {
//       "AccountId": "6282111105466",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:51:36.6171993Z"
//     },
//     {
//       "AccountId": "6282111105464",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:56.9716745Z"
//     },
//     {
//       "AccountId": "6282111102827",
//       "BalanceAmount": 166000,
//       "BalanceQueriedAt": "2017-11-06T03:00:16.5276708Z"
//     },
//     {
//       "AccountId": "6282111105468",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:06.3190933Z"
//     },
//     {
//       "AccountId": "6282111105471",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T03:00:12.3404558Z"
//     },
//     {
//       "AccountId": "6282111105476",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:46.2510715Z"
//     },
//     {
//       "AccountId": "6287878517932",
//       "BalanceAmount": 6000,
//       "BalanceQueriedAt": "2017-11-06T02:44:31.880574Z"
//     },
//     {
//       "AccountId": "6282111102832",
//       "BalanceAmount": 224000,
//       "BalanceQueriedAt": "2017-11-06T02:59:23.1419556Z"
//     },
//     {
//       "AccountId": "6281315936689",
//       "BalanceAmount": 50000,
//       "BalanceQueriedAt": "2017-11-06T02:51:21.9414524Z"
//     },
//     {
//       "AccountId": "6281218495863",
//       "BalanceAmount": 10000,
//       "BalanceQueriedAt": "2017-11-06T02:57:41.0437497Z"
//     }, // 90
//     {
//       "AccountId": "6282111105477",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:06.2510345Z"
//     },
//     {
//       "AccountId": "6282111102833",
//       "BalanceAmount": 48000,
//       "BalanceQueriedAt": "2017-11-06T03:00:20.7208976Z"
//     },
//     {
//       "AccountId": "6287885669992",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:56:54.824399Z"
//     },
//     {
//       "AccountId": "6285643782136",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:59:21.0488463Z"
//     },
//     {
//       "AccountId": "62811213676",
//       "BalanceAmount": 72000,
//       "BalanceQueriedAt": "2017-11-06T02:55:16.0283687Z"
//     },
//     {
//       "AccountId": "6282111102836",
//       "BalanceAmount": 176000,
//       "BalanceQueriedAt": "2017-11-06T02:49:38.1901704Z"
//     },
//     {
//       "AccountId": "6282111102837",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:56:33.8133278Z"
//     },
//     {
//       "AccountId": "6282111105478",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:56:56.9305052Z"
//     },
//     {
//       "AccountId": "6282111102835",
//       "BalanceAmount": 96000,
//       "BalanceQueriedAt": "2017-11-06T02:57:24.2408968Z"
//     },
//     {
//       "AccountId": "628128139504",
//       "BalanceAmount": 37000,
//       "BalanceQueriedAt": "2017-11-06T03:00:22.8189886Z"
//     }, // 100
//     {
//       "AccountId": "6282222205359",
//       "BalanceAmount": 56000,
//       "BalanceQueriedAt": "2017-11-06T02:56:19.1145853Z"
//     },
//     {
//       "AccountId": "6282111105452",
//       "BalanceAmount": 0,
//       "BalanceQueriedAt": "2017-11-06T02:58:58.8607147Z" // 102
//     }
//   ]
// }