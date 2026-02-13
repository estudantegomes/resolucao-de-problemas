//Níckolas Gomes && Débora Annies

export default class Classroom{
    readonly ALUNOS: string[];

    public constructor(ALUNOS: string[]){
        this.ALUNOS = ALUNOS;
    }

    public absent(presentes: string[]): string[]{
        let faltantes: string[] = [];

        for(let i = 0; i < this.ALUNOS.length; i++){
            let presente: boolean = false;

            for(let j = 0; j < presentes.length; j++){
                if(this.ALUNOS[i] == presentes[j]){
                    presente = true;
                    break;
                }
            }

            if(!presente)
                faltantes.push(this.ALUNOS[i]);
        }
        
        faltantes = faltantes.sort();
        return faltantes;
    }

}