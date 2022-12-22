export class Enigma {
    private static readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    private static readonly ALPHABET_LENGTH = Enigma.ALPHABET.length;
    
    private static readonly ROTORS = [
        {
        wiring: 'abcdefghijklmnopqrstuvwxyz',
        notch: 'a'
        },
        {
        wiring: 'abcdefghijklmnopqrstuvwxyz',
        notch: 'a'
        },
        {
        wiring: 'abcdefghijklmnopqrstuvwxyz',
        notch: 'a'
        },
    ];

    private static readonly REFLECTOR = {
        wiring: 'yruhqsldpxngokmiebfzcwvjat'
    };

    private static readonly PLUGBOARD = {
        wiring: 'abcdefghijklmnopqrstuvwxyz'
    };

    private static shiftRotor(rotor: any, shift: number): any {
        const shiftedRotor = {
            wiring: '',
            notch: rotor.notch
        };

        for (let i = 0; i < Enigma.ALPHABET_LENGTH; i++) {
            const shiftedIndex = (i + shift) % Enigma.ALPHABET_LENGTH;
            shiftedRotor.wiring += rotor.wiring[shiftedIndex];
        }

        return shiftedRotor;
    }
    

    public static encrypt(message: string): string {
        return 'a';
    }
}

const defaultRotor = {
    'a': 'b',
    'b': 'c',
    'c': 'd',
    'd': 'e',
    'e': 'f',
    'f': 'g',
    'g': 'h',
    'h': 'i',
    'i': 'j',
    'j': 'k',
    'k': 'l',
    'l': 'm',
    'm': 'n',
    'n': 'o',
    'o': 'p',
    'p': 'q',
    'q': 'r',
    'r': 's',
    's': 't',
    't': 'u',
    'u': 'v',
    'v': 'w',
    'w': 'x',
    'x': 'y',
    'y': 'z',
    'z': 'a'
}

class Rotor {
    private mapping: {[key: string]: string} = {};
    private _notch = 'a';
    constructor(notch: string, mapping: {[key: string]: string} = defaultRotor) {
        this._notch = notch;
        this.mapping = mapping;
    }

    public get notch(): string {
        return this._notch;
    }

    public step(): void {
        this.shift();
    }
    
    public shift(): void {
        this._notch = this.mapping[this.notch];
    }
        
}

class Rotors {
    public readonly rotor1: Rotor;
    public readonly rotor2: Rotor;
    public readonly rotor3: Rotor;

    constructor() {
        this.rotor1 = new Rotor('a');
        this.rotor2 = new Rotor('a');
        this.rotor3 = new Rotor('a');
    }

    public step(): void {
        this.rotor1.step();
        if (this.rotor1.notch === 'z') {
            this.rotor2.step();
        }
        if (this.rotor2.notch === 'z') {
            this.rotor3.step();
        }
    }
}

class Pluboard {
    public static pluggedPairs: string[] = [];

    // create plug and unplug methods which dont let you plug the same letter twice
    public static plug(letter1: string, letter2: string): void {
        if (this.isPlugged(letter1, letter2)) {
            // raise error
            throw new AlreadyPluggedError('Letters are already plugged');
        }
        this.pluggedPairs.push(letter1 + letter2);
    }

    public static unplug(letter1: string, letter2: string): void {
        this.pluggedPairs = this.pluggedPairs.filter((pair) => {
            return pair !== letter1 + letter2;
        });
    }

    public static isPlugged(letter1: string, letter2: string): boolean {
        return this.pluggedPairs.includes(letter1 + letter2);
    }

}
class AlreadyPluggedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AlreadyPluggedError';
    }
}