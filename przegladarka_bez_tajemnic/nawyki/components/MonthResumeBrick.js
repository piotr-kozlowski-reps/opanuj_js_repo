class MonthResumeBrick extends HTMLElement{

  static get observedArrtibutes(){
    return['numberOfDaysInGivenMonth', 'numberOfDaysON', 'numberOfDaysOFF']
  }

  constructor(){
    super();
  }

  connectedCallback(){
    // debugger;

    let numberOfDaysInGivenMonth = this.attributes[0].value;
    let numberOfDaysON = this.attributes[1].value;
    let numberOfDaysOFF = this.attributes[2].value;

    this.innerHTML = `
    <div class="day-every-resume">
    <div class="month-title">Podsumowanie:</div>
    <div class="month-title"><span class="nawyki-resume">Nawyk podtrzymany:</span><span class="nawyki-resume-green">${numberOfDaysON}</span> / ${numberOfDaysInGivenMonth}</div>
    <div class="month-title"><span class="nawyki-resume">Odwyk:</span><span class="nawyki-resume-red">${numberOfDaysOFF}</span> / ${numberOfDaysInGivenMonth}</div>
    </div>
    `;
  }

}

window.customElements.define('month-resume-brick', MonthResumeBrick);