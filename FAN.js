var Fan = /** @class */ (function () {
    function Fan(SLOW, MEDIUM, FAST, status, speed, radius, color) {
        this.SLOW = SLOW;
        this.MEDIUM = MEDIUM;
        this.FAST = FAST;
        this._status = status;
        this._speed = speed;
        this._radius = radius;
        this.color = color;
    }
    Fan.prototype.toString = function () {
        if (this._status) {
            return "Toc do quat la: ".concat(this._speed, ", mau sac quat la: ").concat(this.color, ", Radius: ").concat(this._radius, " 'Fan is on'");
        }
        else {
            return "  mau sac quat la: ".concat(this.color, ", Radius: ").concat(this._radius, " 'Fan is on'");
        }
    };
    return Fan;
}());
var fan = new Fan(1, 2, 3, true, 1, 5, 'blue');
console.log(fan.toString());
// on = speed,color,radius, fan is on
// off = color,radius,fan is off
