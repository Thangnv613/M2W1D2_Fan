class Fan{
    SLOW : number;
    MEDIUM : number;
    FAST : number;
    _speed : number;
    _status: boolean;
    _radius : number;
    color : string;
    constructor(SLOW,MEDIUM,FAST,status,speed,radius,color) {
        this.SLOW = SLOW;
        this.MEDIUM = MEDIUM;
        this.FAST = FAST;
        this._status = status;
        this._speed = speed;
        this._radius = radius;
        this.color = color;
    }
    toString() {
        if(this._status){
            return `Toc do quat la: ${this._speed}, Mau sac quat la: ${this.color}, Radius: ${this._radius}, 'Fan is on'`
        }
        else{
            return `  Mau sac quat la: ${this.color}, Radius: ${this._radius}, 'Fan is off'`
        }
    }
}
let fan = new Fan(1,2,3,true,1,5,'blue')
console.log(fan.toString());

// on = speed,color,radius, fan is on
// off = color,radius,fan is off