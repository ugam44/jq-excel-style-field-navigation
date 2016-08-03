$(function () {
  $(".container").on("keydown", ".itemRow input", function (event) {
    var leftArrow = 37,
        upArrow = 38,
        rightArrow = 39,
        downArrow = 40,
        enter = 13,
        $trigger = $(this),
        $parent = $trigger.closest(".itemRow"),
        index = $parent.find(".child").index($trigger.closest(".child"));
    switch (event.keyCode) {
      case leftArrow: {
          $parent
            .find(".child")
            .eq(index - 1)
            .find("input")
            .select();
          break;
      }
      case upArrow: {
          $parent
            .prev(".itemRow")
            .find(".child")
            .eq(index)
            .find("input")
            .select();
          break;
      }
      case rightArrow: {
          $parent
            .find(".child")
            .eq(index + 1)
            .find("input")
            .select();
          break;
      }
      case enter:
      case downArrow: {
          $parent
            .next(".itemRow")
            .find(".child")
            .eq(index)
            .find("input")
            .select();
          break;
      }

    }
    return false;
  });
});
