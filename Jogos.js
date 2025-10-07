class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
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
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

function liga() {
    const herois = [
        new Heroi("Conan", 30, "guerreiro"),
        new Heroi("Merlin", 100, "mago"),
        new Heroi("Strange", 25, "monge"),
        new Heroi("Samurai_X", 28, "ninja")
    ];

    for (let i = 0; i < herois.length; i++) {
        herois[i].atacar();
    }
}

liga();
