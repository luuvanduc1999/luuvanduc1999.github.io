$(document).ready(function () {
    var alertList = document.querySelectorAll('.alert')
    alertList.forEach(function (alert) {
      new bootstrap.Alert(alert)
    })
  });
  
function addSuccess(status) {
    var str = '<div class="alert alert-success  alert-dismissible fade show"  role="alert" id="success-check" >\
    <div>\
    <strong>'+ status + '</strong>.\
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

first='let\n\
    Key = "${token}",\n\
    Board = "${board-id}",\n'
main =
'    Source${index} = Web.Contents(\n\
            "https://api.monday.com/v2",\n\
            [\n\
                Headers=[\n\
                    #"Method"="POST",\n\
                    #"Content-Type"="application/json",\n\
                    #"Authorization"="Bearer " & Key\n\
                ],\n\
                Content=Text.ToBinary("{""query"": ""query { boards(ids: " & Board & ") { items(page:${index}, limit:50) { name, group { title }, columns: column_values { title, text } } } }""}")\n\
            ]\n\
    ),\n\
    Data${index} = Table.FromList(Json.Document(Source${index})[data][boards]{0}[items], Record.FieldValues, {"Title", "Group", "Columns"}),\n'

last='\
    Result=  Table.Combine({${listData}}),\n\
    #"Monday" = Table.FromRecords(Table.TransformRows(Result, each \n\
    List.Accumulate([Columns], [\n\
        TopTitle = [Title],\n\
        Group = [Group][title]\n\
    ], (state, current) => Record.AddField(state, current[title], current[text]) ) \n\
))\n\
in\n\
    #"Monday"'

function check() {
    if (($("#size").val()=="")||(($("#board-id").val()==""))||(($("#token").val()=="")))
        {
            addWrong("Vui lòng kiểm tra lại");
            return;
        }
    else {
        $("#Result").text("")
        loop =  Math.round(((parseInt($("#size").val())/50)))+1

        $("#Result").append(first.replaceAll("${token}", ($("#token").val())).replaceAll("${board-id}", $("#board-id").val()))

        listData=""
        for (var i=1; i<=loop; i++)
        {
            $("#Result").append(main.replaceAll("${index}",i.toString()));
            listData+="Data"+i.toString()+(i==loop?"":",");
        }
        
        
        $("#Result").append(last.replaceAll("${listData}",listData))
        $("#Result").select()
        document.execCommand('copy')
        addSuccess("Đã copy vào clipboard");
    }
}