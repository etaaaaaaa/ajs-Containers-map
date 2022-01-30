export default class ErrorRepository {
    constructor() {
      this.error = new Map();
      this.error
        .set(111, 'Page not found')
        .set(354, 'The connection is lost')
        .set(987, 'Wrong access key');
    }
  
    translate(code) {
      if (this.error.has(code)) {
        return this.error.get(code);
      }
      return 'Unknown error';
    }
  }