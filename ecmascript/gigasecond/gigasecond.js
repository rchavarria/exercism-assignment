const GIGAMILISECONDS = 1e9 * 1e3;

class Gigasecond {
  constructor(fromDate) {
    this.fromDate = fromDate;
  }

  date() {
    let afterAGigasecond = this.fromDate.getTime() + GIGAMILISECONDS;
    return new Date(afterAGigasecond);
  }
}

export default Gigasecond;
