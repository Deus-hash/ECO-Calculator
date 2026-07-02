
    const DB = [
      {id:'eps30',name:'Пенополистирол EPS',rho:30,lam:0.039,F:4.18,e:100.87,color:'#d4c8a0',tex:'tex-insulation'},
      {id:'eps15',name:'Пенополистирол EPS',rho:15,lam:0.031,F:3.25,e:74.31,color:'#d8cca8',tex:'tex-insulation'},
      {id:'eps30b',name:'Пенополистирол EPS (плиты)',rho:30,lam:0.049,F:4.261,e:105.4,color:'#d4c8a0',tex:'tex-insulation'},
      {id:'eps20',name:'Пенополистирол EPS (плиты)',rho:20,lam:0.051,F:3.27,e:85.8,color:'#d8cca8',tex:'tex-insulation'},
      {id:'eps15b',name:'Пенополистирол EPS (плиты)',rho:15,lam:0.053,F:2.95,e:83.8,color:'#dcd0b0',tex:'tex-insulation'},
      {id:'eps10',name:'Пенополистирол EPS (плиты)',rho:10,lam:0.057,F:2.85,e:81.2,color:'#dcd0b0',tex:'tex-insulation'},
      {id:'eps5',name:'Пенополистирол EPS (плиты)',rho:5,lam:0.072,F:2.75,e:80.8,color:'#e0d4b8',tex:'tex-insulation'},
      {id:'eps-facade',name:'Пенополистирол фасадный',rho:16,lam:0.048,F:4.36,e:108.4,color:'#d4c8a0',tex:'tex-insulation'},
      {id:'xps30',name:'Экструзионный XPS',rho:30,lam:0.033,F:5.52,e:98.6,color:'#c8c4a8',tex:'tex-insulation'},
      {id:'xps40',name:'Экструзионный XPS',rho:40,lam:0.035,F:5.21,e:98.11,color:'#c4c0a4',tex:'tex-insulation'},
      {id:'xps35',name:'Экструзионный XPS (плиты)',rho:35,lam:0.033,F:6.11,e:100.97,color:'#c8c4a8',tex:'tex-insulation'},
      {id:'xps35b',name:'Экструзионный XPS',rho:38,lam:0.036,F:5.23,e:98.15,color:'#c4c0a4',tex:'tex-insulation'},
      {id:'pir40',name:'Полиизоцианурат PIR',rho:40,lam:0.022,F:6.51,e:99.63,color:'#c0b898',tex:'tex-insulation'},
      {id:'pir35',name:'Полиизоцианурат PIR',rho:35,lam:0.022,F:5.83,e:81.0,color:'#c4bc9c',tex:'tex-insulation'},
      {id:'pir30',name:'Полиизоцианурат PIR',rho:30,lam:0.022,F:3.33,e:63.61,color:'#c8c0a0',tex:'tex-insulation'},
      {id:'pir20',name:'Полиизоцианурат PIR',rho:20,lam:0.021,F:2.63,e:58.97,color:'#ccc4a8',tex:'tex-insulation'},
      {id:'kfp15',name:'Карбамидно-формальдегидный (Пеноизол)',rho:15,lam:0.037,F:3.776,e:75.375,color:'#e0dcc8',tex:'tex-foam'},
      {id:'kfp10',name:'Карбамидно-формальдегидный (Пеноизол)',rho:10,lam:0.035,F:2.882,e:72.535,color:'#e4e0cc',tex:'tex-foam'},
      {id:'pur35',name:'Пенополиуретан PUR',rho:35,lam:0.026,F:16.6,e:267.4,color:'#c0b490',tex:'tex-insulation'},
      {id:'pur30',name:'Пенополиуретан PUR',rho:30,lam:0.025,F:15.0,e:241.4,color:'#c4b894',tex:'tex-insulation'},
      {id:'pur25',name:'Пенополиуретан PUR',rho:25,lam:0.024,F:15.0,e:241.4,color:'#c8bc98',tex:'tex-insulation'},
      {id:'pur20',name:'Пенополиуретан PUR',rho:20,lam:0.023,F:12.9,e:216.6,color:'#ccc09c',tex:'tex-insulation'},
      {id:'pur15',name:'Пенополиуретан PUR',rho:15,lam:0.022,F:12.2,e:173.5,color:'#d0c4a0',tex:'tex-insulation'},
      {id:'pur80',name:'Плиты ППУ',rho:80,lam:0.047,F:3.68,e:121.5,color:'#b8ac88',tex:'tex-insulation'},
      {id:'pur60',name:'Плиты ППУ',rho:60,lam:0.04,F:3.58,e:111.5,color:'#c0b490',tex:'tex-insulation'},
      {id:'pur40',name:'Плиты ППУ',rho:40,lam:0.033,F:3.48,e:101.5,color:'#c8bc98',tex:'tex-insulation'},
      {id:'mw160',name:'Минвата каменная',rho:160,lam:0.047,F:1.35,e:29.6,color:'#b8a888',tex:'tex-insulation'},
      {id:'mw140',name:'Минвата каменная',rho:140,lam:0.046,F:1.31,e:27.4,color:'#bcac8c',tex:'tex-insulation'},
      {id:'mw120',name:'Минвата каменная',rho:120,lam:0.046,F:1.29,e:26.4,color:'#c0b090',tex:'tex-insulation'},
      {id:'mw100',name:'Минвата каменная ρ=100',rho:100,lam:0.044,F:1.26,e:24.5,color:'#c4b494',tex:'tex-insulation'},
      {id:'mw80',name:'Минвата каменная ρ=80',rho:80,lam:0.045,F:1.26,e:24.5,color:'#c8b898',tex:'tex-insulation'},
      {id:'mw60',name:'Минвата каменная ρ=60',rho:60,lam:0.044,F:1.22,e:21.5,color:'#ccbc9c',tex:'tex-insulation'},
      {id:'mw50',name:'Минвата каменная ρ=50',rho:50,lam:0.043,F:1.19,e:19.2,color:'#d0c0a0',tex:'tex-insulation'},
      {id:'mw40',name:'Минвата каменная ρ=40',rho:40,lam:0.037,F:1.12,e:17.8,color:'#d4c4a4',tex:'tex-insulation'},
      {id:'mw35',name:'Минвата каменная ρ=35',rho:35,lam:0.035,F:1.05,e:16.8,color:'#d4c8a8',tex:'tex-insulation'},
      {id:'sw80',name:'Минвата стеклянная ρ=80',rho:80,lam:0.05,F:2.55,e:57.5,color:'#c0bc98',tex:'tex-insulation'},
      {id:'sw70',name:'Минвата стеклянная ρ=70',rho:70,lam:0.047,F:2.35,e:55.5,color:'#c4c09c',tex:'tex-insulation'},
      {id:'sw60',name:'Минвата стеклянная ρ=60',rho:60,lam:0.046,F:2.15,e:50.5,color:'#c8c4a0',tex:'tex-insulation'},
      {id:'sw50',name:'Минвата стеклянная ρ=50',rho:50,lam:0.045,F:1.95,e:45.5,color:'#ccc8a4',tex:'tex-insulation'},
      {id:'sw40',name:'Минвата стеклянная ρ=40',rho:40,lam:0.044,F:1.9,e:43.5,color:'#d0cca8',tex:'tex-insulation'},
      {id:'sw30',name:'Минвата стеклянная ρ=30',rho:30,lam:0.047,F:1.75,e:40.5,color:'#d4d0ac',tex:'tex-insulation'},
      {id:'sw20',name:'Минвата стеклянная ρ=20',rho:20,lam:0.048,F:1.55,e:35.5,color:'#d8d4b0',tex:'tex-insulation'},
      {id:'sw15',name:'Минвата стеклянная ρ=15',rho:15,lam:0.049,F:1.45,e:30.5,color:'#dcd8b4',tex:'tex-insulation'},
      {id:'sw10',name:'Минвата стеклянная ρ=10',rho:10,lam:0.05,F:1.35,e:28.1,color:'#dcd8b4',tex:'tex-insulation'},
      {id:'foamglass100',name:'Пеностекло ρ=100',rho:100,lam:0.062,F:9.41,e:153,color:'#a8b8b0',tex:'tex-aerated'},
      {id:'foamglass50',name:'Пеностекло ρ=50',rho:50,lam:0.046,F:4.52,e:75.5,color:'#b0c0b8',tex:'tex-aerated'},
      {id:'foamglass30',name:'Пеностекло ρ=30',rho:30,lam:0.035,F:1.3,e:28.8,color:'#b8c8c0',tex:'tex-aerated'},
      {id:'dw1000',name:'ДВП/ДСП ρ=1000',rho:1000,lam:0.29,F:0.72,e:11.1,color:'#8a6a4a',tex:'tex-wood'},
      {id:'dw800',name:'ДВП/ДСП ρ=800',rho:800,lam:0.23,F:0.62,e:10.9,color:'#8a6a4a',tex:'tex-wood'},
      {id:'dw600',name:'ДВП/ДСП ρ=600',rho:600,lam:0.16,F:0.54,e:10.6,color:'#9a7a5a',tex:'tex-wood'},
      {id:'dw400',name:'ДВП/ДСП ρ=400',rho:400,lam:0.13,F:0.25,e:9.7,color:'#9a7a5a',tex:'tex-wood'},
      {id:'dw200',name:'ДВП/ДСП ρ=200',rho:200,lam:0.08,F:0.13,e:9.4,color:'#a88a6a',tex:'tex-wood'},
      {id:'wood-wool180',name:'Древесная вата ρ=180',rho:180,lam:0.07,F:0.12,e:20.27,color:'#a88868',tex:'tex-wood'},
      {id:'wood-wool60',name:'Древесная вата ρ=60',rho:60,lam:0.038,F:0.98,e:20.0,color:'#b89878',tex:'tex-insulation'},
      {id:'paper-wool40',name:'Бумажная вата',rho:40,lam:0.037,F:0.63,e:20.2,color:'#c8b898',tex:'tex-sand'},
      {id:'cellulose50',name:'Целлюлозное волокно',rho:50,lam:0.04,F:1.83,e:10.49,color:'#c0b090',tex:'tex-sand'},
      {id:'ecowool60',name:'Эковата',rho:60,lam:0.049,F:0.75,e:3.3,color:'#bcac8c',tex:'tex-sand'},
      {id:'ecowool50',name:'Эковата',rho:50,lam:0.045,F:0.446,e:2.12,color:'#c0b090',tex:'tex-sand'},
      {id:'ecowool40',name:'Эковата',rho:40,lam:0.04,F:0.142,e:0.94,color:'#c4b494',tex:'tex-sand'},
      {id:'sheep-wool40',name:'Овечья шерсть ρ=40',rho:40,lam:0.035,F:0.99,e:23.2,color:'#c8b898',tex:'tex-insulation'},
      {id:'sheep-wool30',name:'Овечья шерсть ρ=30',rho:30,lam:0.033,F:0.82,e:14.7,color:'#ccc09c',tex:'tex-insulation'},
      {id:'straw100',name:'Тюк соломы',rho:100,lam:0.067,F:0.06,e:0.24,color:'#c8b070',tex:'tex-sand'},
      {id:'gypsum1350',name:'Плиты гипсовые пазогребневые ρ=1350',rho:1350,lam:0.56,F:0.13,e:1.9,color:'#c0b8b0',tex:'tex-plaster'},
      {id:'gypsum1100',name:'Плиты гипсовые пазогребневые ρ=1100',rho:1100,lam:0.41,F:0.125,e:1.85,color:'#c4bcb4',tex:'tex-plaster'},
      {id:'gyprock1050',name:'Гипсокартон ρ=1050',rho:1050,lam:0.36,F:0.42,e:6.95,color:'#c0b8b0',tex:'tex-plaster'},
      {id:'gyprock800',name:'Гипсокартон ρ=800',rho:800,lam:0.21,F:0.38,e:6.75,color:'#c8c0b8',tex:'tex-plaster'},
      {id:'perlite166',name:'Перлит',rho:166,lam:0.055,F:0.493,e:9.35,color:'#c8c0b0',tex:'tex-sand'},
      {id:'perl-bit300',name:'Перлит на битуме ρ=300',rho:300,lam:0.099,F:0.52,e:10.1,color:'#a09888',tex:'tex-concrete'},
      {id:'perl-bit250',name:'Перлит на битуме ρ=250',rho:250,lam:0.099,F:0.49,e:9.8,color:'#a89c8c',tex:'tex-concrete'},
      {id:'perl-bit225',name:'Перлит на битуме ρ=225',rho:225,lam:0.094,F:0.454,e:9.7,color:'#ac9c8c',tex:'tex-concrete'},
      {id:'perl-bit200',name:'Перлит на битуме ρ=200',rho:200,lam:0.09,F:0.41,e:9.5,color:'#b0a090',tex:'tex-concrete'},
      {id:'pe-noncross20',name:'Пенополиэтилен несшитый ρ=20',rho:20,lam:0.042,F:3.7,e:92.3,color:'#d0c8b0',tex:'tex-insulation'},
      {id:'pe-noncross25',name:'Пенополиэтилен несшитый ρ=25',rho:25,lam:0.042,F:3.76,e:95.3,color:'#ccc4a8',tex:'tex-insulation'},
      {id:'cork150',name:'Пробковая плита',rho:150,lam:0.049,F:0.81,e:51.52,color:'#a08060',tex:'tex-wood'},
      {id:'cork80',name:'Пробка',rho:80,lam:0.04,F:0.19,e:4.0,color:'#b09070',tex:'tex-wood'},
      {id:'linen40',name:'Лён',rho:40,lam:0.042,F:1.7,e:39.5,color:'#c0b090',tex:'tex-sand'},
      {id:'hemp40',name:'Конопля',rho:40,lam:0.038,F:-0.35,e:37.5,color:'#b8a888',tex:'tex-sand'},
      {id:'kenaf40',name:'Кенаф (конопля)',rho:40,lam:0.038,F:3.17,e:59.37,color:'#b8a888',tex:'tex-sand'},
      {id:'cotton30',name:'Хлопок',rho:30,lam:0.039,F:-1.2,e:48.0,color:'#d4ccb8',tex:'tex-sand'},
      {id:'textile20',name:'Текстильное волокно',rho:20,lam:0.044,F:1.1,e:15.0,color:'#c8c0a8',tex:'tex-sand'},
      {id:'pet30',name:'ПЭТ-волокно',rho:30,lam:0.035,F:1.783,e:83.72,color:'#c0b898',tex:'tex-insulation'},
      {id:'aerogel15',name:'Аэрогель',rho:15,lam:0.015,F:18.7,e:372.0,color:'#c8d8d8',tex:'tex-aerated'},
      {id:'vip180',name:'ВИП-панели',rho:180,lam:0.0025,F:42.0,e:1016,color:'#a0a8a8',tex:'tex-concrete'},
      {id:'vermiculite172',name:'Вермикулит',rho:172,lam:0.062,F:10.45,e:148.98,color:'#a09888',tex:'tex-sand'},
      {id:'keramzit600',name:'Керамзитовый гравий ρ=600',rho:600,lam:0.19,F:0.12,e:1.8,color:'#a09078',tex:'tex-concrete'},
      {id:'keramzit500',name:'Керамзитовый гравий ρ=500',rho:500,lam:0.175,F:0.115,e:1.75,color:'#a89880',tex:'tex-concrete'},
      {id:'keramzit450',name:'Керамзитовый гравий ρ=450',rho:450,lam:0.16,F:0.11,e:1.7,color:'#ac9c84',tex:'tex-concrete'},
      {id:'keramzit400',name:'Керамзитовый гравий ρ=400',rho:400,lam:0.15,F:0.105,e:1.65,color:'#b0a088',tex:'tex-concrete'},
      {id:'perl-sh500',name:'Щебень/песок перлитовый ρ=500',rho:500,lam:0.11,F:0.415,e:1.55,color:'#b0a898',tex:'tex-sand'},
      {id:'perl-sh400',name:'Щебень/песок перлитовый ρ=400',rho:400,lam:0.095,F:0.401,e:1.54,color:'#b4ac9c',tex:'tex-sand'},
      {id:'perl-sh350',name:'Щебень/песок перлитовый ρ=350',rho:350,lam:0.085,F:0.395,e:1.53,color:'#b8b0a0',tex:'tex-sand'},
      {id:'perl-sh300',name:'Щебень/песок перлитовый ρ=300',rho:300,lam:0.08,F:0.39,e:1.52,color:'#bcb4a4',tex:'tex-sand'},
      {id:'sand1600',name:'Песок строительный',rho:1600,lam:0.58,F:0.01,e:0.05,color:'#c8c0a8',tex:'tex-sand'},
      {id:'rc2500',name:'Железобетон сборный',rho:2500,lam:2.04,F:0.543,e:2.0,color:'#7a7a7a',tex:'tex-concrete'},
      {id:'concrete-m200',name:'Бетон М200',rho:2400,lam:1.86,F:0.106,e:0.731,color:'#808080',tex:'tex-concrete'},
      {id:'concrete-m300',name:'Бетон М300',rho:2400,lam:1.86,F:0.139,e:0.862,color:'#808080',tex:'tex-concrete'},
      {id:'concrete-m300b',name:'Бетон М300',rho:2500,lam:1.88,F:0.173,e:0.871,color:'#7a7a7a',tex:'tex-concrete'},
      {id:'concrete16-20',name:'Бетон 16-20 МПа',rho:2300,lam:1.85,F:0.1,e:0.7,color:'#828282',tex:'tex-concrete'},
      {id:'concrete20-25',name:'Бетон 20-25 МПа',rho:2350,lam:1.86,F:0.107,e:0.74,color:'#828282',tex:'tex-concrete'},
      {id:'concrete25-30',name:'Бетон 25-30 МПа',rho:2450,lam:1.87,F:0.113,e:0.78,color:'#7e7e7e',tex:'tex-concrete'},
      {id:'concrete30-35',name:'Бетон 30-35 МПа',rho:2450,lam:1.87,F:0.12,e:0.82,color:'#7e7e7e',tex:'tex-concrete'},
      {id:'concrete35-40',name:'Бетон 35-40 МПа',rho:2500,lam:1.88,F:0.132,e:0.88,color:'#7a7a7a',tex:'tex-concrete'},
      {id:'concrete40-50',name:'Бетон 40-50 МПа',rho:2500,lam:1.88,F:0.151,e:1.0,color:'#7a7a7a',tex:'tex-concrete'},
      {id:'keramzit-b1800',name:'Керамзитобетон ρ=1800',rho:1800,lam:0.92,F:0.445,e:1.75,color:'#8a8a7a',tex:'tex-concrete'},
      {id:'keramzit-b1600',name:'Керамзитобетон ρ=1600',rho:1600,lam:0.79,F:0.435,e:1.7,color:'#8e8e7e',tex:'tex-concrete'},
      {id:'keramzit-b1400',name:'Керамзитобетон ρ=1400',rho:1400,lam:0.65,F:0.425,e:1.65,color:'#929282',tex:'tex-concrete'},
      {id:'keramzit-b1200',name:'Керамзитобетон ρ=1200',rho:1200,lam:0.52,F:0.415,e:1.6,color:'#969686',tex:'tex-concrete'},
      {id:'keramzit-b1000',name:'Керамзитобетон ρ=1000',rho:1000,lam:0.41,F:0.405,e:1.55,color:'#9a9a8a',tex:'tex-concrete'},
      {id:'keramzit-b800',name:'Керамзитобетон ρ=800',rho:800,lam:0.31,F:0.395,e:1.5,color:'#9e9e8e',tex:'tex-concrete'},
      {id:'keramzit-b600',name:'Керамзитобетон ρ=600',rho:600,lam:0.26,F:0.385,e:1.45,color:'#a2a292',tex:'tex-concrete'},
      {id:'keramzit-b500',name:'Керамзитобетон ρ=500',rho:500,lam:0.23,F:0.375,e:1.4,color:'#a6a696',tex:'tex-concrete'},
      {id:'keramzit-q1200',name:'Керамзитобетон (кв.песок) ρ=1200',rho:1200,lam:0.58,F:0.45,e:1.53,color:'#929282',tex:'tex-concrete'},
      {id:'keramzit-q1000',name:'Керамзитобетон (кв.песок) ρ=1000',rho:1000,lam:0.47,F:0.41,e:1.47,color:'#9a9a8a',tex:'tex-concrete'},
      {id:'keramzit-q800',name:'Керамзитобетон (кв.песок) ρ=800',rho:800,lam:0.35,F:0.393,e:1.45,color:'#9e9e8e',tex:'tex-concrete'},
      {id:'keramzit-bp400',name:'Керамзитобетон беспесчаный ρ=400',rho:400,lam:0.125,F:0.373,e:1.39,color:'#a8a898',tex:'tex-concrete'},
      {id:'psb600',name:'Полистиролбетон ρ=600',rho:600,lam:0.2,F:0.801,e:8.35,color:'#a0a098',tex:'tex-concrete'},
      {id:'psb500',name:'Полистиролбетон ρ=500',rho:500,lam:0.16,F:0.825,e:8.57,color:'#a4a49c',tex:'tex-concrete'},
      {id:'psb400',name:'Полистиролбетон ρ=400',rho:400,lam:0.135,F:0.841,e:9.05,color:'#a8a8a0',tex:'tex-concrete'},
      {id:'foam-b400',name:'Пенобетон (без песка) ρ=400',rho:400,lam:0.15,F:0.292,e:0.63,color:'#b0b0a8',tex:'tex-aerated'},
      {id:'foam-b1000',name:'Пенобетон (с песком) ρ=1000',rho:1000,lam:0.43,F:0.333,e:0.75,color:'#989890',tex:'tex-aerated'},
      {id:'foam-b800',name:'Пенобетон (с песком) ρ=800',rho:800,lam:0.37,F:0.325,e:0.71,color:'#a0a098',tex:'tex-aerated'},
      {id:'foam-b600',name:'Пенобетон (с песком) ρ=600',rho:600,lam:0.26,F:0.315,e:0.67,color:'#a8a8a0',tex:'tex-aerated'},
      {id:'conc-block1450',name:'Бетонный блок ср.плотности',rho:1450,lam:0.68,F:0.185,e:0.67,color:'#8a8a82',tex:'tex-concrete'},
      {id:'gas-sil800',name:'Газосиликат на клею ρ=800',rho:800,lam:0.27,F:0.135,e:1.9,color:'#b0b0a8',tex:'tex-aerated'},
      {id:'gas-sil600',name:'Газосиликат на клею ρ=600',rho:600,lam:0.19,F:0.125,e:1.8,color:'#b8b8b0',tex:'tex-aerated'},
      {id:'gas-sil400',name:'Газосиликат на клею ρ=400',rho:400,lam:0.15,F:0.115,e:1.7,color:'#c0c0b8',tex:'tex-aerated'},
      {id:'gas-sil300',name:'Газосиликат на клею ρ=300',rho:300,lam:0.14,F:0.102,e:1.6,color:'#c4c4bc',tex:'tex-aerated'},
      {id:'aac1000',name:'Ячеистобетон на ЦПР ρ=1000',rho:1000,lam:0.37,F:0.41,e:3.75,color:'#989890',tex:'tex-aerated'},
      {id:'aac900',name:'Ячеистобетон на ЦПР ρ=900',rho:900,lam:0.29,F:0.38,e:3.65,color:'#9c9c94',tex:'tex-aerated'},
      {id:'aac800',name:'Ячеистобетон на ЦПР ρ=800',rho:800,lam:0.27,F:0.36,e:3.6,color:'#a0a098',tex:'tex-aerated'},
      {id:'aac700',name:'Ячеистобетон на ЦПР ρ=700',rho:700,lam:0.26,F:0.35,e:3.55,color:'#a4a49c',tex:'tex-aerated'},
      {id:'acb750',name:'Автоклавный газобетон (цемент)',rho:750,lam:0.25,F:0.3,e:3.5,color:'#a8a8a0',tex:'tex-aerated'},
      {id:'asb400',name:'Автоклавный газосиликат',rho:400,lam:0.15,F:0.102,e:1.6,color:'#c0c0b8',tex:'tex-aerated'},
      {id:'acb-fiber500',name:'Газобетон армир. волокном',rho:500,lam:0.16,F:0.664,e:7.5,color:'#b0b0a8',tex:'tex-aerated'},
      {id:'cer-block1600',name:'Керамические блоки ρ=1600',rho:1600,lam:0.63,F:0.4,e:3.37,color:'#b07050',tex:'tex-brick'},
      {id:'cer-block800',name:'Керамические блоки ρ=800',rho:800,lam:0.18,F:0.22,e:2.96,color:'#b88060',tex:'tex-brick'},
      {id:'cpr1800',name:'Раствор цементно-песчаный',rho:1800,lam:0.93,F:0.19,e:1.4,color:'#b0a898',tex:'tex-plaster'},
      {id:'complex1700',name:'Раствор сложный',rho:1700,lam:0.87,F:0.053,e:1.37,color:'#b4ac9c',tex:'tex-plaster'},
      {id:'lime1600',name:'Раствор известково-песчаный',rho:1600,lam:0.81,F:0.039,e:1.09,color:'#b8b0a0',tex:'tex-plaster'},
      {id:'cplaster1800',name:'Штукатурка цементно-песчаная',rho:1800,lam:0.93,F:0.19,e:1.4,color:'#b0a898',tex:'tex-plaster'},
      {id:'gplaster1100',name:'Штукатурка гипсовая ρ=1100',rho:1100,lam:0.27,F:0.12,e:1.81,color:'#c0b8b0',tex:'tex-plaster'},
      {id:'gplaster1000',name:'Штукатурка гипсовая ρ=1000',rho:1000,lam:0.25,F:0.11,e:1.76,color:'#c4bcb4',tex:'tex-plaster'},
      {id:'clay-brick1900',name:'Кирпич глиняный на ЦПР ρ=1900',rho:1900,lam:0.85,F:0.151,e:2.137,color:'#b85a3a',tex:'tex-brick'},
      {id:'clay-brick1800',name:'Кирпич глиняный на ЦПР ρ=1800',rho:1800,lam:0.81,F:0.159,e:2.256,color:'#ba5c3c',tex:'tex-brick'},
      {id:'clay-brick1700',name:'Кирпич глиняный на ЦШР ρ=1700',rho:1700,lam:0.76,F:0.168,e:2.388,color:'#bc5e3e',tex:'tex-brick'},
      {id:'cer-brick1600',name:'Кирпич керамический пустотный ρ=1600',rho:1600,lam:0.64,F:0.35,e:3.25,color:'#b87048',tex:'tex-brick'},
      {id:'cer-brick1400',name:'Кирпич керамический пустотный ρ=1400',rho:1400,lam:0.58,F:0.28,e:3.15,color:'#ba784e',tex:'tex-brick'},
      {id:'cer-brick1200',name:'Кирпич керамический пустотный ρ=1200',rho:1200,lam:0.52,F:0.21,e:2.828,color:'#bc8054',tex:'tex-brick'},
      {id:'sil-brick1800',name:'Кирпич силикатный на ЦПР ρ=1800',rho:1800,lam:1.05,F:0.144,e:1.621,color:'#c8c0b0',tex:'tex-brick'},
      {id:'sil-brick1960',name:'Кирпич силикатный на ЦПР ρ=1960',rho:1960,lam:1.48,F:0.144,e:1.585,color:'#c4bcac',tex:'tex-brick'},
      {id:'sil-brick1500',name:'Кирпич силикатный пустотный ρ=1500',rho:1500,lam:0.81,F:0.134,e:1.521,color:'#ccc4b4',tex:'tex-brick'},
      {id:'sil-brick1400',name:'Кирпич силикатный 14-пустотный ρ=1400',rho:1400,lam:0.76,F:0.13,e:1.51,color:'#d0c8b8',tex:'tex-brick'},
      {id:'hardwood',name:'Пиломатериалы лиственных',rho:650,lam:0.14,F:0.108,e:2.0,color:'#7a5a3a',tex:'tex-wood'},
      {id:'pine',name:'Сосна/ель поперёк волокон',rho:500,lam:0.18,F:0.11,e:2.1,color:'#8a6a4a',tex:'tex-wood'},
      {id:'oak',name:'Дуб поперёк волокон',rho:700,lam:0.23,F:0.125,e:2.3,color:'#6a4a2a',tex:'tex-wood'},
      {id:'plywood',name:'Фанера клееная',rho:600,lam:0.18,F:1.07,e:15.0,color:'#8a6a4a',tex:'tex-wood'},
      {id:'glulam',name:'Клееный брус',rho:550,lam:0.18,F:0.87,e:12.0,color:'#8a6a4a',tex:'tex-wood'},
      {id:'lvl',name:'Клееный брус LVL',rho:600,lam:0.1,F:2.28,e:34.3,color:'#8a6a4a',tex:'tex-wood'},
      {id:'tile2000',name:'Облицовка керамической плиткой',rho:2000,lam:1.4,F:1.4,e:15.4,color:'#c0b0a0',tex:'tex-concrete'},
      {id:'wallpaper',name:'Обои',rho:450,lam:0.045,F:1.93,e:36.4,color:'#d0c8b8',tex:'tex-sand'},
      {id:'rebar-steel',name:'Сталь стержневая арматурная',rho:7850,lam:58,F:2.3,e:24.5,color:'#7a7a80',tex:'tex-concrete'},
      {id:'mesh-steel',name:'Сварная сетка',rho:7850,lam:58,F:2.1,e:23.8,color:'#7a7a80',tex:'tex-concrete'},
      {id:'zinc-steel',name:'Оцинкованные изделия',rho:7850,lam:58,F:2.28,e:29.1,color:'#8a8a90',tex:'tex-concrete'},
      {id:'stainless',name:'Нержавеющая сталь',rho:7850,lam:16,F:6.15,e:56.7,color:'#8a8a90',tex:'tex-concrete'},
      {id:'wire-steel',name:'Проволока стальная',rho:7850,lam:58,F:2.32,e:36.0,color:'#7a7a80',tex:'tex-concrete'},
      {id:'aluminum',name:'Алюминий',rho:2600,lam:221,F:3.6,e:152.9,color:'#b0b0b8',tex:'tex-concrete'},
      {id:'copper',name:'Медь',rho:8500,lam:407,F:2.6,e:42,color:'#b08060',tex:'tex-concrete'},
      {id:'glass2500',name:'Стекло оконное',rho:2500,lam:0.76,F:1.4,e:16.0,color:'#8ab8c0',tex:'tex-sand'},
      {id:'carbon-rebar',name:'Углепластиковая арматура',rho:1800,lam:0.35,F:19.7,e:301,color:'#303030',tex:'tex-concrete'},
      {id:'carbon-textile',name:'Углепластиковый текстиль',rho:1750,lam:0.25,F:18.4,e:281,color:'#404040',tex:'tex-sand'},
      {id:'basalt-rebar',name:'Базальтопластиковая арматура',rho:2200,lam:0.4,F:2.34,e:51.12,color:'#606058',tex:'tex-concrete'},
      {id:'paint-solvent',name:'Краска на основе растворителя',rho:1000,lam:0.2,F:3.13,e:97,color:'#b0a898',tex:'tex-plaster'},
      {id:'paint-acrylic',name:'Акриловая краска (водная)',rho:1000,lam:0.2,F:2.12,e:59,color:'#b8b0a8',tex:'tex-plaster'},
      {id:'cement3100',name:'Портландцемент',rho:3100,lam:0.5,F:0.865,e:5.6,color:'#808080',tex:'tex-concrete'},
      {id:'pvc1380',name:'ПВХ',rho:1380,lam:0.17,F:2.41,e:77.2,color:'#b0b0b0',tex:'tex-concrete'},
    ];

    const COLORS = ['#b85a3a','#c8c0b0','#b0a898','#8a8a7a','#7a5a3a','#d4c8a0','#b87048','#c0b8b0','#a0a098','#6a4a2a','#b0b0a8','#7a7a80'];

    let layers = [];
    let selectedIdx = -1;
    let pickTargetIdx = -1;

    function getMat(id) { return DB.find(m => m.id === id); }

    function selectLayer(idx) {
      selectedIdx = idx;
      document.querySelectorAll('.wseg').forEach((el, i) => el.classList.toggle('active', i === idx));
      document.querySelectorAll('.leg-item').forEach((el, i) => el.classList.toggle('active', i === idx));
      document.querySelectorAll('.layer-card').forEach((el, i) => el.classList.toggle('active', i === idx));
      if (idx >= 0) {
        const cards = document.querySelectorAll('.layer-card');
        if (cards[idx]) cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    function openPicker(layerIdx) {
      pickTargetIdx = layerIdx;
      const body = document.getElementById('modal-body');
      body.innerHTML = '';
      const q = document.createElement('div');
      q.className = 'modal-search';
      q.innerHTML = '<input type="text" class="modal-search-input" placeholder="Поиск материалов..." id="modal-search-input">';
      body.appendChild(q);

      const grid = document.createElement('div');
      grid.className = 'modal-grid';
      grid.id = 'modal-grid';
      body.appendChild(grid);

      function renderSearch(val) {
        grid.innerHTML = '';
        const t = val.toLowerCase();
        DB.forEach(m => {
          if (t && !m.name.toLowerCase().includes(t) && !(m.rho+'').includes(t)) return;
          const card = document.createElement('div');
          card.className = 'mat-card';
          const prev = document.createElement('div');
          prev.className = 'mat-card-preview';
          const inner = document.createElement('div');
          inner.className = `mat-card-preview-inner ${m.tex||''}`;
          inner.style.backgroundColor = m.color;
          prev.appendChild(inner);
          card.appendChild(prev);
          const name = document.createElement('div');
          name.className = 'mat-card-name';
          name.textContent = m.name + (m.rho ? ', ρ='+m.rho : '');
          card.appendChild(name);
          const meta = document.createElement('div');
          meta.className = 'mat-card-meta';
          meta.textContent = `λ=${m.lam} · F=${m.F} · e=${m.e}`;
          card.appendChild(meta);
          card.addEventListener('click', () => {
            layers[pickTargetIdx].materialId = m.id;
            layers[pickTargetIdx].density = null;
            document.getElementById('modal').classList.remove('open');
            renderAll();
          });
          grid.appendChild(card);
        });
      }
      renderSearch('');
      document.getElementById('modal').classList.add('open');
      setTimeout(() => {
        const inp = document.getElementById('modal-search-input');
        if (inp) { inp.addEventListener('input', () => renderSearch(inp.value)); inp.focus(); }
      }, 100);
    }

    document.getElementById('modal-close').addEventListener('click', () => {
      document.getElementById('modal').classList.remove('open');
    });
    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) document.getElementById('modal').classList.remove('open');
    });

    function renderWall() {
      const bar = document.getElementById('wall-layers');
      const legend = document.getElementById('wall-legend');
      const dim = document.getElementById('wall-bar-dim');
      const totalEl = document.getElementById('wall-total');
      const total = layers.reduce((s, l) => s + l.thickness, 0) || 1;
      bar.innerHTML = '';
      legend.innerHTML = '';

      const r5 = v => Math.round(v / 5) * 5;
      totalEl.textContent = '∑ ' + r5(total) + ' мм';

      let dimHtml = '';
      layers.forEach((layer, i) => {
        const m = getMat(layer.materialId);
        const name = m ? m.name : layer.materialId;
        const pct = layer.thickness / total;
        const color = m ? m.color : '#666';
        const tex = m && m.tex ? m.tex : '';
        const dispThick = r5(layer.thickness);

        const seg = document.createElement('div');
        seg.className = `wseg ${tex}`;
        seg.style.cssText = `flex:${pct};background-color:${color};`;
        seg.title = `${name} — ${layer.thickness} мм`;
        seg.addEventListener('click', () => selectLayer(i === selectedIdx ? -1 : i));

        if (pct > 0.08) {
          const label = document.createElement('div');
          label.className = 'wseg-label';
          label.textContent = dispThick + ' мм';
          seg.appendChild(label);
        }

        bar.appendChild(seg);

        dimHtml += `<span class="dim-seg" style="flex:${pct}"><span class="dim-line"></span><span class="dim-val">${dispThick}</span></span>`;

        const dotInner = document.createElement('div');
        dotInner.className = `leg-dot-inner ${tex}`;
        dotInner.style.backgroundColor = color;
        const dot = document.createElement('span');
        dot.className = 'leg-dot';
        dot.appendChild(dotInner);
        const item = document.createElement('div');
        item.className = 'leg-item';
        item.addEventListener('click', () => selectLayer(i === selectedIdx ? -1 : i));
        item.appendChild(dot);
        item.innerHTML += `<span class="leg-name">${name}</span><span class="leg-mm">${dispThick} мм</span>`;
        legend.appendChild(item);
      });

      dim.innerHTML = dimHtml;
    }

    function renderLayers() {
      const panel = document.getElementById('layers-panel');
      panel.innerHTML = '';

      layers.forEach((layer, i) => {
        const m = getMat(layer.materialId);
        const color = m ? m.color : '#666';

        const div = document.createElement('div');
        div.className = 'layer-card';
        if (i === selectedIdx) div.classList.add('active');
        div.style.setProperty('--accent', color);
        div.addEventListener('click', (e) => {
          if (e.target.closest('.layer-del') || e.target.closest('.layer-material-btn') || e.target.closest('.thick-range') || e.target.closest('.thick-num') || e.target.closest('.layer-density')) return;
          selectLayer(i === selectedIdx ? -1 : i);
        });

        const top = document.createElement('div');
        top.className = 'layer-top';

        const info = document.createElement('div');
        info.className = 'layer-info';

        const matBtn = document.createElement('button');
        matBtn.className = 'layer-material-btn';
        const nameSpan = document.createElement('span');
        nameSpan.className = 'mat-name';
        nameSpan.textContent = m ? m.name + (m.rho ? ', ρ='+m.rho : '') : layer.materialId;
        matBtn.appendChild(nameSpan);
        const arrow = document.createElement('span');
        arrow.className = 'mat-arrow';
        arrow.textContent = '▾';
        matBtn.appendChild(arrow);
        matBtn.addEventListener('click', (e) => { e.stopPropagation(); openPicker(i); });
        info.appendChild(matBtn);
        top.appendChild(info);

        const del = document.createElement('button');
        del.className = 'layer-del';
        del.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
        del.addEventListener('click', (e) => { e.stopPropagation(); layers.splice(i, 1); if (selectedIdx >= layers.length) selectedIdx = layers.length - 1; renderAll(); });
        top.appendChild(del);
        div.appendChild(top);

        const bot = document.createElement('div');
        bot.className = 'layer-bot';

        const thickLbl = document.createElement('span');
        thickLbl.className = 'thick-lbl';
        thickLbl.textContent = 'δ';
        bot.appendChild(thickLbl);

        const thickVal = document.createElement('input');
        thickVal.type = 'range';
        thickVal.className = 'thick-range';
        thickVal.min = 0; thickVal.max = 500; thickVal.value = layer.thickness; thickVal.step = 1;
        thickVal.addEventListener('input', () => {
          layer.thickness = parseInt(thickVal.value);
          thickNum.value = layer.thickness;
          renderWall();
          calc();
        });
        bot.appendChild(thickVal);

        const thickNum = document.createElement('input');
        thickNum.type = 'number';
        thickNum.className = 'thick-num';
        thickNum.value = layer.thickness;
        thickNum.min = 0; thickNum.step = 1;
        thickNum.addEventListener('input', () => {
          layer.thickness = parseInt(thickNum.value) || 0;
          thickVal.value = layer.thickness;
          renderWall();
          calc();
        });
        bot.appendChild(thickNum);

        const mm = document.createElement('span');
        mm.className = 'thick-unit';
        mm.textContent = 'мм';
        bot.appendChild(mm);

        const denLbl = document.createElement('span');
        denLbl.className = 'density-lbl';
        denLbl.textContent = 'ρ';
        bot.appendChild(denLbl);

        const densityInput = document.createElement('input');
        densityInput.type = 'number';
        densityInput.className = 'layer-density';
        densityInput.value = layer.density !== null ? layer.density : (m ? m.rho : 0);
        densityInput.placeholder = 'кг/м³';
        densityInput.title = 'Плотность (можно изменить)';
        densityInput.addEventListener('input', () => {
          layer.density = parseFloat(densityInput.value) || 0;
          calc();
        });
        bot.appendChild(densityInput);

        if (i >= layers.length - 1) thickVal.focus();

        div.appendChild(bot);
        panel.appendChild(div);
      });
    }

    function renderAll() {
      renderWall();
      renderLayers();
      calc();
    }

    document.getElementById('btn-add-layer').addEventListener('click', () => {
      openPickerForAdd();
    });

    function openPickerForAdd() {
      const body = document.getElementById('modal-body');
      body.innerHTML = '';
      const q = document.createElement('div');
      q.className = 'modal-search';
      q.innerHTML = '<input type="text" class="modal-search-input" placeholder="Поиск материалов..." id="modal-search-input">';
      body.appendChild(q);

      const grid = document.createElement('div');
      grid.className = 'modal-grid';
      grid.id = 'modal-grid-add';
      body.appendChild(grid);

      function renderSearch(val) {
        grid.innerHTML = '';
        const t = val.toLowerCase();
        DB.forEach(m => {
          if (t && !m.name.toLowerCase().includes(t) && !(m.rho+'').includes(t)) return;
          const card = document.createElement('div');
          card.className = 'mat-card';
          const prev = document.createElement('div');
          prev.className = 'mat-card-preview';
          const inner = document.createElement('div');
          inner.className = `mat-card-preview-inner ${m.tex||''}`;
          inner.style.backgroundColor = m.color;
          prev.appendChild(inner);
          card.appendChild(prev);
          const name = document.createElement('div');
          name.className = 'mat-card-name';
          name.textContent = m.name + (m.rho ? ', ρ='+m.rho : '');
          card.appendChild(name);
          const meta = document.createElement('div');
          meta.className = 'mat-card-meta';
          meta.textContent = `λ=${m.lam} · F=${m.F} · e=${m.e}`;
          card.appendChild(meta);
          card.addEventListener('click', () => {
            layers.push({ materialId: m.id, thickness: 100, density: null });
            document.getElementById('modal').classList.remove('open');
            renderAll();
          });
          grid.appendChild(card);
        });
      }
      renderSearch('');
      document.getElementById('modal').classList.add('open');
      setTimeout(() => {
        const inp = document.getElementById('modal-search-input');
        if (inp) { inp.addEventListener('input', () => renderSearch(inp.value)); inp.focus(); }
      }, 100);
    }

    document.getElementById('btn-calculate').addEventListener('click', calc);

    function renderDetailTable(layers, rebarType, rebarMass) {
      const container = document.getElementById('detail-container');
      container.innerHTML = '';
      let totalM = 0, totalC = 0, totalE = 0, totalDL = 0;

      const frag = document.createDocumentFragment();

      layers.forEach((layer, i) => {
        const m = getMat(layer.materialId);
        if (!m) return;
        const rho = layer.density !== null ? layer.density : m.rho;
        const delta = layer.thickness / 1000;
        const M = rho * delta;
        const C = M * m.F;
        const E = M * m.e;
        const dL = delta / m.lam;
        totalM += M; totalC += C; totalE += E; totalDL += dL;

        const card = document.createElement('div');
        card.className = 'det-card';

        const header = document.createElement('div');
        header.className = 'det-card-h';
        header.innerHTML = `<span class="det-card-n">${i + 1}</span><span class="det-card-name">${m.name}</span>`;
        card.appendChild(header);

        const body = document.createElement('div');
        body.className = 'det-card-b';

        const items = [
          { lbl: 'ρ, кг/м³', val: rho },
          { lbl: 'δ, м', val: delta.toFixed(3) },
          { lbl: 'M, кг', val: M.toFixed(1) },
          { lbl: 'C, кгСО₂экв', val: C.toFixed(2) },
          { lbl: 'E, МДж', val: E.toFixed(1) },
          { lbl: 'δ/λ', val: dL.toFixed(4) },
        ];

        items.forEach(item => {
          const el = document.createElement('div');
          el.className = 'det-card-item';
          el.innerHTML = `<span class="det-card-lbl">${item.lbl}</span><span class="det-card-val">${item.val}</span>`;
          body.appendChild(el);
        });

        card.appendChild(body);
        frag.appendChild(card);
      });

      if (rebarType !== 'none' && rebarMass > 0) {
        let rebarDB = null, rebarName = '';
        if (rebarType === 'steel') { rebarDB = DB.find(d => d.id === 'rebar-steel'); rebarName = 'Металлическая кладочная сетка'; }
        else if (rebarType === 'fiberglass') { rebarDB = DB.find(d => d.id === 'basalt-rebar'); rebarName = 'Стеклопластиковая арматура'; }
        else if (rebarType === 'basalt') { rebarDB = DB.find(d => d.id === 'basalt-rebar'); rebarName = 'Базальтопластиковая арматура'; }
        else if (rebarType === 'carbon') { rebarDB = DB.find(d => d.id === 'carbon-rebar'); rebarName = 'Углепластиковая арматура'; }
        if (rebarDB) {
          const C = rebarMass * rebarDB.F;
          const E = rebarMass * rebarDB.e;
          totalM += rebarMass; totalC += C; totalE += E;

          const card = document.createElement('div');
          card.className = 'det-card det-rebar';

          const header = document.createElement('div');
          header.className = 'det-card-h';
          header.innerHTML = `<span class="det-card-name">${rebarName}</span>`;
          card.appendChild(header);

          const body = document.createElement('div');
          body.className = 'det-card-b';

          const items = [
            { lbl: 'M, кг', val: rebarMass.toFixed(1) },
            { lbl: 'C, кгСО₂экв', val: C.toFixed(2) },
            { lbl: 'E, МДж', val: E.toFixed(1) },
          ];

          items.forEach(item => {
            const el = document.createElement('div');
            el.className = 'det-card-item';
            el.innerHTML = `<span class="det-card-lbl">${item.lbl}</span><span class="det-card-val">${item.val}</span>`;
            body.appendChild(el);
          });

          card.appendChild(body);
          frag.appendChild(card);
        }
      }

      const R0 = 0.15841 + totalDL;
      const totalCard = document.createElement('div');
      totalCard.className = 'det-card det-total';

      const header = document.createElement('div');
      header.className = 'det-card-h';
      header.innerHTML = `<span class="det-card-name">Итого</span>`;
      totalCard.appendChild(header);

      const body = document.createElement('div');
      body.className = 'det-card-b';

      const items = [
        { lbl: 'M, кг', val: totalM.toFixed(1) },
        { lbl: 'C, кгСО₂экв', val: totalC.toFixed(2) },
        { lbl: 'E, МДж', val: totalE.toFixed(1) },
        { lbl: 'Σ(δ/λ)', val: totalDL.toFixed(4) },
        { lbl: 'R₀, м²·°С/Вт', val: R0.toFixed(4) },
      ];

      items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'det-card-item';
        el.innerHTML = `<span class="det-card-lbl">${item.lbl}</span><span class="det-card-val">${item.val}</span>`;
        body.appendChild(el);
      });

      totalCard.appendChild(body);
      frag.appendChild(totalCard);

      container.appendChild(frag);
    }

    function calc() {
      try {
      renderWall();
      const wl = parseFloat(document.getElementById('wall-length').value) || 0;
      const wh = parseFloat(document.getElementById('wall-height').value) || 0;
      const dc = parseInt(document.getElementById('door-count').value) || 0;
      const dw = parseFloat(document.getElementById('door-width').value) || 0;
      const dh = parseFloat(document.getElementById('door-height').value) || 0;
      const wc = parseInt(document.getElementById('window-count').value) || 0;
      const ww = parseFloat(document.getElementById('window-width').value) || 0;
      const wwh = parseFloat(document.getElementById('window-height').value) || 0;
      const wasteEl = document.getElementById('waste');
      const waste = wasteEl ? (parseFloat(wasteEl.value) || 0) : 5;
      const GSOP = parseFloat(document.getElementById('gsop').value) || 0;
      const S = parseFloat(document.getElementById('wall-area-s').value) || 0;
      const rebarType = document.getElementById('rebar-type').value;
      const rebarMass = parseFloat(document.getElementById('rebar-mass').value) || 0;

      const isEngineer = document.body.dataset.mode === 'engineer';
      const fmt = isEngineer ? (v, d) => v : (v, d) => parseFloat(v.toFixed(d));

      renderDetailTable(layers, rebarType, rebarMass);

      const netArea = Math.max(0, wl * wh - (dc * dw * dh + wc * ww * wwh));
      const totalWallArea = netArea > 0 ? S : 0;

      let Mtotal = 0, Rsum = 0, Ctotal = 0, Etotal = 0;

      layers.forEach(layer => {
        const m = getMat(layer.materialId);
        if (!m) return;
        const rho = layer.density !== null ? layer.density : m.rho;
        const delta = layer.thickness / 1000;
        const M = rho * delta;
        Mtotal += M;
        Rsum += delta / m.lam;
        Ctotal += M * m.F;
        Etotal += M * m.e;
      });

      if (rebarType !== 'none' && rebarMass > 0) {
        let rebarDB = null;
        if (rebarType === 'steel') rebarDB = DB.find(d => d.id === 'rebar-steel');
        else if (rebarType === 'fiberglass') rebarDB = DB.find(d => d.id === 'basalt-rebar');
        else if (rebarType === 'basalt') rebarDB = DB.find(d => d.id === 'basalt-rebar');
        else if (rebarType === 'carbon') rebarDB = DB.find(d => d.id === 'carbon-rebar');
        if (rebarDB) {
          Mtotal += rebarMass;
          Ctotal += rebarMass * rebarDB.F;
          Etotal += rebarMass * rebarDB.e;
        }
      }

      const R0 = 0.15841 + Rsum;
      const Qm2 = GSOP > 0 && R0 > 0 ? (0.024 * GSOP * 1) / R0 : 0;
      const Qtotal = Qm2 * totalWallArea;
      const H = 9.3, eff = 0.9;
      const V1 = Qm2 > 0 ? Qm2 / (H * eff) : 0;
      const Vtotal = V1 * totalWallArea;

      document.getElementById('res-mass').textContent = fmt(Mtotal, 1) + ' кг';
      document.getElementById('res-mass-total').textContent = fmt(Mtotal * totalWallArea / 1000, 1) + ' т';
      document.getElementById('res-r0').textContent = fmt(R0, isEngineer ? 6 : 3);
      document.getElementById('res-q').textContent = fmt(Qm2, 2);
      document.getElementById('res-q-total').textContent = fmt(Qtotal, 1);
      document.getElementById('res-co2').textContent = fmt(Ctotal, 2);
      document.getElementById('res-co2-total').textContent = fmt(Ctotal * totalWallArea, 1);
      document.getElementById('res-energy').textContent = fmt(Etotal, 1);
      document.getElementById('res-energy-total').textContent = fmt(Etotal * totalWallArea, 1);
      document.getElementById('res-gas').textContent = fmt(V1, isEngineer ? 6 : 3);
      document.getElementById('res-gas-total').textContent = fmt(Vtotal, 1);
    } catch(e) { console.error('calc error:', e); }
    }

    document.querySelectorAll('input, select').forEach(el => el.addEventListener('input', calc));
    renderAll();

    const modeToggle = document.getElementById('mode-toggle');
    let currentMode = 'normal';
    modeToggle.addEventListener('click', () => {
      currentMode = currentMode === 'normal' ? 'engineer' : 'normal';
      modeToggle.querySelectorAll('.mode-opt').forEach(o => o.classList.toggle('active', o.dataset.mode === currentMode));
      document.body.dataset.mode = currentMode;
    });

    document.getElementById('theme-btn').addEventListener('click', () => {
      const isLight = document.body.dataset.theme === 'light';
      document.body.dataset.theme = isLight ? '' : 'light';
      localStorage.setItem('theme', document.body.dataset.theme);
    });
    if (localStorage.getItem('theme') === 'light') document.body.dataset.theme = 'light';

    let selectedFormat = null;
    const fmtBtn = document.getElementById('import-fmt');
    const fmtDrop = document.getElementById('import-fmt-drop');
    const importBtn = document.getElementById('btn-import');
    fmtBtn.addEventListener('click', e => { e.stopPropagation(); fmtDrop.classList.toggle('open'); });
    document.querySelectorAll('.import-opt').forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        selectedFormat = opt.dataset.fmt;
        fmtBtn.textContent = opt.textContent + ' ▾';
        fmtBtn.classList.add('selected');
        fmtDrop.classList.remove('open');
        importBtn.classList.add('active');
        importBtn.disabled = false;
      });
    });
    document.addEventListener('click', () => fmtDrop.classList.remove('open'));
    function buildReportHtml() {
      const wl = parseFloat(document.getElementById('wall-length').value) || 0;
      const wh = parseFloat(document.getElementById('wall-height').value) || 0;
      const GSOP = parseFloat(document.getElementById('gsop').value) || 0;
      const S = parseFloat(document.getElementById('wall-area-s').value) || 0;
      const rebarType = document.getElementById('rebar-type').value;
      const rebarMass = parseFloat(document.getElementById('rebar-mass').value) || 0;
      const rebarNames = { steel: 'Металлическая кладочная сетка', fiberglass: 'Стеклопластиковая арматура', basalt: 'Базальтопластиковая арматура', carbon: 'Углепластиковая арматура' };
      let rows = layers.map((l, i) => {
        const m = getMat(l.materialId);
        if (!m) return null;
        const rho = l.density !== null ? l.density : m.rho;
        const delta = l.thickness / 1000;
        const M = rho * delta;
        return { n: i + 1, name: m.name, rho, delta: delta.toFixed(3), M: M.toFixed(1), C: (M * m.F).toFixed(2), E: (M * m.e).toFixed(1) };
      }).filter(Boolean);
      let totalM = 0, totalC = 0, totalE = 0;
      rows.forEach(r => { totalM += parseFloat(r.M); totalC += parseFloat(r.C); totalE += parseFloat(r.E); });
      if (rebarType !== 'none' && rebarMass > 0) {
        let rb = DB.find(d => d.id === 'rebar-steel');
        if (rebarType === 'fiberglass' || rebarType === 'basalt') rb = DB.find(d => d.id === 'basalt-rebar');
        else if (rebarType === 'carbon') rb = DB.find(d => d.id === 'carbon-rebar');
        if (rb) {
          rows.push({ n: '', name: rebarNames[rebarType] || 'Арматура', rho: '', delta: '', M: rebarMass.toFixed(1), C: (rebarMass * rb.F).toFixed(2), E: (rebarMass * rb.e).toFixed(1) });
          totalM += rebarMass; totalC += rebarMass * rb.F; totalE += rebarMass * rb.e;
        }
      }
      const R0 = 0.15841 + rows.reduce((s, r) => s + (parseFloat(r.delta) || 0) / (function(id){var m=getMat(id);return m?m.lam:1})(layers[rows.indexOf(r)]&&layers[rows.indexOf(r)].materialId), 0);
      const Qm2 = GSOP > 0 && R0 > 0 ? (0.024 * GSOP * 1) / R0 : 0;
      const V1 = Qm2 > 0 ? Qm2 / (9.3 * 0.9) : 0;
      return { rows, totalM, totalC, totalE, R0, Qm2, V1, S, html: '<div id="report"><h1 style="color:#e8823a;font-size:22px;margin-bottom:4px;font-family:Arial,sans-serif">ЭКО — Экология Конструкций Ограждения</h1><h2 style="font-size:16px;color:#555;font-weight:400;margin-bottom:24px;font-family:Arial,sans-serif">Отчёт о расчёте теплотехнических и экологических параметров наружных стен</h2><table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-family:Arial,sans-serif"><tr>' +
        '<th style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;background:#f5f0eb;font-weight:600">№</th><th style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;background:#f5f0eb;font-weight:600">Материал</th><th style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;background:#f5f0eb;font-weight:600">ρ, кг/м³</th><th style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;background:#f5f0eb;font-weight:600">δ, м</th><th style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;background:#f5f0eb;font-weight:600">M, кг</th><th style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;background:#f5f0eb;font-weight:600">C, кгCO₂экв</th><th style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;background:#f5f0eb;font-weight:600">E, МДж</th></tr>' +
        rows.map(r => '<tr>' + ['n','name','rho','delta','M','C','E'].map(k => '<td style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;font-family:Arial,sans-serif">' + (r[k]||'') + '</td>').join('') + '</tr>').join('') +
        '<tr style="font-weight:700;background:#fff3eb">' + ['','','','','Итого','',''].map((v,i) => '<td style="padding:8px 10px;text-align:left;border:1px solid #ccc;font-size:13px;font-family:Arial,sans-serif">' + (v || (i===4?totalM.toFixed(1):i===5?totalC.toFixed(2):i===6?totalE.toFixed(1):'')) + '</td>').join('') + '</tr></table>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px;font-family:Arial,sans-serif">' +
        [['Масса 1 м² стены', totalM.toFixed(1) + ' кг'],['R₀ усл', R0.toFixed(4) + ' м²·°С/Вт'],['CO₂ выбросы', totalC.toFixed(2) + ' кгCO₂экв/м²'],['Воплощённая энергия', totalE.toFixed(1) + ' МДж/м²'],['Газ V₁', V1.toFixed(3) + ' м³/год·м²'],['Газ Vобщ', (V1 * S).toFixed(1) + ' м³/год']]
        .map(a => '<div style="padding:10px 14px;background:#f9f6f2;border-radius:8px;border:1px solid #e8e0d8"><div style="font-size:11px;color:#888">' + a[0] + '</div><div style="font-size:18px;font-weight:700;color:#222">' + a[1] + '</div></div>').join('') +
        '</div><div style="margin-top:32px;font-size:11px;color:#999;text-align:center;font-family:Arial,sans-serif">IT.BGITU • 2026 • Программа ЭКО</div></div>' };
    }

    function generateReport(fmt) {
      const data = buildReportHtml();
      const wl = parseFloat(document.getElementById('wall-length').value) || 0;
      const wh = parseFloat(document.getElementById('wall-height').value) || 0;
      const S = parseFloat(document.getElementById('wall-area-s').value) || 0;
      const GSOP = parseFloat(document.getElementById('gsop').value) || 0;
      const dc = parseInt(document.getElementById('door-count').value) || 0;
      const dw = parseFloat(document.getElementById('door-width').value) || 0;
      const dh = parseFloat(document.getElementById('door-height').value) || 0;
      const wc = parseInt(document.getElementById('window-count').value) || 0;
      const ww = parseFloat(document.getElementById('window-width').value) || 0;
      const wwh = parseFloat(document.getElementById('window-height').value) || 0;
      const rebarType = document.getElementById('rebar-type').value;
      const rebarMass = parseFloat(document.getElementById('rebar-mass').value) || 0;
      const rebarNames = { steel: 'Металлическая кладочная сетка', fiberglass: 'Стеклопластиковая арматура', basalt: 'Базальтопластиковая арматура', carbon: 'Углепластиковая арматура' };

      const html = '<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><title>ECO.Calculator — Отчёт о расчёте</title>' +
        '<style>*{color:#000!important}h1{color:#e8823a!important}body{font-family:Arial,sans-serif;margin:30px}' +
        'h1{font-size:22px;margin:0 0 2px;color:#e8823a;font-weight:700;color:#e8823a}' +
        'h2{font-size:16px;margin:24px 0 8px;color:#333}' +
        '.sub{color:#666;font-size:13px;margin-bottom:24px}' +
        'table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:13px}' +
        'th,td{padding:6px 10px;border:1px solid #ccc;text-align:left}' +
        'th{background:#f0ece6;font-weight:600}' +
        '.sec-title{font-size:14px;font-weight:600;margin:20px 0 8px;color:#555}' +
        '.res-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px}' +
        '.res-item{padding:6px 10px;background:#f8f5f1;border-radius:4px}' +
        '.res-lbl{color:#777;font-size:12px}' +
        '.res-val{font-weight:600;font-size:15px}' +
        '.footer{margin-top:32px;font-size:11px;color:#aaa;text-align:center}</style></head><body>' +
        '<h1>ECO.Calculator — Отчёт о расчёте</h1>' +
        '<div class="sub">Экология Конструкций Ограждения</div>' +

        '<div class="sec-title">Исходные данные</div>' +
        '<table><tr><th>Параметр</th><th>Значение</th></tr>' +
        '<tr><td>Длина стены</td><td>' + wl + ' м</td></tr>' +
        '<tr><td>Высота стены</td><td>' + wh + ' м</td></tr>' +
        '<tr><td>Площадь стены (S)</td><td>' + S + ' м²</td></tr>' +
        '<tr><td>GSOP</td><td>' + GSOP + ' °C·сут</td></tr>' +
        '<tr><td>Двери (кол-во × ширина × высота)</td><td>' + dc + ' × ' + dw.toFixed(2) + ' × ' + dh.toFixed(2) + ' м</td></tr>' +
        '<tr><td>Окна (кол-во × ширина × высота)</td><td>' + wc + ' × ' + ww.toFixed(2) + ' × ' + wwh.toFixed(2) + ' м</td></tr>' +
        '<tr><td>Армирование</td><td>' + (rebarType !== 'none' && rebarMass > 0 ? (rebarNames[rebarType] || 'Арматура') + ' (' + rebarMass + ' кг/м²)' : '—') + '</td></tr>' +
        '</table>' +

        '<div class="sec-title">Конструкция стены</div>' +
        '<table><tr><th>#</th><th>Материал</th><th>ρ, кг/м³</th><th>δ, мм</th><th>M, кг</th><th>C, кгCO₂экв</th><th>E, МДж</th></tr>' +
        data.rows.map(r => '<tr><td>' + (r.n||'') + '</td><td>' + r.name + '</td><td>' + r.rho + '</td><td>' + (parseFloat(r.delta)*1000).toFixed(0) + '</td><td>' + r.M + '</td><td>' + r.C + '</td><td>' + r.E + '</td></tr>').join('') +
        '<tr style="font-weight:700"><td colspan="4">Итого</td><td>' + data.totalM.toFixed(1) + '</td><td>' + data.totalC.toFixed(2) + '</td><td>' + data.totalE.toFixed(1) + '</td></tr></table>' +

        '<div class="sec-title">Результаты</div>' +
        '<div class="res-grid">' +
        [['Масса 1 м²', data.totalM.toFixed(3) + ' кг'],
         ['Общая масса стен', (data.totalM * data.S / 1000).toFixed(3) + ' т'],
         ['R₀ усл', data.R0.toFixed(5)],
         ['Qст.год', data.Qm2.toFixed(4)],
         ['Qгод общие', (data.Qm2 * data.S).toFixed(3)],
         ['CO₂ выбросы (на 1 м²)', data.totalC.toFixed(4)],
         ['CO₂ выбросы общие', (data.totalC * data.S).toFixed(3)],
         ['Энергия (на 1 м²)', data.totalE.toFixed(3)],
         ['Энергия общая', (data.totalE * data.S).toFixed(3)],
         ['Расход газа V₁', data.V1.toFixed(5)],
         ['Расход газа Vобщ', (data.V1 * data.S).toFixed(3)]]
        .map(a => '<div class="res-item"><div class="res-lbl">' + a[0] + '</div><div class="res-val">' + a[1] + '</div></div>').join('') +
        '</div>' +
        '<div class="footer">IT.BGITU • 2026 • Программа ЭКО</div>' +
        '</body></html>';

      if (fmt === 'pdf') {
        const el = document.createElement('div');
        el.style.width = '800px'; el.style.padding = '30px'; el.style.background = '#fff'; el.style.color = '#000';
        el.style.position = 'absolute'; el.style.left = '-9999px'; el.style.top = '0';
        el.innerHTML = html;
        document.body.appendChild(el);
        setTimeout(() => {
          html2canvas(el, { scale: 2, width: 800 }).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            const pdf = new jspdf.jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
            const pdfW = 190;
            const pdfH = (canvas.height * pdfW) / canvas.width;
            pdf.addImage(imgData, 'JPEG', 10, 10, pdfW, pdfH);
            pdf.save('eco-calculator-report.pdf');
            document.body.removeChild(el);
          });
        }, 500);
      } else {
        const mime = fmt === 'xlsx' ? 'application/vnd.ms-excel' : 'application/msword';
        const ext = fmt === 'xlsx' ? 'xls' : 'doc';
        const blob = new Blob([html], { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'eco-calculator-report.' + ext;
        a.click();
        URL.revokeObjectURL(url);
      }
    }

    importBtn.addEventListener('click', () => {
      if (!selectedFormat) return;
      generateReport(selectedFormat);
    });
  
