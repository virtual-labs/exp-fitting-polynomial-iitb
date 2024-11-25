function activity1_p7() {
    let btn_txt = get_collapse_btn_text('Refer table for null hypothesis testing', 'div-hypothesis-table');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="div-hypothesis-table">
         <p class="fs-16px fb-600">Refer the following table to do null hypothesis:</p>
         <br>
         <div id="hp-table">
         </div>

         <br>

         <div class="fs-20px fb-600" style="display:flex; justify-content:center;">
            <div style="margin-right:80px">Sxx = ${parseFloat(Sxx.toFixed(3))}</div>
            <div style="margin-left:80px">SSr = ${parseFloat(SSr.toFixed(3))}</div> 
         </div>
         <div>
               For executing null hypothesis we will need test static
               <br>
               We will calculate by using given formula:

               <div class="row" style="align-items:center; justify-content:center;">
                  <div class="col-3">
                     $$
                     t_0 = \\hat{\\beta_4}\\sqrt{\\frac{(n-p-1)S_{xx}}{SS_R}} \\quad \\quad =
                     $$
                  </div>
                  <div class="col-3">
                     <input type='number' id='t-0-inp' class="form-control fs-16px">
                     <span id="t-0"></span>
                  </div>
                  <div class="col-3">
                     <button class='btn btn-info std-btn' onclick='verify_t_0()'  id='act1-p7-btn-1'>Verify</button>
                  </div>
               </div>
         </div>
      </div>
   `;
    let header = [
        'Degree of freedom <br> (n-p-1) &darr;',
        '&alpha;<sub>h</sub> = 0.1',
        '&alpha;<sub>h</sub> = 0.05',
        '&alpha;<sub>h</sub> = 0.01',
    ];
    let hp_tab = (document.getElementById('hp-table'));
    hp_tab.style.textAlign = 'center';
    let tab = new Show_Table(header, hypothesis_table, hp_tab);
    tab.load_table();
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('div-hypothesis-table');
    }, 150);
}
function verify_t_0() {
    let t_0_inp = (document.getElementById('t-0-inp'));
    let t_0 = document.getElementById('t-0');
    let btn = (document.getElementById('act1-p7-btn-1'));
    let n = X.length;
    let p = 4;
    let temp = ((n - p - 1) * Sxx) / SSr;
    to = beta4 * Math.sqrt(temp);
    console.log(to);
    if (!verify_values(parseFloat(t_0_inp.value), to)) {
        t_0_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    alert('Great!! Your calculation is correct.');
    t_0_inp.remove();
    btn.remove();
    t_0.innerText = parseFloat(to.toFixed(3)).toString();
    dergree_of_freedom();
}
function dergree_of_freedom() {
    let div = (document.getElementById('div-hypothesis-table'));
    div.innerHTML += `
   <br>
   <div class="fs-16px">
   t_(&alpha;<sub>h</sub>/2, n-2) which critical value of t at level of significance 𝜶h and degree of freedom n-p-1. For given  &alpha;<sub>h</sub>,  t_(&alpha;<sub>h</sub>/2, n-p-1) is t - value with degree of freedom n-2 is : 
       <input type="text" class="form-control fs-16px" id="t-n-p-1" style='width: 50%;'><span class='fs-16px fb-500' id='dsp-tnp1'></span>
       <br>
       <button class="btn btn-info btn-std" style="margin: auto;" id='vf-tnp1' onclick='vf_tnp1();' >Verify</button>
   </div>`;
}
function vf_tnp1() {
    let indx = alpha == 0.1 ? 1 : alpha == 0.05 ? 2 : 3;
    let val = (document.getElementById('t-n-p-1'));
    let btn = (document.getElementById('vf-tnp1'));
    let dsp_tnp1 = (document.getElementById('dsp-tnp1'));
    t_n_p_1 = hypothesis_table[N - 20][indx];
    console.log(t_n_p_1);
    if (!verify_values(parseFloat(val.value), t_n_p_1)) {
        alert('Incorrect value');
        return;
    }
    dsp_tnp1.innerText = t_n_p_1.toString();
    val.remove();
    btn.remove();
    alert('Correct value');
    activity1_p8();
}
// activity1_p7();
//# sourceMappingURL=activity1_p7.js.map