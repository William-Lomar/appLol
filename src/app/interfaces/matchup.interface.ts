import { CampeoesInterface } from "./campeoes.interface";

export interface MatchupInterface{
    campeoes:Array<CampeoesInterface>;
    oponente:CampeoesInterface;
    rota:string;
    elo:string;
}