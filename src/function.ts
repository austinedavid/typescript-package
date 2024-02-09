import {Ijob} from "./jobtype"
export function getName({surname, middlename, age}:{surname:string, middlename:string, age:number}):string{
    const details = surname + " " + " " + middlename + " " + "is " +  age + "years";
    return details
}

export function getJob({cooking, washing}:Ijob){
    const both = cooking + "or" + washing;
    return both
}