export const variants ={
    visible:{
        x:[0,150,150,-50,-50,0,],
        y:[0,150,150,150,-50,0],
        
      
        transition:{
            repeat:Infinity,
            duration:8,
            ease:"easeInOut",
            
            
        }
    },
    visible2:{
        x:[0,-150,90,90,0],
        y:[0,-150,-150,90,0],

        transition:{
            repeat:Infinity,
            duration:8,
            ease:"easeInOut"
        }
    },
    hidden2:{
        rotate:225,
    },
    hidden:{
      rotate:45
    }
    
}