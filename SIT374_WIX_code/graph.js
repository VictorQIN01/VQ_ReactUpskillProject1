$w.onReady(function () {
  $w("#html2").hide();
  $w("#html3").hide();
  $w("#html4").hide();
  $w("#graphbtn1").onClick((e) => {
    $w("#html1").show();
    $w("#html2").hide();
    $w("#html3").hide();
    $w("#html4").hide();
  });
  $w("#graphbtn2").onClick((e) => {
    $w("#html1").hide();
    $w("#html2").show();
    $w("#html3").hide();
    $w("#html4").hide();
  });
  $w("#graphbtn3").onClick((e) => {
    $w("#html1").hide();
    $w("#html2").hide();
    $w("#html3").show();
    $w("#html4").hide();
  });
  $w("#graphbtn4").onClick((e) => {
    $w("#html1").hide();
    $w("#html2").hide();
    $w("#html3").hide();
    $w("#html4").show();
  });
});
