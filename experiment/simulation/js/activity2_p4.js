function activity2_p4() {
    let btn = (document.getElementById('act2-p3-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text("Calculate Y<sub>1</sub><sup>'</sup>", 'act2-div-y-dash');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="act2-div-y-dash">
         <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 5: </h4>
         Now we will consider

         $$
         \\hat{\\beta} = \\begin{bmatrix}
         \\hat{\\beta_0} & \\hat{\\beta_1} & \\hat{\\beta_2} &
         \\hat{\\beta_3} & \\hat{\\beta_4} 
         \\end{bmatrix}
         $$

         $$
         \\hat{\\beta_1} = \\begin{bmatrix}
         \\hat{\\beta_{10}} & \\hat{\\beta_{11}} & \\hat{\\beta_{12}} &
         \\hat{\\beta_{13}} 
         \\end{bmatrix}
         $$
         
         Now comparing estimated β&#770;, β&#770;<sub>1</sub>  and above expressions we have,

         $$
         \\hat{\\beta_0} = ${beta_cap0} \\quad \\quad
         \\hat{\\beta_1} = ${beta_cap1} \\quad \\quad  
         \\hat{\\beta_2} = ${beta_cap2} \\quad \\quad  
         \\hat{\\beta_3} = ${beta_cap3} \\quad \\quad  
         \\hat{\\beta_4} = ${beta_cap4}
         $$
         <br>
         $$
         \\hat{\\beta_{10}} = ${beta1_cap0} \\quad \\quad
         \\hat{\\beta_{11}} = ${beta1_cap1} \\quad \\quad  
         \\hat{\\beta_{12}} = ${beta1_cap2} \\quad \\quad  
         \\hat{\\beta_{13}} = ${beta1_cap3} 
         $$
         <br>
         $$
         \\bar{x} = \\frac {\\Sigma{x}}{n} = ${parseFloat((sum_x / N).toFixed(3))} \\quad \\quad
         \\bar{Y} = \\frac {\\Sigma{Y}}{n} = ${parseFloat((sum_Y / N).toFixed(3))} \\quad \\quad
         \\bar{Y_1} = \\frac {\\Sigma{Y_1}}{n} = ${parseFloat((sum_Y1 / N).toFixed(3))}
         $$
         
         Now we have,

         $$
         Y' = \\hat{\\beta_0} + \\hat{\\beta_1}x + \\hat{\\beta_2}x^2 + \\hat{\\beta_3}x^3 + \\hat{\\beta_4}x^4 = ${y_dash}
         $$

         But we need cubic model also for comparing models. So we have another observations say Y<sub>1</sub>.
         <br>
         Furthermore we define
         
         $$
         Y_1' = \\hat{\\beta_{10}} + \\hat{\\beta_{11}}x + \\hat{\\beta_{12}}x^2 + \\hat{\\beta_{13}}x^3 
         $$
         Using the above values and formulae, complete the following table:
         <br><br>
         <div id='act2-p4-tb-box1'></div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p4-btn-1' onclick='show_rss();' >Next</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    let tb_box = (document.getElementById('act2-p4-tb-box1'));
    let header = [
        'x',
        'Y',
        'Y<sub>1</sub>',
        '(x - x&#x0305;)<sup>2</sup>',
        '(Y-Y&#x0305;)<sup>2</sup>',
        '(Y<sub>1</sub> - Y&#x0305;<sub>1</sub>)<sup>2</sup>',
        "Y'",
        "Y<sub>1</sub>'",
        "(Y<sub>1</sub>-Y<sub>1</sub>')<sup>2</sup>",
        "(Y-Y')<sup>2</sup>",
    ];
    generate_act2_p4_table_data();
    let tab = new Verify_Rows_Cols(header, a2_p2_table_data, [0], [[3, 4, 5, 6, 7, 8, 9]], '', tb_box, true, true, show_summation);
    tab.load_table();
    tab.get_table_element().style.textAlign = 'center';
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div-y-dash');
    }, 150);
}
function show_summation() {
    let btn = (document.getElementById('act2-p4-btn-1'));
    btn.style.display = 'block';
}
function show_rss() {
    let btn = (document.getElementById('act2-p4-btn-1'));
    btn.remove();
    let div = (document.getElementById('act2-div-y-dash'));
    div.innerHTML += `
      <br><br>
      <div class="fs-16px">
         <div class="col">
            <div class="col-sm-6">
               RSS4(Sum of squared Residual of Y) = &sum;(Y - Y')<sup>2</sup> = <span class="fs-16px" id="rss4-dsp"></span>
               <br><br>
               <input type='number' id='rss4-inp' class='form-control fs-16px' />
               
            </div>
            <br><br>
            <div class="col-sm-6">
               RSS3(Sum of Squared Residual of Y<sub>1</sub>) = &sum;(Y<sub>1</sub>-Y<sub>1</sub>')<sup>2</sup> = <span class="fs-16px" id="rss3-dsp"></span>
               <br><br>
               <input type='number' id='rss3-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p4-btn-2' onclick='verify_rss();' >Verify</button>
      </div>
      `;
}
function verify_rss() {
    let rss3_inp = (document.getElementById('rss3-inp'));
    let rss4_inp = (document.getElementById('rss4-inp'));
    let rss3_dsp = (document.getElementById('rss3-dsp'));
    let rss4_dsp = (document.getElementById('rss4-dsp'));
    console.log('RSS4', RSS4);
    console.log('RSS3', RSS3);
    if (!verify_values(parseFloat(rss4_inp.value), RSS4)) {
        rss4_inp.style.border = '1px solid red';
        alert('Incorrect RSS4 value');
        return;
    }
    else {
        rss4_inp.style.border = '1px solid #ced4da';
        rss4_inp.disabled = true;
    }
    if (!verify_values(parseFloat(rss3_inp.value), RSS3)) {
        rss3_inp.style.border = '1px solid red';
        alert('Incorrect RSS3 value');
        return;
    }
    else {
        rss3_inp.style.border = '1px solid #ced4da';
        rss3_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    rss3_inp.remove();
    rss4_inp.remove();
    rss3_dsp.innerText = parseFloat(RSS3.toFixed(3)).toString();
    rss4_dsp.innerText = parseFloat(RSS4.toFixed(3)).toString();
    activity2_p5();
}
function generate_act2_p4_table_data() {
    a2_p2_table_data = [];
    RSS3 = 0;
    RSS4 = 0;
    for (let i = 0; i < X.length; i++) {
        y1_dash = 0;
        for (let j = 0; j < beta1_cap.length; j++) {
            y1_dash += beta1_cap[j][0] * Math.pow(x[i], j);
        }
        let ar = [];
        ar.push(x[i]);
        ar.push(Y[i][0]);
        ar.push(Y1[i][0]);
        ar.push(Math.pow((x[i] - x_bar_val), 2));
        ar.push(Math.pow((Y[i][0] - Y_bar_val), 2));
        ar.push(Math.pow((Y1[i][0] - Y1_bar_val), 2));
        ar.push(y_dash);
        ar.push(y1_dash);
        ar.push(Math.pow((Y1[i][0] - y1_dash), 2));
        ar.push(Math.pow((Y[i][0] - y_dash), 2));
        a2_p2_table_data.push(ar);
        RSS4 += Math.pow((Y[i][0] - y_dash), 2);
        RSS3 += Math.pow((Y1[i][0] - y1_dash), 2);
    }
}
// activity2_p4();
//# sourceMappingURL=activity2_p4.js.map