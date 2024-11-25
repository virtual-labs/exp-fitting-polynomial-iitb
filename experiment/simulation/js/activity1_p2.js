// let XT: number[][] =[];
// let XT_X: number[][] = [];
function activity1_p2() {
    let btn_txt = get_collapse_btn_text('Matrix', 'div-matrix');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-matrix'>
      <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 3: </h4>
      <p class="fs-16px">
         To do estimation we will need &beta;&#770;. We will use the formula:
         <span class="fb-500">&beta;&#770;  = (X<sup>T</sup>X)<sup>-1</sup>X<sup>T</sup>Y </span>
      </p>
      <div class="fs-16px">
         We will determine parameter in given order:
         <p class="fb-500">
            $$ X \→ X^{T}X \→ (X^{T}X)^{-1} \→ (X^{T}X)^{-1}X^T \→ (X^{T}X)^{-1}X^{T}Y $$
         </p>
      </div>
      <div class="fs-16px">
         So the correct form of X is given below:
         <p class="fb-500">
            $$ X = \\begin{bmatrix}
            1_{1 \× n} \\ \\ \\ 
            x_{1 \× n} \\ \\ \\
            x_{1 \× n}^2 \\ \\ \\
            ... \\ \\ \\
            x_{1 \× n}^p
            \\end{bmatrix}
            $$
         </p>
      </div>
      <div class="fs-16px">
         Refer above expression and fill the column for given X
      </div>
      <br>
      <div id='tb-box2'></div>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p2-btn-1' onclick='show_matrix();' >Next</button>
    </div>`;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    let header = [
        '<span>$$1_{1 × n}$$</span>',
        '<span>$$ x_{1 × n}$$</span>',
        '<span>$$ x_{1 × n}^2$$</span>',
        '<span>$$ x_{1 × n}^3$$</span>',
        '<span>$$ x_{1 × n}^4$$</span>',
    ];
    X = [];
    for (let i = 0; i < x.length; i++) {
        let x1 = x[i];
        let x2 = Math.pow(x[i], 2);
        let x3 = Math.pow(x[i], 3);
        let x4 = Math.pow(x[i], 4);
        X.push([
            1,
            parseFloat(x1.toFixed(3)),
            parseFloat(x2.toFixed(3)),
            parseFloat(x3.toFixed(3)),
            parseFloat(x4.toFixed(3)),
        ]);
    }
    let vc = [[0, 2, 3, 4]];
    let tb_box = (document.getElementById('tb-box2'));
    let new_table = new Verify_Rows_Cols(header, X, [0], vc, '', tb_box, true, false, internal_calculation_act1_p2);
    new_table.load_table();
    // let tab_ele = new_table.get_table_element();
    // tab_ele.style.fontSize = '16px';
    // tab_ele.style.textAlign = 'center';
    hide_all_steps();
    setTimeout(() => {
        show_step('div-matrix');
    }, 150);
}
function show_matrix() {
    let next_btn = (document.getElementById('act1-p2-btn-1'));
    let mat_div = (document.getElementById('div-matrix'));
    next_btn.remove();
    mat_div.innerHTML += `
	<div>
      <br>
	   Now you have X.
      <br>
      Using the above values find Matrix X<sup>T</sup>X
      <br><br>
      <div id="tb-box3">
      <span class="fb-600">X<sup>T</sup>X = </span>
      </div>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p2-btn-2' onclick='activity1_p3();' >Next</button>
	</div>
	`;
    let tb_box = (document.getElementById('tb-box3'));
    let vr = [0, 1, 2, 3, 4];
    let vc = [[0, 1, 2, 3, 4], [0], [0], [0], [0]];
    let tab = new Verify_Rows_Cols([], XT_X, vr, vc, '', tb_box, false, false, move_to_activity1_p3);
    tab.load_table();
    // let tab_ele = tab.get_table_element();
    // tab_ele.style.fontSize = '16px';
    // tab_ele.style.textAlign = 'center';
}
function internal_calculation_act1_p2() {
    let next_btn = (document.getElementById('act1-p2-btn-1'));
    let tb_box = (document.getElementById('tb-box2'));
    tb_box.innerHTML = '';
    XT = [];
    XT_X = [];
    XT = transpose_matrix(X);
    XT_X = matrix_multiplication(XT, X);
    console.log(X);
    let mat = new Matrix('X', X, tb_box);
    mat.load_matrix();
    console.log(X);
    console.log(`XT_X val ${XT_X}`);
    next_btn.style.display = 'block';
}
function move_to_activity1_p3() {
    let btn = (document.getElementById('act1-p2-btn-2'));
    let tb_box = (document.getElementById('tb-box3'));
    btn.style.display = 'block';
    tb_box.innerHTML = '';
    let mat = new Matrix('X^TX', XT_X, tb_box);
    mat.load_matrix();
    // activity1_p3();
}
function verify_summation() {
    let val1 = (document.getElementById('sum-inp-1'));
    let val2 = (document.getElementById('sum-inp-2'));
    let val3 = (document.getElementById('sum-inp-3'));
    let val4 = (document.getElementById('sum-inp-4'));
    let btn = (document.getElementById('vf-tab-sum'));
    let sus1 = (document.getElementById('sus-x'));
    let sus2 = (document.getElementById('sus-y'));
    let sus3 = (document.getElementById('sus-xx'));
    let sus4 = (document.getElementById('sus-xy'));
    sum_x = 0;
    sum_Y = 0;
    sum_XX = 0;
    sum_XY = 0;
    for (let i = 0; i < X.length; i++) {
        sum_x += X[i][0];
        sum_Y += X[i][1];
        sum_XX += X[i][2];
        sum_XY += X[i][3];
    }
    console.log(sum_x, sum_Y, sum_XX, sum_XY);
    //console.log(sum_x, sum_Y, sum_XX, sum_XY);
    if (!verify_values(parseFloat(val1.value), sum_x)) {
        alert('Incorrect Summation of X');
        return;
    }
    if (!verify_values(parseFloat(val2.value), sum_Y)) {
        alert('Incorrect Summation of Y');
        return;
    }
    if (!verify_values(parseFloat(val3.value), sum_XX)) {
        alert('Incorrect Summation of X^2');
        return;
    }
    if (!verify_values(parseFloat(val4.value), sum_XY)) {
        alert('Incorrect Summation of X*Y');
        return;
    }
    alert('Great!! Your calculation is correct.');
    btn.remove();
    val1.remove();
    val2.remove();
    val3.remove();
    val4.remove();
    sus1.innerText = sum_x.toFixed(3);
    sus2.innerText = sum_Y.toFixed(3);
    sus3.innerText = sum_XX.toFixed(3);
    sus4.innerText = sum_XY.toFixed(3);
    //  activity1_p3();
}
// function printMatrix(a) {
// 	for (let i = 0; i < a.length; i++) {
// 		let line = '';
// 		for (let j = 0; j < a[i].length; j++) {
// 			line += a[i][j] + ' ';
// 		}
// 		console.log(line);
// 	}
// }
// activity1_p2();
//# sourceMappingURL=activity1_p2.js.map