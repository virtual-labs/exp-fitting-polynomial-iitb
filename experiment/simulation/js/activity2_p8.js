function activity2_p8() {
    let btn_txt = get_collapse_btn_text('Conclusion', 'div-conclusion');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide" id="div-conclusion">
      <h4 style='text-align: left;'  class='fb-800 fs-20px'>Conclusion: </h4>
         <p>
            Performing the hypothesis test on the leading coefficient of the degree 4 polynomial is crucial to determine the best fit model. If the coefficient is statically significant, a degree 4 polynomial is preferred. If not,  a degree 3 polynomial might be sufficient. Additionally, considering model complexity and using information criteria like AIC or BIC can further enhance the decision-making process.
            <br>
            Determining the best fit polynomial model(degree 3 or 4) depends on the outcome of the hypothesis test on the leading coefficient of the degree 4 polynomial.
         </p>

         <p>
            Hypothesis Testing:
            <ol>
               <li>
                  Null Hypothesis(H<sub>0</sub>): The leading coefficient (coefficient of x<sup>4</sup>) is equal to zero. This implies a degree 3 polynomial is sufficient.
               </li>
               <li>
                  Alternative Hypothesis (H<sub>a</sub>): The leading coefficient is not equal to zero. This suggest a degree 4 polynomial is needed 
               </li>
            </ol>
         </p>

         <p>
            Data is assumed to be Normally distributed random error, have Independent measurements and Constant variance of error term Independent variable(x) measured without error.

            <ol>
               <li>
                  If the null hypothesis (H<sub>0</sub>) is rejected: This indicates that the leading coefficient is significantly different from zero, suggesting a degree 4 polynomial is the better fit.
               </li>
               <li>
                  If the null hypothesis (H<sub>0</sub>) is not rejected: This suggests that the leading coefficient is not statically significant, and a degree 3 polynomial might be sufficient.
               </li>
            </ol>
         </p>
         <p>
            Additional Considerations:
            <br>
            Model Complexity: A higher degree polynomial generally provides better fit but can lead to overfitting.
            <br>
            Parsimony: Opt for the simpler model (degree 3) if both models explain the data adequately.
            <br>
            Akaike Information Criterion (AIC) or Bayesian Information Criterion (BIC): These criteria can be used to compare the realtive goodness-of-fit of both models while penalizing for model complexity.
         </p>
      </div>
   `;
    hide_all_steps();
    setTimeout(() => {
        show_step('div-conclusion');
    }, 150);
}
// activity2_p8();
//# sourceMappingURL=activity2_p8.js.map