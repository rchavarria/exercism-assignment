export default class Transcriptor {

  toRna(strand) {
    if (strand === 'C') {
      return 'G';
    }

    return 'C';
  }

}
