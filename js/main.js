
var TxtType = function(el, toRotate, period, loopNum) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = loopNum;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        /*
        var loopNumRand = Math.floor(Math.random() * this.toRotate.length);
        while (loopNumRand === this.loopNum){
            loopNumRand = Math.floor(Math.random() * this.toRotate.length);
        }
        this.loopNum = loopNumRand;
        */
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        var loopNum = Math.floor(Math.random() * toRotate.length);
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period, loopNum);
        }
    }

    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid var(--primary-font-color2);color:var(--primary-font-color2);}";
    document.body.appendChild(css);
}