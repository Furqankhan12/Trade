

function myFunction() 
{

  let value = parseInt(document.getElementById("value").value);
  if (value != NaN) {

    let step1 =  parseFloat((value * (0.6 / 100)).toFixed(2));
    let step2 = parseFloat((value * (1.2 / 100)).toFixed(2));
    let step3 = parseFloat((value * (2.6 / 100)).toFixed(2));
    let step4 = parseFloat((value * (5.6 / 100)).toFixed(2));
    let step5 =  parseFloat((value * (12 / 100)).toFixed(2));
    let step6 = parseFloat((value * (25 / 100)).toFixed(2));
    let step7 = parseFloat((value * (53 / 100)).toFixed(2));

    let winAmount1 = (step1*1.95).toFixed(2);
    let winAmount2 = (step2 * 1.95).toFixed(2);
    let winAmount3 = (step3 * 1.95).toFixed(2);
    let winAmount4 = (step4 * 1.95).toFixed(2);
    let winAmount5 = (step5 * 1.95).toFixed(2);
    let winAmount6 = (step6 * 1.95).toFixed(2);
    let winAmount7 = (step7 * 1.95).toFixed(2);

    

    document.getElementById("buyAmount1").innerText = step1;
    document.getElementById("buyAmount2").innerText = step2;
    document.getElementById("buyAmount3").innerText = step3;
    document.getElementById("buyAmount4").innerText = step4;
    document.getElementById("buyAmount5").innerText = step5;
    document.getElementById("buyAmount6").innerText = step6;
    document.getElementById("buyAmount7").innerText = step7;

    document.getElementById("winAmount1").innerText =  winAmount1;  
     document.getElementById("winAmount2").innerText = winAmount2;
    document.getElementById("winAmount3").innerText = winAmount3;
    document.getElementById("winAmount4").innerText = winAmount4;
    document.getElementById("winAmount5").innerText = winAmount5;
    document.getElementById("winAmount6").innerText = winAmount6;
    document.getElementById("winAmount7").innerText = winAmount7;

    document.getElementById("netProfit1").innerText = (winAmount1 - step1).toFixed(2);
    document.getElementById("netProfit2").innerText = (parseFloat(winAmount2)-(parseFloat(step1)+parseFloat(step2))).toFixed(2);
    document.getElementById("netProfit3").innerText = (parseFloat(winAmount3)-(parseFloat(step1)+parseFloat(step2)+parseFloat(step3))).toFixed(2);

    document.getElementById("netProfit4").innerText = (parseFloat(winAmount4)-(parseFloat(step1)+parseFloat(step2)+parseFloat(step3)+parseFloat(step4))).toFixed(2);

    document.getElementById("netProfit5").innerText = (parseFloat(winAmount5)-(parseFloat(step1)+parseFloat(step2)+parseFloat(step3)+parseFloat(step4)+parseFloat(step5))).toFixed(2);

    document.getElementById("netProfit6").innerText = (parseFloat(winAmount6)-(parseFloat(step1)+parseFloat(step2)+parseFloat(step3)+parseFloat(step4)+parseFloat(step5)+parseFloat(step6))).toFixed(2);
    
    document.getElementById("netProfit7").innerText = (parseFloat(winAmount7)-(parseFloat(step1)+parseFloat(step2)+parseFloat(step3)+parseFloat(step4)+parseFloat(step5)+parseFloat(step6)+parseFloat(step7))).toFixed(2);



  }
}

