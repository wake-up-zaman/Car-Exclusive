import React from 'react';

const Question = () => {
    return (
        <section class=" container Accordion mt-5">
            <h2 class="title-package text-center mb-2">Conceptual Question & Answer </h2>
            <div class="row row2 d-flex flex-column-reverse flex-md-row ">
              <div class="col-md-12 col-lg-12">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How React works?
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        For working react,first of all two packages React and React DOM are needed.When a component declared it contains pure JavaScript code.React package converts the component to HTML code.This code will be injected to Main html file(DOM) with the help of React DOM package.The whole process continue dynamically.That's why react work fast.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How useState works?
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body mb-5">
                       The useState hook contains a variable and a function.When update anything by rendering the useState function observe this and recorded it.The initial value of state variable will be taken by useState.SetState update the value and the variable keep it.The function sends by dispatching to generate action. State updates asynchronously.

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    );
};

export default Question;