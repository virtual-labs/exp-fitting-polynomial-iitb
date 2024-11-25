function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <div class="fs-16px">
            Consider the bi-quadratic model
            <br>
            <p style='text-align: center; font-weight: 500;'>y = &beta;<sub>0</sub> + &beta;<sub>1</sub>x + &beta;<sub>2</sub>x<sup>2</sup> + &beta;<sub>3</sub>x<sup>3</sup> + &beta;<sub>4</sub>x<sup>4</sup> + &epsilon; </p>
            <br>
            <p class="fs-16px">From the available n data points, we find the model, β&#770;<sub>0</sub> + &beta;&#770;<sub>1</sub>x + &beta;&#770;<sub>2</sub>x<sup>2</sup> + &beta;&#770;<sub>3</sub>x<sup>3</sup> + &beta;&#770;<sub>4</sub>x<sup>4</sup> by requiring that the sum of squares of the residuals be minimized.</p>

            <p class="fs-16px">
               &beta;<sub>0</sub>, &beta;<sub>1</sub>, &beta;<sub>2</sub>, &beta;<sub>3</sub>, &beta;<sub>4</sub>, &epsilon; are population paramenters, and β&#770;<sub>0</sub>, β&#770;<sub>1</sub>, β&#770;<sub>2</sub>, β&#770;<sub>3</sub>, β&#770;<sub>4</sub>, are random computed from the sampled data.
            </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='act2-temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
}
//for starting first activity
function start_act2() {
    let temp_btn = (document.getElementById('act2-temp-btn-1'));
    temp_btn.remove();
    let btn_text = get_collapse_btn_text('Generate Y1', 'act2-tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act2-tb1-box'>
        <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
        <br>
        <div class='col'>

            <div class='row' id='act2-s1' >
                <div class='col-6'>Choose the number of Observations</div>
                <div class='col-6'>
                    <span class='fs-16px'>n = ${N}</span>
                </div>
            </div>

            <br>

            <div class='row'>
            <button class='btn btn-info std-btn' style='margin: auto;' id='act2-btn-1' onclick='act2_internal_calculations_1();' >Generate Y1</button>
            </div>

        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-tb1-box');
    }, 150);
}
//Internal calculations to generate x and Y vectors
function act2_internal_calculations_1() {
    Y01 = [];
    sum_Y1 = 0;
    // generate a2_y01
    for (let i = 0; i < x.length; i++) {
        Y01.push(beta0 + beta1 * x[i] + beta2 * Math.pow(x[i], 2) + beta3 * Math.pow(x[i], 3));
    }
    console.log('Y01', Y01);
    //calculate Y values
    let last_index = Y01.length - 1;
    Y1 = [];
    for (let i = 0; i < Y01.length; i++) {
        let ar1 = [];
        ar1.push(Y01[i] + Y01[last_index] * epsilon[i]);
        Y1.push(ar1);
        sum_Y1 += Y1[i][0];
    }
    console.log('Y1', Y1);
    console.log('Y01', Y01);
    console.log('sum_Y1', sum_Y1);
    //show x Y table
    act2_show_x_y_y1();
}
//to display x and Y vectors
function act2_show_x_y_y1() {
    let btn = (document.getElementById('act2-btn-1'));
    btn.remove();
    let d = (document.getElementById('act2-tb1-box'));
    let text = `
        <br>
        <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
                <tr id='act2-x-values'>
                <th class='table-dark'>x</th>
                </tr>

                <tr id='act2-y-values'>
                <th class='table-dark'>Y</th>

                <tr id='act2-y1-values'>
                <th class='table-dark'>Y1</th>
                </tr>
            </table>

        </div>
        <br>
         <p class="fs-16px" style="text-align:left;">Calculate the mean value of Y1.</p>

         <div class="row" style="font-size:1.3vw;">
            <div class="row" style="justify-content:center;align-items:center;">
               <div class="col-2" >
                  $$ \\bar{x} = \\frac {\\Sigma{x}}{n} = $$
               </div>
               <div class="col-2"  style="text-align:left">
                  <span >${parseFloat(x_bar_val.toFixed(3))}</span>
               </div>
            </div>
            
            <div class="row" style="justify-content:center;align-items:center;">
               <div class="col-2" >
                  $$ \\bar{Y} = \\frac {\\Sigma{Y}}{n} = $$
               </div>
               <div class="col-2" style="text-align:left">
                  <span >${parseFloat(Y_bar_val.toFixed(3))}</span>
               </div>
            </div>
               
            <div class="row" id='act2-y1-bar' style=" display:none;justify-content:center;align-items:center;">
               <div class="col-2" >
                  $$ \\bar{Y_1} = \\frac {\\Sigma{Y_1}}{n} = $$
               </div>
               <div class="col-2" style="text-align:left">
                  <span   >${parseFloat(Y1_bar_val.toFixed(3))}</span>
               </div>
            </div>
            
         </div>
         <div id='act2-y1-bar-inp-div'>
               <div class="row" style="font-size:1.6vw;justify-content:center;align-items:center;">
                  <div class="col-2">
                     $$ \\bar{Y_1} = \\frac {\\Sigma{Y_1}}{n} = $$
                  </div>
                  <div class="col-5" style="text-align:left">
                     <input type='number' id='act2-y1-bar-inp' class='form-control fs-16px' />
                  </div>
               </div>
            </div>
         <div>
               <button class='btn btn-info std-btn' onclick='act2_verify_x_y_bar();' id='act2-vf-bar-btn'>Verify</button>
         </div>
         <br>
         <p class="fs-16px fb-600" style="text-align:left;">
            Note : <br>Y is polynomial model of degree 4 for x, <br>
                  Y1 is polynomial model of degree 3 for x.
         </p>

        `;
    d.innerHTML += text;
    act2_load_xy_values();
    setTimeout(() => MathJax.typeset(), 100);
}
function act2_verify_x_y_bar() {
    let btn = (document.getElementById('act2-vf-bar-btn'));
    let y1_div = (document.getElementById('act2-y1-bar'));
    let y1_inp_div = (document.getElementById('act2-y1-bar-inp-div'));
    let y1_bar_inp = (document.getElementById('act2-y1-bar-inp'));
    Y1_bar_val = sum_Y1 / N;
    console.log('Y1_bar', Y1_bar_val);
    if (!verify_values(parseFloat(y1_bar_inp.value), Y1_bar_val)) {
        alert('Incorrect Y1bar value');
        return;
    }
    alert('Great!! Your calculation is correct.');
    btn.remove();
    y1_inp_div.style.display = 'none';
    y1_div.style.display = 'inline-flex';
    activity2_p1();
}
function act2_load_xy_values() {
    let x_val = (document.getElementById('act2-x-values'));
    let y_val = (document.getElementById('act2-y-values'));
    let y1_val = (document.getElementById('act2-y1-values'));
    for (let i = 0; i < Y.length; i++) {
        console.log(x[i]);
        x_val.innerHTML += `<td>${x[i].toFixed(3)}</td>`;
        y_val.innerHTML += `<td>${Y[i][0].toFixed(3)}</td>`;
        y1_val.innerHTML += `<td>${Y1[i][0].toFixed(3)}</td>`;
    }
}
// activity2();
//# sourceMappingURL=activity2.js.map