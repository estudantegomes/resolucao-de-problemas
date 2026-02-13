export default class MatrizInteira {
    private m: number[];

    constructor(matriz: number[]) {
        this.m = matriz; 
    }

    public verificaCrescente():boolean{
        for(let i = 0; i < this.m.length-1; i++){
            if(this.m[i] > this.m[i + 1])
                return false;
        }

        return true;
    }

}