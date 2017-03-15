$(function() {
  $('#penip').bind('keypress', function(e) {
    if (e.which === 13) {
      e.preventDefault();
      disp.hideElements();
      var response = Validation.checkInput(this.value)
      if (response.status === true) {
        var amount = Parsing.new(this.value);
        var resultb = coins.minimumCoins(amount);
        disp.displayResult(resultb);
      } else {
        disp.displayError(response.message);
      }
    }
  });
});
var disp = {
  hideElements: function() {
    $('#errorid').hide();
    $('#resultid').hide();
  },

  displayError: function(msg) {
    $('#errorid').html('<p>Error: ' + msg + '</p>')
    $('#errorid').show();
  },

  displayResult: function(hash) {
    var html = this.formHTML(hash);
    $('#resultb').html(html);
    $('#resultid').show();
  },

  formHTML: function(hash) {
    var html = '<ul>'
    for (var key in hash) {
      html += '<li>' + hash[key] + ' x ' + this.transformKey(key) + '</li>';
    }
    html += '</ul>'
    return html;
  },

  transformKey: function(key) {
    if (key === '100' || key === '200') {
      key = '£' + key[0];
    } else {
      key += 'p';
    }
    return key;
  }
};
var Parsing = {
  
  new: function(str) {
    var convert = false;
    if (this.isPound(str)) {
      convert = true;
    }

    str = this.removeNonNum(str);

    var num = parseFloat(str);
    if (this.isDecimal(num) || convert) {
      num = this.convertToPennies(num);
    } 

    return num;
  },

  
  isPound: function(str) {
    return (str.indexOf('£') !== -1);
  },

  removeNonNum: function(str) {
    return str.replace(/[£p]+/g, '');
  },

  isDecimal: function(num) {
    return (num % 1 !== 0);
  },

  convertToPennies: function(num) {
  return (num.toFixed(2)*100);
  }
};