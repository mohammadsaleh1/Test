import { Categories } from './Catgories';

export class Task {

    id : number ;
    TaskDescription : string;
    CreateDate : any;
    Catgories:Categories[];
    SubTask: string[];
    EndDate :any;
}