(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Pilih tanggal ...",
		        "buttonLabel": "Klik atau tekan tombol Enter atau spasi untuk membuka kalender",
		        "prevButtonLabel": "Pergi ke bulan sebelumnya",
		        "nextButtonLabel": "Pergi ke bulan depan",
		        "closeButtonTitle": "Dekat",
		        "closeButtonLabel": "Tutup kalender",
		        "prevMonthButtonLabel": "Pergi ke tahun sebelumnya",
		        "prevYearButtonLabel": "Pergi ke sebelumnya dua puluh tahun",
		        "nextMonthButtonLabel": "Pergi ke tahun depan",
		        "nextYearButtonLabel": "Pergi ke dua puluh tahun ke depan",
		        "changeMonthButtonLabel": "Klik atau tekan tombol Enter atau spasi untuk mengubah bulan",
		        "changeYearButtonLabel": "Klik atau tekan tombol Enter atau spasi untuk mengubah tahun",
		        "changeRangeButtonLabel": "Klik atau tekan tombol Enter atau spasi untuk pergi ke dua puluh tahun ke depan",
		        "calendarHelp": "- Panah dan Panah Bawah - pergi ke hari yang sama dalam seminggu pada minggu sebelumnya atau berikutnya masing-masing. Jika akhir bulan tercapai, terus berlanjut ke bulan berikutnya atau sebelumnya yang sesuai.\r\n- Panah Kiri dan Kanan Panah - kemajuan satu hari ke hari berikutnya, juga dalam kontinum. Fokus visual dipindahkan dari hari ke hari dan membungkus dari baris ke baris di grid hari.\r\n- Control + Page Up - Pindah ke tanggal yang sama di tahun sebelumnya.\r\n- Control + Page Down - Pindah ke tanggal yang sama di tahun depan.\r\n- Home - Pindah ke hari pertama bulan berjalan.\r\n- End - Pindah ke hari terakhir bulan berjalan.\r\n- Page Up - Pindah ke tanggal yang sama pada bulan sebelumnya.\r\n- Page Down - Pindah ke tanggal yang sama di bulan berikutnya.\r\n- Masukkan atau Espace - menutup kalender, dan tanggal yang dipilih akan ditampilkan dalam kotak teks terkait.\r\n- Escape - menutup kalender tanpa tindakan apapun."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "Januari",
		        "Februari",
		        "Maret",
		        "April",
		        "Mei",
		        "Juni",
		        "Juli",
		        "Agustus",
		        "September",
		        "Oktober",
		        "November",
		        "Desember"
		    ],
		    "month_names_abbreviated": [
		        "Jan",
		        "Feb",
		        "Mar",
		        "Apr",
		        "Mei",
		        "Jun",
		        "Jul",
		        "Agt",
		        "Sep",
		        "Okt",
		        "Nov",
		        "Des"
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
		        "Minggu",
		        "Senin",
		        "Selasa",
		        "Rabu",
		        "Kamis",
		        "Jumat",
		        "Sabtu"
		    ],
		    "day_names_abbreviated": [
		        "Min",
		        "Sen",
		        "Sel",
		        "Rab",
		        "Kam",
		        "Jum",
		        "Sab"
		    ],
		    "day_names_short": [
		        "Min",
		        "Sen",
		        "Sel",
		        "Rab",
		        "Kam",
		        "Jum",
		        "Sab"
		    ],
		    "day_names_narrow": [
		        "M",
		        "S",
		        "S",
		        "R",
		        "K",
		        "J",
		        "S"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "tengah hari",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "tengah hari",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "AM",
		        "noon": "tengah hari",
		        "pm": "PM"
		    },
		    "quarter_names": [
		        "Kuartal ke-1",
		        "Kuartal ke-2",
		        "Kuartal ke-3",
		        "Kuartal ke-4"
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
		        "Sebelum Masehi",
		        "M"
		    ],
		    "era_names_abbreviated": [
		        "SM",
		        "M"
		    ],
		    "era_names_narrow": [
		        "SM",
		        "M"
		    ],
		    "full_format": "EEEE, dd MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "dd/MM/yy",
		    "firstday_of_week": 0
		};
	}
})();