function activity1_p4() {
    let btn = (document.getElementById('act1-p3-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate β&#770;', 'div-beta');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide" id="div-beta">
      <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 5: </h4>
      <br>
      <div id="div-y">
      </div>
      Now we have to calculate the following terms:
      <br>
      Using the formula:
      $$ \\hat{\\beta} = (X^{T}X)^{-1}X^{T}Y $$

      <div id="tb-box6">
      Find β&#770;
      <br>
      <p class="fb-600" style="text-align:left;">β&#770; = </p>
      </div>
      <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p4-btn-1' onclick='activity1_p5();' >Next</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    let div_y = (document.getElementById('div-y'));
    let tb_box = (document.getElementById('tb-box6'));
    // let y_tab = new Show_Table([], Y, div_y);
    // y_tab.load_table();
    // div_y.style.textAlign = 'center';
    let mat_y = new Matrix('Y', Y, div_y);
    mat_y.load_matrix();
    beta_cap = matrix_multiplication(XT_X_1_XT, Y);
    beta_cap0 = beta_cap[0][0];
    beta_cap1 = beta_cap[1][0];
    beta_cap2 = beta_cap[2][0];
    beta_cap3 = beta_cap[3][0];
    beta_cap4 = beta_cap[4][0];
    let beta_tab = new Verify_Rows_Cols([], beta_cap, [0], [[0]], '', tb_box, false, false, move_to_activity1_p5);
    beta_tab.load_table();
    // tb_box.style.textAlign = 'center';
    hide_all_steps();
    setTimeout(() => {
        show_step('div-beta');
    }, 150);
}
function move_to_activity1_p5() {
    let btn = (document.getElementById('act1-p4-btn-1'));
    let tb_box = (document.getElementById('tb-box6'));
    tb_box.innerHTML = '';
    btn.style.display = 'block';
    let mat = new Matrix('\\hat{\\beta}', beta_cap, tb_box);
    mat.load_matrix();
}
//# sourceMappingURL=activity1_p4.js.map