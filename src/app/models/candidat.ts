export class Candidat {
  //   public prenom: string;
  //   public nom: string;
  //   public age: number;

  constructor(
    public _id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {
    // this.prenom = prenom;
    // this.nom = nom;
    // this.age = age;
  }
}
