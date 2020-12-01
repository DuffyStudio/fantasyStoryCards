module.exports.Whiteboard = class Whiteboard{
    constructor(){
        this.currentDrawing=[];
    }
    clearDrawing(){
        this.currentDrawing=[];
    }
    addToDrawing(marks){
        for(var mark of marks){
            this.currentDrawing.push(mark);
        }
    }
    getCurrentDrawing(){
        return this.currentDrawing;
    }
}

