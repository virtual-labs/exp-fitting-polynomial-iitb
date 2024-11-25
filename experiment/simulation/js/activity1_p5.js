function activity1_p5() {
    let btn = (document.getElementById('act1-p4-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Step 6', 'div-step-6');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="div-step-6">
      <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 6: </h4>
         Now we will consider

         $$
         \\hat{\\beta} = \\begin{bmatrix}
         \\hat{\\beta_0} & \\hat{\\beta_1} & \\hat{\\beta_2} &
         \\hat{\\beta_3} & \\hat{\\beta_4} 
         \\end{bmatrix}
         $$
         
         Now comparing estimated β&#770; and above expression we have,

         $$
         \\hat{\\beta_0} = ${beta_cap0} \\quad \\quad
         \\hat{\\beta_1} = ${beta_cap1} \\quad \\quad  
         \\hat{\\beta_2} = ${beta_cap2} \\quad \\quad  
         \\hat{\\beta_3} = ${beta_cap3} \\quad \\quad  
         \\hat{\\beta_4} = ${beta_cap4}
         $$

         $$
         \\bar{x} = \\frac {\\Sigma{x}}{n} = ${parseFloat((sum_x / N).toFixed(3))} \\quad \\quad
         \\bar{Y} = \\frac {\\Sigma{Y}}{n} = ${parseFloat((sum_Y / N).toFixed(3))}
         $$
         Now calculate,
         $$
         Y' = \\hat{\\beta_0} + \\hat{\\beta_1}x + \\hat{\\beta_2}x^2 + \\hat{\\beta_3}x^3 + \\hat{\\beta_4}x^4
         $$
         But we need cubic model also for comparing models. So we have another observation say Y<sub>1</sub>.
         <br>
         Furthermore we define
         $$
         Y_1' = \\hat{\\beta_0} + \\hat{\\beta_1}x + \\hat{\\beta_2}x^2 + \\hat{\\beta_3}x^3 
         $$

         Using the above values and formulae, complete the following table:
         <br><br>
         <div id='tb-box-act1-p5-1'></div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p5-btn-1' onclick='sxx_ssr();' >Next</button>
      </div>
   `;
    MathJax.typeset();
    let tb_box = (document.getElementById('tb-box-act1-p5-1'));
    let header = [
        'x',
        'Y',
        '(x - x&#x0305;)<sup>2</sup>',
        '(Y-Y&#x0305;)<sup>2</sup>',
        "Y'",
        "(Y-Y')<sup>2</sup>",
    ];
    generate_act1_table_data_3();
    let tab = new Verify_Rows_Cols(header, act1_table_data_3, [0], [[2, 3, 4, 5]], '', tb_box, true, true, calculate_summation);
    tab.load_table();
    let tab_ele = tab.get_table_element();
    tab_ele.style.textAlign = 'center';
    hide_all_steps();
    setTimeout(() => {
        show_step('div-step-6');
    }, 150);
}
function calculate_summation() {
    let btn = (document.getElementById('act1-p5-btn-1'));
    btn.style.display = 'block';
}
function sxx_ssr() {
    let btn = (document.getElementById('act1-p5-btn-1'));
    btn.remove();
    let div = (document.getElementById('div-step-6'));
    let text = `
      <br><br>
      <div class="fs-16px">
         <div class="col">
            <div class="col-sm-6">
               Sxx(Sum of squared deviation of X from the mean Xbar) = &sum;(x<sub>i</sub> - x&#x0305;)<sup>2</sup> = <span class="fs-16px" id="sxx-dsp"></span>
               <br><br>
               <input type='number' id='sxx-inp' class='form-control fs-16px' />
               
            </div>
            <br><br>
            <div class="col-sm-6">
               SSr(Sum of Squared Residues) = &sum;(Y<sub>i</sub>-Y<sub>i</sub>')<sup>2</sup> = <span class="fs-16px" id="ssr-dsp"></span>
               <br><br>
               <input type='number' id='ssr-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p5-btn-2' onclick='verify_sxx_ssr();' >Verify</button>
      </div>
   `;
    div.innerHTML += text;
}
function generate_act1_table_data_3() {
    act1_table_data_3 = [];
    Sxx = 0;
    SSr = 0;
    for (let i = 0; i < x.length; i++) {
        y_dash = 0;
        for (let j = 0; j < beta_cap.length; j++) {
            y_dash += beta_cap[j][0] * Math.pow(x[i], j);
        }
        let ar = [];
        ar.push(x[i]);
        ar.push(Y[i][0]);
        ar.push(Math.pow((x[i] - x_bar_val), 2));
        ar.push(Math.pow((Y[i][0] - Y_bar_val), 2));
        ar.push(y_dash);
        ar.push(Math.pow((Y[i][0] - y_dash), 2));
        act1_table_data_3.push(ar);
        Sxx += Math.pow((x[i] - x_bar_val), 2);
        SSr += Math.pow((Y[i][0] - y_dash), 2);
    }
}
function verify_sxx_ssr() {
    let sxx_inp = (document.getElementById('sxx-inp'));
    let ssr_inp = (document.getElementById('ssr-inp'));
    let sxx_dsp = (document.getElementById('sxx-dsp'));
    let ssr_dsp = (document.getElementById('ssr-dsp'));
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('act1-p5-btn-2')
    // );
    console.log(Sxx, SSr);
    if (!verify_values(parseFloat(sxx_inp.value), Sxx)) {
        sxx_inp.style.border = '1px solid red';
        alert('Incorrect Sxx value');
        return;
    }
    else {
        sxx_inp.style.border = '1px solid #ced4da';
        sxx_inp.disabled = true;
    }
    if (!verify_values(parseFloat(ssr_inp.value), SSr)) {
        ssr_inp.style.border = '1px solid red';
        alert('Incorrect SSr value');
        return;
    }
    else {
        ssr_inp.style.border = '1px solid #ced4da';
        ssr_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    sxx_inp.remove();
    ssr_inp.remove();
    sxx_dsp.innerText = parseFloat(Sxx.toFixed(3)).toString();
    ssr_dsp.innerText = parseFloat(SSr.toFixed(3)).toString();
    activity1_p6();
    // btn.innerText = 'Next';
    // btn.removeEventListener('click', verify_sxx_ssr);
    // btn.addEventListener('click', activity1_p6);
}
//# sourceMappingURL=activity1_p5.js.map