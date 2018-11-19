(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Kies datum ...",
		        "buttonLabel": "Klik of druk op de Enter-toets of de spatiebalk om de kalender te openen",
		        "prevButtonLabel": "Ga naar vorige maand",
		        "nextButtonLabel": "Ga naar volgende maand",
		        "closeButtonTitle": "Dicht",
		        "closeButtonLabel": "Sluit de kalender",
		        "prevMonthButtonLabel": "Ga naar het vorige jaar",
		        "prevYearButtonLabel": "Naar de laatste twintig jaren",
		        "nextMonthButtonLabel": "Ga naar het volgende jaar",
		        "nextYearButtonLabel": "Ga naar de volgende twintig jaar",
		        "changeMonthButtonLabel": "Klik of druk op de Enter-toets of de spatiebalk om de maand te wijzigen",
		        "changeYearButtonLabel": "Klik of druk op de Enter-toets of de spatiebalk om het jaar te veranderen",
		        "changeRangeButtonLabel": "Klik of druk op de Enter-toets of de spatiebalk om naar de volgende twintig jaar",
		        "calendarHelp": "- Pijl omhoog en Pijl omlaag - gaat op dezelfde dag van de week in de vorige of volgende week, respectievelijk. Wanneer het einde van de maand is bereikt, door in het volgende of vorige maand geval.\r\n- Pijl-links en Pijl-rechts - voorschotten ene dag op de andere, eveneens in een continuüm. Visueel focus is verplaatst van dag tot dag en wraps van rij tot rij in het raster dagen.\r\n- Control + Page Up - Gaat naar dezelfde datum in het voorgaande jaar.\r\n- Control + Page Down - Gaat naar dezelfde datum in het volgende jaar.\r\n- Home - Hiermee gaat u naar de eerste dag van de huidige maand.\r\n- Einde - Hiermee gaat u naar de laatste dag van de huidige maand.\r\n- Page Up - Gaat naar dezelfde datum in de voorgaande maand.\r\n- Page Down - Gaat naar dezelfde datum in de komende maand.\r\n- Enter of Espace - sluit de agenda en de geselecteerde datum wordt weergegeven in het bijbehorende tekstvak.\r\n- Escape - sluit de kalender zonder enige actie."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "januari",
		        "februari",
		        "maart",
		        "april",
		        "mei",
		        "juni",
		        "juli",
		        "augustus",
		        "september",
		        "oktober",
		        "november",
		        "december"
		    ],
		    "month_names_abbreviated": [
		        "jan.",
		        "feb.",
		        "mrt.",
		        "apr.",
		        "mei",
		        "jun.",
		        "jul.",
		        "aug.",
		        "sep.",
		        "okt.",
		        "nov.",
		        "dec."
		    ],
		    "month_names_narrow": [
		        "J",
		        "F",
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
		        "zondag",
		        "maandag",
		        "dinsdag",
		        "woensdag",
		        "donderdag",
		        "vrijdag",
		        "zaterdag"
		    ],
		    "day_names_abbreviated": [
		        "zo",
		        "ma",
		        "di",
		        "wo",
		        "do",
		        "vr",
		        "za"
		    ],
		    "day_names_short": [
		        "zo",
		        "ma",
		        "di",
		        "wo",
		        "do",
		        "vr",
		        "za"
		    ],
		    "day_names_narrow": [
		        "Z",
		        "M",
		        "D",
		        "W",
		        "D",
		        "V",
		        "Z"
		    ],
		    "day_periods": {
		        "am": "a.m.",
		        "noon": "12 uur ‘s middags",
		        "pm": "p.m."
		    },
		    "day_periods_abbreviated": {
		        "am": "a.m.",
		        "noon": "12 uur ‘s middags",
		        "pm": "p.m."
		    },
		    "day_periods_narrow": {
		        "am": "a.m.",
		        "noon": "n",
		        "pm": "p.m."
		    },
		    "quarter_names": [
		        "1e kwartaal",
		        "2e kwartaal",
		        "3e kwartaal",
		        "4e kwartaal"
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
		        "voor Christus",
		        "na Christus"
		    ],
		    "era_names_abbreviated": [
		        "v.Chr.",
		        "n.Chr."
		    ],
		    "era_names_narrow": [
		        "v.C.",
		        "n.C."
		    ],
		    "full_format": "EEEE d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "dd-MM-yy",
		    "firstday_of_week": 1
		};
	}
})();