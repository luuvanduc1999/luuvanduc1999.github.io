

$(document).ready(function () {
    var alertList = document.querySelectorAll('.alert')
    alertList.forEach(function (alert) {
      new bootstrap.Alert(alert)
    })
    $('#check')[0].onclick=check;
  
  });
  
  function addSuccess(ml,gv, code, link) {
    var str = '<div class="alert alert-success  alert-dismissible fade show"  role="alert" id="success-check" >\
      <div>\
      <strong>'+ml +' - ' +'Email giảng viên: </strong>' + gv + '.<strong>Code Teams:</strong> '+ code + '. <strong>Link Teams:</strong> ' + link + '.\
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
  
  function addSuccessArr(arrML) {
    for (var i=0; i< arrML.length; i++)
    {
      console.log(arrML[i].toString());
      jj=rq(arrML[i].toString());
      if (jj.indexOf("TeacherCourse") != -1) 
      {
        start = jj.indexOf('["java')
        end = jj.indexOf('HashMap')
        k = jj.substr(start, end - start - 2) + '"]'
  
        code = JSON.parse(k)[2]
        link = ""
        for (let ii = 0; ii < JSON.parse(k).length; ii++){
          console.log(JSON.parse(k)[i])
          if (JSON.parse(k)[ii].indexOf("https://") > -1) link = JSON.parse(k)[ii];
        }
        myRe = /([a-zA-Z\.0-9])+@hust\.edu\.vn/g;
        gv = myRe.exec(j)[0];
        addSuccess(arrML[i],gv,code, link);
      }
    }
  
  }
  
  function rq(malop)
  {
    data = {      
      "CKHI": "7|0|10|https://qldt.hust.edu.vn/soicteducationstudent/|24BB66A05737A1AE4ACF715344A52298|com.soict.edu.core.client.DataService|searchClasses|java.lang.String/2004016611|java.lang.Long/4227064769|java.util.List|" + $("#kyhoc").val() + "|java.util.Arrays$ArrayList/2507071751|" + malop + "|1|2|3|4|4|5|6|6|7|8|6|WTLdoAAAA|6|P__________|9|1|5|10|",
      "ĐTVT": "7|0|10|https://qldt.hust.edu.vn/soicteducationstudent/|64A3D74A7F505C8AE0C51B09092739A7|com.soict.edu.core.client.DataService|searchClasses|java.lang.String/2004016611|java.lang.Long/4227064769|java.util.List|" + $("#kyhoc").val() + "|java.util.Arrays$ArrayList/2507071751|" + malop + "|1|2|3|4|4|5|6|6|7|8|6|QzaRkAAAA|6|P__________|9|1|5|10|",
      "CNTT": "7|0|10|https://qldt.hust.edu.vn/soicteducationstudent/|95AD0BB3329303F1FDC881BF22DC9372|com.soict.edu.core.client.DataService|searchClasses|java.lang.String/2004016611|java.lang.Long/4227064769|java.util.List|" + $("#kyhoc").val() + "|java.util.Arrays$ArrayList/2507071751|" + malop + "|1|2|3|4|4|5|6|6|7|8|6|VjLdoAAAA|6|P__________|9|1|5|10|",
      "DIEN": "7|0|10|https://qldt.hust.edu.vn/soicteducationstudent/|9F211F00436C29DE2DC331C6082A6793|com.soict.edu.core.client.DataService|searchClasses|java.lang.String/2004016611|java.lang.Long/4227064769|java.util.List|" + $("#kyhoc").val() + "|java.util.Arrays$ArrayList/2507071751|" + malop + "|1|2|3|4|4|5|6|6|7|8|6|T6zasAAAA|6|P__________|9|1|5|10|",
      "SAMI": "7|0|10|https://qldt.hust.edu.vn/soicteducationstudent/|24BB66A05737A1AE4ACF715344A52298|com.soict.edu.core.client.DataService|searchClasses|java.lang.String/2004016611|java.lang.Long/4227064769|java.util.List|" + $("#kyhoc").val() + "|java.util.Arrays$ArrayList/2507071751|" + malop + "|1|2|3|4|4|5|6|6|7|8|6|RTaRkAAAA|6|P__________|9|1|5|10|",
      "SPHAM": "7|0|10|https://qldt.hust.edu.vn/soicteducationstudent/|24BB66A05737A1AE4ACF715344A52298|com.soict.edu.core.client.DataService|searchClasses|java.lang.String/2004016611|java.lang.Long/4227064769|java.util.List|" + $("#kyhoc").val() + "|java.util.Arrays$ArrayList/2507071751|" + malop + "|1|2|3|4|4|5|6|6|7|8|6|UTLdoAAAA|6|P__________|9|1|5|10|",
      "KTHH": "7|0|10|https://qldt.hust.edu.vn/soicteducationstudent/|2CB2C65C223EA5C12BCEA8F68A41D282|com.soict.edu.core.client.DataService|searchClasses|java.lang.String/2004016611|java.lang.Long/4227064769|java.util.List|" + $("#kyhoc").val() + "|java.util.Arrays$ArrayList/2507071751|" + malop + "|1|2|3|4|4|5|6|6|7|8|6|RLwrwAAAA|6|P__________|9|1|5|10|"
    }
    dataSend = data[($("#vien").val())]
    c = $.ajax({
      type: 'POST',
      url: "https://qldt.hust.edu.vn/soicteducationstudent/data",
      data: dataSend,
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
  
    return c.responseText;
  }
  
  
  function check() {
    if (
            ($("#vien").val() == "Hãy chọn") || 
            ($("#kyhoc").val() == "Hãy chọn") || 
            (($("#malop").val()).length != 6) || 
            (
                ($("#searchType1")[0].checked==true) && (isNaN(/[a-zA-Z]/g.exec($("#malop").val()) ))
            )
        )
      addWrong("Kiểm tra lại các mục nhập, không đúng định dạng.")
    else {
      
      j = rq($("#malop").val());
      console.log(j);
      if ($("#searchType1")[0].checked==true)
      {
        
        if (j.indexOf("TeacherCourse") == -1) addWrong("Mã lớp không tồn tại trong kỳ học này");
        start = j.indexOf('["java')
        end = j.indexOf('HashMap')
        k = j.substr(start, end - start - 2) + '"]'
  
        code = JSON.parse(k)[2]
        link = ""
        for (var i = 0; i < JSON.parse(k).length; i++){
          console.log(JSON.parse(k)[i])
          if (JSON.parse(k)[i].indexOf("https://") > -1) link = JSON.parse(k)[i];
      
        }
        myRe = /([a-zA-Z\.0-9])+@hust\.edu\.vn/g;
        gv = myRe.exec(j)[0];
  
        addSuccess($("#malop").val(), gv, code, link)
      }
      else
      {
        mlRe= /"[0-9]{6}"/g;
        arrML=[]
        while ((x = mlRe.exec(j)) != null)
        {
          x=x.toString().replaceAll("\"","");
          arrML.push(x);
        }
        console.log(arrML)
        if (arrML.length==0)  addWrong("Mã học phần này không đúng hoặc không có lớp tương ứng trong kỳ học này.");
        addSuccessArr(arrML);  
      }
      
    }
  }