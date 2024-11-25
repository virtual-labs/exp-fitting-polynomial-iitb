function activity2_p2() {
    let btn = (document.getElementById('act2-p1-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text(`Inverse Matrix`, 'act2-div-inverse-matrix');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="act2-div-inverse-matrix">
         <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 3:</h4>
         <p>We have the X<sub>1</sub><sup>T</sup>X<sub>1</sub> matrix above,</p>
         <p>Find the inverse of the above matrix:</p>
         <br><br>

         <div id="act2-p2-tb-box1">
            <span>(X<sub>1</sub><sup>T</sup>X<sub>1</sub>)<sup>-1</sup> = </span>
         </div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p2-btn-1' onclick='act2_next_matrix();' >Next</button>
      </div>
   `;
    let tb_box = (document.getElementById('act2-p2-tb-box1'));
    X1T_X1_1 = inverse_matrix(X1T_X1);
    console.log('X1T_X1_1', X1T_X1_1);
    let inverse_tab = new Verify_Rows_Cols([], X1T_X1_1, [0], [[0]], '', tb_box, false, false, internal_calculation_act2_p2);
    inverse_tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div-inverse-matrix');
    }, 150);
}
function internal_calculation_act2_p2() {
    let tb_box = (document.getElementById('act2-p2-tb-box1'));
    let btn = (document.getElementById('act2-p2-btn-1'));
    X1T_X1_1_X1T = matrix_multiplication(X1T_X1_1, X1T);
    tb_box.innerHTML = '';
    let inverse_mat = new Matrix('(X_1^TX_1)^{-1}', X1T_X1_1, tb_box);
    inverse_mat.load_matrix();
    btn.style.display = 'block';
}
function act2_next_matrix() {
    let btn = (document.getElementById('act2-p2-btn-1'));
    btn.remove();
    let mat_div = (document.getElementById('act2-div-inverse-matrix'));
    let tb_box = (document.getElementById('act2-p2-tb-box1'));
    let mat = new Matrix('X_1^T', X1T, tb_box);
    mat.load_matrix();
    mat_div.innerHTML += `
      <br><br>
      Now you have <span class="fb-500">(X<sub>1</sub><sup>T</sup>X<sub>1</sub>)<sup>-1</sup></span> and <span class="fb-500">X<sub>1</sub><sup>T</sup></span>
      <br>
      Find the product of <span class="fb-500">(X<sub>1</sub><sup>T</sup>X<sub>1</sub>)<sup>-1</sup>X<sub>1</sub><sup>T</sup></span>
      <br><br>
      
      <div id="act2-p2-tb-box2">
      <p class="fb-600">(X<sub>1</sub><sup>T</sup>X<sub>1</sub>)<sup>-1</sup>X<sub>1</sub><sup>T</sup> = </p>
      </div>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p2-btn-2' onclick='activity2_p3();' >Next</button>
   `;
    let box = (document.getElementById('act2-p2-tb-box2'));
    let prod_matrix = new Verify_Rows_Cols([], X1T_X1_1_X1T, [0, 1, 2, 3], [[0], [0], [0], [0]], '', box, false, false, move_to_activity2_p3);
    prod_matrix.load_table();
}
function move_to_activity2_p3() {
    let btn = (document.getElementById('act2-p2-btn-2'));
    let tb_box = (document.getElementById('act2-p2-tb-box2'));
    tb_box.innerHTML = '';
    let mat = new Matrix('(X_1^TX_1)^{-1}X_1^T', X1T_X1_1_X1T, tb_box);
    mat.load_matrix();
    btn.style.display = 'block';
}
//# sourceMappingURL=activity2_p2.js.map