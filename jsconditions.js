let XX = prompt("first number");
let YY = prompt("second number");
let ZZ = prompt("third number");

if (XX > YY && XX > ZZ)
{
    if (YY > ZZ)
    {
        console.log(XX, YY, ZZ);
    }
    else
    {
        console.log(XX, ZZ, YY);
    }
}
 else if (YY > XX && YY > ZZ)
{
     if (XX > ZZ)
     {
         console.log(YY, XX, ZZ);
     }
     else
     {
         console.log(YY, ZZ, XX);
     }
}
if (ZZ > XX && ZZ > YY)
{
    if (XX > YY)
    {
        console.log(ZZ, XX, YY);
    }
    else
    {
        console.log(ZZ, YY, XX);
    }
}