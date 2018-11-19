(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Valitse päivä ...",
		        "buttonLabel": "Napsauta tai paina Enter-näppäintä tai välilyöntiä avata kalenterin",
		        "prevButtonLabel": "Siirry edelliseen kuukauteen",
		        "nextButtonLabel": "Siirry seuraavaan kuukauteen",
		        "closeButtonTitle": "Lähellä",
		        "closeButtonLabel": "Sulje kalenteri",
		        "prevMonthButtonLabel": "Siirry edelliseen vuoteen",
		        "prevYearButtonLabel": "Siirry edelliseen kaksikymmentä vuotta",
		        "nextMonthButtonLabel": "Siirry ensi vuonna",
		        "nextYearButtonLabel": "Siirry seuraavan kahdenkymmenen vuoden",
		        "changeMonthButtonLabel": "Napsauta tai paina Enter-näppäintä tai välilyöntiä muuttaa kuukauteen",
		        "changeYearButtonLabel": "Napsauta tai paina Enter-näppäintä tai välilyöntiä muuttaa vuoden",
		        "changeRangeButtonLabel": "Napsauta tai paina Enter-näppäintä tai välilyöntiä siirtyä seuraavan kahdenkymmenen vuoden",
		        "calendarHelp": "- Nuoli ylös ja nuoli alas - menee samana viikonpäivänä edellisen tai ensi viikolla vastaavasti. Jos kuukauden lopussa on saavutettu, jatkuu seuraavaan tai edelliseen kuukauteen tarvittaessa.\r\n- Vasen ja oikea nuoli - kehitetty yksi yössä, myös jatkumo. Visuaalisesti painopiste siirretään päivittäin ja kääreet rivi riviltä ruudukossa päivää.\r\n- Control + Page Up - Siirtyy samana päivänä edellisvuonna.\r\n- Control + Page Down - Siirtyy samana päivänä ensi vuonna.\r\n- Koti - Siirtää ensimmäisenä päivänä kuluvan kuukauden.\r\n- End - Siirtää viimeisenä päivänä kuluvan kuukauden.\r\n- Page Up - Siirtyy samana päivänä edellisen kuukauden.\r\n- Page Down - Siirtyy samana päivänä ensi kuussa.\r\n- Anna tai Espace - sulkee kalenteri, ja valittu päivämäärä näkyy liittyvän tekstikenttään.\r\n- Escape - sulkee kalenteri ilman toimintaa."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "tammikuuta",
		        "helmikuuta",
		        "maaliskuuta",
		        "huhtikuuta",
		        "toukokuuta",
		        "kesäkuuta",
		        "heinäkuuta",
		        "elokuuta",
		        "syyskuuta",
		        "lokakuuta",
		        "marraskuuta",
		        "joulukuuta"
		    ],
		    "month_names_abbreviated": [
		        "tammikuuta",
		        "helmikuuta",
		        "maaliskuuta",
		        "huhtikuuta",
		        "toukokuuta",
		        "kesäkuuta",
		        "heinäkuuta",
		        "elokuuta",
		        "syyskuuta",
		        "lokakuuta",
		        "marraskuuta",
		        "joulukuuta"
		    ],
		    "month_names_narrow": [
		        "T",
		        "H",
		        "M",
		        "H",
		        "T",
		        "K",
		        "H",
		        "E",
		        "S",
		        "L",
		        "M",
		        "J"
		    ],
		    "day_names": [
		        "sunnuntaina",
		        "maanantaina",
		        "tiistaina",
		        "keskiviikkona",
		        "torstaina",
		        "perjantaina",
		        "lauantaina"
		    ],
		    "day_names_abbreviated": [
		        "su",
		        "ma",
		        "ti",
		        "ke",
		        "to",
		        "pe",
		        "la"
		    ],
		    "day_names_short": [
		        "su",
		        "ma",
		        "ti",
		        "ke",
		        "to",
		        "pe",
		        "la"
		    ],
		    "day_names_narrow": [
		        "S",
		        "M",
		        "T",
		        "K",
		        "T",
		        "P",
		        "L"
		    ],
		    "day_periods": {
		        "am": "ap.",
		        "noon": "keskipäivä",
		        "pm": "ip."
		    },
		    "day_periods_abbreviated": {
		        "am": "ap.",
		        "noon": "keskipäivä",
		        "pm": "ip."
		    },
		    "day_periods_narrow": {
		        "am": "ap.",
		        "noon": "kp.",
		        "pm": "ip."
		    },
		    "quarter_names": [
		        "1. neljännes",
		        "2. neljännes",
		        "3. neljännes",
		        "4. neljännes"
		    ],
		    "quarter_names_abbreviated": [
		        "1. nelj.",
		        "2. nelj.",
		        "3. nelj.",
		        "4. nelj."
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "ennen Kristuksen syntymää",
		        "jälkeen Kristuksen syntymän"
		    ],
		    "era_names_abbreviated": [
		        "eKr.",
		        "jKr."
		    ],
		    "era_names_narrow": [
		        "eK",
		        "jK"
		    ],
		    "full_format": "cccc d. MMMM y",
		    "long_format": "d. MMMM y",
		    "medium_format": "d.M.y",
		    "short_format": "d.M.y",
		    "firstday_of_week": 1
		};
	}
})();