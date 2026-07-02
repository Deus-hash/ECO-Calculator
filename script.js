
    const DB = [
      {id:'eps30',name:'Вспененный пенополистирол (EPS)',rho:30,lam:0.039,F:4.18,e:100.87,color:'#d4c8a0',tex:'tex-insulation'},
      {id:'eps15',name:'Вспененный пенополистирол (EPS)',rho:15,lam:0.031,F:3.25,e:74.31,color:'#d8cca8',tex:'tex-insulation'},
      {id:'eps30b',name:'Плиты из пенополистирола вспененного (EPS)',rho:30,lam:0.049,F:4.26,e:105.4,color:'#d4c8a0',tex:'tex-insulation'},
      {id:'eps20',name:'Плиты из пенополистирола вспененного (EPS)',rho:20,lam:0.051,F:3.27,e:85.8,color:'#d8cca8',tex:'tex-insulation'},
      {id:'eps15b',name:'Плиты из пенополистирола вспененного (EPS)',rho:15,lam:0.053,F:2.95,e:83.8,color:'#dcd0b0',tex:'tex-insulation'},
      {id:'eps10',name:'Плиты из пенополистирола вспененного (EPS)',rho:10,lam:0.057,F:2.85,e:81.2,color:'#dcd0b0',tex:'tex-insulation'},
      {id:'eps5',name:'Плиты из пенополистирола вспененного (EPS)',rho:5,lam:0.072,F:2.75,e:80.8,color:'#e0d4b8',tex:'tex-insulation'},
      {id:'eps-facade',name:'Плиты из пенополистирола фасадные',rho:16,lam:0.048,F:4.36,e:108.4,color:'#d4c8a0',tex:'tex-insulation'},
      {id:'xps30',name:'Экструзионный пенополистирол (XPS)',rho:30,lam:0.033,F:5.52,e:98.6,color:'#c8c4a8',tex:'tex-insulation'},
      {id:'xps40',name:'Экструзионный пенополистирол (XPS)',rho:40,lam:0.035,F:5.21,e:98.11,color:'#c4c0a4',tex:'tex-insulation'},
      {id:'xps35',name:'Плиты из экструзионного пенополистирола',rho:35,lam:0.033,F:6.11,e:100.97,color:'#c8c4a8',tex:'tex-insulation'},
      {id:'xps35b',name:'Плиты из экструзионного пенополистирола (XPS)',rho:38,lam:0.036,F:5.23,e:98.15,color:'#c4c0a4',tex:'tex-insulation'},
      {id:'pir40',name:'Полиизоцианурат (PIR)',rho:40,lam:0.022,F:6.51,e:99.63,color:'#c0b898',tex:'tex-insulation'},
      {id:'pir35',name:'Полиизоцианурат (PIR)',rho:35,lam:0.022,F:5.83,e:81,color:'#c4bc9c',tex:'tex-insulation'},
      {id:'pir30',name:'Полиизоцианурат (PIR)',rho:30,lam:0.022,F:3.33,e:63.61,color:'#c8c0a0',tex:'tex-insulation'},
      {id:'pir20',name:'Полиизоцианурат (PIR)',rho:20,lam:0.021,F:2.63,e:58.97,color:'#ccc4a8',tex:'tex-insulation'},
      {id:'kfp15',name:'Карбамидно-формальдегидный пенопласт (КФП) (Пеноизол)',rho:15,lam:0.037,F:3.776,e:75.375,color:'#e0dcc8',tex:'tex-foam'},
      {id:'kfp10',name:'Карбамидно-формальдегидный пенопласт (КФП) (Пеноизол)',rho:10,lam:0.035,F:2.882,e:72.535,color:'#e4e0cc',tex:'tex-foam'},
      {id:'pur35',name:'Пенополиуретан PUR',rho:35,lam:0.026,F:16.6,e:267.4,color:'#c0b490',tex:'tex-insulation'},
      {id:'pur30',name:'Пенополиуретан PUR',rho:30,lam:0.025,F:15,e:241.4,color:'#c4b894',tex:'tex-insulation'},
      {id:'pur25',name:'Пенополиуретан PUR',rho:25,lam:0.024,F:15,e:241.4,color:'#c8bc98',tex:'tex-insulation'},
      {id:'pur20',name:'Пенополиуретан PUR',rho:20,lam:0.023,F:12.9,e:216.6,color:'#ccc09c',tex:'tex-insulation'},
      {id:'pur15',name:'Пенополиуретан PUR',rho:15,lam:0.022,F:12.2,e:173.5,color:'#d0c4a0',tex:'tex-insulation'},
      {id:'pur80',name:'Плиты из пенополиуретана',rho:80,lam:0.047,F:3.68,e:121.5,color:'#b8ac88',tex:'tex-insulation'},
      {id:'pur60',name:'Плиты из пенополиуретана',rho:60,lam:0.04,F:3.58,e:111.5,color:'#c0b490',tex:'tex-insulation'},
      {id:'pur40',name:'Плиты из пенополиуретана',rho:40,lam:0.033,F:3.48,e:101.5,color:'#c8bc98',tex:'tex-insulation'},
      {id:'mw160',name:'Минераловатные изделия из каменного волокна',rho:160,lam:0.047,F:1.35,e:29.6,color:'#b8a888',tex:'tex-insulation'},
      {id:'mw140',name:'Минераловатные изделия из каменного волокна',rho:140,lam:0.046,F:1.31,e:27.4,color:'#bcac8c',tex:'tex-insulation'},
      {id:'mw120',name:'Минераловатные изделия из каменного волокна',rho:120,lam:0.046,F:1.29,e:26.4,color:'#c0b090',tex:'tex-insulation'},
      {id:'mw80',name:'Минераловатные изделия из каменного волокна',rho:80,lam:0.045,F:1.26,e:24.5,color:'#c8b898',tex:'tex-insulation'},
      {id:'mw60',name:'Минераловатные изделия из каменного волокна',rho:60,lam:0.044,F:1.22,e:21.5,color:'#ccbc9c',tex:'tex-insulation'},
      {id:'mw50',name:'Минераловатные изделия из каменного волокна',rho:50,lam:0.043,F:1.19,e:19.2,color:'#d0c0a0',tex:'tex-insulation'},
      {id:'mw40',name:'Минераловатные изделия из каменного волокна',rho:40,lam:0.037,F:1.12,e:17.8,color:'#d4c4a4',tex:'tex-insulation'},
      {id:'mw35',name:'Минераловатные изделия из каменного волокна',rho:35,lam:0.035,F:1.05,e:16.8,color:'#d4c8a8',tex:'tex-insulation'},
      {id:'sw80',name:'Минераловатные изделия из стеклянного волокна',rho:80,lam:0.05,F:2.55,e:57.5,color:'#c0bc98',tex:'tex-insulation'},
      {id:'sw70',name:'Минераловатные изделия из стеклянного волокна',rho:70,lam:0.047,F:2.35,e:55.5,color:'#c4c09c',tex:'tex-insulation'},
      {id:'sw60',name:'Минераловатные изделия из стеклянного волокна',rho:60,lam:0.046,F:2.15,e:50.5,color:'#c8c4a0',tex:'tex-insulation'},
      {id:'sw50',name:'Минераловатные изделия из стеклянного волокна',rho:50,lam:0.045,F:1.95,e:45.5,color:'#ccc8a4',tex:'tex-insulation'},
      {id:'sw40',name:'Минераловатные изделия из стеклянного волокна',rho:40,lam:0.044,F:1.9,e:43.5,color:'#d0cca8',tex:'tex-insulation'},
      {id:'sw30',name:'Минераловатные изделия из стеклянного волокна',rho:30,lam:0.047,F:1.75,e:40.5,color:'#d4d0ac',tex:'tex-insulation'},
      {id:'sw20',name:'Минераловатные изделия из стеклянного волокна',rho:20,lam:0.048,F:1.55,e:35.5,color:'#d8d4b0',tex:'tex-insulation'},
      {id:'sw15',name:'Минераловатные изделия из стеклянного волокна',rho:15,lam:0.049,F:1.45,e:30.5,color:'#dcd8b4',tex:'tex-insulation'},
      {id:'sw10',name:'Минераловатные изделия из стеклянного волокна',rho:10,lam:0.05,F:1.35,e:28.1,color:'#dcd8b4',tex:'tex-insulation'},
      {id:'foamglass100',name:'Пеностекло',rho:100,lam:0.062,F:9.41,e:153,color:'#a8b8b0',tex:'tex-aerated'},
      {id:'foamglass50',name:'Пеностекло',rho:50,lam:0.046,F:4.52,e:75.5,color:'#b0c0b8',tex:'tex-aerated'},
      {id:'foamglass30',name:'Пеностекло',rho:30,lam:0.035,F:1.3,e:28.8,color:'#b8c8c0',tex:'tex-aerated'},
      {id:'dw1000',name:'Плиты древесно-волокнистые и древесно-стружечные',rho:1000,lam:0.29,F:0.72,e:11.1,color:'#8a6a4a',tex:'tex-wood'},
      {id:'dw800',name:'Плиты древесно-волокнистые и древесно-стружечные',rho:800,lam:0.23,F:0.62,e:10.9,color:'#8a6a4a',tex:'tex-wood'},
      {id:'dw600',name:'Плиты древесно-волокнистые и древесно-стружечные',rho:600,lam:0.16,F:0.54,e:10.6,color:'#9a7a5a',tex:'tex-wood'},
      {id:'dw400',name:'Плиты древесно-волокнистые и древесно-стружечные',rho:400,lam:0.13,F:0.25,e:9.7,color:'#9a7a5a',tex:'tex-wood'},
      {id:'dw200',name:'Плиты древесно-волокнистые и древесно-стружечные',rho:200,lam:0.08,F:0.13,e:9.4,color:'#a88a6a',tex:'tex-wood'},
      {id:'wood-wool180',name:'Древесная вата',rho:180,lam:0.07,F:0.12,e:20.27,color:'#a88868',tex:'tex-wood'},
      {id:'wood-wool60',name:'Древесная вата',rho:60,lam:0.038,F:0.98,e:20,color:'#b89878',tex:'tex-insulation'},
      {id:'paper-wool40',name:'Бумажная вата',rho:40,lam:0.037,F:0.63,e:20.2,color:'#c8b898',tex:'tex-sand'},
      {id:'cellulose50',name:'Целлюлозное волокно',rho:50,lam:0.04,F:1.83,e:10.49,color:'#c0b090',tex:'tex-sand'},
      {id:'ecowool60',name:'Целлюлозная изоляция, эковата',rho:60,lam:0.049,F:0.75,e:3.3,color:'#bcac8c',tex:'tex-sand'},
      {id:'ecowool50',name:'Целлюлозная изоляция, эковата',rho:50,lam:0.045,F:0.446,e:2.12,color:'#c0b090',tex:'tex-sand'},
      {id:'ecowool40',name:'Целлюлозная изоляция, эковата',rho:40,lam:0.04,F:0.142,e:0.94,color:'#c4b494',tex:'tex-sand'},
      {id:'sheep-wool40',name:'Овечья шерсть',rho:40,lam:0.035,F:0.99,e:23.2,color:'#c8b898',tex:'tex-insulation'},
      {id:'sheep-wool30',name:'Овечья шерсть',rho:30,lam:0.033,F:0.82,e:14.7,color:'#ccc09c',tex:'tex-insulation'},
      {id:'straw100',name:'Тюк соломы',rho:100,lam:0.067,F:0.06,e:0.24,color:'#c8b070',tex:'tex-sand'},
      {id:'gypsum1350',name:'Плиты гипсовые пазогребневые',rho:1350,lam:0.56,F:0.13,e:1.9,color:'#c0b8b0',tex:'tex-plaster'},
      {id:'gypsum1100',name:'Плиты гипсовые пазогребневые',rho:1100,lam:0.41,F:0.125,e:1.85,color:'#c4bcb4',tex:'tex-plaster'},
      {id:'gyprock1050',name:'Гипсокартонные листы',rho:1050,lam:0.36,F:0.42,e:6.95,color:'#c0b8b0',tex:'tex-plaster'},
      {id:'gyprock800',name:'Гипсокартонные листы',rho:800,lam:0.21,F:0.38,e:6.75,color:'#c8c0b8',tex:'tex-plaster'},
      {id:'perlite166',name:'Перлит',rho:166,lam:0.055,F:0.49,e:39.35,color:'#c8c0b0',tex:'tex-sand'},
      {id:'perl-bit300',name:'Изделия из вспученного перлита на битумном связующем',rho:300,lam:0.099,F:0.52,e:10.16,color:'#a09888',tex:'tex-concrete'},
      {id:'perl-bit250',name:'Изделия из вспученного перлита на битумном связующем',rho:250,lam:0.099,F:0.49,e:9.86,color:'#a89c8c',tex:'tex-concrete'},
      {id:'perl-bit225',name:'Изделия из вспученного перлита на битумном связующем',rho:225,lam:0.094,F:0.45,e:9.77,color:'#ac9c8c',tex:'tex-concrete'},
      {id:'perl-bit200',name:'Изделия из вспученного перлита на битумном связующем',rho:200,lam:0.09,F:0.41,e:9.57,color:'#b0a090',tex:'tex-concrete'},
      {id:'pe-noncross20',name:'Пенополиэтилен несшитый',rho:20,lam:0.042,F:3.7,e:92.3,color:'#d0c8b0',tex:'tex-insulation'},
      {id:'pe-noncross25',name:'Пенополиэтилен несшитый',rho:25,lam:0.042,F:3.76,e:95.3,color:'#ccc4a8',tex:'tex-insulation'},
      {id:'cork150',name:'Пробковая плита',rho:150,lam:0.049,F:0.81,e:51.52,color:'#a08060',tex:'tex-wood'},
      {id:'cork80',name:'Пробка',rho:80,lam:0.04,F:0.19,e:4,color:'#b09070',tex:'tex-wood'},
      {id:'linen40',name:'Лен',rho:40,lam:0.042,F:1.7,e:39.5,color:'#c0b090',tex:'tex-sand'},
      {id:'hemp40',name:'Конопля',rho:40,lam:0.038,F:-0.353,e:37.5,color:'#b8a888',tex:'tex-sand'},
      {id:'kenaf40',name:'Натуральный утеплитель из конопли Кенаф',rho:40,lam:0.038,F:3.17,e:59.37,color:'#b8a888',tex:'tex-sand'},
      {id:'cotton30',name:'Хлопок',rho:30,lam:0.039,F:-1.2,e:48,color:'#d4ccb8',tex:'tex-sand'},
      {id:'textile20',name:'Текстильное волокно',rho:20,lam:0.044,F:1.1,e:15,color:'#c8c0a8',tex:'tex-sand'},
      {id:'pet30',name:'Полиэтилентерефталат PET',rho:30,lam:0.035,F:1.78,e:383.72,color:'#c0b898',tex:'tex-insulation'},
      {id:'aerogel15',name:'Аэрогель',rho:15,lam:0.015,F:18.7,e:372,color:'#c8d8d8',tex:'tex-aerated'},
      {id:'vip180',name:'ВИП-панели (вакуумные изоляционные панели)',rho:180,lam:0.0025,F:42,e:1016,color:'#a0a8a8',tex:'tex-concrete'},
      {id:'vermiculite172',name:'Вермикулит',rho:172,lam:0.062,F:10.45,e:148.98,color:'#a09888',tex:'tex-sand'},
      {id:'keramzit600',name:'Гравий керамзитовый',rho:600,lam:0.19,F:0.12,e:1.8,color:'#a09078',tex:'tex-concrete'},
      {id:'keramzit500',name:'Гравий керамзитовый',rho:500,lam:0.175,F:0.115,e:1.75,color:'#a89880',tex:'tex-concrete'},
      {id:'keramzit450',name:'Гравий керамзитовый',rho:450,lam:0.16,F:0.11,e:1.7,color:'#ac9c84',tex:'tex-concrete'},
      {id:'keramzit400',name:'Гравий керамзитовый',rho:400,lam:0.15,F:0.105,e:1.65,color:'#b0a088',tex:'tex-concrete'},
      {id:'perl-sh500',name:'Щебень и песок из перлита вспученного',rho:500,lam:0.11,F:0.415,e:1.55,color:'#b0a898',tex:'tex-sand'},
      {id:'perl-sh400',name:'Щебень и песок из перлита вспученного',rho:400,lam:0.095,F:0.401,e:1.54,color:'#b4ac9c',tex:'tex-sand'},
      {id:'perl-sh350',name:'Щебень и песок из перлита вспученного',rho:350,lam:0.085,F:0.395,e:1.53,color:'#b8b0a0',tex:'tex-sand'},
      {id:'perl-sh300',name:'Щебень и песок из перлита вспученного',rho:300,lam:0.08,F:0.39,e:1.52,color:'#bcb4a4',tex:'tex-sand'},
      {id:'sand1600',name:'Песок для строительных работ',rho:1600,lam:0.58,F:0.01,e:0.05,color:'#c8c0a8',tex:'tex-sand'},
      {id:'rc2500',name:'Железобетон сборный',rho:2500,lam:2.04,F:0.54,e:32,color:'#7a7a7a',tex:'tex-concrete'},
      {id:'concrete-m200',name:'Бетон на гравии или щебне из природного камня, М200',rho:2400,lam:1.86,F:0.106,e:0.731,color:'#808080',tex:'tex-concrete'},
      {id:'concrete-m300',name:'Бетон на гравии или щебне из природного камня, М300',rho:2400,lam:1.86,F:0.139,e:0.862,color:'#808080',tex:'tex-concrete'},
      {id:'concrete-m300b',name:'Бетон на гравии или щебне из природного камня, М400',rho:2500,lam:1.88,F:0.173,e:0.871,color:'#7a7a7a',tex:'tex-concrete'},
      {id:'concrete16-20',name:'Бетон прочностью 16-20 МПа',rho:2300,lam:1.85,F:0.1,e:0.79,color:'#828282',tex:'tex-concrete'},
      {id:'concrete20-25',name:'Бетон прочностью 20-25 МПа',rho:2350,lam:1.86,F:0.107,e:0.74,color:'#828282',tex:'tex-concrete'},
      {id:'concrete25-30',name:'Бетон прочностью 25-30 МПа',rho:2450,lam:1.87,F:0.113,e:0.78,color:'#7e7e7e',tex:'tex-concrete'},
      {id:'concrete30-35',name:'Бетон прочностью 30-35 МПа',rho:2450,lam:1.87,F:0.12,e:0.82,color:'#7e7e7e',tex:'tex-concrete'},
      {id:'concrete35-40',name:'Бетон прочностью 35-40 МПа',rho:2500,lam:1.88,F:0.132,e:0.88,color:'#7a7a7a',tex:'tex-concrete'},
      {id:'concrete40-50',name:'Бетон прочностью 40-50 МПа',rho:2500,lam:1.88,F:0.151,e:1,color:'#7a7a7a',tex:'tex-concrete'},
      {id:'keramzit-b1800',name:'Керамзитобетон на керамзитовом песке',rho:1800,lam:0.92,F:0.445,e:1.75,color:'#8a8a7a',tex:'tex-concrete'},
      {id:'keramzit-b1600',name:'Керамзитобетон на керамзитовом песке',rho:1600,lam:0.79,F:0.435,e:1.7,color:'#8e8e7e',tex:'tex-concrete'},
      {id:'keramzit-b1400',name:'Керамзитобетон на керамзитовом песке',rho:1400,lam:0.65,F:0.425,e:1.65,color:'#929282',tex:'tex-concrete'},
      {id:'keramzit-b1200',name:'Керамзитобетон на керамзитовом песке',rho:1200,lam:0.52,F:0.415,e:1.6,color:'#969686',tex:'tex-concrete'},
      {id:'keramzit-b1000',name:'Керамзитобетон на керамзитовом песке',rho:1000,lam:0.41,F:0.405,e:1.55,color:'#9a9a8a',tex:'tex-concrete'},
      {id:'keramzit-b800',name:'Керамзитобетон на керамзитовом песке',rho:800,lam:0.31,F:0.395,e:1.5,color:'#9e9e8e',tex:'tex-concrete'},
      {id:'keramzit-b600',name:'Керамзитобетон на керамзитовом песке',rho:600,lam:0.26,F:0.385,e:1.45,color:'#a2a292',tex:'tex-concrete'},
      {id:'keramzit-b500',name:'Керамзитобетон на керамзитовом песке',rho:500,lam:0.23,F:0.375,e:1.4,color:'#a6a696',tex:'tex-concrete'},
      {id:'keramzit-q1200',name:'Керамзитобетон на кварцевом песке с умеренной поризацией',rho:1200,lam:0.58,F:0.45,e:1.53,color:'#929282',tex:'tex-concrete'},
      {id:'keramzit-q1000',name:'Керамзитобетон на кварцевом песке с умеренной поризацией',rho:1000,lam:0.47,F:0.41,e:1.47,color:'#9a9a8a',tex:'tex-concrete'},
      {id:'keramzit-q800',name:'Керамзитобетон на кварцевом песке с умеренной поризацией',rho:800,lam:0.35,F:0.393,e:1.45,color:'#9e9e8e',tex:'tex-concrete'},
      {id:'keramzit-bp400',name:'Керамзитобетон беспесчаный',rho:400,lam:0.125,F:0.373,e:1.39,color:'#a8a898',tex:'tex-concrete'},
      {id:'psb600',name:'Полистиролбетон на портландцементе',rho:600,lam:0.2,F:0.8,e:18.35,color:'#a0a098',tex:'tex-concrete'},
      {id:'psb500',name:'Полистиролбетон на портландцементе',rho:500,lam:0.16,F:0.825,e:8.57,color:'#a4a49c',tex:'tex-concrete'},
      {id:'psb400',name:'Полистиролбетон на портландцементе',rho:400,lam:0.135,F:0.841,e:9.05,color:'#a8a8a0',tex:'tex-concrete'},
      {id:'foam-b400',name:'Пенобетон естественного твердения на цементном вяжущем (без песка)',rho:400,lam:0.15,F:0.292,e:20.63,color:'#b0b0a8',tex:'tex-aerated'},
      {id:'foam-b1000',name:'Пенобетон естественного твердения на цементном вяжущем (с песком)',rho:1000,lam:0.43,F:0.333,e:30.75,color:'#989890',tex:'tex-aerated'},
      {id:'foam-b800',name:'Пенобетон естественного твердения на цементном вяжущем (с песком)',rho:800,lam:0.37,F:0.325,e:0.71,color:'#a0a098',tex:'tex-aerated'},
      {id:'foam-b600',name:'Пенобетон естественного твердения на цементном вяжущем (с песком)',rho:600,lam:0.26,F:0.315,e:0.67,color:'#a8a8a0',tex:'tex-aerated'},
      {id:'conc-block1450',name:'Бетонный блок средней плотности',rho:1450,lam:0.68,F:0.185,e:0.67,color:'#8a8a82',tex:'tex-concrete'},
      {id:'gas-sil800',name:'Кладка стен из газосиликатных блоков на клеевом растворе (шов 2-3 мм)',rho:800,lam:0.27,F:0.135,e:1.9,color:'#b0b0a8',tex:'tex-aerated'},
      {id:'gas-sil600',name:'Кладка стен из газосиликатных блоков на клеевом растворе (шов 2-3 мм)',rho:600,lam:0.19,F:0.125,e:1.8,color:'#b8b8b0',tex:'tex-aerated'},
      {id:'gas-sil400',name:'Кладка стен из газосиликатных блоков на клеевом растворе (шов 2-3 мм)',rho:400,lam:0.15,F:0.115,e:1.7,color:'#c0c0b8',tex:'tex-aerated'},
      {id:'gas-sil300',name:'Кладка стен из газосиликатных блоков на клеевом растворе (шов 2-3 мм)',rho:300,lam:0.14,F:0.102,e:1.6,color:'#c4c4bc',tex:'tex-aerated'},
      {id:'aac1000',name:'Кладка стен из мелких автоклавных ячеистобетонных блоков на цементно-песчаном растворе',rho:1000,lam:0.37,F:0.41,e:3.75,color:'#989890',tex:'tex-aerated'},
      {id:'aac900',name:'Кладка стен из мелких автоклавных ячеистобетонных блоков на цементно-песчаном растворе',rho:900,lam:0.29,F:0.38,e:3.65,color:'#9c9c94',tex:'tex-aerated'},
      {id:'aac800',name:'Кладка стен из мелких автоклавных ячеистобетонных блоков на цементно-песчаном растворе',rho:800,lam:0.27,F:0.36,e:3.6,color:'#a0a098',tex:'tex-aerated'},
      {id:'aac700',name:'Кладка стен из мелких автоклавных ячеистобетонных блоков на цементно-песчаном растворе',rho:700,lam:0.26,F:0.35,e:3.55,color:'#a4a49c',tex:'tex-aerated'},
      {id:'acb750',name:'Автоклавные газобетонные блоки на основе цемента',rho:750,lam:0.25,F:0.3,e:3.5,color:'#a8a8a0',tex:'tex-aerated'},
      {id:'asb400',name:'Автоклавные газосиликатные блоки',rho:400,lam:0.15,F:0.102,e:1.6,color:'#c0c0b8',tex:'tex-aerated'},
      {id:'acb-fiber500',name:'Автоклавные газобетонные блоки, армированные волокном',rho:500,lam:0.16,F:0.664,e:7.5,color:'#b0b0a8',tex:'tex-aerated'},
      {id:'cer-block1600',name:'Керамические блоки',rho:1600,lam:0.63,F:0.4,e:3.37,color:'#b07050',tex:'tex-brick'},
      {id:'cer-block800',name:'Керамические блоки',rho:800,lam:0.18,F:0.22,e:2.96,color:'#b88060',tex:'tex-brick'},
      {id:'cpr1800',name:'Раствор цементно-песчаный',rho:1800,lam:0.93,F:0.19,e:1.4,color:'#b0a898',tex:'tex-plaster'},
      {id:'complex1700',name:'Раствор сложный (песок, известь, цемент)',rho:1700,lam:0.87,F:0.053,e:1.37,color:'#b4ac9c',tex:'tex-plaster'},
      {id:'lime1600',name:'Раствор известково-песчаный',rho:1600,lam:0.81,F:0.039,e:1.09,color:'#b8b0a0',tex:'tex-plaster'},
      {id:'cplaster1800',name:'Штукатурка цементно-песчаная',rho:1800,lam:0.93,F:0.19,e:1.4,color:'#b0a898',tex:'tex-plaster'},
      {id:'gplaster1100',name:'Штукатурка гипсовая',rho:1100,lam:0.27,F:0.12,e:1.81,color:'#c0b8b0',tex:'tex-plaster'},
      {id:'gplaster1000',name:'Штукатурка гипсовая',rho:1000,lam:0.25,F:0.11,e:1.76,color:'#c4bcb4',tex:'tex-plaster'},
      {id:'clay-brick1900',name:'Кладка из глиняного обыкновенного кирпича на цементно-песчаном растворе',rho:1900,lam:0.85,F:0.151,e:2.137,color:'#b85a3a',tex:'tex-brick'},
      {id:'clay-brick1800',name:'Кладка из глиняного обыкновенного кирпича на цементно-песчаном растворе',rho:1800,lam:0.81,F:0.159,e:2.256,color:'#ba5c3c',tex:'tex-brick'},
      {id:'clay-brick1700',name:'Кладка из глиняного обыкновенного на цементно-шлаковом растворе',rho:1700,lam:0.76,F:0.168,e:2.388,color:'#bc5e3e',tex:'tex-brick'},
      {id:'cer-brick1600',name:'Кладка из керамического пустотного кирпича на цементно-песчаном растворе',rho:1600,lam:0.64,F:0.35,e:3.25,color:'#b87048',tex:'tex-brick'},
      {id:'cer-brick1400',name:'Кладка из керамического пустотного кирпича на цементно-песчаном растворе',rho:1400,lam:0.58,F:0.28,e:3.15,color:'#ba784e',tex:'tex-brick'},
      {id:'cer-brick1200',name:'Кладка из керамического пустотного кирпича на цементно-песчаном растворе',rho:1200,lam:0.52,F:0.21,e:2.828,color:'#bc8054',tex:'tex-brick'},
      {id:'sil-brick1800',name:'Кладка из силикатного кирпича на цементно-песчаном растворе',rho:1800,lam:1.05,F:0.138,e:1.565,color:'#c8c0b0',tex:'tex-brick'},
      {id:'sil-brick1960',name:'Кладка из силикатного кирпича на цементно-песчаном растворе',rho:1960,lam:1.48,F:0.144,e:1.585,color:'#c4bcac',tex:'tex-brick'},
      {id:'sil-brick1500',name:'Кладка из силикатного кирпича пустотного на цементно-песчаном растворе',rho:1500,lam:0.81,F:0.134,e:1.521,color:'#ccc4b4',tex:'tex-brick'},
      {id:'sil-brick1400',name:'Кладка из силикатного четырнадцати-пустотного на цементно-песчаном растворе',rho:1400,lam:0.76,F:0.13,e:1.51,color:'#d0c8b8',tex:'tex-brick'},
      {id:'hardwood',name:'Пиломатериалы лиственных пород, высушенные в печи',rho:650,lam:0.14,F:0.108,e:2,color:'#7a5a3a',tex:'tex-wood'},
      {id:'pine',name:'Пиломатериалы сосна и ель поперек волокон',rho:500,lam:0.18,F:0.11,e:2.1,color:'#8a6a4a',tex:'tex-wood'},
      {id:'oak',name:'Пиломатериалы дуб поперек волокон',rho:700,lam:0.23,F:0.125,e:2.3,color:'#6a4a2a',tex:'tex-wood'},
      {id:'plywood',name:'Фанера клееная',rho:600,lam:0.18,F:1.07,e:15,color:'#8a6a4a',tex:'tex-wood'},
      {id:'glulam',name:'Клееный брус',rho:550,lam:0.18,F:0.87,e:12,color:'#8a6a4a',tex:'tex-wood'},
      {id:'lvl',name:'Клееный брус (LVL)',rho:600,lam:0.1,F:2.28,e:34.3,color:'#8a6a4a',tex:'tex-wood'},
      {id:'tile2000',name:'Облицовка керамической плиткой',rho:2000,lam:1.4,F:1.4,e:15.4,color:'#c0b0a0',tex:'tex-concrete'},
      {id:'wallpaper',name:'Обои',rho:450,lam:0.045,F:1.93,e:36.4,color:'#d0c8b8',tex:'tex-sand'},
      {id:'rebar-steel',name:'Сталь стержневая арматурная',rho:7850,lam:58,F:2.4,e:24.2,color:'#7a7a80',tex:'tex-concrete'},
      {id:'mesh-steel',name:'Сварная сетка',rho:7850,lam:58,F:2.1,e:23.8,color:'#7a7a80',tex:'tex-concrete'},
      {id:'zinc-steel',name:'Оцинкованные изделия',rho:7850,lam:58,F:2.28,e:29.1,color:'#8a8a90',tex:'tex-concrete'},
      {id:'stainless',name:'Нержавеющая сталь',rho:7850,lam:16,F:16.1,e:56.7,color:'#8a8a90',tex:'tex-concrete'},
      {id:'wire-steel',name:'Проволока стальная',rho:7850,lam:58,F:2.32,e:36,color:'#7a7a80',tex:'tex-concrete'},
      {id:'aluminum',name:'Алюминий',rho:2600,lam:221,F:3.6,e:152.9,color:'#b0b0b8',tex:'tex-concrete'},
      {id:'copper',name:'Медь (в среднем, включая переработку 37%)',rho:8500,lam:407,F:2.64,e:168,color:'#b08060',tex:'tex-concrete'},
      {id:'glass2500',name:'Стекло оконное',rho:2500,lam:0.76,F:1.41,e:16,color:'#8ab8c0',tex:'tex-sand'},
      {id:'carbon-rebar',name:'Углепластиковая арматура',rho:1800,lam:0.35,F:19.7,e:301,color:'#303030',tex:'tex-concrete'},
      {id:'carbon-textile',name:'Углепластиковый текстиль',rho:1750,lam:0.25,F:18.4,e:281,color:'#404040',tex:'tex-sand'},
      {id:'basalt-rebar',name:'Базальтопластиковая арматура',rho:2200,lam:0.4,F:2.34,e:51.12,color:'#606058',tex:'tex-concrete'},
      {id:'paint-solvent',name:'Краска на основе растворителя',rho:1000,lam:0.2,F:3.13,e:97,color:'#b0a898',tex:'tex-plaster'},
      {id:'paint-acrylic',name:'Акриловая краска (на водной основе)',rho:1000,lam:0.2,F:2.12,e:59,color:'#b8b0a8',tex:'tex-plaster'},
      {id:'cement3100',name:'Портландцемент',rho:3100,lam:0.5,F:0.86,e:5.6,color:'#808080',tex:'tex-concrete'},
      {id:'pvc1380',name:'ПВХ',rho:1380,lam:2.4,F:17.2,e:7.2,color:'#b0b0b0',tex:'tex-concrete'},
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
          name.textContent = m.name + (m.rho && !m.name.includes('ρ=') ? ', ρ='+m.rho : '');
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
          name.textContent = m.name + (m.rho && !m.name.includes('ρ=') ? ', ρ='+m.rho : '');
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
      renderWall();
      const wl = parseFloat(document.getElementById('wall-length').value) || 0;
      const wh = parseFloat(document.getElementById('wall-height').value) || 0;
      const dc = parseInt(document.getElementById('door-count').value) || 0;
      const dw = parseFloat(document.getElementById('door-width').value) || 0;
      const dh = parseFloat(document.getElementById('door-height').value) || 0;
      const wc = parseInt(document.getElementById('window-count').value) || 0;
      const ww = parseFloat(document.getElementById('window-width').value) || 0;
      const wwh = parseFloat(document.getElementById('window-height').value) || 0;
      const waste = parseFloat(document.getElementById('waste').value) || 0;
      const GSOP = parseFloat(document.getElementById('gsop').value) || 0;
      const S = parseFloat(document.getElementById('wall-area-s').value) || 0;
      const rebarType = document.getElementById('rebar-type').value;
      const rebarMass = parseFloat(document.getElementById('rebar-mass').value) || 0;

      fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          layers: layers.map(l => ({
            materialId: l.materialId,
            thickness: l.thickness,
            density: l.density
          })),
          rebarType: rebarType,
          rebarMass: rebarMass,
          gsop: GSOP,
          wallAreaS: S,
          wallLength: wl,
          wallHeight: wh,
          doorCount: dc,
          doorWidth: dw,
          doorHeight: dh,
          windowCount: wc,
          windowWidth: ww,
          windowHeight: wwh,
          waste: waste
        })
      })
      .then(r => r.json())
      .then(data => {
        const totalWallArea = data.netArea > 0 ? S : 0;
        document.getElementById('res-mass').textContent = data.totalMass.toFixed(1) + ' кг';
        document.getElementById('res-mass-total').textContent = (data.totalMass * totalWallArea / 1000).toFixed(1) + ' т';
        document.getElementById('res-r0').textContent = data.r0.toFixed(4);
        document.getElementById('res-q').textContent = data.qPerM2.toFixed(2);
        document.getElementById('res-q-total').textContent = data.qTotal.toFixed(1);
        document.getElementById('res-co2').textContent = data.totalCarbon.toFixed(2);
        document.getElementById('res-co2-total').textContent = (data.totalCarbon * totalWallArea).toFixed(1);
        document.getElementById('res-energy').textContent = data.totalEnergy.toFixed(1);
        document.getElementById('res-energy-total').textContent = (data.totalEnergy * totalWallArea).toFixed(1);
        document.getElementById('res-gas').textContent = data.v1.toFixed(3);
        document.getElementById('res-gas-total').textContent = data.vTotal.toFixed(1);
      })
      .catch(() => {
        // fallback to local calc if API unavailable
        localCalc(layers, rebarType, rebarMass, GSOP, S, wl, wh, dc, dw, dh, wc, ww, wwh);
      });

      renderDetailTable(layers, rebarType, rebarMass);
    }

    function localCalc(layers, rebarType, rebarMass, GSOP, S, wl, wh, dc, dw, dh, wc, ww, wwh) {
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
        let rebarDB = rebarType === 'steel' ? DB.find(d => d.id === 'rebar-steel') : DB.find(d => d.id === 'basalt-rebar');
        if (rebarDB) {
          Mtotal += rebarMass;
          Ctotal += rebarMass * rebarDB.F;
          Etotal += rebarMass * rebarDB.e;
        }
      }

      const R0 = 0.15841 + Rsum;
      const Qm2 = GSOP > 0 && R0 > 0 ? (0.024 * GSOP * 1) / R0 : 0;
      const Qtotal = Qm2 * totalWallArea;
      const V1 = Qm2 > 0 ? Qm2 / (9.3 * 0.9) : 0;
      const Vtotal = V1 * totalWallArea;

      document.getElementById('res-mass').textContent = Mtotal.toFixed(1) + ' кг';
      document.getElementById('res-mass-total').textContent = (Mtotal * totalWallArea / 1000).toFixed(1) + ' т';
      document.getElementById('res-r0').textContent = R0.toFixed(3);
      document.getElementById('res-q').textContent = Qm2.toFixed(2);
      document.getElementById('res-q-total').textContent = Qtotal.toFixed(1);
      document.getElementById('res-co2').textContent = Ctotal.toFixed(2);
      document.getElementById('res-co2-total').textContent = (Ctotal * totalWallArea).toFixed(1);
      document.getElementById('res-energy').textContent = Etotal.toFixed(1);
      document.getElementById('res-energy-total').textContent = (Etotal * totalWallArea).toFixed(1);
      document.getElementById('res-gas').textContent = V1.toFixed(3);
      document.getElementById('res-gas-total').textContent = Vtotal.toFixed(1);
    }

    document.querySelectorAll('input, select').forEach(el => el.addEventListener('input', calc));
    renderAll();
  
