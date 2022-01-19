﻿/*
CircularLoader-v1.3.js
Developed by http://technoplugin.com
For support or web development drop a mail at developer@technoplugin.com
*/
!(function (r) {
  function t(r) {
    return (r * Math.PI) / 180
  }
  function e(e, a, s) {
    var o = r('#' + s + 'canvas')[0],
      n = r('#' + s + 'canvas'),
      i = o.getContext('2d'),
      l = o.width / 2,
      d = o.height / 2
    i.beginPath(),
      i.arc(l, d, r(n).attr('data-radius'), 0, 2 * Math.PI, !1),
      (i.fillStyle = 'transparent'),
      i.fill(),
      (i.lineWidth = r(n).attr('data-width')),
      (i.strokeStyle = r(n).attr('data-progressBarBackground')),
      i.stroke(),
      i.closePath(),
      i.beginPath(),
      i.arc(l, d, r(n).attr('data-radius'), -t(90), -t(90) + t((e / 100) * 360), !1),
      (i.fillStyle = 'transparent'),
      i.fill(),
      (i.lineWidth = r(n).attr('data-width')),
      (i.strokeStyle = r(n).attr('data-stroke')),
      i.stroke(),
      i.closePath(),
      'true' == r(n).attr('data-text').toLocaleLowerCase() &&
        r('#' + s + ' .clProg').val(a + ('true' == r(n).attr('data-percent').toLocaleLowerCase() ? '%' : ''))
  }
  r.fn.circularloader = function (t) {
    function a() {
      h.beginPath(),
        h.arc(u, f, i, 0, 2 * Math.PI, !1),
        (h.fillStyle = n.backgroundColor),
        h.fill(),
        (h.lineWidth = l),
        (h.strokeStyle = n.progressBarBackground),
        h.stroke(),
        h.closePath(),
        c > 0 && e(c, d, o)
    }
    var s = this[0],
      o = s.id
    if (0 == r('#' + o + 'canvas').length) {
      var n = r.extend(
          {
            backgroundColor: '#ffffff',
            fontColor: '#000000',
            fontSize: '40px',
            radius: 70,
            progressBarBackground: '#cdcdcd',
            progressBarColor: '#aaaaaa',
            progressBarWidth: 25,
            progressPercent: 0,
            progressValue: 0,
            showText: !0,
            title: '',
          },
          t
        ),
        i = parseInt(n.radius),
        l = parseInt(n.progressBarWidth),
        d = parseInt(parseInt(n.progressValue) > 0 ? n.progressValue : n.progressPercent),
        c = parseInt(n.progressPercent),
        p =
          'color:' +
          n.fontColor +
          ';font-size:' +
          parseInt(n.fontSize) +
          'px;width:' +
          2 * (i + l) +
          'px;vertical-align:middle;position:relative;background-color:transparent;border:0 none;transform:translateY(-48%);-webkit-transform: translateY(-48%);-ms-transform: translateY(-48%);height:' +
          2 * (i + l) +
          'px;margin-left:-' +
          2 * (i + l) +
          'px;text-align:center;padding:0;' +
          (n.showText ? '' : 'display:none;')
      r(
        '<canvas data-width="' +
          l +
          '" data-radius="' +
          i +
          '" data-stroke="' +
          n.progressBarColor +
          '" data-progressBarBackground="' +
          n.progressBarBackground +
          '" data-backgroundColor="' +
          n.backgroundColor +
          '" data-text=' +
          n.showText +
          ' data-percent=' +
          (void 0 == t.progressValue ? !0 : !1) +
          ' id="' +
          o +
          'canvas" width=' +
          2 * (i + l) +
          ' height=' +
          2 * (i + l) +
          '></canvas>'
      ).appendTo(s),
        r('<input class="clProg" style="' + p + '" value="' + d + (void 0 == t.progressValue ? '%' : '') + '" aria-hidden="true"></input>').appendTo(s),
        '' == n.title
          ? r('#' + o).css('height', 2 * (i + l))
          : (r('#' + o).css('height', 2 * (i + l) + 20),
            r('#' + o + 'canvas').before("<div class='titleCircularLoader' style='height:19px;text-align:center;'>" + n.title + '</div>'),
            r('.titleCircularLoader').css('width', 2 * (i + l)))
      {
        var g = r('#' + o + 'canvas')[0],
          h = g.getContext('2d'),
          u = g.width / 2,
          f = g.height / 2
        r('#' + o + 'canvas').offset().left, r('#' + o + 'canvas').offset().top
      }
      a()
    } else if (void 0 != t.progressPercent || void 0 != t.progressValue) {
      ;(c = 0), (d = 0)
      ;(c =
        void 0 == t.progressPercent
          ? parseInt(t.progressValue) > 100
            ? 100
            : parseInt(t.progressValue)
          : parseInt(t.progressPercent) > 100
          ? 100
          : parseInt(t.progressPercent)),
        (d = void 0 == t.progressValue ? (parseInt(t.progressPercent) > 100 ? 100 : parseInt(t.progressPercent)) : parseInt(t.progressValue)),
        e(c, d, o)
    }
    return this
  }
})(jQuery)
