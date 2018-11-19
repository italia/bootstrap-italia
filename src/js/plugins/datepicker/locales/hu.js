(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Válassza ki a dátumot ...",
		        "buttonLabel": "Kattintson vagy nyomja meg az Enter billentyűt, vagy a szóközt, hogy nyissa ki a naptárt",
		        "prevButtonLabel": "Ugrás az előző hónaphoz",
		        "nextButtonLabel": "Ugrás a következő hónapban",
		        "closeButtonTitle": "Közel",
		        "closeButtonLabel": "Zárja le a naptári",
		        "prevMonthButtonLabel": "Ugrás az előző évhez képest",
		        "prevYearButtonLabel": "Ugrás az előző húsz évben",
		        "nextMonthButtonLabel": "Ugrás a következő évre",
		        "nextYearButtonLabel": "Ugrás a következő húsz évben",
		        "changeMonthButtonLabel": "Kattintson vagy nyomja meg az Enter billentyűt, vagy a szóközt, hogy módosítsa a hónapban",
		        "changeYearButtonLabel": "Kattintson vagy nyomja meg az Enter billentyűt, vagy a szóközt, hogy változtatni az év",
		        "changeRangeButtonLabel": "Kattintson vagy nyomja meg az Enter billentyűt, vagy a szóközt, hogy menjen a következő húsz évben",
		        "calendarHelp": "- Felfelé és Lefelé - megy az ugyanazon a napon a héten az előző vagy a következő héten volt. Ha a hónap vége elérésekor folytatódik a következő vagy előző hónapban adott esetben.\r\n- Balra és Jobbra - előlegek egyik napról a másikra, szintén folytonosságában. Vizuálisan hangsúly átkerül napról napra, és titokban sorból evezni a rács napok.\r\n- Control + Page Up - költözik az ugyanazon a napon az előző évben.\r\n- Control + Page Down - költözik az ugyanazon a napon a következő évben.\r\n- Otthon - költözik az első nap a hónapot.\r\n- Vége - költözik utolsó napján a hónapot.\r\n- Page Up - költözik az ugyanazon a napon az előző hónapban.\r\n- Page Down - költözik az ugyanazon a napon a következő hónapban.\r\n- Adja meg vagy Espace - zárja a naptár, és a kiválasztott időpont szerepel a kapcsolódó mezőbe.\r\n- Escape - zárja a naptári beavatkozás nélkül."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "január",
		        "február",
		        "március",
		        "április",
		        "május",
		        "június",
		        "július",
		        "augusztus",
		        "szeptember",
		        "október",
		        "november",
		        "december"
		    ],
		    "month_names_abbreviated": [
		        "jan.",
		        "febr.",
		        "márc.",
		        "ápr.",
		        "máj.",
		        "jún.",
		        "júl.",
		        "aug.",
		        "szept.",
		        "okt.",
		        "nov.",
		        "dec."
		    ],
		    "month_names_narrow": [
		        "J",
		        "F",
		        "M",
		        "Á",
		        "M",
		        "J",
		        "J",
		        "A",
		        "Sz",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "vasárnap",
		        "hétfő",
		        "kedd",
		        "szerda",
		        "csütörtök",
		        "péntek",
		        "szombat"
		    ],
		    "day_names_abbreviated": [
		        "V",
		        "H",
		        "K",
		        "Sze",
		        "Cs",
		        "P",
		        "Szo"
		    ],
		    "day_names_short": [
		        "V",
		        "H",
		        "K",
		        "Sze",
		        "Cs",
		        "P",
		        "Szo"
		    ],
		    "day_names_narrow": [
		        "V",
		        "H",
		        "K",
		        "Sz",
		        "Cs",
		        "P",
		        "Sz"
		    ],
		    "day_periods": {
		        "am": "de.",
		        "noon": "dél",
		        "pm": "du."
		    },
		    "day_periods_abbreviated": {
		        "am": "de.",
		        "noon": "dél",
		        "pm": "du."
		    },
		    "day_periods_narrow": {
		        "am": "de.",
		        "noon": "dél",
		        "pm": "du."
		    },
		    "quarter_names": [
		        "I. negyedév",
		        "II. negyedév",
		        "III. negyedév",
		        "IV. negyedév"
		    ],
		    "quarter_names_abbreviated": [
		        "N1",
		        "N2",
		        "N3",
		        "N4"
		    ],
		    "quarter_names_narrow": [
		        "1.",
		        "2.",
		        "3.",
		        "4."
		    ],
		    "era_names": [
		        "időszámításunk előtt",
		        "időszámításunk szerint"
		    ],
		    "era_names_abbreviated": [
		        "i. e.",
		        "i. sz."
		    ],
		    "era_names_narrow": [
		        "ie.",
		        "isz."
		    ],
		    "full_format": "y. MMMM d., EEEE",
		    "long_format": "y. MMMM d.",
		    "medium_format": "y. MMM d.",
		    "short_format": "y. MM. dd.",
		    "firstday_of_week": 1
		};
	}
})();