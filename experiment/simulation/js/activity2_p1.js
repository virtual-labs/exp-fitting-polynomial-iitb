function activity2_p1() {
    let btn_txt = get_collapse_btn_text('Matrix', 'a2-div-matrix');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='a2-div-matrix'>
      <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 2: </h4>
      <p class="fs-16px">
         To do estimation we will need &beta;&#770;<sub>1</sub>. We will use the formula:
         <span class="fb-500">&beta;&#770;<sub>1</sub>  = (X<sub>1</sub><sup>T</sup>X<sub>1</sub>)<sup>-1</sup>X<sub>1</sub><sup>T</sup>Y<sub>1</sub> </span>
      </p>
      <div class="fs-16px">
         We will determine parameter in given order:
         <p class="fb-500">
            $$ X_1 \→ X_1^{T}X_1 \→ (X_1^{T}X_1)^{-1} \→ (X_1^{T}X_1)^{-1}X_1^T \→ (X_1^{T}X_1)^{-1}X_1^{T}Y_1 $$
         </p>
      </div>
      <div class="fs-16px">
         So the correct form of X<sub>1</sub> is given below:
         <p class="fb-500">
            $$ X_1 = \\begin{bmatrix}
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
         Refer above expression and fill the column for given X<sub>1</sub>
      </div>
      <br>
      <div id='act2-p1-tb-box2'></div>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p1-btn-1' onclick='a2_p1_show_matrix();' >Next</button>
    </div>`;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    let header = [
        '<span>$$1_{1 × n}$$</span>',
        '<span>$$ x_{1 × n}$$</span>',
        '<span>$$ x_{1 × n}^2$$</span>',
        '<span>$$ x_{1 × n}^3$$</span>',
    ];
    X1 = [];
    for (let i = 0; i < x.length; i++) {
        let x1 = x[i];
        let x2 = Math.pow(x[i], 2);
        let x3 = Math.pow(x[i], 3);
        X1.push([
            1,
            parseFloat(x1.toFixed(3)),
            parseFloat(x2.toFixed(3)),
            parseFloat(x3.toFixed(3)),
        ]);
    }
    let tb_box = (document.getElementById('act2-p1-tb-box2'));
    let new_table = new Verify_Rows_Cols(header, X1, [0], [[0, 2, 3]], '', tb_box, true, false, internal_calculation_act2_p1);
    new_table.load_table();
    // let tab_ele = new_table.get_table_element();
    // tab_ele.style.fontSize = '16px';
    // tab_ele.style.textAlign = 'center';
    hide_all_steps();
    setTimeout(() => {
        show_step('a2-div-matrix');
    }, 150);
}
function internal_calculation_act2_p1() {
    let next_btn = (document.getElementById('act2-p1-btn-1'));
    let tb_box = (document.getElementById('act2-p1-tb-box2'));
    tb_box.innerHTML = '';
    X1T = transpose_matrix(X1);
    X1T_X1 = matrix_multiplication(X1T, X1);
    let mat = new Matrix('X_1', X1, tb_box);
    mat.load_matrix();
    console.log('X1T_X1', X1T_X1);
    next_btn.style.display = 'block';
}
function a2_p1_show_matrix() {
    let next_btn = (document.getElementById('act2-p1-btn-1'));
    let mat_div = (document.getElementById('a2-div-matrix'));
    next_btn.remove();
    mat_div.innerHTML += `
   <div>
      <br>
      Now you have X<sub>1</sub>.
      <br>
      Using the above values find Matrix X<sub>1</sub><sup>T</sup>X<sub>1</sub>
      <br><br>
      <div id="act2-p1-tb-box3">
         <span class="fb-600">X<sub>1</sub><sup>T</sup>X<sub>1</sub> = </span>
      </div>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p1-btn-2' onclick='activity2_p2();' >Next</button>
   </div>
   `;
    let tb_box = (document.getElementById('act2-p1-tb-box3'));
    let vr = [0, 1, 2, 3];
    let vc = [[0, 1, 2, 3], [0], [0], [0]];
    let tab = new Verify_Rows_Cols([], X1T_X1, vr, vc, '', tb_box, false, false, move_to_activity2_p2);
    tab.load_table();
}
function move_to_activity2_p2() {
    let btn = (document.getElementById('act2-p1-btn-2'));
    let tb_box = (document.getElementById('act2-p1-tb-box3'));
    tb_box.innerHTML = '';
    let mat = new Matrix('X_1^TX_1', X1T_X1, tb_box);
    mat.load_matrix();
    btn.style.display = 'block';
}
// activity2_p1();
//# sourceMappingURL=activity2_p1.js.map