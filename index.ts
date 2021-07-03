const colors : Array<string> = [
    "#B71C1C",
    "#1A237E",
    "#00C853",
    "#C51162",
    "#F57C00"
]
const parts : number = 4 
const scGap : number = 0.02 / parts 
const strokeFactor : number = 90 
const sizeFactor : number = 7.8 
const delay : number = 20 
const backColor : string = "#BDBDBD"
const rot : number = Math.PI 
const w : number = window.innerWidth
const h : number = window.innerHeight

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.divideScale(scale, i, n)) * n 
    }
}