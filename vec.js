const Vec = a => ({
    v:a,
    fn: [],
    f: function(f) {
        this.fn.push(a => a.map(f));
        return this;
    },
    QED (a) {return JSON.stringify(this.exec) === JSON.stringify(a)},
    get func () {return this.fn.slice(0)},
    get exec () {return 0 < this.fn.length ? this.fn.reduce((r, f)=> f(r), this.v) : this.v ;},
    get test () {try{ return this.exec}catch(e){console.error(e, arguments); return this.v}}
});
module.exports = exports = Vec;