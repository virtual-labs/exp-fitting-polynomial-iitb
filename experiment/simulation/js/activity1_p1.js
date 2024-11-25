function activity1_p1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_txt = get_collapse_btn_text('Step 2', 'div-step-2');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-2'>
    <h4 style='text-align: left;'  class='fb-800 fs-20px'>Step 2: </h4>
    <h4 class='fs-16px'>Consider a data set with n observation with two variables x and Y.
    <br>
    If x and Y have relation, $$ y_i = \\beta_0 + \\beta_{1}x_{i}+ \\beta_{2}x_{i}^2 + \\beta_{3}x_{i}^3 +...+ \\beta_{p}x_{i}^p $$ (Polynomial model)
    </h4>
    <div id='q-box'></div>
    </div>`;
    let q_box = (document.getElementById('q-box'));
    let options = [
        `<span style='font-size: 16px;' >  $$ X = [1_{1 \× p} \\ \\ \\ x_{1 \× p} \\ \\ \\ x_{1 \× p}^2 \\ \\ \\ ... \\ \\ \\ x_{1 \× p}^p] $$</span>`,
        `<span style='font-size: 16px;' >$$ X = [1_{1 \\times n} \\ \\ \\ x_{1 \× n} \\ \\ \\ x_{1 \× n}^2 \\ \\ \\ ... \\ \\ \\ x_{1 \× n}^p] $$`,
        `<span style='font-size: 16px;' >$$ X = [1_{1 \× p} \\ \\ \\ y_{1 \× p} \\ \\ \\ y_{1 \× p}^2 \\ \\ \\ ... \\ \\ \\ y_{1 \× p}^p] $$`,
        `<span style='font-size: 16px;' >$$ X = [1_{1 \× p} \\ \\ \\ y_{1 \× p} \\ \\ \\ y_{1 \× p}^2 \\ \\ \\ ... \\ \\ \\ y_{1 \× p}^n] $$`,
    ];
    let new_question = new Question(`If above model represented in matrix form given by,
    $$ Y = \βX $$
    where,
    $$ Y = \\begin{bmatrix}
    y_1  \\\\
    y_2 \\\\
    . \\\\
    . \\\\
    . \\\\
    y_n
    \\end{bmatrix},
    \β = \\begin{bmatrix}
    \\beta_0 \\\\
    \\beta_1 \\\\
    \\beta_2 \\\\
    . \\\\
    . \\\\
    . \\\\
    \β_p \\end{bmatrix}
    $$
    then How will X be represented?`, options, '2', q_box, activity1_p2);
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('div-step-2');
    }, 150);
    new_question.load_question();
}
//# sourceMappingURL=activity1_p1.js.map