var Validation = {
  checkInput: function(str) {
    str = this.removeWhitespace(str);
    var response = {
      'status': false,
      'message': ''
    };

    if (!str) {
      response.message = 'Input contains no characters.';
    } else if (str === '0'){
      response.message = 'Input must be greater than 0.';
    } else if (this.containsAlpha(str)) {
      response.message = 'Input contains unaccepted non-numerical characters.';
    } else if (this.containsNoNum(str)) {
      response.message = 'Input contains no numbers.';
    } else {
      response.status = true;
    }

    return response;
  },
  
  
  removeWhitespace: function(str) {
    return str.replace(/\s+/g, '');
  },

  containsAlpha: function(str) {
    var regex = /[^£.p\d]/g;
    return regex.test(str);
  },

  
  containsNoNum: function(str) {
    var regex = /\d+/g;
    return !regex.test(str);
  }
};