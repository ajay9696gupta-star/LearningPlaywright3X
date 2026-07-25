let retry = 0;
do{
    console.log("Execute a Code!");
    console.log("RETRYING.......", retry);
    retry++
}while(retry < 3);