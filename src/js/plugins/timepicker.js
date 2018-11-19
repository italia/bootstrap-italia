//GLOBAL VARIABLES
var keys, valMin, valMax, valNow, skipVal;

$(document).ready(function () {
    $('.spinner-control button').attr('aria-hidden', 'true').attr('tabindex', '-1');
    $('#btnTime').click(function(){
        loadSpinner();
    });

    //Hour and Minute
    $('#spinnerHour, #spinnerMin').each(function(e){
        return spinbutton($(this).attr('id'),  $(this).attr('bb-skip'), e);
    });

    $('#btnHourUp, #btnHourDown, #btnMinUp, #btnMinDown', '.spinner-control').click(function(){
        handleClick($(this).attr('id'));
    });

    
    $('.spinner-control *').on('keydown', function(e){
        if (e.which==13) {
            var newTime = $('#spinnerHour').attr('value') + ':' + $('#spinnerMin').attr('value');
            $('#txtTime').attr('value', newTime).focus();
            $('.spinner-control').attr('aria-hidden', 'true');
            return false;
        } else if (e.which==27) {
            hideSpinner();
            return false;
        }
    });

    //Direct Time Entry
    $('#txtTime').on('keydown', function(e){
        if (e.which==13) {
            return checkForm($(this));
        }
    });
});

function getKeys() {
    keys = {
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40
    };
    return keys;
}

function setDigit(number, id) {
    if ((id=='spinnerMin') || (id=='btnMinUp') || (id=='btnMinDown')){
        return (number < 10 ? '0' : '') + number;
    } else {
        return number;
    }
}



function loadSpinner(){
    $('.spinner-control').attr('aria-hidden', 'false');
    $('.spinner-control input:first').focus();
}

function hideSpinner(){
    $('.spinner-control').attr('aria-hidden', 'true');
    $('#btnTime').focus();
}

function getValues(that, arrowBtn){
    var findInput= that;
    if (arrowBtn== true) {
        findInput= that.closest('.spinner').find('input');
        if (that.find('svg').hasClass('fa-angle-up')) {
            findInput= that.closest('.spinner').find('input');
        }
    }
    valMin = parseInt(findInput.attr('aria-valuemin'));
    valMax = parseInt(findInput.attr('aria-valuemax'));
    valNow = parseInt(findInput.attr('aria-valuenow'));
    skipVal = parseInt(findInput.attr('bb-skip'));
}

function spinbutton(id, skipVal, e) {
    getKeys();

     var that= $('#' + id);
    that.on('keydown', function(e) {
        return handleKeyDown(e, id);
    });
    that.on('keypress', function(e) {
        return handleKeyPress(e);
    });
}

function handleKeyDown(e, id) {

    var that= $('#' + id);
    getValues(that, false);

    if (e.altKey || e.ctrlKey || e.shiftKey) {
        // do nothing
        return true;
    }

    switch(e.which) {
        case this.keys.pageup: {

            if (valNow < valMax) {

                // if valnow is small enough, increase by the skipVal,
                // otherwise just set to valmax
                if (valNow < valMax - skipVal) {
                    valNow += skipVal;
                }
                else {
                    valNow = valMax;
                }

                // update the control
                that.attr('aria-valuenow', setDigit(valNow, id));
                that.attr('value', setDigit(valNow), id);
            }

            e.stopPropagation();
            return false;
        }
        case this.keys.pagedown: {
            if (valNow > valMin) {
                // if valNow is big enough, decrease by the skipVal,
                // otherwise just set to valmin
                if (setDigit(valNow, false) > setDigit(valMin, false) + setDigit(skipVal, false)) {
                    valNow -= setDigit(skipVal, false);
                }
                else {
                    valNow = setDigit(valMin, false);
                }

                // update the control
                that.attr('aria-valuenow', setDigit(valNow, id));
                that.attr('value', setDigit(valNow, id));
            }

            e.stopPropagation();
            return false;
        }
        case this.keys.home: {

            if (valNow < valMax) {
                valNow = valMax;
                that.attr('aria-valuenow', setDigit(valNow, id));
                that.attr('value', setDigit(valNow, id));
            }

            e.stopPropagation();
            return false;
        }
        case this.keys.end: {

            if (valNow > valMin) {
                valNow = valMin;
                that.attr('aria-valuenow', setDigit(valNow, id));
                that.attr('value', setDigit(valNow, id));
            }
            e.stopPropagation();
            return false;
        }
        case this.keys.right:
        case this.keys.up: {
            // if valuemin isn't met, increment valnow
            if (valNow < valMax) {
                valNow++;
                that.attr('value', setDigit(valNow, id));
                that.attr('aria-valuenow', setDigit(valNow, id));
            }
           e.stopPropagation();
            return false;
        }
        case this.keys.left:
        case this.keys.down: {
            // if valuemax isn't met, decrement valnow
            if (valNow > valMin) {
                valNow--;
                that.attr('value', setDigit(valNow, id));
                that.attr('aria-valuenow', setDigit(valNow, id));
            }
            e.stopPropagation();
            return false;
        }
    }
    return true;
}

function handleKeyPress(e) {

    if (e.altKey || e.ctrlKey || e.shiftKey) {
        // do nothing
        return true;
    }

    switch(e.keyCode) {
        case this.keys.pageup:
        case this.keys.pagedown:
        case this.keys.home:
        case this.keys.end:
        case this.keys.left:
        case this.keys.up:
        case this.keys.right:
        case this.keys.down: {
            e.stopPropagation();
            return false;
        }
    }
    return true;

} 

function handleClick($button) {

    var that= $('#' + $button);
    var id= that.attr('id');
    var findInput= "";
    getValues(that, true);

    if (that.find('svg').hasClass('fa-angle-up')) {
       // if valuemax isn't met, increment valnow
        if (valNow < valMax) {
            valNow++
        }
        findInput= that.closest('.spinner').find('input');
    }
    else {
        // if valuemax isn't met, decrement valnow
        if (valNow > valMin) {
            valNow--;
        }
        findInput= that.closest('.spinner').find('input');
    }
    findInput.attr('value', setDigit(valNow, id));
    findInput.attr('aria-valuenow', setDigit(valNow, id));
}


// TIME VALIDATION FOR DATA ENTRY
function checkForm(that)
{
    // regular expression to match required time format
    var timeTxt = /^\d{1,2}:\d{2}([AP]M)?$/i;
    var newValue= $(that).val();
    var matches = newValue != "" ? newValue.match(timeTxt) : '';
    if (matches) {
        $('#error_container').html("");
        return true;
    } else {
        console.log(newValue);
        var errMsg="Invalid Due Date Time format";
        $('#error_container').html(errMsg);
        return false;
    }
}