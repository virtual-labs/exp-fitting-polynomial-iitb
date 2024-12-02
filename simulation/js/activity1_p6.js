function activity1_p6() {
    let btn = (document.getElementById('act1-p5-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Selecting alpha value', 'div-alpha');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="div-alpha">
         <h4>Selecting &alpha;<sub>h</sub> value</h4>

      <div>
         <ul>
      
             <li class="fs-16px">A critical value is a cutoff value that defines the boundaries beyond which less than 5% of sample means can be obtained if the null hypothesis is true. Sample means obtained beyond a critical value will result in a decision to reject the null hypothesis.
             </li>
      
             <li class="fs-16px">In a non-directional two-tailed test, we divide the alpha value in half so that an equal proportion of area is placed in the upper and lower tail. Table given below gives the critical values for one and two-tailed tests at a .05, .01, and .001 level of significance. Figure given below displays a graph with the critical values for given Example shown. In this example &alpha;<sub>h</sub> = .05, so we split this probability in half: 
                 <div style="text-align: center; font-size: 16px;">
                     Splitting  &alpha;<sub>h</sub> in half: <span class="fs-16px" style="display: inline-block">$$ \\frac{\\alpha_{h}}{2} = \\frac{0.05}{2} = 0.025$$</span> in each tail
                 </div>
      
                 <div class='row'>
      
                     <div class="col-lg-6">
                         <table class='table table-warning table-bordered'>
                           
                                 <tr>
                                     <th rowspan="2">Level of Significance (&alpha;<sub>h</sub>)</th>
                                     <th colspan="2">Type of test</th>
                                 </tr>
      
                                 <tr>
                                     <th>One-tailed</th>
                                     <th>Two-tailed</th>
                                 </tr>
      
                           
                           
                                 <tr>
                                     <td>0.05</td>
                                     <td>+1.645 or -1.645</td>
                                     <td>&plusmn;1.96</td>
                                 </tr>
      
                                 <tr>
                                     <td>0.01</td>
                                     <td>+2.33 or -2.33</td>
                                     <td>&plusmn;2.58</td>
                                 </tr>
      
                                 <tr>
                                     <td>0.001</td>
                                     <td>+3.09 or -3.09</td>
                                     <td>&plusmn;3.30</td>
                                 </tr>
                             
                         </table>
                     </div>
      
                     <div  class="col-lg-6">
                         <img src="./images/distribution.png" style="width: 100%;" alt="">
                     </div>
                 </div>
                 
             </li>
         </ul>
      
         <div class='row' id='s2'>
         <div class='col-6'>Enter Alpha Value</div>
      
         <div class='col-6'>
             <select class='form-select fs-16px'  id='act1-alpha-inp'>
             </select>
         </div>
      
         <br><br>
      
         <div>
             <button class='btn btn-info std-btn' onclick='set_alpha();' id='act65-btn-1' >Next</button>
         </div>
      
      
      </div>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
        let inp = (document.getElementById('act1-alpha-inp'));
        inp.innerHTML = ``;
        let default_op = new Option('--Select--', '0');
        inp.add(default_op);
        for (let i = 0; i < alpha_dd_options.length; i++) {
            let op = new Option(alpha_dd_options[i].toString(), alpha_dd_options[i].toString());
            inp.add(op);
        }
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('div-alpha');
    }, 150);
}
//for setting alpha value
function set_alpha() {
    let inp = (document.getElementById('act1-alpha-inp'));
    let btn = (document.getElementById('act65-btn-1'));
    if (inp.value != '0') {
        btn.style.display = 'block';
        alpha = parseFloat(inp.value);
        let s_2 = document.getElementById('s2');
        console.log(inp.value);
        s_2.innerHTML = `<h5>Selected &alpha; = ${alpha.toFixed(2)}</h5>`;
        activity1_p7();
    }
    else {
        // btn.style.display = 'none';
        alpha = 0;
    }
}
//activity1_p6_5();
//# sourceMappingURL=activity1_p6.js.map