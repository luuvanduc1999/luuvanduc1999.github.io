

$(document).ready(function () {
  var alertList = document.querySelectorAll('.alert')
  alertList.forEach(function (alert) {
    new bootstrap.Alert(alert)
  })
});

function addSuccess(code, link) {
  var str = '<div class="alert alert-success  alert-dismissible fade show"  role="alert" id="success-check" >\
    <div>\
    <strong>Code Teams:</strong> '+ code + '. <strong>Link Teams:</strong> ' + link + '.\
    </div>\
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\
  </div>';
  $("#alert-range").append(str)
}

function addWrong(status) {
  var str = '<div class="alert alert-danger alert-dismissible fade show"  role="alert" id="success-check" >\
    <div>\
    <strong>'+ status + '</strong>.\
    </div>\
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\
  </div>';
  $("#alert-range").append(str)
}




function check() {
  if (($("#kyhoc").val() == "Hãy chọn") || (($("#malop").val()).length != 6) || ((($("#malop").val())[0] == "E")))
    addWrong("Kiểm tra lại các mục nhập, không đúng định dạng.")
  else {
    data = "7|0|10|https://qldt.hust.ed.vn/soicteducationstudent/|64A3D74A7F505C8AE0C51B09092739A7|com.soict.edu.core.client.DataService|searchClasses|java.lang.String/2004016611|java.lang.Long/4227064769|java.util.List|" + $("#kyhoc").val() + "|java.util.Arrays$ArrayList/2507071751|" + $("#malop").val() + "|1|2|3|4|4|5|6|6|7|8|6|QzaRkAAAA|6|P__________|9|1|5|10|"
    
    c = $.ajax({
      type: 'POST',
      url: "https://qldt.hust.edu.vn/soicteducationstudent/data",
      data: data,
      async: false,
      headers: {
        "accept": "*/*",
        "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
        "content-type": "text/x-gwt-rpc; charset=UTF-8",

        "x-gwt-module-base": "https://qldt.hust.edu.vn/soicteducationstudent/",
        "x-gwt-permutation": "657CC2B6DE59491D5D25A1DD806A190B"
      },
      success: function (datax) {
        console.log("test")
      }
    });

    j = c.responseText
    if (j.indexOf("Số SV") == -1) addWrong("Mã lớp không tồn tại trong kỳ học này");
    start = j.indexOf('["java')
    end = j.indexOf('Số SV"')
    k = j.substr(start, end - start - 2) + ']'

    code = JSON.parse(k)[2]
    link = ""
    for (var i = 0; i < JSON.parse(k).length; i++)
      if (JSON.parse(k)[i].indexOf("https://") > -1) link = JSON.parse(k)[i];

    addSuccess(code, link)
  }
}