import { easeInOut } from "motion";

const variants ={
    visible:{
        x:[0,100]
    },
    transition:{
        duration:2,
        repeat:Infinity,
        ease:easeInOut,
    }
}

export const animateBtnDiv = (direction:string,distance:number)=>{
    
}