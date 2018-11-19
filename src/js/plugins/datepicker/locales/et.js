(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Vali kuupäev ...",
		        "buttonLabel": "Klõpsa või vajuta klahvi Enter või tühiku avada kalender",
		        "prevButtonLabel": "Mine eelmise kuu",
		        "nextButtonLabel": "Mine järgmisel kuul",
		        "closeButtonTitle": "Lähedal",
		        "closeButtonLabel": "Sulgege kalender",
		        "prevMonthButtonLabel": "Eelmise aasta",
		        "prevYearButtonLabel": "Eelmise kakskümmend aastat",
		        "nextMonthButtonLabel": "Mine järgmisel aastal",
		        "nextYearButtonLabel": "Mine järgmise kahekümne aasta jooksul",
		        "changeMonthButtonLabel": "Klõpsa või vajuta klahvi Enter või tühiku muuta kuul",
		        "changeYearButtonLabel": "Klõpsa või vajuta klahvi Enter või tühiku muuta aasta",
		        "changeRangeButtonLabel": "Klõpsa või vajuta klahvi Enter või tühiku minna järgmise kahekümne aasta jooksul",
		        "calendarHelp": "- Nool ja Nool - läheb sama nädalapäev eelmise või järgmise nädala võrra. Kui kuu lõpus on saavutatud, jätkub järgmise või eelmise kuuga vastavalt vajadusele.\r\n- Nool vasakule ja nool paremale - areneb ühe päevaga, ka jätkamisele. Visuaalselt fookus liikunud päevast päeva ja wrapid reast ritta ruudustik päeva.\r\n- Ctrl + Page Up - Liigub samal päeval eelmisel aastal.\r\n- Ctrl + Page Down - Liigub sama kuupäeva järgmisel aastal.\r\n- Kodu - Liigub esimesel päeval jooksval kuul.\r\n- End - Liigub viimasel päeval jooksval kuul.\r\n- Page Up - Liigub samal kuupäeval eelmisel kuul.\r\n- Page Down - Liigub sama kuupäeva järgmisel kuul.\r\n- Sisesta või Espace - sulgeb kalender ja valitud kuupäev on näidatud seotud teksti kasti.\r\n- Escape - sulgeb kalender ilma mingeid meetmeid."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "jaanuar",
		        "veebruar",
		        "märts",
		        "aprill",
		        "mai",
		        "juuni",
		        "juuli",
		        "august",
		        "september",
		        "oktoober",
		        "november",
		        "detsember"
		    ],
		    "month_names_abbreviated": [
		        "jaan",
		        "veebr",
		        "märts",
		        "apr",
		        "mai",
		        "juuni",
		        "juuli",
		        "aug",
		        "sept",
		        "okt",
		        "nov",
		        "dets"
		    ],
		    "month_names_narrow": [
		        "J",
		        "V",
		        "M",
		        "A",
		        "M",
		        "J",
		        "J",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "pühapäev",
		        "esmaspäev",
		        "teisipäev",
		        "kolmapäev",
		        "neljapäev",
		        "reede",
		        "laupäev"
		    ],
		    "day_names_abbreviated": [
		        "P",
		        "E",
		        "T",
		        "K",
		        "N",
		        "R",
		        "L"
		    ],
		    "day_names_short": [
		        "P",
		        "E",
		        "T",
		        "K",
		        "N",
		        "R",
		        "L"
		    ],
		    "day_names_narrow": [
		        "P",
		        "E",
		        "T",
		        "K",
		        "N",
		        "R",
		        "L"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "keskpäev",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "e.k.",
		        "noon": "keskpäev",
		        "pm": "p.k."
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "noon": "n",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "1. kvartal",
		        "2. kvartal",
		        "3. kvartal",
		        "4. kvartal"
		    ],
		    "quarter_names_abbreviated": [
		        "K1",
		        "K2",
		        "K3",
		        "K4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "enne meie aega",
		        "meie aja järgi"
		    ],
		    "era_names_abbreviated": [
		        "e.m.a.",
		        "m.a.j."
		    ],
		    "era_names_narrow": [
		        "e.m.a.",
		        "m.a.j."
		    ],
		    "full_format": "EEEE, d. MMMM y",
		    "long_format": "d. MMMM y",
		    "medium_format": "d. MMM y",
		    "short_format": "dd.MM.yy",
		    "firstday_of_week": 0
		};
	}
})();