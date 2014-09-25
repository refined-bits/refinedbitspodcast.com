(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-54471712-1', 'auto');
ga('send', 'pageview');

$(function () {
  var throttledEvents = {};

  memoizeAudioState();

  // Which episodes are clicked more from the home page?
  $('.episode-link').on('click', function () {
    ga('send', 'event', 'General', 'Homepage Episode Click', $(this).parent().data('episode-id'));
  });

  // How many plays?
  $('audio').on('playing', function () {
    if (this.currentTime === 0) {
      ga('send', 'event', 'Episode ' + episodeIdForAudio(this), 'Play', '(start)');
    }
  });

  // Where do listeners tend to seek to?
  $('audio').on('seeked', function () {
    var
      audio = this,
      currentTime = audio.currentTime;
    throttleEvent('seeked', function () {
      ga('send', 'event', 'Episode ' + episodeIdForAudio(audio), 'Seek To', 'minute: ' + s2m(currentTime));
    });
  });

  // Are there parts where we could have done a better job at mastering?
  $('audio').on('volumechange', function () {
    var
      audio = this,
      $audio = $(this),
      volume = audio.volume,
      currentTime = audio.currentTime;
    throttleEvent('volumechange', function () {
      var
        newVolume = dec2pct(volume),
        lastVolume = $audio.data('last-volume');
      if (newVolume !== lastVolume) {
        ga('send', 'event', 'Episode ' + episodeIdForAudio(audio), 'Volume ' + (newVolume < lastVolume ? 'Down' : 'Up'), 'minute: ' + s2m(currentTime));
        $audio.data('last-volume', newVolume);
      }
    });
  });

  // Which download format is more popular?
  $('.get-audio a').on('click', function () {
    ga('send', 'event', 'General', 'Download', $(this).text());
  });

  function throttleEvent (name, callback, ms) {
    clearTimeout(throttledEvents[name]);
    throttledEvents[name] = setTimeout(callback, ms || 2000);
  }

  function memoizeAudioState () {
    $('audio').each(function (index, el) {
      $el = $(el);
      $el.data('last-volume', dec2pct(el.volume));
    });
  }

  function episodeIdForAudio (element) {
    return $(element).closest('article').data('episode-id');
  }

  function s2m (seconds) {
    return Math.floor(seconds / 60);
  }
  function dec2pct (decimal) {
    return Math.round(decimal * 100);
  }
});
