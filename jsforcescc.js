alert("now you will be asked some information regarding your electricity bill which will be available in your bill.")
let user= prompt("please enter your name:")
let units= prompt("please enter the total units:")
let fa=15
let mc=10
// mc stands for monthly charges and fa stands for fixed charges//
if(units<=25){
    let mvca1=units*0.29
    let sum1=(units*4.89)+mvca1+fa+mc
    let c ="THE electricity bill for "+user+" before rebate is "+sum1
    document.write(c)
}
else if( units>25 && units<=60){
    let mvca2=units*0.29
    let sum2=(25*4.89)+((units-25)*5.40)+mvca2+fa+mc
    let c2="THE electricity bill for "+user+" before rebate is "+sum2
    document.write(c2)
}
else if(units>60 && units<=100){
    let mvca3=units*0.29
    let sum3=(25*4.89)+(35*5.40)+(units-60)*6.41+mvca3+fa+mc
    let c3="THE electricity bill for "+user+" before rebate is "+sum3
    document.write(c3)
}
else if(units>100 && units<=150){
    let mvca4=units*0.29
    let sum4=(25*4.89)+(35*5.40)+(40*6.41)+(units-100)*7.16+mvca4+fa+mc
    let c4="THE electricity bill for "+user+" before rebate is "+sum4
    document.write(c4)
}
else if(units>150 && units<=300){
    let mvca5=units*0.29
    let sum5=(25*4.89)+(35*5.40)+(40*6.41)+50*7.16+(units-150)*7.33+mvca5+fa+mc
    let c5="THE electricity bill for "+user+" before rebate is "+sum5
    document.write(c5)
}
else if(units>300){
    let mvca6=units*0.29
    let sum6=(25*4.89)+(35*5.40)+(40*6.41)+50*7.16+150*7.33+(units-300)*8.92+mvca6+fa+mc
    let c6="THE electricity bill for "+user+" before rebate is "+sum6
    document.write(c6)
}

alert("for using the calculator once again please refresh this site or click the button")