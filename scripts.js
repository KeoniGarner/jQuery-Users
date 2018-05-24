$(document).ready(function () {
    $("form").submit(function (e) {
        var complete = true;
        $("input").each(function () {
            if ($(this).val() === "") {
                complete = false;
            }
        });
        if (!complete){
            alert("All fields must be filled out!");
            return false;
        }
        e.preventDefault();
        $("table").append("<tr>",
        "<td>" + $("input[name='firstname']").val() + "</td>",
        "<td>" + $("input[name='lastname']").val() + "</td>",
        "<td>" + $("input[name='email']").val() + "</td>",
        "<td>" + $("input[name='contact']").val() + "</td>",
        "</tr>");
    });
});