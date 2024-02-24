class Heroi {
    constructor(nome, idade, classDoHeroi) {
        this.nome = 'BabyJhoson';
        this.idade = 21;
        this.classDoHeroi = 'mago';
    }

    atacar() {
        let ataque;
        switch (this.classDoHeroi) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`o ${this.classDoHeroi} atacou usando ${ataque}`);
    }
}

let heroi = new Heroi();
heroi.atacar(); 
 

