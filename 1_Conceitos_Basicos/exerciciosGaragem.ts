class GaragemMecanica {
  private _valorReparo: number;
  private _reparo: string;
  private _concluido: boolean;

  constructor(valorReparo: number, reparo: string) {
    this._valorReparo = valorReparo;
    this._reparo = reparo;
    this._concluido = false;
  }

  public get valorCarro(){
    return this._valorReparo;
  } 

  public set valorReparo(valorReparo: number){
    if (!valorReparo) {
      throw new Error('Modelo Invalido.');
  }
    
    this._valorReparo = valorReparo;
  }

  public get reparo(){    
    return this._reparo;
  }

  public set reparo(reparo: string){
    if (!reparo) {
      throw new Error('Invalid last name.');
    }
    
    this._reparo = reparo;
  }

  public get concluido(){
    return this._concluido;
  }

  public set concluido(concluido: boolean){
    this._concluido = concluido;
  }

  public servicoConcluido(): string {
    return this._concluido ? "Sim": "Não";
  }
}

class Moto extends GaragemMecanica {
  private _modeloMoto: string;
 
  constructor(modeloMoto: string, valorReparo: number, reparo: string){
    super(valorReparo, reparo);
    this._modeloMoto = modeloMoto;
  }

  public get modeloMoto(){
    return this._modeloMoto;
  }

  public set modeloMoto(modeloMoto: string){
    if (!modeloMoto) {
      throw new Error('Modelo Invalido.');
  }
    
    this._modeloMoto = modeloMoto;
  }
}

class Carro extends GaragemMecanica {
  private _modeloCarro: string;


  constructor(modeloCarro: string, valorReparo: number, reparo: string){
    super(valorReparo, reparo);
    this._modeloCarro = modeloCarro;
  }

  public get modeloCarro(){
    return this._modeloCarro;
  }

  public set modeloCarro(modeloCarro: string){
    if (!modeloCarro) {
      throw new Error('Modelo Invalido.');
  }
    
    this._modeloCarro = modeloCarro;
  }
}

const yamaha = new Moto("Yamaha 250E", 450.00, "Troca de pneu");
const corsa = new Carro("Chevrolet Corsa", 1250.00, "Revisão");

corsa.concluido = true;

console.log(corsa.servicoConcluido());
console.log(yamaha.servicoConcluido());