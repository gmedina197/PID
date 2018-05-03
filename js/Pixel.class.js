class Pixel {
    constructor (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    getBlue () {
        return this.b;
    }

    getGreen () {
        return this.g;
    }

    getRed () {
        return this.r;
    }

    getAvg () {
        return ( this.r + this.g + this.b ) / 3 ;
    }
}