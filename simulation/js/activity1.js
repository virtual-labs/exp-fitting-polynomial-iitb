let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h5 class="center-text fs-20px fw-600">Regression for Fitting polynomial using Hypothesis
        </h5>

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

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
}
function show_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn.remove();
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
       
        <button class='btn btn-info std-btn' style='position: relative; top: 15vw; left: 70vw;' onclick='start_act1();' id='temp-btn-1' >Start</button>
    </div>
    </div>

    `;
    maindiv.innerHTML += text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn.remove();
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
        <br>
        <div class='col'>
        
            <div class='row' id='s1' >
                <div class='col-6'>Choose the number of Observations</div>
                <div class='col-6'>
                    <select class='form-select fs-16px' id='act1-n-inp' onchange='set_n();' >

                    </select>
                    <span class='fs-16px' id='dsp-N'></span>
                </div>
                
            </div>

            <br>

            

            <div class='row'>
            <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-btn-1' onclick='internal_calculations_1();' >Generate x Y</button>
            </div>

        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('tb1-box');
    }, 150);
    load_dd1_options();
}
//for loading all options
function load_dd1_options() {
    let dd = (document.getElementById('act1-n-inp'));
    //let inp: HTMLSelectElement = <HTMLSelectElement> document.getElementById('act1-alpha-inp');
    dd.innerHTML = ``;
    // inp.innerHTML = '';
    let op = new Option('--Select--', '0', true);
    dd.add(op);
    // let op1 = new Option('--Select Alpha Value--', '0', true);
    // inp.add(op1);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        dd.add(op);
    }
    // for(let i=0; i<alpha_dd_options.length; i++) {
    //     let op = new Option(alpha_dd_options[i].toString(), alpha_dd_options[i].toString());
    //     inp.add(op);
    // }
}
//for setting number of observations
function set_n() {
    let dd = (document.getElementById('act1-n-inp'));
    //let inp: HTMLSelectElement = <HTMLSelectElement> document.getElementById('act1-alpha-inp');
    let btn = (document.getElementById('act1-btn-1'));
    if (dd.value != '0') {
        N = parseInt(dd.value);
        btn.style.display = 'block';
        //inp.disabled = false;
    }
    else {
        N = 0;
        //inp.value = '';
        //inp.disabled = true;
        btn.style.display = 'none';
    }
}
//Internal calculations to generate x and Y vectors
function internal_calculations_1() {
    let dd = (document.getElementById('act1-n-inp'));
    let dsp = (document.getElementById('dsp-N'));
    dd.remove();
    dsp.innerText = `n = ${N}`;
    //generate x vector (ascending)
    generate_random_x();
    //generate random beta0 and beta1 values
    beta0 = Math.random() * 2 - 1;
    beta1 = Math.random() * 2 - 1;
    beta2 = Math.random() * 2 - 1;
    beta3 = Math.random() * 2 - 1;
    beta4 = Math.random() * 2 - 1;
    console.log('beta0 = ' + beta0, 'beta1 = ' + beta1, 'beta2 = ' + beta2, 'beta3 = ' + beta3, 'beta4 = ' + beta4);
    Y0 = [];
    sum_Y = 0;
    //generate Y0 = beta0 + (beta1*x)
    for (let i = 0; i < x.length; i++) {
        Y0.push(beta0 +
            beta1 * x[i] +
            beta2 * Math.pow(x[i], 2) +
            beta3 * Math.pow(x[i], 3) +
            beta4 * Math.pow(x[i], 4));
    }
    console.log(Y0);
    //generate epsilon values
    generate_epsilon_values();
    //calculate Y values
    let last_index = Y0.length - 1;
    Y = [];
    for (let i = 0; i < Y0.length; i++) {
        let ar = [];
        ar.push(Y0[i] + Y0[last_index] * epsilon[i]);
        Y.push(ar);
        sum_Y += Y[i][0];
    }
    console.log(Y);
    console.log(x);
    console.log(Y0);
    console.log('sum_Y', sum_Y);
    //show x Y table
    show_x_y();
}
//for generating random x vector
function generate_random_x() {
    let arr = [];
    x = [];
    sum_x = 0;
    while (arr.length < N) {
        // let rv = 20 + Math.floor(Math.random() * 60);
        let rv = Math.random() * (1.7 - -1.7) + -1.7;
        if (arr.indexOf(rv) == -1) {
            arr.push(rv);
            sum_x += rv;
        }
    }
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    //console.log(arr);
    x = arr;
    console.log('sumX', sum_x);
    console.log(x);
}
//for generating epsilon values
function generate_epsilon_values() {
    let arr = [];
    epsilon = [];
    while (arr.length < N) {
        let rv = Math.random() * 1.6 - 0.8;
        arr.push(rv);
    }
    //console.log(arr);
    epsilon = arr;
}
//to display x and Y vectors
function show_x_y() {
    let btn = (document.getElementById('act1-btn-1'));
    btn.remove();
    let d = document.getElementById('tb1-box');
    let text = `
        <br>
        <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
                <tr id='x-values'>
                <th class='table-dark'>x</th>
                </tr>

                <tr id='y-values'>
                <th class='table-dark'>Y</th>
                </tr>
            </table>

        </div>
        <br>
        <h4 class="fs-16px" style="text-align:left;">
            Note : <span style='text-align: center; font-weight: 500;'>y = &beta;<sub>0</sub> + &beta;<sub>1</sub>x + &beta;<sub>2</sub>x<sup>2</sup> + &beta;<sub>3</sub>x<sup>3</sup> + &beta;<sub>4</sub>x<sup>4</sup> + &epsilon; </span>
         </h4>
         <p class="fs-16px" style="text-align:left;">Calculate the mean value of x and Y.</p>

         <div class="row fs-16px" style="align-items:center;">
            <div>
               <div class="row" style="font-size:1.6vw;justify-content:center;align-items:center;">
                  <div class="col-2">
                     $$ \\bar{x} = \\frac {\\Sigma{x}}{n} = $$
                  </div>
                  <div class="col-5" style="text-align:left">
                     <input type='number' id='x-bar-inp' class='form-control fs-16px' />
                     <span  id='x-bar'></span>
                  </div>
               </div>
            </div>
            <div  >
               <div class="row" style="font-size:1.6vw;justify-content:center;align-items:center;">
                  <div class="col-2" >
                     $$ \\bar{Y} = \\frac {\\Sigma{Y}}{n} = $$
                  </div>
                  <div class="col-5" style="text-align:left">
                     <input type='number' id='y-bar-inp' class='form-control fs-16px' />
                     <span id='y-bar'></span>
                  </div>
               </div>
                
            </div>
         </div>
            <div>
               <button class='btn btn-info std-btn' onclick='verify_x_y_bar();' style='position: relative; left: 0w;' id='vf-bar-btn'>Verify</button>
            </div>
         <br>
         

        `;
    d.innerHTML += text;
    load_xy_values();
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_x_y_bar() {
    let btn = (document.getElementById('vf-bar-btn'));
    let x_bar_inp = (document.getElementById('x-bar-inp'));
    let y_bar_inp = (document.getElementById('y-bar-inp'));
    let x_bar = (document.getElementById('x-bar'));
    let y_bar = (document.getElementById('y-bar'));
    x_bar_val = sum_x / N;
    Y_bar_val = sum_Y / N;
    console.log(x_bar_val, Y_bar_val);
    if (!verify_values(parseFloat(x_bar_inp.value), x_bar_val)) {
        alert('Incorrect xbar value');
        return;
    }
    if (!verify_values(parseFloat(y_bar_inp.value), Y_bar_val)) {
        alert('Incorrect Ybar value');
        return;
    }
    alert('Great!! Your calculation is correct.');
    btn.remove();
    x_bar_inp.remove();
    y_bar_inp.remove();
    x_bar.innerText = x_bar_val.toFixed(3);
    y_bar.innerText = Y_bar_val.toFixed(3);
    activity1_p1();
}
function load_xy_values() {
    let x_val = (document.getElementById('x-values'));
    let y_val = (document.getElementById('y-values'));
    for (let i = 0; i < Y.length; i++) {
        console.log(x[i]);
        x_val.innerHTML += `<td>${x[i].toFixed(3)}</td>`;
        y_val.innerHTML += `<td>${Y[i][0].toFixed(3)}</td>`;
    }
}
// <div class='row' id='s2'>
// <div class='col-6'>Enter Alpha Value</div>
// <div class='col-6'>
//     <select class='form-select fs-16px' disabled  id='act1-alpha-inp' onchange= 'set_alpha();'>
//     </select>
// </div>
// </div>
activity1();
//# sourceMappingURL=activity1.js.map