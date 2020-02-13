module.exports = {
  async get() {
    // Got from the carto table
    // SELECT mrgid as id, geoname as name, ST_Extent(the_geom) as bbox FROM eez GROUP BY id, name
    return [
      {
        id: 3293,
        label: 'Belgian Exclusive Economic Zone',
        bounds: [
          2.23833333345576,
          51.0893143413842,
          3.37040317076995,
          51.8761144442991
        ]
      },
      {
        id: 5668,
        label: 'Dutch Exclusive Economic Zone',
        bounds: [
          2.53933305536958,
          51.0397591587585,
          7.21027946512561,
          55.76500000035
        ]
      },
      {
        id: 5669,
        label: 'German Exclusive Economic Zone',
        bounds: [
          3.3499999998005,
          52.8711222407994,
          14.7500000003001,
          55.9192777774912
        ]
      },
      {
        id: 5670,
        label: 'Albanian Exclusive Economic Zone',
        bounds: [
          18.3214930670517,
          39.6403940435504,
          20.0208276507757,
          42.0112030505804
        ]
      },
      {
        id: 5672,
        label: 'Bulgarian Exclusive Economic Zone',
        bounds: [
          27.4437121157218,
          41.9781944444446,
          31.33082001297,
          43.7384724620347
        ]
      },
      {
        id: 5673,
        label: 'Croatian Exclusive Economic Zone',
        bounds: [
          13.0083333332171,
          41.629702201196,
          18.5492451773234,
          45.5649466701456
        ]
      },
      {
        id: 5674,
        label: 'Danish Exclusive Economic Zone',
        bounds: [
          3.24999999990058,
          54.3648333333335,
          16.5073720939491,
          58.2614444446186
        ]
      },
      {
        id: 5675,
        label: 'Estonian Exclusive Economic Zone',
        bounds: [
          20.3713333334669,
          57.5863833333334,
          28.2089854372286,
          59.9949166665364
        ]
      },
      {
        id: 5676,
        label: 'Finnish Exclusive Economic Zone',
        bounds: [
          19.0832000001802,
          58.844500000275,
          27.8311993005078,
          66.7751561400439
        ]
      },
      {
        id: 5677,
        label: 'French Exclusive Economic Zone',
        bounds: [
          -9.87728333365868,
          41.2433333332892,
          10.2183333333338,
          51.5577777780741
        ]
      },
      {
        id: 5678,
        label: 'Georgian Exclusive Economic Zone',
        bounds: [
          38.9758498166159,
          41.5204916004072,
          42.354960441871,
          43.385697612655
        ]
      },
      {
        id: 5679,
        label: 'Greek Exclusive Economic Zone',
        bounds: [
          18.2616666670832,
          33.2810304221165,
          30.1035923547038,
          41.0913255215556
        ]
      },
      {
        id: 5680,
        label: 'Icelandic Exclusive Economic Zone',
        bounds: [
          -30.8679247252456,
          59.9689407654042,
          -5.57340970769167,
          69.5833333333555
        ]
      },
      {
        id: 5681,
        label: 'Irish Exclusive Economic Zone',
        bounds: [-16.0738904300989, 48.1787077796307, -5.27233333333299, 56.7]
      },
      {
        id: 5682,
        label: 'Italian Exclusive Economic Zone',
        bounds: [
          5.88972222214312,
          35.0644061492247,
          18.9952382794234,
          45.8089137081017
        ]
      },
      {
        id: 5683,
        label: 'Latvian Exclusive Economic Zone',
        bounds: [
          19.0975389905324,
          56.0417333333269,
          24.4124661682792,
          58.024066960735
        ]
      },
      {
        id: 5684,
        label: 'Lithuanian Exclusive Economic Zone',
        bounds: [
          19.0234837087066,
          55.1848775683455,
          21.5388444659996,
          56.0691333333371
        ]
      },
      {
        id: 5685,
        label: 'Maltese Exclusive Economic Zone',
        bounds: [
          13.4169688673196,
          34.2132886326643,
          17.4972593063721,
          36.5123996284404
        ]
      },
      {
        id: 5686,
        label: 'Norwegian Exclusive Economic Zone',
        bounds: [-0.488763889041991, 56.0866666670332, 36.5411120539763, 74.504832]
      },
      {
        id: 5687,
        label: 'Polish Exclusive Economic Zone',
        bounds: [
          14.2014024221843,
          52.6535186767458,
          19.8048597574724,
          55.9215499999329
        ]
      },
      {
        id: 5688,
        label: 'Portuguese Exclusive Economic Zone',
        bounds: [
          -13.8653499219613,
          34.8775992193285,
          -7.25694106627714,
          42.0546702150585
        ]
      },
      {
        id: 5689,
        label: 'Romanian Exclusive economic Zone',
        bounds: [
          28.5278240445441,
          43.4398005616467,
          31.4097222222227,
          45.2128368614322
        ]
      },
      {
        id: 5690,
        label: 'Russian Exclusive economic Zone',
        bounds: [
          -180.000000002598,
          39.7266865929442,
          180.0000000001,
          85.1780004637504
        ]
      },
      {
        id: 5691,
        label: 'Montenegrin Exclusive economic Zone',
        bounds: [
          18.0182985939053,
          41.4417513849187,
          19.3882266153663,
          42.5167987347737
        ]
      },
      {
        id: 5692,
        label: 'Slovenian Exclusive Economic Zone',
        bounds: [
          13.3870066796605,
          45.4654839038593,
          13.7466845508516,
          45.6300000000002
        ]
      },
      {
        id: 5693,
        label: 'Spanish Exclusive Economic Zone',
        bounds: [
          -13.8530484824014,
          35.6685912906557,
          6.30000000010011,
          46.8740034459024
        ]
      },
      {
        id: 5694,
        label: 'Swedish Exclusive Economic Zone',
        bounds: [
          10.0300277776329,
          54.9624444444449,
          24.1897231702884,
          67.0805883404799
        ]
      },
      {
        id: 5695,
        label: 'Overlapping claim Ukrainian Exclusive Economic Zone',
        bounds: [
          29.6040439601607,
          43.1880555555558,
          38.3436266412569,
          47.3102964163466
        ]
      },
      {
        id: 5696,
        label: 'United Kingdom Exclusive Economic Zone',
        bounds: [
          -14.8973416263148,
          47.4354053752581,
          3.39999999960054,
          63.8874805558831
        ]
      },
      {
        id: 5697,
        label: 'Turkish Exclusive Economic Zone',
        bounds: [
          25.4417545087639,
          34.2092258769729,
          41.5470279454839,
          43.4497222222224
        ]
      },
      {
        id: 8308,
        label: 'Cocos Islands Exclusive Economic Zone',
        bounds: [
          93.4115861813574,
          -15.5588400041628,
          100.336109630256,
          -8.47174382741557
        ]
      },
      {
        id: 8309,
        label: 'Christmas Island Exclusive Economic Zone',
        bounds: [
          102.149332213012,
          -13.9188228805714,
          109.034972325713,
          -8.72607144014475
        ]
      },
      {
        id: 8310,
        label: 'Norfolk Island Exclusive Economic Zone',
        bounds: [
          164.111166418098,
          -32.4775218120818,
          171.801106646,
          -25.8450000000498
        ]
      },
      {
        id: 8311,
        label: 'Australian Exclusive Economic Zone (Macquarie Island)',
        bounds: [
          152.86255343989,
          -58.4494699458811,
          164.691233333333,
          -51.0273444439907
        ]
      },
      {
        id: 8312,
        label: 'New Caledonian Exclusive Economic Zone',
        bounds: [
          156.255555555545,
          -26.2014382665627,
          170.553491919609,
          -14.7875363407295
        ]
      },
      {
        id: 8313,
        label: 'Vanuatu Exclusive Economic Zone',
        bounds: [
          163.308596536001,
          -21.6428818577114,
          173.608932565152,
          -12.2821500298998
        ]
      },
      {
        id: 8314,
        label: 'Solomon Islands Exclusive Economic Zone',
        bounds: [
          154.585555555556,
          -16.1269444440307,
          173.593401895521,
          -4.13994496135609
        ]
      },
      {
        id: 8315,
        label: 'Palau Exclusive Economic Zone',
        bounds: [
          129.508804817289,
          1.62140720617771,
          136.954100211352,
          11.5587247264652
        ]
      },
      {
        id: 8316,
        label: 'Micronesian Exclusive Economic Zone',
        bounds: [
          135.312441837621,
          -1.1731109652986,
          165.676528225997,
          13.4454329253893
        ]
      },
      {
        id: 8317,
        label: 'Nauruan Exclusive Economic Zone',
        bounds: [
          163.57879845198,
          -3.90730662260076,
          168.560244444338,
          2.69385081081545
        ]
      },
      {
        id: 8318,
        label: 'Marshall Islands Exclusive Economic Zone',
        bounds: [
          157.460543780472,
          1.77731388900088,
          175.523472571702,
          17.9460614984396
        ]
      },
      {
        id: 8319,
        label: 'Wake Island Exclusive Economic Zone',
        bounds: [
          163.069775622148,
          16.047093436513,
          170.185469471939,
          22.6699272073748
        ]
      },
      {
        id: 8321,
        label: 'Taiwanese Exclusive Economic Zone',
        bounds: [
          114.237362540359,
          17.2638753049073,
          123.544760745413,
          26.9313598960428
        ]
      },
      {
        id: 8322,
        label: 'Philippines Exclusive Economic Zone',
        bounds: [
          113.677718693658,
          3.10544949519817,
          129.943841662539,
          22.2535629535677
        ]
      },
      {
        id: 8323,
        label: 'Australian Exclusive Economic Zone',
        bounds: [
          109.233480028082,
          -47.1936411708032,
          163.192084910591,
          -8.88333333316649
        ]
      },
      {
        id: 8324,
        label: 'Papua New Guinean Exclusive Economic Zone',
        bounds: [
          139.201374525434,
          -14.748448665973,
          162.803379087737,
          2.59596992597139
        ]
      },
      {
        id: 8325,
        label: 'Fijian Exclusive Economic Zone',
        bounds: [-180, -25.0971098344673, 180.000000000038, -9.78332062105596]
      },
      {
        id: 8326,
        label: 'Tuvaluan Exclusive Economic Zone',
        bounds: [-180, -13.240386111111, 180, -3.96556388888877]
      },
      {
        id: 8327,
        label: 'South Korean Exclusive Economic Zone',
        bounds: [
          122.896335189818,
          30.7700000002999,
          133.806087820484,
          39.8396911162045
        ]
      },
      {
        id: 8328,
        label: 'North Korean Exclusive Economic Zone',
        bounds: [
          123.562257461413,
          36.9668294568142,
          133.180045099935,
          42.4263814691296
        ]
      },
      {
        id: 8331,
        label: 'Cambodian Exclusive Economic Zone',
        bounds: [
          101.302599279034,
          8.78188205539396,
          104.520011305778,
          11.8309807774414
        ]
      },
      {
        id: 8332,
        label: 'Thailand Exclusive Economic Zone',
        bounds: [
          95.5300000002001,
          5.94999999993368,
          103.053004807723,
          13.7270857091385
        ]
      },
      {
        id: 8333,
        label: 'Indian Exclusive Economic Zone (Andaman and Nicobar Islands)',
        bounds: [
          88.7987511463488,
          3.84065778732734,
          95.6966666668335,
          15.7182691627918
        ]
      },
      {
        id: 8334,
        label: 'Comoran Exclusive Economic Zone',
        bounds: [
          41.8351774015431,
          -14.4630573974858,
          45.767499999926,
          -8.10518206439809
        ]
      },
      {
        id: 8337,
        label: 'Seychellois Exclusive Economic Zone',
        bounds: [
          43.1760691485187,
          -12.7565010071156,
          59.631370681912,
          -0.360904071265736
        ]
      },
      {
        id: 8338,
        label: 'Réunion Exclusive Economic Zone',
        bounds: [
          51.8000000000002,
          -24.7368617348811,
          58.2435890125232,
          -18.2863888887361
        ]
      },
      {
        id: 8339,
        label: 'Juan de Nova Exclusive Economic Zone',
        bounds: [
          40.9375657270772,
          -19.2517378680081,
          43.3135867064616,
          -15.3269631128572
        ]
      },
      {
        id: 8340,
        label: 'Bassas da India Exclusive Economic Zone',
        bounds: [
          37.5445545768325,
          -23.1854131338262,
          41.5805744555471,
          -19.1053174650287
        ]
      },
      {
        id: 8341,
        label: 'Ile Europa Exclusive Economic Zone',
        bounds: [
          38.0124616800285,
          -25.75094443174,
          41.8203506238826,
          -20.9162433669417
        ]
      },
      {
        id: 8343,
        label: 'Mauritian Exclusive Economic Zone',
        bounds: [
          53.8039809898308,
          -23.8095575459439,
          67.0476638366168,
          -8.43638888863622
        ]
      },
      {
        id: 8344,
        label:
          'Overlapping claim Chagos Archipelago Exclusive Economic Zone: UK / Mauritius',
        bounds: [
          67.8874277774702,
          -10.7946250002435,
          75.8508055556321,
          -2.28750277783081
        ]
      },
      {
        id: 8345,
        label: 'Maldives Exclusive Economic Zone',
        bounds: [
          69.2059302961715,
          -3.46644558409628,
          77.1059530649939,
          8.09388888897968
        ]
      },
      {
        id: 8346,
        label: 'Sri Lankan Exclusive Economic Zone',
        bounds: [
          77.0233333331672,
          2.56648901165869,
          85.2329186661642,
          11.4488248097174
        ]
      },
      {
        id: 8347,
        label: 'Mozambican Exclusive Economic Zone',
        bounds: [
          32.4306230543119,
          -27.7160489038229,
          43.0091046053286,
          -10.0913888889172
        ]
      },
      {
        id: 8348,
        label: 'Madagascan Exclusive Economic Zone',
        bounds: [
          40.3343714173078,
          -28.9513044968049,
          53.3664243460073,
          -10.3373247337493
        ]
      },
      {
        id: 8349,
        label: 'Kenyan Exclusive Economic Zone',
        bounds: [
          39.2213044167659,
          -4.90032499999995,
          44.3295853556933,
          -1.65406811225347
        ]
      },
      {
        id: 8350,
        label: 'Somali Exclusive Economic Zone',
        bounds: [
          41.566216416655,
          -1.65406805559621,
          54.4450363908175,
          13.5246369392436
        ]
      },
      {
        id: 8351,
        label: 'Eritrean Exclusive Economic Zone',
        bounds: [
          38.5669045452092,
          12.7106666563411,
          43.252902450388,
          18.1038430476187
        ]
      },
      {
        id: 8352,
        label: 'Djiboutian Exclusive Economic Zone',
        bounds: [
          42.5134620665214,
          11.4610139887048,
          44.1426536504461,
          12.7148324263453
        ]
      },
      {
        id: 8353,
        label: 'Yemeni Exclusive Economic Zone',
        bounds: [
          41.0819444441814,
          8.9527534599044,
          57.9460033151014,
          16.6495937962465
        ]
      },
      {
        id: 8354,
        label: 'Omani Exclusive Economic Zone',
        bounds: [
          53.109340649257,
          13.7641666666668,
          63.369537332882,
          26.7374999997255
        ]
      },
      {
        id: 8355,
        label: 'Sudanese Exclusive Economic Zone',
        bounds: [
          36.8534996507884,
          18.0231661708822,
          39.735172397888,
          21.9980216580303
        ]
      },
      {
        id: 8356,
        label: 'Saudi Arabian Exclusive Economic Zone',
        bounds: [
          34.4558946967833,
          16.2900000001002,
          51.6836846445898,
          29.3752063813397
        ]
      },
      {
        id: 8357,
        label: 'Kuwaiti Exclusive Economic Zone',
        bounds: [
          47.7024409768699,
          28.5340241191182,
          49.5504691286769,
          30.0301527496499
        ]
      },
      {
        id: 8358,
        label: 'Bahraini Exclusive Economic Zone',
        bounds: [
          50.2696250000003,
          25.5350000000001,
          51.1218932529367,
          27.1666666667224
        ]
      },
      {
        id: 8359,
        label: 'Pakistani Exclusive Economic Zone',
        bounds: [
          61.4166666666337,
          20.9803399319425,
          68.9090899227624,
          25.5973770618021
        ]
      },
      {
        id: 8360,
        label: 'United Arab Emirates Exclusive Economic Zone',
        bounds: [
          51.5164410493338,
          23.9590138193328,
          57.1273919728618,
          26.1546063266211
        ]
      },
      {
        id: 8361,
        label: 'Portuguese Exclusive Economic Zone (Azores)',
        bounds: [
          -35.5855811271671,
          33.586358463972,
          -20.5991664850451,
          43.0648262038664
        ]
      },
      {
        id: 8362,
        label: 'Cape Verdean Exclusive Economic Zone',
        bounds: [
          -28.8470930941709,
          11.4513066903516,
          -19.5350000002495,
          20.555512486612
        ]
      },
      {
        id: 8363,
        label: 'Portuguese Exclusive Economic Zone (Madeira)',
        bounds: [
          -21.2245004920039,
          29.2478472344624,
          -12.5904542215849,
          36.4697434815766
        ]
      },
      {
        id: 8364,
        label: 'Spanish Exclusive Economic Zone (Canary Islands)',
        bounds: [
          -21.9203899206582,
          24.5847383892655,
          -11.8126900264233,
          32.2890837523136
        ]
      },
      {
        id: 8365,
        label: 'Overlapping claim Gibraltarian Exclusive Economic Zone',
        bounds: [
          -5.39735163676841,
          36.010421983388,
          -4.96716553156378,
          36.1572920096187
        ]
      },
      {
        id: 8366,
        label: 'Tunisian Exclusive Economic Zone',
        bounds: [
          7.81666666671137,
          33.1614651675837,
          13.6838888889614,
          38.4099999996007
        ]
      },
      {
        id: 8367,
        label: 'Moroccan Exclusive Economic Zone',
        bounds: [
          -13.6647513924821,
          27.6718941830273,
          -2.05752140199087,
          36.0051043838613
        ]
      },
      {
        id: 8368,
        label: 'Overlapping claim Western Saharan Exclusive Economic Zone',
        bounds: [
          -20.6669210302812,
          19.3301154078002,
          -13.1711601053144,
          27.8336167609447
        ]
      },
      {
        id: 8369,
        label: 'Mauritanian Exclusive Economic Zone',
        bounds: [
          -20.2690123631299,
          16.063754278537,
          -16.0202223060144,
          21.166355967454
        ]
      },
      {
        id: 8370,
        label: 'Gambian Exclusive Economic Zone',
        bounds: [
          -20.2373083139285,
          13.0558333330404,
          -15.2998807426019,
          13.6428308490647
        ]
      },
      {
        id: 8371,
        label: 'Senegalese Exclusive Economic Zone',
        bounds: [
          -20.2142278997773,
          10.6452213523326,
          -15.2107652429214,
          16.5289099216556
        ]
      },
      {
        id: 8372,
        label: 'Libyan Exclusive Economic Zone',
        bounds: [
          11.5613888888864,
          30.2670495513958,
          26.1922643437247,
          35.4251452390617
        ]
      },
      {
        id: 8373,
        label: 'Syrian Exclusive Economic Zone',
        bounds: [
          34.9633416731801,
          34.599250855043,
          35.9725430927895,
          36.0625009604512
        ]
      },
      {
        id: 8374,
        label: 'Lebanese Exclusive Economic Zone',
        bounds: [
          33.694652988345,
          33.0950702722754,
          35.9916403295379,
          34.8124457166965
        ]
      },
      {
        id: 8375,
        label: 'Israeli Exclusive Economic Zone',
        bounds: [
          32.9722222224776,
          29.4499594367981,
          35.1056128740353,
          33.4809925485675
        ]
      },
      {
        id: 8376,
        label: 'Cypriote Exclusive Economic Zone',
        bounds: [
          29.8464799984537,
          32.8888888887114,
          35.1942981929078,
          36.2191099960296
        ]
      },
      {
        id: 8378,
        label: 'Algerian Exclusive Economic Zone',
        bounds: [
          -2.21233255070641,
          35.0706684586824,
          8.64204972604347,
          38.8008745923888
        ]
      },
      {
        id: 8379,
        label: 'Ascension Exclusive Economic Zone',
        bounds: [
          -17.7827906788466,
          -11.3446941093456,
          -10.9324784704049,
          -4.53752854700471
        ]
      },
      {
        id: 8380,
        label: 'St. Helena Exclusive Economic Zone',
        bounds: [
          -9.25338925191224,
          -19.3797130427227,
          -2.16792640857676,
          -12.5491958217297
        ]
      },
      {
        id: 8381,
        label: 'Brazilian Exclusive Economic Zone (Trindade)',
        bounds: [
          -32.8988899342228,
          -23.8776124890251,
          -25.2939596914862,
          -17.1187017390938
        ]
      },
      {
        id: 8382,
        label: 'Tristan Da Cunha Exclusive Economic Zone',
        bounds: [
          -16.8872813980059,
          -43.7077415042035,
          -5.51049573350281,
          -33.7220243399005
        ]
      },
      {
        id: 8383,
        label:
          'Overlapping claim South Georgia and South Sandwich Exclusive Economic Zone: UK / Argentina',
        bounds: [
          -44.611292564496,
          -62.7894485243178,
          -19.8998899837685,
          -50.5089342165244
        ]
      },
      {
        id: 8384,
        label: 'South African Exclusive Economic Zone (Prince Edward Islands)',
        bounds: [
          32.7119387604656,
          -50.3150634770977,
          42.8475031167758,
          -43.2648213127533
        ]
      },
      {
        id: 8385,
        label: 'Crozet Islands Exclusive Economic Zone',
        bounds: [
          45.3688048314783,
          -49.8181214707292,
          57.1518306411712,
          -42.6018456113858
        ]
      },
      {
        id: 8386,
        label: 'Amsterdam Island & St. Paul Island Exclusive Economic Zone',
        bounds: [
          73.2414778285395,
          -42.0780701077491,
          81.8134415562832,
          -34.4518978701905
        ]
      },
      {
        id: 8387,
        label: 'Kerguelen Exclusive Economic Zone',
        bounds: [
          63.2977519210144,
          -53.1786296815145,
          75.6514568603463,
          -45.1179752899276
        ]
      },
      {
        id: 8388,
        label: 'Heard and McDonald Islands Exclusive Economic Zone',
        bounds: [
          67.0540595640979,
          -56.5245531963729,
          79.4090258052968,
          -49.8261905709334
        ]
      },
      {
        id: 8389,
        label:
          'Overlapping claim Falkland / Malvinas Islands Exclusive Economic Zone: UK / Argentina',
        bounds: [
          -65.0151493545588,
          -56.2278161073274,
          -52.3203381470877,
          -47.6697662981759
        ]
      },
      {
        id: 8390,
        label: 'Sierra Leonian Exclusive Economic Zone',
        bounds: [
          -16.5537942137317,
          4.18725931156828,
          -11.4451941205119,
          9.13122570510221
        ]
      },
      {
        id: 8391,
        label: 'Liberian Exclusive Economic Zone',
        bounds: [
          -13.5669254214708,
          1.00106707068907,
          -7.33042609248992,
          6.93907063510184
        ]
      },
      {
        id: 8392,
        label: 'Togolese Exclusive Economic Zone',
        bounds: [
          1.1995075289496,
          2.88400611109324,
          2.41622805568053,
          6.23570082708639
        ]
      },
      {
        id: 8393,
        label: 'Beninese Exclusive Economic Zone',
        bounds: [
          1.63199889001208,
          2.96991666622132,
          2.98419444421839,
          6.51210081580022
        ]
      },
      {
        id: 8394,
        label: 'Congolese Exclusive Economic Zone',
        bounds: [
          8.91135333318994,
          -6.73445447909083,
          12.009580135515,
          -3.92522323166672
        ]
      },
      {
        id: 8395,
        label: 'Namibian Exclusive Economic Zone',
        bounds: [
          8.24328769836887,
          -30.6581384821052,
          16.8284344647789,
          -17.242947421709
        ]
      },
      {
        id: 8396,
        label: 'South African Exclusive Economic Zone',
        bounds: [
          13.348024994758,
          -38.175217499288,
          36.5306858396011,
          -26.8620647193112
        ]
      },
      {
        id: 8397,
        label: 'Sao Tome and Principe Exclusive Economic Zone',
        bounds: [
          3.20263912349697,
          -1.48152096312182,
          8.55013888869888,
          2.71048084311646
        ]
      },
      {
        id: 8398,
        label: 'Equatorial Guinean Exclusive Economic Zone',
        bounds: [
          2.28586355495932,
          -4.82015829397002,
          9.92008256915554,
          4.12340576636318
        ]
      },
      {
        id: 8399,
        label: 'Bouvet Exclusive Economic Zone',
        bounds: [
          -2.42977547875518,
          -57.7848383399174,
          9.15020014841832,
          -51.0556246887283
        ]
      },
      {
        id: 8400,
        label: 'Ghanaian Exclusive Economic Zone',
        bounds: [
          -3.78807597341347,
          1.38688066930752,
          2.16693796391638,
          6.12230396245826
        ]
      },
      {
        id: 8401,
        label: 'Clipperton Exclusive Economic Zone',
        bounds: [
          -112.618522884423,
          6.93649068789503,
          -105.815875563706,
          13.6708151655875
        ]
      },
      {
        id: 8402,
        label: 'Bermudian Exclusive Economic Zone',
        bounds: [
          -68.8227069679521,
          28.9036670251133,
          -60.7076196148532,
          35.7319803414196
        ]
      },
      {
        id: 8403,
        label: 'Ecuadorian Exclusive Economic Zone (Galapagos)',
        bounds: [
          -95.3388321351947,
          -4.76335368082766,
          -85.9106711458567,
          5.03163910735918
        ]
      },
      {
        id: 8404,
        label: 'Bahamas Exclusive Economic Zone',
        bounds: [
          -81.2314780823473,
          20.3735444444289,
          -70.5104864188687,
          30.3723937040697
        ]
      },
      {
        id: 8405,
        label: 'Turks and Caicos Exclusive Economic Zone',
        bounds: [
          -72.6805115323813,
          20.5936615713055,
          -68.8269198735529,
          25.0320178909885
        ]
      },
      {
        id: 8406,
        label: 'Cuban Exclusive Economic Zone',
        bounds: [
          -86.9396578294451,
          18.8322375237429,
          -73.582355555428,
          25.2245657812861
        ]
      },
      {
        id: 8407,
        label: 'Cayman Islands Exclusive Economic Zone',
        bounds: [
          -83.5972222218279,
          17.5841666664586,
          -78.726943000519,
          20.6334377373619
        ]
      },
      {
        id: 8408,
        label: 'Haitian Exclusive Economic Zone',
        bounds: [
          -74.9649291608519,
          14.8781559189606,
          -71.7586194275444,
          20.7225193910571
        ]
      },
      {
        id: 8409,
        label: 'Dominican Republic Exclusive Economic Zone',
        bounds: [
          -73.4747484691662,
          15.0111111111112,
          -65.8218513973248,
          24.089310214395
        ]
      },
      {
        id: 8411,
        label: 'British Virgin Islands Exclusive Economic Zone',
        bounds: [
          -65.8420654889309,
          17.964477580576,
          -63.2576405270884,
          22.0967315974854
        ]
      },
      {
        id: 8412,
        label: 'Anguilla Exclusive Economic Zone',
        bounds: [
          -63.8990937854496,
          17.9388247114913,
          -60.7366693123386,
          21.9398417342088
        ]
      },
      {
        id: 8413,
        label: 'Saint Kitts and Nevis Exclusive Economic Zone',
        bounds: [
          -63.6249244178275,
          16.3415635864905,
          -62.3741863449238,
          17.661734249636
        ]
      },
      {
        id: 8414,
        label: 'Antigua and Barbuda Exclusive Economic Zone',
        bounds: [
          -62.7509598252355,
          16.6116304393935,
          -58.3682820959418,
          20.9224902060294
        ]
      },
      {
        id: 8415,
        label: 'Montserrat Exclusive Economic Zone',
        bounds: [
          -63.0467125244633,
          15.8419444440808,
          -61.8315523331736,
          16.8885155905222
        ]
      },
      {
        id: 8416,
        label: 'Saint Lucia Exclusive Economic Zone',
        bounds: [
          -62.8640149342416,
          13.2432376303125,
          -59.9997222224025,
          14.272500000175
        ]
      },
      {
        id: 8417,
        label: 'Dominican Exclusive Economic Zone',
        bounds: [
          -62.8138888889608,
          14.4886111114137,
          -57.8750000002496,
          16.5008333328922
        ]
      },
      {
        id: 8418,
        label: 'Barbados Exclusive Economic Zone',
        bounds: [
          -60.3815780980505,
          10.6933493182685,
          -56.0015800282954,
          16.0192334989272
        ]
      },
      {
        id: 8419,
        label: 'Grenadian Exclusive Economic Zone',
        bounds: [
          -63.2670873458042,
          11.3668039510417,
          -60.7811911891219,
          13.3515861221019
        ]
      },
      {
        id: 8420,
        label: 'Trinidad and Tobago Exclusive Economic Zone',
        bounds: [
          -62.083055555769,
          9.83194444458069,
          -57.1175000002163,
          12.3546411111984
        ]
      },
      {
        id: 8421,
        label: 'Saint Vincent and the Grenadines Exclusive Economic Zone',
        bounds: [
          -63.369079340339,
          12.0620330066181,
          -60.2950624997344,
          14.0803245403454
        ]
      },
      {
        id: 8423,
        label: 'Panamanian Exclusive Economic Zone',
        bounds: [
          -84.3166666665334,
          5.00000000000023,
          -77.0499999999998,
          12.5000000000003
        ]
      },
      {
        id: 8424,
        label: 'Costa Rican Exclusive Economic Zone',
        bounds: [
          -90.4395670268964,
          2.147619162095,
          -79.9999999999999,
          11.6017078945003
        ]
      },
      {
        id: 8425,
        label: 'Nicaraguan Exclusive Economic Zone',
        bounds: [
          -89.424199883218,
          9.72309784276371,
          -79.2397479999998,
          16.0087513887659
        ]
      },
      {
        id: 8426,
        label: 'Colombian Exclusive Economic Zone',
        bounds: [
          -84.809802151148,
          1.37680935866535,
          -70.6981485178393,
          15.0333333336666
        ]
      },
      {
        id: 8427,
        label: 'Honduran Exclusive Economic Zone',
        bounds: [
          -88.2377966645842,
          12.9839884498073,
          -80.22399028942,
          19.5404999995756
        ]
      },
      {
        id: 8428,
        label: 'El Salvador Exclusive Economic Zone',
        bounds: [
          -91.4401024038835,
          9.9448777467108,
          -87.5971467247414,
          13.7477226256989
        ]
      },
      {
        id: 8429,
        label: 'Mexican Exclusive Economic Zone',
        bounds: [
          -122.179103878441,
          11.8732868281247,
          -84.6418499998773,
          32.6269444444446
        ]
      },
      {
        id: 8430,
        label: 'Guatemalan Exclusive Economic Zone',
        bounds: [
          -94.3088080971157,
          10.5841491941915,
          -88.2134439444823,
          16.0723514654478
        ]
      },
      {
        id: 8431,
        label: 'Ecuadorian Exclusive Economic Zone',
        bounds: [
          -84.4890000000499,
          -3.44414162663463,
          -78.7620195145886,
          1.45666666703352
        ]
      },
      {
        id: 8432,
        label: 'Peruvian Exclusive Economic Zone',
        bounds: [
          -84.6707068650556,
          -20.2081420878378,
          -70.3795499800473,
          -3.39212499956886
        ]
      },
      {
        id: 8433,
        label: 'Venezuelan Exclusive Economic Zone',
        bounds: [
          -72.7609532831674,
          8.30483072425862,
          -58.8199999997957,
          16.7469444444306
        ]
      },
      {
        id: 8435,
        label: 'Faeroe Exclusive Economic Zone',
        bounds: [
          -14.0008853976427,
          59.9930555555545,
          -0.486397198072041,
          65.6933638190852
        ]
      },
      {
        id: 8437,
        label: 'Jan Mayen Exclusive Economic Zone',
        bounds: [
          -13.6295555558468,
          67.611868531008,
          2.38665844393239,
          74.36302777781
        ]
      },
      {
        id: 8438,
        label: 'Greenlandic Exclusive Economic Zone',
        bounds: [
          -75.0000000001997,
          56.3870698657817,
          7.96833243569367,
          86.9940053501668
        ]
      },
      {
        id: 8439,
        label: 'Pitcairn Islands Exclusive Economic Zone',
        bounds: [
          -133.432693484616,
          -28.4247039195501,
          -121.108968934069,
          -20.5605365355326
        ]
      },
      {
        id: 8440,
        label: 'French Polynesian Exclusive Economic Zone',
        bounds: [
          -158.131064039074,
          -31.2444742878579,
          -131.978090804047,
          -4.54321936428209
        ]
      },
      {
        id: 8441,
        label: 'Kiribati Exclusive Economic Zone (Line Islands)',
        bounds: [
          -163.064722222552,
          -13.8383333335163,
          -146.814299999945,
          7.87905555536975
        ]
      },
      {
        id: 8442,
        label: 'Jarvis Island Exclusive Economic Zone',
        bounds: [
          -163.345238666131,
          -3.73480883775748,
          -156.997444444206,
          2.04211111153873
        ]
      },
      {
        id: 8443,
        label: 'Palmyra Atoll Exclusive Economic Zone',
        bounds: [
          -165.740718971803,
          2.66115992579014,
          -159.332732833054,
          9.78564397139228
        ]
      },
      {
        id: 8444,
        label: 'American Samoa Exclusive Economic Zone',
        bounds: [
          -173.774690650053,
          -17.5552687528616,
          -165.200833333192,
          -10.0244763316172
        ]
      },
      {
        id: 8445,
        label: 'Samoan Exclusive Economic Zone',
        bounds: [
          -174.511394471578,
          -15.8783835918292,
          -170.542656930173,
          -10.9608253045441
        ]
      },
      {
        id: 8446,
        label: 'Cook Islands Exclusive Economic Zone',
        bounds: [
          -168.523591182904,
          -25.3059602376746,
          -154.805555555544,
          -5.79821947185093
        ]
      },
      {
        id: 8447,
        label: 'Niue Exclusive Economic Zone',
        bounds: [
          -172.027019776241,
          -22.5036961982209,
          -166.298880198662,
          -16.5941666662585
        ]
      },
      {
        id: 8448,
        label: 'Tongan Exclusive Economic Zone',
        bounds: [
          -179.088248833087,
          -25.6960574564863,
          -171.305277777747,
          -14.1546402206695
        ]
      },
      {
        id: 8449,
        label: 'Tokelau Exclusive Economic Zone',
        bounds: [
          -175.888131333094,
          -11.0481316641448,
          -168.001512259983,
          -6.46642777781949
        ]
      },
      {
        id: 8450,
        label: 'Kiribati Exclusive Economic Zone (Phoenix Islands)',
        bounds: [
          -177.884322221793,
          -7.78488333309917,
          -167.372733333376,
          0.58663888907364
        ]
      },
      {
        id: 8451,
        label: 'Howland and Baker Islands Exclusive Economic Zone',
        bounds: [
          -179.951947914,
          -3.01483055552043,
          -173.142982750418,
          4.17012571800001
        ]
      },
      {
        id: 8452,
        label: 'Johnston Atoll Exclusive Economic Zone',
        bounds: [-173.032890418, 13.358221665, -165.9845179, 20.1321194380001]
      },
      {
        id: 8453,
        label: 'United States Exclusive Economic Zone (Hawaii)',
        bounds: [-180, 15.56312417, 180, 31.7978661719999]
      },
      {
        id: 8454,
        label: 'Wallis and Futuna Exclusive Economic Zone',
        bounds: [-180, -15.9193064582264, 180, -9.8296408277666]
      },
      {
        id: 8455,
        label: 'New Zealand Exclusive Economic Zone',
        bounds: [-180, -55.949295362, 180, -25.8882586939999]
      },
      {
        id: 8456,
        label: 'United States Exclusive Economic Zone',
        bounds: [
          -129.234826650591,
          23.8333333331674,
          -65.6997185793317,
          49.0915857549792
        ]
      },
      {
        id: 8457,
        label: 'Belizean Exclusive Economic Zone',
        bounds: [
          -88.945369839746,
          15.8874561021176,
          -86.1725123029001,
          18.4879337547392
        ]
      },
      {
        id: 8459,
        label: 'Jamaican Exclusive Economic Zone',
        bounds: [
          -80.8330555551696,
          14.0833333337664,
          -74.0094306924723,
          19.3578066280736
        ]
      },
      {
        id: 8460,
        label: 'Guyanese Exclusive Economic Zone',
        bounds: [
          -59.8448919900729,
          5.99614622766484,
          -55.7673436576834,
          10.6984172870284
        ]
      },
      {
        id: 8461,
        label: 'Surinamese Exclusive Economic Zone',
        bounds: [
          -57.3407429458301,
          5.09765624963643,
          -52.5210180197656,
          9.3530919962987
        ]
      },
      {
        id: 8462,
        label: 'French Guiana Exclusive Economic Zone',
        bounds: [
          -54.3886945245325,
          3.85019302378919,
          -49.4061334024155,
          8.83175702426723
        ]
      },
      {
        id: 8463,
        label: 'United States Exclusive Economic Zone (Alaska)',
        bounds: [-180, 47.8764414340004, 180.000000000001, 74.7088400040004]
      },
      {
        id: 8464,
        label: 'Brazilian Exclusive Economic Zone',
        bounds: [
          -54.5832126139707,
          -35.7877868848412,
          -26.0145218046374,
          7.0450660399661
        ]
      },
      {
        id: 8465,
        label: 'Chilean Exclusive Economic Zone',
        bounds: [
          -84.8413699638522,
          -59.8526818384957,
          -65.7266666666665,
          -18.3501166666666
        ]
      },
      {
        id: 8466,
        label: 'Argentinean Exclusive Economic Zone',
        bounds: [
          -69.6008367537131,
          -58.3919172146076,
          -52.6671419486417,
          -31.5270253423457
        ]
      },
      {
        id: 8467,
        label: 'Uruguayan Exclusive Economic Zone',
        bounds: [
          -58.4943505820135,
          -37.8599110422606,
          -50.0593820312555,
          -31.5234374997408
        ]
      },
      {
        id: 8468,
        label: 'Qatari Exclusive Economic Zone',
        bounds: [
          50.5645263746931,
          24.506384968592,
          53.0347222214818,
          27.0433333337669
        ]
      },
      {
        id: 8469,
        label: 'Iranian Exclusive Economic Zone',
        bounds: [
          48.1021678168915,
          23.3466666666336,
          61.6122969386531,
          38.7050152952201
        ]
      },
      {
        id: 8470,
        label: 'Iraqi Exclusive Economic Zone',
        bounds: [
          47.834923148085,
          29.478132852749,
          48.8619255863968,
          30.4528459310951
        ]
      },
      {
        id: 8471,
        label: 'Guinea Bissau Exclusive Economic Zone',
        bounds: [
          -19.8041683333095,
          8.63918329157582,
          -14.8227350708665,
          12.4135153296688
        ]
      },
      {
        id: 8472,
        label: 'Guinean Exclusive Economic Zone',
        bounds: [
          -17.9346999996143,
          7.47841011363613,
          -13.0940535070635,
          11.3022040126052
        ]
      },
      {
        id: 8473,
        label: 'Ivory Coast Exclusive Economic Zone',
        bounds: [
          -7.5944895273696,
          1.01343446293015,
          -2.85022234888203,
          5.54478287702869
        ]
      },
      {
        id: 8474,
        label: 'Nigerian Exclusive Economic Zone',
        bounds: [
          2.68486360786966,
          1.92166666628367,
          8.65353254948803,
          6.62269365748659
        ]
      },
      {
        id: 8475,
        label: 'Cameroonian Exclusive Economic Zone',
        bounds: [
          8.32607699985368,
          2.23236525075572,
          10.1274360418403,
          4.93251717053107
        ]
      },
      {
        id: 8476,
        label: 'Gabonese Exclusive Economic Zone',
        bounds: [
          6.92244599528667,
          -6.44726385004648,
          11.1805387736457,
          1.07376858145501
        ]
      },
      {
        id: 8477,
        label: 'Democratic Republic of the Congo Exclusive Economic Zone',
        bounds: [
          9.0073242641038,
          -7.06505067265037,
          13.6503998042078,
          -5.52709102592999
        ]
      },
      {
        id: 8478,
        label: 'Angolan Exclusive Economic Zone',
        bounds: [
          8.1958566226852,
          -17.2721445558265,
          13.8651725057068,
          -5.02988100090734
        ]
      },
      {
        id: 8479,
        label: 'Tanzanian Exclusive Economic Zone',
        bounds: [
          38.5376342539184,
          -10.9098516194565,
          43.2822389021043,
          -4.67831758508839
        ]
      },
      {
        id: 8480,
        label: 'Indian Exclusive Economic Zone',
        bounds: [
          65.6391495007489,
          4.7899999997003,
          89.3735488472016,
          23.990036324517
        ]
      },
      {
        id: 8481,
        label: 'Bangladeshi Exclusive Economic Zone',
        bounds: [
          88.9267789215108,
          17.8633846000778,
          92.429444444445,
          24.3776689764425
        ]
      },
      {
        id: 8482,
        label: 'Myanmar Exclusive Economic Zone',
        bounds: [
          90.1445825251641,
          9.42939011176435,
          99.1397386785977,
          21.1324286457657
        ]
      },
      {
        id: 8483,
        label: 'Malaysian Exclusive Economic Zone',
        bounds: [
          98.0250000001668,
          1.21230097770831,
          119.494531568478,
          8.99088600693165
        ]
      },
      {
        id: 8484,
        label: 'Vietnamese Exclusive Economic Zone',
        bounds: [
          102.203237277845,
          6.09666666693352,
          112.881602482734,
          21.5471630384439
        ]
      },
      {
        id: 8485,
        label: 'Singaporean Exclusive Economic Zone',
        bounds: [
          103.547384832644,
          1.13036111107658,
          104.098566631546,
          1.47797207305325
        ]
      },
      {
        id: 8486,
        label: 'Chinese Exclusive Economic Zone',
        bounds: [
          107.159444444506,
          15.979308293203,
          126.186300980407,
          41.1591639519551
        ]
      },
      {
        id: 8487,
        label: 'Japanese Exclusive Economic Zone',
        bounds: [
          122.386387501882,
          17.065081592242,
          157.637894105229,
          46.0994762588227
        ]
      },
      {
        id: 8488,
        label: 'Kiribati Exclusive Economic Zone (Gilbert Islands)',
        bounds: [-180, -4.36169722222212, 180, 5.61710277767469]
      },
      {
        id: 8489,
        label: 'Antarctic 200NM zone beyond the coastline',
        bounds: [-180, -85.5624999997748, 180, -57.188654502703]
      },
      {
        id: 8490,
        label: 'Egyptian Exclusive Economic Zone',
        bounds: [
          25.1446120341184,
          23.0930827069017,
          37.2576429111918,
          33.8208534876985
        ]
      },
      {
        id: 8491,
        label: 'Jordanian Exclusive Economic Zone',
        bounds: [
          34.8853521589317,
          29.3573559524155,
          35.001373171535,
          29.5425232001763
        ]
      },
      {
        id: 8492,
        label: 'Indonesian Exclusive Economic Zone',
        bounds: [
          92.0506046219061,
          -13.9421388891982,
          141.399999999901,
          7.78333333376673
        ]
      },
      {
        id: 8493,
        label: 'Canadian Exclusive Economic Zone',
        bounds: [
          -141.00000000326,
          40.0511489973287,
          -47.6941470240656,
          86.4318731326392
        ]
      },
      {
        id: 8494,
        label: 'Saint-Pierre and Miquelon Exclusive Economic Zone',
        bounds: [
          -57.0967777776721,
          43.4161111113388,
          -55.9033333332665,
          47.3650000000501
        ]
      },
      {
        id: 8495,
        label: 'Saint-Martin Exclusive Economic Zone',
        bounds: [
          -63.6340437574133,
          17.8736981507492,
          -62.7394444444055,
          18.1902777779971
        ]
      },
      {
        id: 8758,
        label: 'East Timorian Exclusive Economic Zone',
        bounds: [
          124.94133478877,
          -11.3341388888353,
          128.207878757309,
          -8.1043673667603
        ]
      },
      {
        id: 21787,
        label: 'Chilean Exclusive Economic Zone (Easter Island)',
        bounds: [
          -113.196552235265,
          -30.5468447905411,
          -101.641473503396,
          -23.1231570826642
        ]
      },
      {
        id: 21788,
        label: 'Guernsey Exclusive Economic Zone',
        bounds: [
          -3.67436238581465,
          49.2153181800398,
          -2.04888888888865,
          50.1529722222013
        ]
      },
      {
        id: 21789,
        label: 'Jersey Exclusive Economic Zone',
        bounds: [
          -2.55801007991602,
          48.8721666665586,
          -1.83333333376601,
          49.4322031543653
        ]
      },
      {
        id: 21790,
        label: 'Monégasque Exclusive Economic Zone',
        bounds: [
          7.41978981790348,
          42.9463888889364,
          7.75694444423098,
          43.7498367278634
        ]
      },
      {
        id: 21791,
        label: 'Oecussi Ambeno Exclusive Economic Zone',
        bounds: [
          124.031751600456,
          -9.33559024299507,
          124.497222003593,
          -8.81366893817082
        ]
      },
      {
        id: 21792,
        label: 'Joint regime area Colombia / Jamaica',
        bounds: [
          -80.0181944443179,
          14.4936111108641,
          -78.4305555552944,
          16.1694444445058
        ]
      },
      {
        id: 21795,
        label: 'Joint regime area Australia / East Timor',
        bounds: [
          126.001223517786,
          -11.3341388888353,
          128.207878757309,
          -9.37996517325399
        ]
      },
      {
        id: 21796,
        label: 'Joint regime area Japan / Korea',
        bounds: [
          125.92500000025,
          28.5999999996003,
          129.150000000101,
          32.9499999999003
        ]
      },
      {
        id: 21797,
        label: 'Joint regime area Nigeria / Sao Tome and Principe',
        bounds: [
          3.57583333354154,
          1.15472222185312,
          7.60694444453082,
          3.03944444430581
        ]
      },
      {
        id: 21798,
        label: 'Protected Zone established under the Torres Strait Treaty',
        bounds: [142.059442453, -9.75517416277785, 142.851967567, -9.18795310277935]
      },
      {
        id: 21803,
        label: 'Sint-Maarten Exclusive Economic Zone',
        bounds: [
          -63.2863527710633,
          17.8149491925513,
          -62.9581066121302,
          18.0558293353366
        ]
      },
      {
        id: 22491,
        label: 'Bosnian and Herzegovinian Exclusive Economic Zone',
        bounds: [
          17.5419980870422,
          42.8834237947724,
          17.6479896311169,
          42.9383616446743
        ]
      },
      {
        id: 22756,
        label:
          'Chilean Exclusive Economic Zone (San Felix and San Ambrosio islands)',
        bounds: [
          -83.8278031323647,
          -29.6983584043638,
          -76.1531501288059,
          -22.9399559979893
        ]
      },
      {
        id: 26517,
        label: 'Curaçaoan Exclusive Economic Zone',
        bounds: [
          -69.5459957212254,
          11.6666666662338,
          -68.4052227101598,
          15.2418545940144
        ]
      },
      {
        id: 26518,
        label: 'Saba Exclusive Economic Zone',
        bounds: [
          -64.0150172677326,
          16.678716050905,
          -63.0197448753256,
          17.9479970688097
        ]
      },
      {
        id: 26519,
        label: 'Aruban Exclusive Economic Zone',
        bounds: [
          -70.4166666664334,
          12.1505012309471,
          -68.8701690729443,
          15.3000000001001
        ]
      },
      {
        id: 26520,
        label: 'Bonaire Exclusive Economic Zone',
        bounds: [
          -68.7201921813239,
          11.6666666662338,
          -67.9897222219027,
          14.2711878920077
        ]
      },
      {
        id: 26521,
        label: 'Bruneian Exclusive Economic Zone',
        bounds: [
          111.72595735521,
          4.55212414291537,
          115.256446111112,
          7.58737739072853
        ]
      },
      {
        id: 26522,
        label: 'Kazakh Exclusive Economic Zone',
        bounds: [
          49.0000000002003,
          41.2227667436904,
          53.8452577592386,
          47.13060986965
        ]
      },
      {
        id: 26523,
        label: 'Turkmen Exclusive Economic Zone',
        bounds: [
          51.3765341849053,
          37.3188942923381,
          54.0115487574697,
          41.7631349567133
        ]
      },
      {
        id: 26524,
        label: 'Azerbaijanis Exclusive Economic Zone',
        bounds: [
          48.59387135418,
          38.2852921014496,
          51.8173530933708,
          42.6055226116292
        ]
      },
      {
        id: 26526,
        label: 'Sint-Eustatius Exclusive Economic Zone',
        bounds: [
          -63.623050316119,
          16.6812985503878,
          -62.7695506627327,
          17.7361826323227
        ]
      },
      {
        id: 26582,
        label: 'Overlapping claim: Sudan / Egypt',
        bounds: [
          35.6135107282381,
          21.8896734594302,
          37.829269153749,
          23.333131925598
        ]
      },
      {
        id: 33176,
        label: 'Overlapping claim: Kenya / Somalia',
        bounds: [
          41.5662163709227,
          -3.55475448633041,
          45.9451951699101,
          -1.65399999999994
        ]
      },
      {
        id: 33177,
        label: 'Guadeloupean Exclusive Economic Zone',
        bounds: [
          -62.8138888889608,
          15.0649999998503,
          -57.5336458138573,
          18.5415325500873
        ]
      },
      {
        id: 33178,
        label: 'Martinican Exclusive Economic Zone',
        bounds: [
          -62.8138888889608,
          14.0805555554947,
          -57.5313079941685,
          16.4858633511582
        ]
      },
      {
        id: 33179,
        label: 'Puerto Rican Exclusive Economic Zone',
        bounds: [
          -68.4965172383797,
          14.9300000002998,
          -65.0153809389791,
          21.8054017245101
        ]
      },
      {
        id: 33180,
        label: 'Virgin Islander Exclusive Economic Zone',
        bounds: [
          -65.9814032622506,
          15.6549141360788,
          -63.8873403378861,
          19.6214941733176
        ]
      },
      {
        id: 33181,
        label: 'Svalvard Exclusive Economic Zone',
        bounds: [
          -3.3438750003308,
          72.1730895277447,
          38.0000000000004,
          84.1457766111021
        ]
      },
      {
        id: 33183,
        label: 'Colombian Exclusive Economic Zone (Quitasueño)',
        bounds: [
          -80.5774573546339,
          14.0807467483933,
          -80.0188427397419,
          14.6735124909165
        ]
      },
      {
        id: 33184,
        label: 'Colombian Exclusive Economic Zone (Serrana)',
        bounds: [
          -81.4465156561179,
          13.9134639291688,
          -80.8971400411334,
          14.6962357144066
        ]
      },
      {
        id: 33185,
        label: 'Overlapping claim: Trinidad and Tobago / Venezuela / Guyana',
        bounds: [
          -58.8199999997998,
          10.1663888893108,
          -57.1144245391209,
          10.9764999997838
        ]
      },
      {
        id: 48943,
        label: 'Overlapping claim: Canada / USA',
        bounds: [
          -141.000000001085,
          69.6477705673681,
          -137.503413027,
          73.3976127098975
        ]
      },
      {
        id: 48944,
        label: 'Overlapping claim Mayotte: France / Comoros',
        bounds: [
          43.484963946377,
          -14.5306505965476,
          46.6859789899112,
          -11.1397222222181
        ]
      },
      {
        id: 48945,
        label: 'Overlapping claim Glorioso Islands: France / Madagascar',
        bounds: [
          45.7675000000001,
          -12.8093917766043,
          48.4865013688435,
          -10.6502777773972
        ]
      },
      {
        id: 48946,
        label: 'Overlapping claim Ile Tromelin: Reunion / Mauritus',
        bounds: [
          52.3906106332744,
          -18.8000000000999,
          57.214187301703,
          -12.5073023755042
        ]
      },
      {
        id: 48947,
        label: 'Overlapping claim: Iran / United Arab Emirates',
        bounds: [
          54.7527319788983,
          25.495889125583,
          55.7280695977342,
          26.4129270884146
        ]
      },
      {
        id: 48948,
        label:
          'Overlapping claim Matthew and Hunter Islands: New Caledonia / Vanuatu',
        bounds: [
          170.05927827779,
          -25.7467121187692,
          174.275692592003,
          -20.0225000001398
        ]
      },
      {
        id: 48950,
        label: 'Overlapping claim Kuril Islands: Japan / Russia',
        bounds: [
          145.231133794889,
          40.3210150837793,
          151.038463083505,
          47.7308118399948
        ]
      },
      {
        id: 48951,
        label: 'Overlapping claim Navassa Island: USA / Haiti',
        bounds: [
          -75.8324362326459,
          17.333679761412,
          -74.7345134538327,
          19.1635795997189
        ]
      },
      {
        id: 48952,
        label: 'Saint-Barthélemy Exclusive Economic Zone',
        bounds: [
          -63.1065757264884,
          17.6417167878995,
          -62.2263444069686,
          18.3120914221814
        ]
      },
      {
        id: 48953,
        label: 'Palestinian Exclusive Economic Zone',
        bounds: [
          34.0089688523806,
          31.3359759445117,
          34.4727040981462,
          31.789463972767
        ]
      },
      {
        id: 48954,
        label: 'Overlapping claim Senkaku Islands: Japan / China / Taiwan',
        bounds: [
          122.610685858466,
          25.0534202264624,
          125.679693382644,
          28.3134836912195
        ]
      },
      {
        id: 48955,
        label: 'Overlapping claim Liancourt Rocks: Japan / South Korea',
        bounds: [
          131.610440934961,
          37.0370980870898,
          132.122682930658,
          37.448042721684
        ]
      },
      {
        id: 48956,
        label: 'Overlapping claim Doumeira Islands: Djibouti / Eritrea',
        bounds: [
          43.1290278559509,
          12.6800570415994,
          43.3009920492441,
          12.8615852982231
        ]
      },
      {
        id: 48957,
        label: 'Guam Exclusive Economic Zone',
        bounds: [
          141.195406767808,
          10.9539722225401,
          148.077095484269,
          15.7266873468436
        ]
      },
      {
        id: 48961,
        label: 'Joint regime area Argentina / Uruguay',
        bounds: [
          -56.7833333333333,
          -37.5333333333334,
          -53.5333333333332,
          -34.9704528336932
        ]
      },
      {
        id: 48962,
        label: 'Joint regime area Peru / Ecuador',
        bounds: [
          -84.5158333336414,
          -3.56055555599409,
          -80.3836111113637,
          -3.22444444445551
        ]
      },
      {
        id: 48964,
        label: 'Joint regime area Senegal / Guinea Bissau',
        bounds: [
          -20.1891666668079,
          9.33944444430591,
          -16.8891666671077,
          12.3349999995507
        ]
      },
      {
        id: 48965,
        label: 'Overlapping claim: Venezuela / Aruba / Dominican Republic',
        bounds: [
          -70.4176804038274,
          15.1774740092182,
          -68.8622222217778,
          15.4133333332669
        ]
      },
      {
        id: 48966,
        label: 'Joint regime area Spain / France',
        bounds: [
          -5.66666666638309,
          45.0083333331169,
          -4.99999999979983,
          45.5000000000002
        ]
      },
      {
        id: 48967,
        label: 'Joint regime area United Kingdom / Denmark (Faeroe Islands)',
        bounds: [
          -11.2659276300558,
          59.8305555557944,
          -4.73611111073888,
          60.4019444447804
        ]
      },
      {
        id: 48968,
        label: 'Joint regime area Costa Rica / Ecuador (Galapagos)',
        bounds: [
          -90.4711111109886,
          1.98305555556954,
          -86.9844444441554,
          4.7197222221032
        ]
      },
      {
        id: 48969,
        label: 'Joint regime area Guyana / Barbados',
        bounds: [-57.1738888888889, 10.6044444444444, -57.0774999999999, 10.745]
      },
      {
        id: 48970,
        label: 'Joint regime area Colombia / Dominican Republic',
        bounds: [
          -73.341666666883,
          14.6749999995506,
          -71.6666666666331,
          15.3666666669332
        ]
      },
      {
        id: 48971,
        label: 'Overlapping claim: Venezuela / Colombia / Dominican Republic',
        bounds: [-71.675, 14.9644444447554, -70.4176804038274, 15.1774740092183]
      },
      {
        id: 48972,
        label: 'Joint regime area Honduras / Cayman Islands',
        bounds: [-84.1999999998, 18.4166666662339, -83.6333333330668, 18.95]
      },
      {
        id: 48973,
        label: 'Joint regime area Iceland / Denmark (Faeroe Islands)',
        bounds: [-12.1453944439981, 62.5393222226426, -10.0932333331515, 63.5]
      },
      {
        id: 48974,
        label: 'Joint regime area Ecuador / Colombia',
        bounds: [
          -83.9758333333331,
          1.28916666682403,
          -79.0438888892655,
          1.62444444444441
        ]
      },
      {
        id: 48975,
        label: 'Joint regime area Iceland / Norway (Jan Mayen)',
        bounds: [
          -10.4999999997073,
          68.0000000000001,
          -6.50000000039941,
          70.5833333332668
        ]
      },
      {
        id: 48976,
        label: 'Joint regime area Italy / France',
        bounds: [
          8.99888888861165,
          41.2711111114889,
          9.0988888893113,
          41.3433333330671
        ]
      },
      {
        id: 48977,
        label: 'Joint regime area Sweden / Norway',
        bounds: [
          10.2681388888988,
          58.7614722219656,
          10.6402777777976,
          58.8927777777725
        ]
      },
      {
        id: 48978,
        label: 'Joint regime area United States / Russia',
        bounds: [-180, 51.1700648212511, 180.000000000001, 73.3560218927556]
      },
      {
        id: 48980,
        label: 'Northern Mariana Exclusive Economic Zone',
        bounds: [
          141.331091398749,
          12.2278801210709,
          149.52928010999,
          23.8956543166934
        ]
      },
      {
        id: 48982,
        label: 'Overlapping claim: Puerto Rico / Dominican Republic',
        bounds: [
          -67.7828867398964,
          18.875358498707,
          -65.8412662331516,
          21.8542509470001
        ]
      },
      {
        id: 48984,
        label: 'Colombian Exclusive Economic Zone (Serranilla)',
        bounds: [
          -80.0630555552694,
          15.5963888887363,
          -79.648055555919,
          15.9983333337165
        ]
      },
      {
        id: 48985,
        label: 'Colombian Exclusive Economic Zone (Bajo Nuevo)',
        bounds: [
          -78.8408333332915,
          15.6491666669082,
          -78.4258333330418,
          16.0508333328924
        ]
      },
      {
        id: 48997,
        label: 'Overlapping claim Chafarinas Islands: Spain / Morocco',
        bounds: [
          -2.52455518247069,
          35.1543849935728,
          -2.38372166915116,
          35.1866666666668
        ]
      },
      {
        id: 48998,
        label: 'Overlapping claim Perejil Island: Spain / Morocco',
        bounds: [
          -5.42918921192302,
          35.9107761383058,
          -5.41258849782872,
          35.9184574725242
        ]
      },
      {
        id: 48999,
        label: 'Overlapping claim Peñón de Vélez de la Gomera: Spain / Morocco',
        bounds: [
          -4.31910695003256,
          35.1694523556418,
          -4.29473267467301,
          35.1988254198101
        ]
      },
      {
        id: 49000,
        label: 'Overlapping claim Melilla: Spain / Morocco',
        bounds: [
          -2.95220494280352,
          35.2716231893589,
          -2.88090580247967,
          35.3499035607467
        ]
      },
      {
        id: 49001,
        label: 'Overlapping claim Alhucemas Islands: Spain / Morocco',
        bounds: [
          -3.90510090448305,
          35.2094684518079,
          -3.84587653858779,
          35.2653351969373
        ]
      },
      {
        id: 49002,
        label: 'Overlapping claim Ceuta: Spain / Morocco',
        bounds: [
          -5.38584086145954,
          35.8155912167014,
          -5.27746639201371,
          35.9174648589949
        ]
      },
      {
        id: 49003,
        label: 'Overlapping claim South China Sea',
        bounds: [
          109.572031787987,
          6.10049174374757,
          116.567874170815,
          18.2257724745524
        ]
      },
      {
        id: 50167,
        label: 'Joint regime area Croatia / Slovenia',
        bounds: [
          13.2116666666666,
          45.3990555600001,
          13.4521388900001,
          45.5649466701456
        ]
      },
      {
        id: 50170,
        label: 'Overlapping claim Qatar / Saudi Arabia / United Arab Emirates',
        bounds: [
          51.4355555555555,
          24.6380555555555,
          51.7254312946926,
          24.7499836750548
        ]
      }
    ];

  }
};