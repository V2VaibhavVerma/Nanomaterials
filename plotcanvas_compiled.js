for (var imgdat = ["data:image/png;base64,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",
            "data:image/png;base64,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"
        ],
        imgobj = [], i = 0; i < imgdat.length; i++) imgobj[i] = new Image, imgobj[i].src = imgdat[i];

function plotCanvas(d) {
    this.width = d.width;
    this.height = d.height;
    this.xLeft = d.xoffset;
    this.yTop = d.yoffset;
    this.pwidth = d.pltwidth;
    this.pheight = d.pltheight;
    this.xRight = this.xLeft + this.pwidth;
    this.yBottom = this.yTop + this.pheight;
    this.ctxovr = this.canovr = this.ctx = this.can = null;
    this.x = [];
    this.y = [];
    this.pType = this.BOXPLOT = this.n = 0;
    this.NONE = -1;
    this.PT = 0;
    this.DOT = 1;
    this.PLUS = 2;
    this.SQR = 3;
    this.CIR = 4;
    this.DASH = 5;
    this.BIGDOT = 6;
    this.BIGSQR = 7;
    this.BIGTRI = 8;
    this.BIGX = 9;
    this.BIGDIA = 10;
    this.dSymbol = this.NONE;
    this.bkgdColor =
        "#ffffff";
    this.axisColor = "#000000";
    this.gridColor = "#aaaaaa";
    this.valColor = "#0000aa";
    this.plotColor = "#ffffff";
    this.lineColor = this.syblColor = this.lablColor = "#000000";
    this.defcolors = "#aa0000 #0000aa #00aa00 #ee00ee #00cccc #000000".split(" ");
    this.deflines = [
        [],
        [1, 2],
        [3, 3],
        [2, 4],
        [4, 1],
        [3, 1]
    ];
    this.yLabel = this.xLabel = null;
    this.ymaxLabel = this.ymidLabel = this.yminLabel = this.xmaxLabel = this.xmidLabel = this.xminLabel = this.title = "";
    this.lymax = this.lymin = this.yinc = this.ymax = this.ymin = this.lxmax = this.lxmin = this.xinc =
        this.xmax = this.xmin = this.by = this.my = this.bx = this.mx = 0;
    this.fillPlot = !0;
    this.plotbck = null;
    this.showGrid = this.connectPts = !0;
    this.yLabelVertical = this.xAxisFonly = this.yAxisFonly = this.xAxisInt = this.yAxisInt = this.showYGrid = this.showXGrid = !1;
    this.numSigFig = 4;
    this.ticsiz = this.ytic = this.xtic = 5;
    this.barsiz = 7;
    this.lineWidth = 1;
    this.lineargradient = null;
    this.msgtxt = "This is a message.";
    this.smallfont = "16px Arial";
    this.font = "18px Arial";
    this.italicfont = "italic 18px Arial";
    this.italicsmallfont = "italic 16px Arial";
    this.ovrId = this.msgtxtId = this.msgId = this.divId = this.nam = "";
    this.initCanvas = function(b) {
        this.nam = b;
        this.divId = b + "div";
        this.msgId = b + "msg";
        this.msgtxtId = b + "txt";
        this.canId = b + "pcan";
        this.ovrId = b + "ocan";
        document.getElementById(this.divId).style.width = this.width + "px";
        b = '<div class="msg" id="' + this.msgId + '" style="visibility:hidden;">';
        b += '<a style="float:right" href=\'javascript:' + this.nam + ".hideMsg();'><img src=\"" + imgdat[0] + '" width="16" height="16" align="top"></a>';
        b += '<div id="' + this.msgtxtId + '" style="margin:6px;background-color:#ffffff;border:1px solid black;border-radius:4px;padding:16px;"></div></div>';
        b += '<canvas id="' + this.canId + '" width=' + this.width + " height=" + this.height + ' style="position:absolute;cursor:crosshair;-webkit-tap-highlight-color:rgba(0,0,0,0);">Your browser does not support the HTML &#60;canvas&#62; tag.</canvas>';
        b += '<canvas id="' + this.ovrId + '" width=' + this.width + " height=" + this.height + ' style="position:absolute;cursor:crosshair;-webkit-tap-highlight-color:rgba(0,0,0,0);">Your browser does not support the HTML &#60;canvas&#62; tag.</canvas>';
        document.getElementById(this.divId).innerHTML =
            b;
        b = parseInt(window.getComputedStyle(document.getElementById(this.msgId), null).width);
        b = (this.xLeft + this.xRight - b) / 2;
        document.getElementById(this.msgId).style.left = b + "px";
        this.can = document.getElementById(this.canId);
        this.can.getContext && (this.ctx = this.can.getContext("2d"), this.ctx.lineWidth = this.lineWidth, this.ctx.lineCap = "butt", this.ctx.lineJoin = "mitter", this.ctx.font = this.font, this.ctx.miterLimit = 10, this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0, this.ctx.setLineDash([]));
        this.canovr = document.getElementById(this.ovrId);
        this.canovr.getContext && (this.ctxovr = this.canovr.getContext("2d"), this.ctxovr.lineWidth = this.lineWidth, this.ctxovr.lineCap = "butt", this.ctxovr.lineJoin = "mitter", this.ctxovr.font = this.font, this.ctxovr.miterLimit = 10, this.ctxovr.shadowOffsetX = 0, this.ctxovr.shadowOffsetY = 0, this.ctxovr.shadowBlur = 0, this.ctx.setLineDash([]))
    };
    this.clearCanvas = function() {
        this.ctx.save();
        this.ctx.fillStyle = this.bkgdColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
        null !== this.plotbck &&
            this.ctx.drawImage(this.plotbck, 0, 0);
        this.ctx.restore()
    };
    this.clearCanvasOvr = function() {
        this.ctxovr.save();
        this.ctxovr.fillStyle = "rgba(0,0,0,0)";
        this.ctxovr.clearRect(0, 0, this.width, this.height);
        this.ctxovr.restore()
    };
    this.drawAxisLabels = function() {
        this.ctx.save();
        var b, a;
        this.ctx.strokeStyle = this.lablColor;
        this.ctx.fillStyle = this.lablColor;
        switch (this.pType) {
            case this.BOXPLOT:
                0 < this.title.length && (b = this.ctx.measureText(this.title), this.ctx.fillText(this.title, (this.xLeft + this.xRight - b.width) / 2,
                    30)), "string" === typeof this.xLabel && 0 < this.xLabel.length ? (b = (this.xRight + this.xLeft) / 2, a = this.yBottom + this.ticsiz + 60, this.drawLabel(b, a, this.xLabel, !0)) : "object" === typeof this.xLabel && (b = (this.xRight + this.xLeft - this.xLabel.width) / 2, a = this.yBottom + this.ticsiz + 20 + this.xLabel.height, this.ctx.drawImage(this.xLabel, b, a)), "string" === typeof this.yLabel && 0 < this.yLabel.length && this.yLabelVertical ? (this.ctx.measureText(this.yLabel), this.ctx.rotate(-1.5708), this.drawLabel(-(this.yBottom + this.yTop) / 2, 40, this.yLabel,
                    !0)) : "string" === typeof this.yLabel && 0 < this.yLabel.length ? (a = (this.yBottom + this.yTop) / 2, this.drawLabel(40, a, this.yLabel)) : "object" === typeof this.yLabel && (b = this.xLeft - this.xLabel.width - 20, a = (this.yBottom + this.yTop - this.yLabel.height) / 2, this.ctx.drawImage(this.yLabel, b, a))
        }
        this.ctx.restore()
    };
    this.drawHist = function() {
        this.ctx.save();
        this.clipPlot();
        var b, a, c;
        this.mx = (this.xRight - this.xLeft) / (this.xmax - this.xmin);
        this.bx = this.xLeft - this.xmin * this.mx;
        this.my = (this.yTop - this.yBottom) / (this.ymax - this.ymin);
        this.by = this.yBottom - this.ymin * this.my;
        if (1 < this.n)
            for (this.ctx.fillStyle = this.lineColor, b = 0; b < this.n; b++) a = Math.round(this.mx * this.x[b] + this.bx) - 1, c = Math.round(this.my * this.y[b] + this.by) - 1, this.ctx.fillRect(a, c, this.barsiz, this.yBottom - c - 1);
        this.ctx.restore()
    };
    this.drawLine = function(b, a, c, g) {
        this.ctx.save();
        this.clipPlot();
        this.mx = (this.xRight - this.xLeft) / (this.xmax - this.xmin);
        this.bx = this.xLeft - this.xmin * this.mx;
        this.my = (this.yTop - this.yBottom) / (this.ymax - this.ymin);
        this.by = this.yBottom - this.ymin *
            this.my;
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.beginPath();
        this.ctx.moveTo(Math.round(this.mx * b + this.bx) - .5, Math.round(this.my * a + this.by) - .5);
        this.ctx.lineTo(Math.round(this.mx * c + this.bx) - .5, Math.round(this.my * g + this.by) - .5);
        this.ctx.stroke();
        this.ctx.restore()
    };
    this.drawLineOvr = function(b, a, c, g) {
        this.ctxovr.save();
        this.mx = (this.xRight - this.xLeft) / (this.xmax - this.xmin);
        this.bx = this.xLeft - this.xmin * this.mx;
        this.my = (this.yTop - this.yBottom) / (this.ymax - this.ymin);
        this.by = this.yBottom - this.ymin *
            this.my;
        this.ctxovr.beginPath();
        this.ctxovr.moveTo(Math.round(this.mx * b + this.bx) - .5, Math.round(this.my * a + this.by) - .5);
        this.ctxovr.lineTo(Math.round(this.mx * c + this.bx) - .5, Math.round(this.my * g + this.by) - .5);
        this.ctxovr.stroke();
        this.ctxovr.restore()
    };
    this.drawPlot = function() {
        this.ctx.save();
        this.clipPlot();
        var b, a, c;
        this.mx = (this.xRight - this.xLeft) / (this.xmax - this.xmin);
        this.bx = this.xLeft - this.xmin * this.mx;
        this.my = (this.yTop - this.yBottom) / (this.ymax - this.ymin);
        this.by = this.yBottom - this.ymin * this.my;
        if (this.connectPts && 1 < this.n) {
            a = Math.round(this.mx * this.x[0] + this.bx) - .5;
            c = Math.round(this.my * this.y[0] + this.by) - .5;
            this.ctx.strokeStyle = this.lineColor;
            this.ctx.beginPath();
            this.ctx.moveTo(a, c);
            for (b = 1; b < this.n; b++) a = Math.round(this.mx * this.x[b] + this.bx) - .5, c = Math.round(this.my * this.y[b] + this.by) - .5, this.inPlot(a, c) ? this.ctx.lineTo(a, c) : this.ctx.moveTo(a, c);
            this.ctx.stroke()
        }
        if (this.dSymbol != this.NONE)
            for (b = 0; b < this.n; b++) a = Math.round(this.mx * this.x[b] + this.bx), c = Math.round(this.my * this.y[b] + this.by),
                this.inPlot(a, c) && this.drawSymbol(a, c);
        this.ctx.restore()
    };
    this.drawAxis = function() {
        this.ctx.save();
        this.ctx.strokeStyle = this.axisColor;
        this.ctx.fillStyle = this.plotColor;
        var b;
        switch (this.pType) {
            case this.BOXPLOT:
                this.fillPlot && this.ctx.fillRect(this.xLeft, this.yTop, this.pwidth, this.pheight);
                this.ctx.strokeRect(this.xLeft - .5, this.yTop - .5, this.pwidth, this.pheight);
                if (1 < this.xtic)
                    for (this.xinc = (this.xRight - this.xLeft) / (this.xtic - 1), b = 1; b <= this.xtic - 2; b++) {
                        var a = Math.round(this.xLeft + b * this.xinc) - .5;
                        if (this.showGrid || this.showXGrid) this.ctx.strokeStyle = this.gridColor, this.ctx.beginPath(), this.ctx.moveTo(a, this.yTop + 1), this.ctx.lineTo(a, this.yBottom - 1), this.ctx.closePath(), this.ctx.stroke();
                        this.ctx.strokeStyle = this.axisColor;
                        this.ctx.beginPath();
                        this.ctx.moveTo(a, this.yBottom);
                        this.ctx.lineTo(a, this.yBottom - this.ticsiz);
                        this.ctx.closePath();
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(a, this.yTop);
                        this.ctx.lineTo(a, this.yTop + this.ticsiz);
                        this.ctx.closePath();
                        this.ctx.stroke()
                    }
                if (1 <
                    this.ytic)
                    for (this.yinc = (this.yBottom - this.yTop) / (this.ytic - 1), b = 1; b <= this.ytic - 2; b++) {
                        a = Math.round(this.yTop + b * this.yinc) - .5;
                        if (this.showGrid || this.showYGrid) this.ctx.strokeStyle = this.gridColor, this.ctx.beginPath(), this.ctx.moveTo(this.xLeft + 1, a), this.ctx.lineTo(this.xRight - 1, a), this.ctx.closePath(), this.ctx.stroke();
                        this.ctx.strokeStyle = this.axisColor;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.xLeft, a);
                        this.ctx.lineTo(this.xLeft + this.ticsiz, a);
                        this.ctx.closePath();
                        this.ctx.stroke();
                        this.ctx.strokeStyle =
                            this.axisColor;
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.xRight, a);
                        this.ctx.lineTo(this.xRight - this.ticsiz, a);
                        this.ctx.closePath();
                        this.ctx.stroke()
                    }
        }
        this.ctx.restore()
    };
    this.drawSymbol = function(b, a) {
        this.ctx.save();
        this.ctx.strokeStyle = this.syblColor;
        this.ctx.fillStyle = this.syblColor;
        this.ctx.lineWidth = 1;
        switch (this.dSymbol) {
            case this.PT:
                this.ctx.fillRect(b - 1, a - 1, 1, 1);
                break;
            case this.PLUS:
                this.ctx.beginPath();
                this.ctx.moveTo(b - 2.5, a - .5);
                this.ctx.lineTo(b + 1.5, a - .5);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(b - .5, a - 2.5);
                this.ctx.lineTo(b - .5, a + 1.5);
                this.ctx.stroke();
                break;
            case this.SQR:
                this.ctx.beginPath();
                this.ctx.moveTo(b - 1.5, a - 1.5);
                this.ctx.lineTo(b + .5, a - 1.5);
                this.ctx.lineTo(b + .5, a + .5);
                this.ctx.lineTo(b - 1.5, a + .5);
                this.ctx.lineTo(b - 1.5, a - 1.5);
                this.ctx.closePath();
                this.ctx.fill();
                break;
            case this.DOT:
                this.ctx.beginPath();
                this.ctx.arc(b - .5, a - .5, 2, 0, 2 * Math.PI, !1);
                this.ctx.closePath();
                this.ctx.fill();
                break;
            case this.CIR:
                this.ctx.beginPath();
                this.ctx.arc(b - .5, a - .5, 2, 0, 2 * Math.PI, !1);
                this.ctx.closePath();
                this.ctx.stroke();
                break;
            case this.DASH:
                this.ctx.beginPath();
                this.ctx.moveTo(b - 2.5, a - .5);
                this.ctx.lineTo(b + 1.5, a - .5);
                this.ctx.stroke();
                break;
            case this.BIGTRI:
                this.ctx.beginPath();
                this.ctx.moveTo(b - .5, a - 5.5);
                this.ctx.lineTo(b + 4.5, a + 4.5);
                this.ctx.lineTo(b - 4.5, a + 4.5);
                this.ctx.lineTo(b - .5, a - 5.5);
                this.ctx.closePath();
                this.ctx.fill();
                break;
            case this.BIGX:
                this.ctx.beginPath();
                this.ctx.moveTo(b - 4.5, a - 4.5);
                this.ctx.lineTo(b + 3.5, a + 3.5);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.lineTo(b + 3.5, a - 4.5);
                this.ctx.lineTo(b -
                    4.5, a + 3.5);
                this.ctx.stroke();
                break;
            case this.BIGDOT:
                this.ctx.beginPath();
                this.ctx.arc(b - .5, a - .5, 4, 0, 2 * Math.PI, !1);
                this.ctx.closePath();
                this.ctx.fill();
                break;
            case this.BIGSQR:
                this.ctx.beginPath();
                this.ctx.moveTo(b - 4.5, a - 4.5);
                this.ctx.lineTo(b + 3.5, a - 4.5);
                this.ctx.lineTo(b + 3.5, a + 3.5);
                this.ctx.lineTo(b - 4.5, a + 3.5);
                this.ctx.lineTo(b - 4.5, a - 4.5);
                this.ctx.closePath();
                this.ctx.fill();
                break;
            case this.BIGDIA:
                this.ctx.beginPath(), this.ctx.moveTo(b - 4.5, a - .5), this.ctx.lineTo(b - .5, a - 5.5), this.ctx.lineTo(b + 4.5, a -
                    .5), this.ctx.lineTo(b - .5, a + 5.5), this.ctx.moveTo(b - 4.5, a - .5), this.ctx.closePath(), this.ctx.fill()
        }
        this.ctx.restore()
    };
    this.drawLabel = function(b, a, c, g, f) {
        if ("string" === typeof c) {
            this.ctx.save();
            this.ctx.strokeStyle = this.lablColor;
            this.ctx.fillStyle = this.lablColor;
            var e = c;
            if (0 <= c.indexOf("<") || 0 <= c.indexOf("&")) e = e.replace(/<sup>/gi, "\u0001"), e = e.replace(/<\/sup>/gi, "\u0002"), e = e.replace(/<sub>/gi, "\u0003"), e = e.replace(/<\/sub>/gi, "\u0004"), e = e.replace(/<i>/gi, "\u0005"), e = e.replace(/<\/i>/gi, "\u0006"),
                e = e.replace(/<br>/g, "\r"), e = e.replace(/&deg;/g, "\u00b0"), e = e.replace(/&delta;/g, "\u03b4"), e = e.replace(/&Delta;/g, "\u0394"), e = e.replace(/&mu;/g, "\u03bc"), e = e.replace(/&nu;/g, "\u03bd"), e = e.replace(/&psi;/g, "\u03c8"), e = e.replace(/&frac12;/g, "\u00bd"), e = e.replace(/&middot;/g, "\u00b7");
            var d = b,
                n = a,
                h = "",
                q = 0,
                p, l = !1,
                m = !1;
            if (3 < arguments.length && g) {
                for (p = 0; p < c.length; p++) h = e.charAt(p), "\u0001" == h ? (m = !0, this.ctx.font = l ? this.italicsmallfont : this.smallfont) : "\u0002" == h ? (m = !1, this.ctx.font = l ? this.italicfont : this.font) :
                    "\u0003" == h ? (m = !0, this.ctx.font = l ? this.italicsmallfont : this.smallfont) : "\u0004" == h ? (m = !1, this.ctx.font = l ? this.italicfont : this.font) : "\u0005" == h ? (l = !0, this.ctx.font = m ? this.italicsmallfont : this.italicfont) : "\u0006" == h ? (l = !1, this.ctx.font = m ? this.smallfont : this.font) : q += this.ctx.measureText(h).width;
                d = b - q / 2
            }
            m = l = !1;
            for (p = 0; p < c.length; p++) h = e.charAt(p), "\u0001" == h ? (n -= 5, m = !0, this.ctx.font = l ? this.italicsmallfont : this.smallfont) : "\u0002" == h ? (n += 5, m = !1, this.ctx.font = l ? this.italicfont : this.font) : "\u0003" ==
                h ? (n += 5, m = !0, this.ctx.font = l ? this.italicsmallfont : this.smallfont) : "\u0004" == h ? (n -= 5, m = !1, this.ctx.font = l ? this.italicfont : this.font) : "\u0005" == h ? (l = !0, this.ctx.font = m ? this.italicsmallfont : this.italicfont) : "\u0006" == h ? (l = !1, this.ctx.font = m ? this.smallfont : this.font) : "\r" == h ? (n += 24, d = b) : (q = this.ctx.measureText(h).width, this.ctx.fillText(h, d, n), d += q);
            this.ctx.restore()
        }
    };
    this.drawImgLabel = function(b, a, c) {
        this.ctx.save();
        this.ctx.drawImage(imgobj[c], b, a);
        this.ctx.restore()
    };
    this.drawAxisNumbers = function() {
        this.ctx.save();
        var b, a;
        this.ctx.strokeStyle = this.lablColor;
        this.ctx.fillStyle = this.lablColor;
        switch (this.pType) {
            case this.BOXPLOT:
                if (1 < this.xtic) {
                    var c = this.yBottom + 25;
                    0 !== this.xminLabel.length ? a = this.xminLabel : (a = "" + this.xmin, a = round2sigfig(a, this.numSigFig, this.xAxisFonly), this.xAxisInt && (a = "" + Math.round(parseFloat(a))));
                    b = this.ctx.measureText(a);
                    this.ctx.fillText(a, this.xLeft - b.width / 2, c);
                    0 !== this.xmaxLabel.length ? a = this.xmaxLabel : (a = "" + this.xmax, a = round2sigfig(a, this.numSigFig, this.xAxisFonly), this.xAxisInt &&
                        (a = "" + Math.round(parseFloat(a))));
                    b = this.ctx.measureText(a);
                    this.ctx.fillText(a, this.xRight - b.width / 2, c);
                    0 !== this.xtic % 2 && (0 !== this.xmidLabel.length ? a = this.xmidLabel : (a = "" + (this.xmin + this.xmax) / 2, a = round2sigfig(a, this.numSigFig, this.xAxisFonly), this.xAxisInt && (a = 0 == parseInt(a) - parseFloat(a) ? "" + parseInt(a) : "")), b = this.ctx.measureText(a), this.ctx.fillText(a, (this.xRight + this.xLeft - b.width) / 2, c))
                }
                1 < this.ytic && (c = this.xLeft - 10, 0 !== this.yminLabel.length ? a = this.yminLabel : (a = "" + this.ymin, a = round2sigfig(a,
                    this.numSigFig, this.yAxisFonly), this.yAxisInt && (a = "" + Math.round(parseFloat(a)))), b = this.ctx.measureText(a), this.ctx.fillText(a, c - b.width, this.yBottom + 8), 0 !== this.ymaxLabel.length ? a = this.ymaxLabel : (a = "" + this.ymax, a = round2sigfig(a, this.numSigFig, this.yAxisFonly), this.yAxisInt && (a = "" + Math.round(parseFloat(a)))), b = this.ctx.measureText(a), this.ctx.fillText(a, c - b.width, this.yTop + 8), 0 !== this.ytic % 2 && (0 !== this.ymidLabel.length ? a = this.ymidLabel : (a = "" + (this.ymin + this.ymax) / 2, a = round2sigfig(a, this.numSigFig,
                    this.yAxisFonly), this.yAxisInt && (a = 0 == parseInt(a) - parseFloat(a) ? "" + parseInt(a) : "")), b = this.ctx.measureText(a), this.ctx.fillText(a, c - b.width, (this.yBottom + this.yTop) / 2 + 8)))
        }
    };
    this.fillArea = function(b, a, c, d) {
        3 < arguments.length && (this.lineColor = d);
        for (var f = Math.floor(this.maptoX(a)); f < Math.ceil(this.maptoX(c)); f++) {
            var e = b,
                e = e.replace(/{x}/gi, this.mapX(f));
            this.y[f] = eval(e);
            this.drawLine(this.mapX(f), this.ymin, this.mapX(f), eval(e))
        }
    };
    this.drawXVal = function(b) {
        this.ctxovr.save();
        this.ctxovr.strokeStyle =
            this.valColor;
        this.ctxovr.fillStyle = this.valColor;
        var a = this.mapX(b);
        this.drawLineOvr(a, this.ymin, a, this.ymax);
        a = round2sigfig("" + a, this.numSigFig, !1);
        this.xAxisInt && (a = "" + Math.round(parseFloat(a)));
        var c = this.ctxovr.measureText(a);
        this.ctxovr.fillText(a, b - c.width / 2, this.yTop - 8);
        this.ctxovr.restore()
    };
    this.drawYVal = function(b) {
        this.ctxovr.save();
        this.ctxovr.strokeStyle = this.valColor;
        this.ctxovr.fillStyle = this.valColor;
        var a = this.mapY(b);
        this.drawLineOvr(this.xmin, a, this.xmax, a);
        a = round2sigfig("" + a,
            this.numSigFig, !1);
        this.yAxisInt && (a = "" + Math.round(parseFloat(a)));
        this.ctxovr.measureText(a);
        this.ctxovr.fillText(a, this.xRight + 8, b + 4);
        this.ctxovr.restore()
    };
    this.plotFunc = function(b, a, c, d, f) {
        var e = "";
        c = (c - a) / (d - 1);
        this.lxmin = a;
        this.lxmax = a + (d - 1) * c;
        this.n = d;
        for (var k = 0; k < d; k++) this.x[k] = a + k * c, e = b, e = e.replace(/{x}/gi, this.x[k]), this.y[k] = eval(e), 0 === k && (this.lymin = this.y[0], this.lymax = this.y[0]), this.y[k] < this.lymin && (this.lymin = this.y[k]), this.y[k] > this.lymax && (this.lymax = this.y[k]);
        f && this.drawPlot()
    };
    this.clipPlot = function() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.xLeft, this.yTop);
        this.ctx.lineTo(this.xRight, this.yTop);
        this.ctx.lineTo(this.xRight, this.yBottom);
        this.ctx.lineTo(this.xLeft, this.yBottom);
        this.ctx.closePath();
        this.ctx.clip()
    };
    this.inPlot = function(b, a) {
        return a >= this.yTop && a <= this.yBottom && b >= this.xLeft && b <= this.xRight
    };
    this.mapX = function(b) {
        this.mx = (this.xRight - this.xLeft) / (this.xmax - this.xmin);
        this.bx = this.xLeft - this.xmin * this.mx;
        return (b - this.bx) / this.mx
    };
    this.mapY = function(b) {
        this.my =
            (this.yTop - this.yBottom) / (this.ymax - this.ymin);
        this.by = this.yBottom - this.ymin * this.my;
        return (b - this.by) / this.my
    };
    this.maptoX = function(b) {
        this.mx = (this.xRight - this.xLeft) / (this.xmax - this.xmin);
        this.bx = this.xLeft - this.xmin * this.mx;
        return this.mx * b + this.bx
    };
    this.maptoY = function(b) {
        this.my = (this.yTop - this.yBottom) / (this.ymax - this.ymin);
        this.by = this.yBottom - this.ymin * this.my;
        return this.my * b + this.by
    };
    this.autoYAxis = function(b, a, c) {
        var d = scale(b, a);
        3 == arguments.length && c ? (this.ymin = Math.floor(d.min), this.ymax =
            Math.ceil(d.max)) : (this.ymin = d.min, this.ymax = d.max)
    };
    this.autoXAxis = function(b, a, c) {
        var d = scale(b, a);
        3 == arguments.length && c ? (this.xmin = Math.floor(d.min), this.xmax = Math.ceil(d.max)) : (this.xmin = d.min, this.xmax = d.max)
    };
    this.showMsg = function(b, a) {
        if (1 < arguments.length) {
            document.getElementById(this.msgId).style.width = a + "px";
            var c = (this.xLeft + this.xRight - a) / 2;
            document.getElementById(this.msgId).style.left = c + "px"
        }
        document.getElementById(this.msgtxtId).innerHTML = b;
        document.getElementById(this.msgId).style.visibility =
            "visible"
    };
    this.hideMsg = function() {
        document.getElementById(this.msgtxtId).innerHTML = "";
        document.getElementById(this.msgId).style.visibility = "hidden"
    };
    this.onMsg = function() {
        return "visible" == document.getElementById(this.msgId).style.visibility ? !0 : !1
    };
    this.divPos = function() {
        var b = document.getElementById(this.divId),
            a = 0,
            c = 0;
        if (b.offsetParent) {
            do a += b.offsetLeft, c += b.offsetTop; while (b = b.offsetParent)
        }
        return {
            x: a,
            y: c
        }
    }
}

