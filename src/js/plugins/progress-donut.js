function progressDonut(target,progress) {
	$(target).circularloader({
		backgroundColor: "#ffffff",//background colour of inner circle
		fontColor: "#000000",//font color of progress text
		fontSize: "40px",//font size of progress text
		radius: 130,//radius of circle
		progressBarBackground: "transparent",//background colour of circular progress Bar
		progressBarColor: "#0073e6",//colour of circular progress bar
		progressBarWidth: 96,//progress bar width
		progressPercent: progress,//progress percentage out of 100, start with 0
	});
	$(target).next().html('Progresso ' + progress + '%');
}

// TODO togliere testi e colori da qui, sono fuori contesto
