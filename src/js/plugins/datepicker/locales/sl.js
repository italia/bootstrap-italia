(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Izberi datum ...",
		        "buttonLabel": "Kliknite ali pritisnite tipko Enter ali preslednico, da odprete koledar",
		        "prevButtonLabel": "Pojdi na pretekli mesec",
		        "nextButtonLabel": "Pojdi na naslednji mesec",
		        "closeButtonTitle": "Zapri",
		        "closeButtonLabel": "Zaprite koledar",
		        "prevMonthButtonLabel": "Pojdi na preteklo leto",
		        "prevYearButtonLabel": "Pojdi na preteklih dvajsetih letih",
		        "nextMonthButtonLabel": "Pojdite na naslednje leto",
		        "nextYearButtonLabel": "Pojdi na naslednjih dvajsetih letih",
		        "changeMonthButtonLabel": "Kliknite ali pritisnite tipko Enter ali preslednico za spremembo mesec",
		        "changeYearButtonLabel": "Kliknite ali pritisnite tipko Enter ali preslednico za spremembo leto",
		        "changeRangeButtonLabel": "Kliknite ali pritisnite tipko Enter ali preslednico, da gredo v naslednjih dvajsetih letih",
		        "calendarHelp": "- Gor in Dol - gre za isti dan v tednu v prejšnji ali naslednji teden oz. Če je dosežen konec meseca, se nadaljuje v naslednji ali prejšnji mesec, kot je primerno.\r\n- Puščica levo in desno Arrow - predujmi en dan naslednji, prav tako v kontinuumu. Vizualno poudarek je preselil iz dneva v dan in obloge od vrstice do vrstice v mreži dni.\r\n- Ctrl + Page Up - Pomakne se na isti dan preteklega leta.\r\n- Ctrl + Page Down - Pomakne se na isti dan v naslednjem letu.\r\n- Home - Pomakne se na prvi dan v tekočem mesecu.\r\n- End - Pomakne se na zadnji dan v tekočem mesecu.\r\n- Page Up - Pomakne se na isti dan v preteklem mesecu.\r\n- Page Down - Pomakne se na isti dan v naslednjem mesecu.\r\n- Enter ali Espace - zapre koledar in izbrani datum je prikazan v polju, povezane z besedilom.\r\n- Escape - zapre koledar brez kakršne koli ukrepanje."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "januar",
		        "februar",
		        "marec",
		        "april",
		        "maj",
		        "junij",
		        "julij",
		        "avgust",
		        "september",
		        "oktober",
		        "november",
		        "december"
		    ],
		    "month_names_abbreviated": [
		        "jan.",
		        "feb.",
		        "mar.",
		        "apr.",
		        "maj",
		        "jun.",
		        "jul.",
		        "avg.",
		        "sep.",
		        "okt.",
		        "nov.",
		        "dec."
		    ],
		    "month_names_narrow": [
		        "j",
		        "f",
		        "m",
		        "a",
		        "m",
		        "j",
		        "j",
		        "a",
		        "s",
		        "o",
		        "n",
		        "d"
		    ],
		    "day_names": [
		        "nedelja",
		        "ponedeljek",
		        "torek",
		        "sreda",
		        "četrtek",
		        "petek",
		        "sobota"
		    ],
		    "day_names_abbreviated": [
		        "ned.",
		        "pon.",
		        "tor.",
		        "sre.",
		        "čet.",
		        "pet.",
		        "sob."
		    ],
		    "day_names_short": [
		        "ned.",
		        "pon.",
		        "tor.",
		        "sre.",
		        "čet.",
		        "pet.",
		        "sob."
		    ],
		    "day_names_narrow": [
		        "n",
		        "p",
		        "t",
		        "s",
		        "č",
		        "p",
		        "s"
		    ],
		    "day_periods": {
		        "am": "dop.",
		        "noon": "poldne",
		        "pm": "pop."
		    },
		    "day_periods_abbreviated": {
		        "am": "dop.",
		        "noon": "poldne",
		        "pm": "pop."
		    },
		    "day_periods_narrow": {
		        "am": "d",
		        "noon": "n",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "1. četrtletje",
		        "2. četrtletje",
		        "3. četrtletje",
		        "4. četrtletje"
		    ],
		    "quarter_names_abbreviated": [
		        "Q1",
		        "Q2",
		        "Q3",
		        "Q4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "pred našim štetjem",
		        "naše štetje"
		    ],
		    "era_names_abbreviated": [
		        "pr. n. št.",
		        "po Kr."
		    ],
		    "era_names_narrow": [
		        "pr. n. št.",
		        "po Kr."
		    ],
		    "full_format": "EEEE, dd. MMMM y",
		    "long_format": "dd. MMMM y",
		    "medium_format": "d. MMM y",
		    "short_format": "d. MM. yy",
		    "firstday_of_week": 0
		};
	}
})();