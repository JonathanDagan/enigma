
export class Enigma {
    private static readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    private static readonly ALPHABET_LENGTH = Enigma.ALPHABET.length;

    public plugboard: Pluboard = new Pluboard();
    public rotors: Rotors = new Rotors();
    private _reflector: reflectorMapping = defaultreflector;

    // create a method that takes a letter and returns the matching letter from the plugboard
    // check if the letter is plugged to another letter, return the other letter otherwise return the letter
    private _passThroughPlugboard(letter: string): string {
        const pluggedPair = this.plugboard.pluggedPairs.filter((pair) => {
            if (pair.includes(letter)) {
                return pair;
            }
        });
        // TODO: i was here :)
        return pluggedPair.length > 0 ? pluggedPair[0].replace(letter, '') : letter;
    }
    // TODO: have the value change by order of the rotors in list
    private _passThroughRotors(letter: string, direction: 'in' | 'out'): string {
        let value = letter;
        if (direction === 'in') {
            value = this.rotors.rotor1.mapping[value];
            value = this.rotors.rotor2.mapping[value];
            value = this.rotors.rotor3.mapping[value];
        } else {
            value = this.rotors.rotor3.mapping[value];
            value = this.rotors.rotor2.mapping[value];
            value = this.rotors.rotor1.mapping[value];
        }
        return value;

    }

    private _passThroughReflector(letter: string): string {
        return this._reflector[letter];
    }


    public encrypt(message: string): string {
        let value = message[0];

        value = this._passThroughPlugboard(value);
        value = this._passThroughRotors(value, 'in');
        value = this._passThroughReflector(value);
        value = this._passThroughRotors(value, 'out');
        
        this.rotors.step();
        return value;
    }
}
const enigma = new Enigma();
enigma.encrypt('aaa');

const defaultRotorMapping: rottorMapping = {
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

const defaultreflector: reflectorMapping = {
    'a': 'z',
    'b': 'y',
    'c': 'x',
    'd': 'w',
    'e': 'v',
    'f': 'u',
    'g': 't',
    'h': 's',
    'i': 'r',
    'j': 'q',
    'k': 'p',
    'l': 'o',
    'm': 'n',
    'n': 'm',
    'o': 'l',
    'p': 'k',
    'q': 'j',
    'r': 'i',
    's': 'h',
    't': 'g',
    'u': 'f',
    'v': 'e',
    'w': 'd',
    'x': 'c',
    'y': 'b',
    'z': 'a'
}

interface rotor {
    notch: string;
    mapping: rottorMapping;
}

interface rottorMapping {
    [key: string]: string;
}

interface reflectorMapping {
    [key: string]: string;
}

class Rotor {
    private _mapping: {[key: string]: string};
    private _notch: string;
    constructor(notch: string = 'a', mapping: rottorMapping = defaultRotorMapping) {
        this._notch = notch;
        this._mapping = mapping;
    }

    public get notch(): string {
        return this._notch;
    }

    public get mapping(): rottorMapping {
        return this._mapping;
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

    constructor(rotor1: Rotor = new Rotor(), rotor2: Rotor = new Rotor, rotor3: Rotor = new Rotor) {
        this.rotor1 = rotor1
        this.rotor2 = rotor2
        this.rotor3 = rotor3
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
    private _pluggedPairs: string[] = [];
    // create a plug method that only allows a pair to be plugged if both letters are not already plugged
    // create an unplug method that removes a pair from the pluggedPairs array 
    // create an isPlugged method that returns true if a letter is plugged to another letter   
    
    public get pluggedPairs(): string[] {
        return this._pluggedPairs;
    }

    public plug(letter1: string, letter2: string): void {
        if (this.isPlugged(letter1) || this.isPlugged(letter2)) {
            throw new AlreadyPluggedError(`${letter1} or ${letter2} is already plugged`);
        }
        this._pluggedPairs.push(letter1 + letter2);
    }

    public unplug(letter1: string, letter2: string): void {
        this._pluggedPairs = this._pluggedPairs.filter((pair) => {
            return !pair.includes(letter1) && !pair.includes(letter2);
        });
    }

    public isPlugged(letter:string): boolean {
        return this._pluggedPairs.some((pair) => {
            return pair.includes(letter);
        });
    }

}
class AlreadyPluggedError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AlreadyPluggedError';
    }
}
