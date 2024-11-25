function activity2_p3() {
    let btn = (document.getElementById('act2-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate β&#770;<sub>1</sub>', 'div-beta-1');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collpase divide" id="div-beta-1">
         <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 4: </h4>
         <div id="div-y1">
         </div>
         Now we have to calculate the following terms:
         <br>
         Using the formula:
         $$ \\hat{\\beta_1} = (X_1^{T}X_1)^{-1}X_1^{T}Y_1 $$

         <div id="act2-p3-tb-box1">
         Find β&#770<sub>1</sub>;
         <br>
         <p class="fb-600" style="text-align:left;">β&#770;<sub>1</sub> = </p>
         </div>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p3-btn-1' onclick='activity2_p4();' >Next</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    let div_y1 = (document.getElementById('div-y1'));
    let tb_box = (document.getElementById('act2-p3-tb-box1'));
    let mat_y1 = new Matrix('Y_1', Y1, div_y1);
    mat_y1.load_matrix();
    beta1_cap = matrix_multiplication(X1T_X1_1_X1T, Y1);
    beta1_cap0 = beta1_cap[0][0];
    beta1_cap1 = beta1_cap[1][0];
    beta1_cap2 = beta1_cap[2][0];
    beta1_cap3 = beta1_cap[3][0];
    let beta_tab = new Verify_Rows_Cols([], beta1_cap, [0], [[0]], '', tb_box, false, false, move_to_activity2_p4);
    beta_tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('div-beta-1');
    }, 150);
}
function move_to_activity2_p4() {
    let btn = (document.getElementById('act2-p3-btn-1'));
    let tb_box = (document.getElementById('act2-p3-tb-box1'));
    tb_box.innerHTML = '';
    let mat = new Matrix('\\hat{\\beta_1}', beta1_cap, tb_box);
    mat.load_matrix();
    btn.style.display = 'block';
}
// activity2_p3();
//# sourceMappingURL=activity2_p3.js.map