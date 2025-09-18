class Calender {
  constructor() {
    this.currentMonth = document.getElementById("currentMonth");
    this.navBtnLeft = document.querySelector(".nav-btn-left");
    this.navBtnRight = document.querySelector(".nav-btn-right");
    this.today = new Date();
    this.currentMonthIndex = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.days = document.querySelector(".days");

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
    this.getDays();
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
    this.getDays();
  }

  getDays() {
    const date = new Date(this.currentYear, this.currentMonthIndex + 1, 0);
    const alldates = date.getDate();

    const firstDay = new Date(this.currentYear, this.currentMonthIndex, 1);
    const weekday = firstDay.getDay();
    this.days.innerHTML = "";

    for (let i = 0; i < weekday; i++) {
      const emptyDiv = document.createElement("div");
      this.days.appendChild(emptyDiv);
    }

    for (let start = 1; start <= alldates; start++) {
      const daysDiv = document.createElement("div");
      daysDiv.textContent = start;

      this.days.appendChild(daysDiv);

      if (
        start === this.today.getDate() &&
        this.currentMonthIndex === this.today.getMonth()
      ) {
        daysDiv.classList.add("today");
      } else {
        daysDiv.classList.remove("today");
      }
    }
  }

  addEventListeners() {
    this.navBtnLeft.addEventListener("click", () => this.getPreviousMonth());
    this.navBtnRight.addEventListener("click", () => this.getNextMonth());
  }
}

const calender = new Calender();
calender.getDays();
calender.displayCalender();
calender.addEventListeners();
