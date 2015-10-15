const TRANSCRIPTION_TABLE = new Map()
  .set('C', 'G')
  .set('G', 'C')
  .set('A', 'U')
  .set('T', 'A');

export default class Transcriptor {

  toRna(strand) {
    return strand
      .split('')
      .map((s) => TRANSCRIPTION_TABLE.get(s))
      .join('');
  }

}
