(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Izaberite datum ...",
		        "buttonLabel": "Kliknite ili pritisnite tipku Enter ili razmaknicu da biste otvorili kalendar",
		        "prevButtonLabel": "Idi na prethodni mjesec",
		        "nextButtonLabel": "Idi na sljedeći mjesec",
		        "closeButtonTitle": "Blizu",
		        "closeButtonLabel": "Zatvorite kalendar",
		        "prevMonthButtonLabel": "Idi na prošlu godinu",
		        "prevYearButtonLabel": "Idi na prethodnih dvadeset godina",
		        "nextMonthButtonLabel": "Idi na sljedeću godinu",
		        "nextYearButtonLabel": "Idi na idućih dvadeset godina",
		        "changeMonthButtonLabel": "Kliknite ili pritisnite tipku Enter ili razmaknicu da biste promijenili mjesec",
		        "changeYearButtonLabel": "Kliknite ili pritisnite tipku Enter ili razmaknicu da biste promijenili godine",
		        "changeRangeButtonLabel": "Kliknite ili pritisnite tipku Enter ili razmaknicu da ide u sljedećih dvadeset godina",
		        "calendarHelp": "- Strelica gore i strelica dolje - ide na isti dan u tjednu u prethodni ili sljedeći tjedan respektivno. Ako je postignut krajem mjeseca, nastavlja u sljedeći ili prethodni mjesec, prema potrebi.\r\n- Strelica lijevo i desno strelicama - napredak jednog dana sljedeće, također u kontinuitetu. Vizualno fokus je premještena iz dana u dan i oblozi iz reda u red u mreži dana.\r\n- Control + Page Up - Prelazak na isti dan prethodne godine.\r\n- Control + Page Down - Prelazak na isti dan u idućoj godini.\r\n- Početna - Prelazak na prvi dan u tekućem mjesecu.\r\n- Kraj - Prelazak na zadnji dan u tekućem mjesecu.\r\n- Page Up - Prelazak na isti dan u prethodnom mjesecu.\r\n- Stranica dolje - Prelazak na isti dan u sljedećem mjesecu.\r\n- Unesite ili Espace - zatvara kalendar, a odabrani datum prikazuje se u povezanom tekstualni okvir.\r\n- Escape - zatvara kalendar bez bilo kakve akcije."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "siječnja",
		        "veljače",
		        "ožujka",
		        "travnja",
		        "svibnja",
		        "lipnja",
		        "srpnja",
		        "kolovoza",
		        "rujna",
		        "listopada",
		        "studenoga",
		        "prosinca"
		    ],
		    "month_names_abbreviated": [
		        "sij",
		        "velj",
		        "ožu",
		        "tra",
		        "svi",
		        "lip",
		        "srp",
		        "kol",
		        "ruj",
		        "lis",
		        "stu",
		        "pro"
		    ],
		    "month_names_narrow": [
		        "1.",
		        "2.",
		        "3.",
		        "4.",
		        "5.",
		        "6.",
		        "7.",
		        "8.",
		        "9.",
		        "10.",
		        "11.",
		        "12."
		    ],
		    "day_names": [
		        "nedjelja",
		        "ponedjeljak",
		        "utorak",
		        "srijeda",
		        "četvrtak",
		        "petak",
		        "subota"
		    ],
		    "day_names_abbreviated": [
		        "ned",
		        "pon",
		        "uto",
		        "sri",
		        "čet",
		        "pet",
		        "sub"
		    ],
		    "day_names_short": [
		        "ned",
		        "pon",
		        "uto",
		        "sri",
		        "čet",
		        "pet",
		        "sub"
		    ],
		    "day_names_narrow": [
		        "N",
		        "P",
		        "U",
		        "S",
		        "Č",
		        "P",
		        "S"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "podne",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "podne",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "afternoon": "popodne",
		        "am": "AM",
		        "earlyMorning": "ujutro",
		        "evening": "navečer",
		        "morning": "prijepodne",
		        "night": "noću",
		        "noon": "P",
		        "pm": "PM"
		    },
		    "quarter_names": [
		        "1. kvartal",
		        "2. kvartal",
		        "3. kvartal",
		        "4. kvartal"
		    ],
		    "quarter_names_abbreviated": [
		        "1kv",
		        "2kv",
		        "3kv",
		        "4kv"
		    ],
		    "quarter_names_narrow": [
		        "1.",
		        "2.",
		        "3.",
		        "4."
		    ],
		    "era_names": [
		        "Prije Krista",
		        "Poslije Krista"
		    ],
		    "era_names_abbreviated": [
		        "pr. Kr.",
		        "p. Kr."
		    ],
		    "era_names_narrow": [
		        "pr.n.e.",
		        "AD"
		    ],
		    "full_format": "EEEE, d. MMMM y.",
		    "long_format": "d. MMMM y.",
		    "medium_format": "d. MMM y.",
		    "short_format": "dd.MM.y.",
		    "firstday_of_week": 1
		};
	}
})();