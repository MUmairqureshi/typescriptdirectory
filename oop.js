// incapsulation
// abstract class Country {
//     public name: string;
//     public language: string;
//     public population: number;
//     public populationGrowthRate: number;
//    private _statedata  : string
//    private _leader : string
//     constructor(
//         name: string,
//         language: string,
//         population: number,
//         populationGrowthRate: number,
//         _statedata  : string,
//         _leader : string
//     ) {
//         this.name = name;
//         this.language = language;
//         this.population = population;
//         this.populationGrowthRate = populationGrowthRate;
//         this._statedata  = _statedata  
//         this._leader = _leader
//     }
//     public abstract populationGrowth(): number;
//     public get privateData() : string{
// return this._statedata
//     }
//     public set leader(newLeader : string){
//         this._leader  = newLeader
//     }
// }
// class OICCountry extends Country {
//     constructor(
//     name: string,
//         language: string,
//         population: number,
//         populationGrowthRate: number,
//         _statedata  : string ,
//         _leader : string
//     ) {
//         super(name, language, population, populationGrowthRate , _statedata , _leader)
//     }
//     public populationGrowth(): number {
//         this.population = this.population * this.populationGrowthRate
//         return this.population
//     }
// }
// let Pakistan = new OICCountry("Pakistan " , "Urdu" , 23 ,32 ,  "Islamic republic" , "Pistans Leader")
// console.info( Pakistan )
// Pakistan.name = "pakistan is Countary"
// console.info( Pakistan.privateData )
// Pakistan.leader = " Imran khan" 
// console.info( Pakistan.privateData )
// console.info( Pakistan )
// Pakistan.populationGrowth();
// abstract class Country {
//     public name: string;
//     public language: string;
//     public population: number;
//     public populationGrowthRate: number;
//     constructor(
//       name: string,
//       language: string,
//       population: number,
//       populationGrowthRate: number
//     ) {
//       this.name = name;
//       this.language = language;
//       this.population = population;
//       this.populationGrowthRate = populationGrowthRate;
//     }
//     public abstract populationGrowth(): number;
//   }
//   class OICCountry extends Country {
//     constructor(
//       name: string,
//       language: string,
//       population: number,
//       populationGrowthRate: number
//     ) {
//       super(name, language, population, populationGrowthRate);
//     }
//     public populationGrowth(): number {
//       this.population = this.population * (1 + this.populationGrowthRate / 100);
//       return this.population;
//     }
//   }
//   let Pakistan = new OICCountry("Pakistan", "Urdu", 300000000, 2.5);
//   console.info(Pakistan);
// inheritance
// abstract class Country {
//     public name: string;
//     public language: string;
//     public population: number;
//     public populationGrowthRate: number;
//    private _statedata  : string
//    private _leader : string;
//    public planit =  "islam" ;
//    public religion  : string
//     constructor(
//         name: string,
//         language: string,
//         population: number,
//         populationGrowthRate: number,
//         _statedata  : string,
//         _leader : string,
//         religion : string
//     ) {
//         this.name = name;
//         this.language = language;
//         this.population = population;
//         this.populationGrowthRate = populationGrowthRate;
//         this._statedata  = _statedata  
//         this._leader = _leader
//         this.religion = religion
//     }
//     public abstract populationGrowth(): number;
//     public get privateData() : string{
// return this._statedata
//     }
//     public set leader(newLeader : string){
//         this._leader  = newLeader
//     }
// }
// class OICCountry extends Country {
//     constructor(
//     name: string,
//         language: string,
//         population: number,
//         populationGrowthRate: number,
//         _statedata  : string ,
//         _leader : string,
//         religion  = "islam"
//     ) {
//         super(name, language, population, populationGrowthRate , _statedata , _leader ,  religion)
//     }
//     public populationGrowth(): number {
//         this.population = this.population * this.populationGrowthRate
//         return this.population
//     }
// }
// let Pakistan = new OICCountry("Pakistan " , "Urdu" , 23 ,32 ,  "Islamic republic" , "Pistans Leader")
// console.info( Pakistan )
// Pakistan.name = "pakistan is Countary"
// console.info( Pakistan.privateData )
// Pakistan.leader = " Imran khan" 
// console.info( Pakistan.privateData )
// console.info( Pakistan )
// Pakistan.populationGrowth();
//  polymorphysium 
class Country {
    name;
    language;
    population;
    populationGrowthRate;
    _statedata;
    _leader;
    planit = "islam";
    religion;
    constructor(name, language, population, populationGrowthRate, _statedata, _leader, religion) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statedata = _statedata;
        this._leader = _leader;
        this.religion = religion;
    }
    populationGrowth() { return 2; }
    get privateData() {
        return this._statedata;
    }
    set leader(newLeader) {
        this._leader = newLeader;
    }
    greeting() {
        return "hello";
    }
}
class OICCountry extends Country {
    constructor(name, language, population, populationGrowthRate, _statedata, _leader, religion = "islam") {
        super(name, language, population, populationGrowthRate, _statedata, _leader, religion);
    }
    populationGrowth() {
        this.population = this.population * this.populationGrowthRate;
        return this.population;
    }
    greeting() {
        return "Assalamoalaikum";
    }
}
let Pakistan = new OICCountry("Pakistan ", "Urdu", 23, 32, "Islamic republic", "Pistans Leader");
console.info(Pakistan);
Pakistan.name = "pakistan is Countary";
console.info(Pakistan.privateData);
Pakistan.leader = " Imran khan";
console.info(Pakistan.privateData);
console.info(Pakistan);
console.info(Pakistan.greeting());
let China = new Country("China", "Mandarish", 1277777, 21, "China private", "China private", "China private");
console.info(China);
console.info(China.greeting());
export {};
