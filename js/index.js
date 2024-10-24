

  $(document).ready(function() {
    $("#dwnResume").click(function(){
        var fileUrl = '../MGreen_UX_UI_Designer.pdf';
        var fileName = 'MGreen_UX_UI_Designer.pdf';
        var link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        //alert('download')
    }); 
});