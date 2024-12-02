function activity2_p7() {
    let btn_txt = get_collapse_btn_text('Testing the null hypothesis', 'act2-div-hp-testing');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="act2-div-hp-testing">
         <p class="fb-800">Testing the null hypothesis</p>

         <p>
            We have F<sub>0</sub>= ${f0.toFixed(3)} and F<sub>n-p-1</sub> = ${fnpq1}
         <br>
            We will compare it with F_(&alpha;<sub>h</sub>/2, n-2) which criticalvalue of t at level of significance &alpha;<sub>h</sub> and degree of freedom n-p-1.   
         </p>
         
         
         <p>
            If |F<sub>0</sub>| < F<sub>n-p-1</sub> then we will reject the null hypothesis. Else we fail to reject the null hypothesis. 
         </p>

         <p>
            Here we have the data which has equation y = &beta;<sub>0</sub> + &beta;<sub>1</sub>x + &beta;<sub>2</sub>x<sup>2</sup> + &beta;<sub>3</sub>x<sup>3</sup> + &beta;<sub>4</sub>x<sup>4</sup> + &epsilon; (The equation of the population X)
            <br>
            Now proving &beta;<sub>4</sub> &ne; 0 is equivalent to reject the null hypothesis.(lack of fit) Else we fail to reject null hypothesis (may have proper fit).
         </p>

         <div class="fs-16px">
            What can you conclude after the hypothesis test?
         </div>
         <br>
         <div style='margin-bottom: 10px;'><button id="a2-null-hypo-btn1" onclick="act2_vf_null_hypo('1')" style='border: 1px solid gray; width: 60%; text-align: left;'>A. Cubic model has proper linear fit.</button></div>
         <div><button id="a2-null-hypo-btn2" onclick="act2_vf_null_hypo('2')" style='border: 1px solid gray; width: 60%; text-align: left;'>B. Cubic model has no proper linear fit.</button></div>
 
      </div>
   `;
    act2_find_null_hypothesis();
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-div-hp-testing');
    }, 150);
}
function act2_find_null_hypothesis() {
    if (Math.abs(f0) < fnpq1) {
        hypo_test_reject_op = 2;
    }
    else {
        hypo_test_reject_op = 1;
    }
}
function act2_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`a2-null-hypo-btn${id}`));
    if (hypo_test_reject_op == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', act2_find_null_hypothesis);
        document
            .getElementById(`a2-null-hypo-btn${3 - id}`)
            .removeEventListener('click', act2_find_null_hypothesis);
        activity2_p8();
        return;
    }
    alert(`You have chosen incorrect option, observe the results again.`);
}
//# sourceMappingURL=activity2_p7.js.map