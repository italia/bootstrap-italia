(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Pasirinkite datą ...",
		        "buttonLabel": "Spauskite arba paspauskite klavišą Enter arba tarpo atidaryti kalendorių",
		        "prevButtonLabel": "Eiti į ankstesnį mėnesį",
		        "nextButtonLabel": "Eiti į kitą mėnesį",
		        "closeButtonTitle": "Arti",
		        "closeButtonLabel": "Uždarykite kalendorių",
		        "prevMonthButtonLabel": "Eiti į ankstesnių metų",
		        "prevYearButtonLabel": "Eiti į ankstesnių dvidešimt metų",
		        "nextMonthButtonLabel": "Eiti į kitus metus",
		        "nextYearButtonLabel": "Eiti į ateinančius dvidešimt metų",
		        "changeMonthButtonLabel": "Spauskite arba paspauskite klavišą Enter arba tarpo pakeisti mėnesį",
		        "changeYearButtonLabel": "Spauskite arba paspauskite klavišą Enter arba tarpo pakeisti metus",
		        "changeRangeButtonLabel": "Spauskite arba paspauskite klavišą Enter arba tarpo klavišą, norėdami pereiti prie kito dvidešimt metų",
		        "calendarHelp": "- Rodyklė aukštyn ir rodyklė žemyn - eina į tą pačią savaitės dieną į ankstesnį arba kitą savaitę atitinkamai. Jei mėnesio pabaigoje bus pasiektas, ir toliau į kitą arba ankstesnį mėnesį, kaip tinkama.\r\n- Rodyklė į kairę ir rodyklė į dešinę - avansai vieną dieną į kitą, taip pat kontinuumas. Vizualiai dėmesys persikėlė diena iš dienos ir antklodės iš eilės eilės dienų tinklelį.\r\n- Ctrl + Page Up - Perkelia į tą pačią dieną praėjusiais metais.\r\n- Ctrl + Page Down - Perkelia į tos pačios dienos kitais metais.\r\n- Namai - Perkelia į pirmą dieną einamąjį mėnesį.\r\n- End - Perkelia į paskutinę dieną einamąjį mėnesį.\r\n- Puslapis Up - Perkelia į tą pačią dieną į ankstesnį mėnesį.\r\n- Page Down - Perkelia į tos pačios dienos į kitą mėnesį.\r\n- Įveskite arba Espace - užsidaro kalendorių ir pasirinktos datos rodomas susijęs teksto laukelyje.\r\n- Pabėgti - užsidaro kalendorių be bet kokių veiksmų."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "sausio",
		        "vasario",
		        "kovo",
		        "balandžio",
		        "gegužės",
		        "birželio",
		        "liepos",
		        "rugpjūčio",
		        "rugsėjo",
		        "spalio",
		        "lapkričio",
		        "gruodžio"
		    ],
		    "month_names_abbreviated": [
		        "saus.",
		        "vas.",
		        "kov.",
		        "bal.",
		        "geg.",
		        "birž.",
		        "liep.",
		        "rugp.",
		        "rugs.",
		        "spal.",
		        "lapkr.",
		        "gruod."
		    ],
		    "month_names_narrow": [
		        "S",
		        "V",
		        "K",
		        "B",
		        "G",
		        "B",
		        "L",
		        "R",
		        "R",
		        "S",
		        "L",
		        "G"
		    ],
		    "day_names": [
		        "sekmadienis",
		        "pirmadienis",
		        "antradienis",
		        "trečiadienis",
		        "ketvirtadienis",
		        "penktadienis",
		        "šeštadienis"
		    ],
		    "day_names_abbreviated": [
		        "sk",
		        "pr",
		        "an",
		        "tr",
		        "kt",
		        "pn",
		        "št"
		    ],
		    "day_names_short": [
		        "Sk",
		        "Pr",
		        "An",
		        "Tr",
		        "Kt",
		        "Pn",
		        "Št"
		    ],
		    "day_names_narrow": [
		        "S",
		        "P",
		        "A",
		        "T",
		        "K",
		        "P",
		        "Š"
		    ],
		    "day_periods": {
		        "am": "priešpiet",
		        "noon": "perpiet",
		        "pm": "popiet"
		    },
		    "day_periods_abbreviated": {
		        "am": "pr.p.",
		        "noon": "perpiet",
		        "pm": "pop."
		    },
		    "day_periods_narrow": {
		        "am": "pr.p.",
		        "noon": "perpiet",
		        "pm": "pop."
		    },
		    "quarter_names": [
		        "I ketvirtis",
		        "II ketvirtis",
		        "III ketvirtis",
		        "IV ketvirtis"
		    ],
		    "quarter_names_abbreviated": [
		        "I k.",
		        "II k.",
		        "III k.",
		        "IV k."
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "prieš Kristų",
		        "po Kristaus"
		    ],
		    "era_names_abbreviated": [
		        "pr. Kr.",
		        "po Kr."
		    ],
		    "era_names_narrow": [
		        "pr. Kr.",
		        "po Kr."
		    ],
		    "full_format": "y 'm'. MMMM d 'd'., EEEE",
		    "long_format": "y 'm'. MMMM d 'd'.",
		    "medium_format": "y-MM-dd",
		    "short_format": "y-MM-dd",
		    "firstday_of_week": 1
		};
	}
})();