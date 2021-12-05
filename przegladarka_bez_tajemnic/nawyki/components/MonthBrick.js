class MonthBrick extends HTMLElement{


    static get observedAttributes(){
      return ['monthName', 'year', 'numberOfDaysWithInfo', 'numberOfDaysInGivenMonth'];
    }
  
    constructor(){
      super();
    }

    connectedCallback(){

        const monthName = this.attributes[0].value;
        const year = this.attributes[1].value;
        const numberOfDaysWithInfo = this.attributes[2].value;
        const numberOfDaysInGivenMonth = this.attributes[3].value;

        this.innerHTML = `
            <div class="month-name">
                <div class="month-title">${monthName} '${year}</div>
                <div class="month-numbers">${numberOfDaysWithInfo}/${numberOfDaysInGivenMonth}</div>
            </div>
        `;
    }
  }
  
  window.customElements.define('month-brick', MonthBrick);