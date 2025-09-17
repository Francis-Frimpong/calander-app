class Calender {
  constructor() {
    this.currentMonth = document.getElementById("currentMonth");
    this.navBtnLeft = document.querySelector(".nav-btn-left");
    this.navBtnRight = document.querySelector(".nav-btn-right");
    this.today = new Date();
    this.currentMonthIndex = this.today.getMonth();
    this.currentYear = this.today.getFullYear();

    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  displayCalender() {
    //   Get current month
    let getMonth = ` ${this.months[this.currentMonthIndex]} ${
      this.currentYear
    }`;
    this.currentMonth.textContent = getMonth;
  }

  getPreviousMonth() {
    if (this.currentMonthIndex === 0) {
      this.currentMonthIndex = 11;
      this.currentYear--;
    } else {
      this.currentMonthIndex--;
    }
    this.currentMonth.textContent = `${this.months[this.currentMonthIndex]} ${
      this.currentYear
    }`;
  }
  getNextMonth() {
    if (this.currentMonthIndex === 11) {
      this.currentMonthIndex = 0;
      this.currentYear++;
    } else {
      this.currentMonthIndex++;
    }
    this.currentMonth.textContent = `${this.months[this.currentMonthIndex]} ${
      this.currentYear
    }`;
  }

  addEventListeners() {
    this.navBtnLeft.addEventListener("click", () => this.getPreviousMonth());
    this.navBtnRight.addEventListener("click", () => this.getNextMonth());
  }
}

const calender = new Calender();
calender.displayCalender();
calender.addEventListeners();
