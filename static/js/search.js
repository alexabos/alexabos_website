$(function(){
  var initial = 0;
  var show = true;
  var searchData = [];
  var maxResults = 8;

  function ensureResultsContainer() {
    if ($("#search-results").length) {
      return $("#search-results");
    }

    var $results = $('<ul id="search-results" class="list-group"></ul>');
    $results.css({
      position: "fixed",
      top: "104px",
      left: "16px",
      right: "16px",
      zIndex: 10000,
      maxHeight: "60vh",
      overflowY: "auto"
    });
    $(".search-tool").append($results);
    return $results;
  }

  function renderResults(query) {
    var $results = ensureResultsContainer();
    $results.empty();

    var q = (query || "").trim().toLowerCase();
    if (!q) {
      return;
    }

    var matches = searchData
      .filter(function (item) {
        var title = (item.title || "").toLowerCase();
        var url = (item.url || "").toLowerCase();
        return title.indexOf(q) > -1 || url.indexOf(q) > -1;
      })
      .slice(0, maxResults);

    matches.forEach(function (item) {
      var $entry = $('<li class="list-group-item"></li>');
      var $link = $('<a></a>');
      $link.attr("href", item.url);
      $link.text(item.title || item.url || "Untitled");
      $entry.append($link);
      $results.append($entry);
    });
  }

  var toggleSearch = function (visible) {
    initial = 0;
    show = !visible;
    var visibility = visible ? 'block' : 'none';

    $("#search-content").val("");
    $(".search-tool").css("display", visibility);
    ensureResultsContainer().empty();
  };

  var shouldToggle = function (time) {
    var gap = time - initial;
    initial = time;
    return gap < 500;
  };

  $(document).keyup(function (e) {
    var now = new Date().getTime();
    if (e.keyCode == 17 && shouldToggle(now)) {
      toggleSearch(show);
    } else if (e.keyCode == 27) {
      toggleSearch(false);
    }
  });

  $("#search-content").keyup(function (e) {
    var now = new Date().getTime();
    if (e.keyCode == 17 && shouldToggle(now)) {
      toggleSearch(show);
      return;
    }

    if (e.keyCode === 27) {
      toggleSearch(false);
      return;
    }

    renderResults($(this).val());
  });

  $("#close-btn").click(function () {
    toggleSearch(false);
  });

  $("#search-btn").click(function() {
    toggleSearch(true);
  });

  var m = $("meta[name=baseurl]");

  $.getJSON(m.attr("content") + "/search.json")
    .done(function (data) {
      if (data.code == 0) {
        searchData = data.data || [];
      }
    })
    .fail(function () {
      searchData = [];
    });
});
$(function(){
    $("pre").css('display','block');
});
