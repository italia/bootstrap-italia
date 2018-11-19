(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Select tarixi ...",
		        "buttonLabel": "Basın və ya Enter düyməsini basın və ya boşluq təqvim açmaq",
		        "prevButtonLabel": "Əvvəlki aya dön",
		        "nextButtonLabel": "Növbəti aya getmək",
		        "closeButtonTitle": "Yaxın",
		        "closeButtonLabel": "Təqvimə bağlayın",
		        "prevMonthButtonLabel": "Əvvəlki ilə getmək",
		        "prevYearButtonLabel": "Əvvəlki iyirmi il getmək",
		        "nextMonthButtonLabel": "Gələn il getmək",
		        "nextYearButtonLabel": "Növbəti iyirmi il getmək",
		        "changeMonthButtonLabel": "Basın və ya Enter düyməsini basın və ya boşluq ay dəyişdirmək üçün",
		        "changeYearButtonLabel": "Basın və ya Enter düyməsini basın və ya boşluq il dəyişdirmək üçün",
		        "changeRangeButtonLabel": "Basın və ya növbəti iyirmi il getmək üçün əsas və ya boşluq Enter düyməsini basın",
		        "calendarHelp": "- Up Arrow və Down Arrow - müvafiq olaraq əvvəlki və ya sonrakı həftə həftə eyni gün gedir. Ayın sonunda əldə olunarsa, müvafiq olaraq növbəti və ya əvvəlki aya daxil davam edir.\r\n- Sol Arrow və sağ Arrow - də davamlı, növbəti bir gün avanslar. Görmə diqqət gündən günə köçürülüb və gün grid sıra sıra wraps olunur.\r\n- Control + Səhifə Up - əvvəlki ilin eyni günə Moves.\r\n- Control + Page Down - gələn ilin eyni günə Moves.\r\n- Ana səhifə - cari ayın birinci günü üçün hərəkət edir.\r\n- End - Cari ayın son gününə Moves.\r\n- Səhifə Up - bir əvvəlki aya eyni günə Moves.\r\n- Page Down - növbəti ayın eyni günə Moves.\r\n- Daxil edin və ya Espace - təqvim bağlayır, və seçilmiş tarix bağlı, mətn qutusuna göstərilir.\r\n- Escape - Hər hansı bir hərəkət olmadan təqvim bağlayır."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "yanvar",
		        "fevral",
		        "mart",
		        "aprel",
		        "may",
		        "iyun",
		        "iyul",
		        "avqust",
		        "sentyabr",
		        "oktyabr",
		        "noyabr",
		        "dekabr"
		    ],
		    "month_names_abbreviated": [
		        "yan",
		        "fev",
		        "mar",
		        "apr",
		        "may",
		        "iyn",
		        "iyl",
		        "avq",
		        "sen",
		        "okt",
		        "noy",
		        "dek"
		    ],
		    "month_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4",
		        "5",
		        "6",
		        "7",
		        "8",
		        "9",
		        "10",
		        "11",
		        "12"
		    ],
		    "day_names": [
		        "bazar",
		        "bazar ertəsi",
		        "çərşənbə axşamı",
		        "çərşənbə",
		        "cümə axşamı",
		        "cümə",
		        "şənbə"
		    ],
		    "day_names_abbreviated": [
		        "B.",
		        "B.E.",
		        "Ç.A.",
		        "Ç.",
		        "C.A.",
		        "C.",
		        "Ş."
		    ],
		    "day_names_short": [
		        "B.",
		        "B.E.",
		        "Ç.A.",
		        "Ç.",
		        "C.A.",
		        "C.",
		        "Ş."
		    ],
		    "day_names_narrow": [
		        "7",
		        "1",
		        "2",
		        "3",
		        "4",
		        "5",
		        "6"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "günorta",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "günorta",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "noon": "g",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "1-ci kvartal",
		        "2-ci kvartal",
		        "3-cü kvartal",
		        "4-cü kvartal"
		    ],
		    "quarter_names_abbreviated": [
		        "1-ci kv.",
		        "2-ci kv.",
		        "3-cü kv.",
		        "4-cü kv."
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "eramızdan əvvəl",
		        "bizim eramızın"
		    ],
		    "era_names_abbreviated": [
		        "e.ə.",
		        "b.e."
		    ],
		    "era_names_narrow": [
		        "e.ə.",
		        "b.e."
		    ],
		    "full_format": "d MMMM y, EEEE",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "dd.MM.yy",
		    "firstday_of_week": 1
		};
	}
})();