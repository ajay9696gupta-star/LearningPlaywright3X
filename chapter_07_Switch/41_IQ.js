let day = 2;
// 1 - mon, 2 - tuesday

switch(day){

    case 0: 
    console.log('Sunday - Rest Day');

    case 1: 
    console.log('Mon - Sprint Planning');
    
    case 2: 
    console.log('Tue - Development');
   
    case 3: 
    console.log('Wed - Code Review');
    
    case 4: 
    console.log('Thur - Testing');
  
    case 5: 
    console.log('Fri - Development and Retro');
  
    case 6: 
    console.log('Sat - Rest Day');
    
    default:
         console.log('Invalid day value');

}