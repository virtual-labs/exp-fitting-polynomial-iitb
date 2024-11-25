function activity2_p6() {
    let btn_txt = get_collapse_btn_text('F Distribution table', 'div-dist-tab');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="div-dist-tab">
         <p class="fb-600 fs-18px">Refer the given table:</p>
         <br>
         <div id="dist-tab"></div>

         <br>
         <div class="fs-16px">
            F_(&alpha;<sub>h</sub>/2, n-2) which critical value of f at level of significance 𝜶h and degree of freedom n-p-1. For given  &alpha;<sub>h</sub>,  F_(&alpha;<sub>h</sub>/2, n-p-1) is f - value with degree of freedom n-2 is : 
            <input type="text" class="form-control fs-16px" id="f-n-p-q-1" style='width: 50%;'><span class='fs-16px fb-500' id='dsp-fnpq1'></span>
            <br>
            <button class="btn btn-info btn-std" style="margin: auto;" id='vf-fnpq1' onclick='vf_fnpq1();' >Verify</button>
         </div>

      </div>
   `;
    let header = [
        'Degree of freedom <br> (n-p-q-1) &darr;',
        '&alpha;<sub>h</sub> = 0.1',
        '&alpha;<sub>h</sub> = 0.05',
        '&alpha;<sub>h</sub> = 0.01',
    ];
    let dist_tab = (document.getElementById('dist-tab'));
    dist_tab.style.textAlign = 'center';
    let tab = new Show_Table(header, f_distribution_table, dist_tab);
    tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('div-dist-tab');
    }, 150);
}
function vf_fnpq1() {
    let indx = a2_alpha == 0.1 ? 1 : a2_alpha == 0.05 ? 2 : 3;
    let val = (document.getElementById('f-n-p-q-1'));
    let btn = (document.getElementById('vf-fnpq1'));
    let dsp_fnpq1 = (document.getElementById('dsp-fnpq1'));
    fnpq1 = f_distribution_table[N - 20][indx];
    console.log('fnpq1', fnpq1);
    if (!verify_values(parseFloat(val.value), fnpq1)) {
        alert('Incorrect value');
        return;
    }
    dsp_fnpq1.innerText = fnpq1.toString();
    val.remove();
    btn.remove();
    alert('Correct value');
    calculate_f0();
}
function calculate_f0() {
    let div = (document.getElementById('div-dist-tab'));
    f0 = ((N - 5) * (RSS3 - RSS4)) / RSS4;
    div.innerHTML += `
      <br>
      <div>
         Now we have,
         <div class="fs-18px fb-600" style="display:flex; justify-content:center;">
            <div style="margin-right:80px">RSS<sub>4</sub> = ${parseFloat(RSS4.toFixed(3))}
            </div>
            <div style="margin-left:80px">RSS<sub>3</sub> = ${parseFloat(RSS3.toFixed(3))}</div>
         </div>
         <br>
         <p>
            F<sub>0</sub>(F static) is most essential parameter for hypothesis testing and it will be calculated by using the given formula.
         </p>

         <div class="row" style="align-items:center; justify-content:center;">
            <div class="col-6" style="font-size:1.5vw">
               $$
                  F_0 = \\frac{RSS_3 - RSS_4}{(RSS_4)/n-5} = \\frac{(n-5)(RSS_3 - RSS_4)}{RSS_4} = 
               $$
            </div>
            <div class="col-3">
               <input type='number' id='f-0-inp' class="form-control fs-16px">
               <span id="dsp-f-0" class="fb-600" style="font-size:1.5vw;"></span>
            </div>
         </div>
         <div style="text-align:center;">
               <button class='btn btn-info std-btn' onclick='verify_f_0()'  id='act2-p6-btn-1'>Verify</button>
         </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_f_0() {
    let val = (document.getElementById('f-0-inp'));
    let dsp = (document.getElementById('dsp-f-0'));
    let btn = (document.getElementById('act2-p6-btn-1'));
    console.log('f0', f0);
    if (!verify_values(parseFloat(val.value), f0)) {
        alert('Incorrect value');
        return;
    }
    btn.remove();
    val.remove();
    dsp.innerText = parseFloat(f0.toFixed(3)).toString();
    alert('Correct value');
    activity2_p7();
}
// activity2_p6();
//# sourceMappingURL=activity2_p6.js.map