function scale(d, b) {
    var a, c, g;
    a = b - d;
    var f = d,
        e = b,
        k = 0;
    if (0 > a) return {
        min: f,
        max: e
    };
    if (0 === a) return f = Math.ceil(e) - 1, {
        min: f,
        max: f + 1
    };
    a = Math.pow(10, Math.ceil(Math.log(a / 10) / 2.302585093));
    g = Math.floor(e / a) * a;
    g < e && (g += a);
    c = g;
    do ++k, c -= a; while (c > f);
    1E-11 > Math.abs(c) && (c = 0);
    6 > k && (a /= 2, c + a <= f && (c += a), g - a >= e && (g -= a));
    return {
        min: c,
        max: g
    }
}

function min(d) {
    for (var b = d[0], a = 1; a < d.length; a++) d[a] < b && (b = d[a]);
    return b
}

function max(d) {
    for (var b = d[0], a = 1; a < d.length; a++) d[a] > b && (b = d[a]);
    return b
}

function round2sigfig(d, b, a) {
    var c = "",
        g = 0,
        f = 0,
        c = 1,
        f = parseFloat(d),
        e = 1;
    if (0 === f) {
        if (1 >= b) return "0";
        for (c = "0."; c.length <= b;) c += "0";
        return c
    }
    0 > f && (f = -f, e = -1);
    for (; 10 <= f;) g++, c /= 10, f /= 10;
    for (; 1 > f;) g--, c *= 10, f *= 10;
    c = "" + e * c * parseFloat(d);
    for (0 > c.indexOf(".") && (c += "."); c.length <= b + 2;) c += "0";
    f = b + 2;
    f > c.length && (f = c.length);
    c = c.substring(0, f);
    if ("5" <= c.charAt(b + 1)) {
        d = 1;
        for (f = 0; f < b - 1; f++) d /= 10;
        c = "" + (d + parseFloat(c))
    }
    f = b + 1;
    f > c.length && (f = c.length);
    c = c.substring(0, f);
    d = "" + parseFloat(c + "e" + g);
    if (d.length <= b + 1 ||
        2 > Math.abs(g) || a) {
        for (0 > d.indexOf(".") && (d += "."); d.length <= b;) d += "0";
        return -1 == e ? "-" + d : d
    }
    return -1 == e ? "-" + c + "e" + g : c + "e" + g
};