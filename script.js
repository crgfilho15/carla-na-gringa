$(document).ready(function () {
  $("#link1").click(function () {
    $(".nav-link").removeClass("active"); // Remove a classe 'active' de todos os links
    $(this).addClass("active"); // Adiciona a classe 'active' apenas ao link clicado
    $("#content1").show();
    $("#content2").hide();
    $("#content3").hide();
  });

  $("#link2").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    $("#content1").hide();
    $("#content2").show();
    $("#content3").hide();
  });

  $("#link3").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    $("#content1").hide();
    $("#content2").hide();
    $("#content3").show();
  });
});