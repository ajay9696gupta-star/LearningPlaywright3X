let day = 10;
// 1 - mon, 2 - tuesday

switch(day){

    case 0: 
    console.log('Sunday - Rest Day');
    break;

    case 1: 
    console.log('Mon - Sprint Planning');
    break;
    case 2: 
    console.log('Tue - Development');
   break;
    case 3: 
    console.log('Wed - Code Review');
    break;
    case 4: 
    console.log('Thur - Testing');
    break;
    case 5: 
    console.log('Fri - Development and Retro');
    break;
    case 6: 
    console.log('Sat - Rest Day');
    break;
    default:
         console.log('Invalid day value');

}