---
title: new Podcast();
subtitle: Facebook Messenger, Naked Celebrities, Oculus Medicine, Robots Taking Human Jobs.
date: 2014-09-09
picture:
  src: /img/episodes/2014-09-09-new-podcast.jpg
  alt: Robots at a Tesla factory, assembling the first Model S line.
  credit:
    name: Steve Jurvetson
    source: https://www.flickr.com/photos/jurvetson/7408451314
    license:
      name: CC BY 2.0
      url: https://creativecommons.org/licenses/by/2.0/
audio: http://upload.wikimedia.org/wikipedia/en/4/45/ACDC_-_Back_In_Black-sample.ogg

layout: default
modal-id: 1
---

# Show Notes

> TODO: Add times to headers when final edit is complete.

We ended up recording a lot more than we thought we would, so you'll notice a few awkward cuts here and there as we tried to bring down the runtime to a reasonable length. Enjoy!

## News

### Facebook Messenger

Now mandatory. FUD spreading about app permissions.

[Sensational article](http://thebull.cbslocal.com/2014/08/07/facebook-crosses-the-line-with-new-facebook-messenger-app/) from [100.3 The Bull, in Houston](http://thebull.cbslocal.com/)

More informed articles
 * https://www.facebook.com/help/347452185405260
 * http://www.androidcentral.com/facebook-messenger-permissions-not-scary-stories-might-have-you-believe
 * http://blogs.wsj.com/digits/2014/08/08/facebook-messenger-privacy-fears-heres-what-you-need-to-know/
 * http://mashable.com/2014/08/07/facebook-messenger-holdouts-the-switch-has-started/

Android Developer Docs
 * [AndroidManifest.xml](http://developer.android.com/guide/topics/manifest/manifest-intro.html)
 * [`<uses-permission>` element](http://developer.android.com/guide/topics/manifest/uses-permission-element.html)
 * [`Manifest.permission` constants](http://developer.android.com/reference/android/Manifest.permission.html)

Android has to write the descriptions of what the permissions can do based on what's *possible*, so that users are fully informed in even the most extreme cases. It doesn't necessarily describe how the app actually uses those permissions. Facebook is just the latest target over fearmongering centered around this.

### AdBlock Plus Disables Canvas Fingerprinting

http://bgr.com/2014/07/23/how-to-disable-canvas-fingerprinting/

[Canvas Fingerprinting on Wikipedia](http://en.wikipedia.org/wiki/Canvas_fingerprinting)

Canvas Fingerprinting is a method by which a site can determine useful information about a client. It works by having the browser render a known image, then sending that rendered image back to the server. Since there are subtle differences between browsers, operating systems, and graphics hardware in how they accomplish this, the returned image can be used to determine that information.

From [BrowserLeaks](https://www.browserleaks.com/canvas):

> [...] web browsers uses [sic] different image processing engines, export options, compression level, final images may got [sic] different hashes even if they are pixel-perfect; at the pixmap level — operating systems use different algorithms and settings for anti-aliasing and sub-pixel rendering.

This technique was first reported in a research paper by Gunes Acar et al.: [*The Web never forgets:
Persistent tracking mechanisms in the wild*](https://securehomes.esat.kuleuven.be/~gacar/persistent/the_web_never_forgets.pdf)

### iCloud Photo Leaks

http://en.wikipedia.org/wiki/August_2014_celebrity_photo_leaks

## Gadgets and Technology

### Oculus Rift in Medical Training

https://medium.com/@Goetz/virtual-surgery-gets-real-221beeac65ea

http://www.fondation-moveo.com/projects/virtual-reality

### Fizz Buzz as an Interview Question

http://en.wikipedia.org/wiki/Fizz_buzz

### Brain Messages

http://news.sky.com/story/1329954/world-first-as-message-sent-from-brain-to-brain

## This is Awesome!

**Note**: That was definitely not our first take on the harmonies.

### DDoS Attack Map

http://map.ipviking.com/

### Polymer

http://www.polymer-project.org/

### The Dreadnoughtus!

http://www.popularmechanics.com/_mobile/science/environment/natural-disasters/dreadnoughtus-new-dino-may-be-largest-land-animal-ever-17170269

## Q & A: Robots Taking Human Jobs

At this point, we obviously don't have any "listeners" yet, since this is our first episode, we've been asked this question before and thought it would be a great first topic for this segment.

Recent Pew research: http://www.pewinternet.org/files/2014/08/Future-of-AI-Robotics-and-Jobs.pdf

More:

 * http://marginalrevolution.com/marginalrevolution/2014/08/will-you-lose-your-job-to-a-robot.html
 * http://phys.org/news/2014-09-robots-big-employment-expert.html
 * http://www.businessinsider.com/jobs-that-robots-will-do-2014-8
 * http://www.nbcnews.com/id/42183592/ns/business-careers/t/nine-jobs-humans-may-lose-robots/#.VAZ4tPldWYE
 * http://www.theatlantic.com/technology/archive/2014/08/the-robots-are-coming-but-are-they-really-taking-our-jobs/375655/
 * http://www.nytimes.com/2014/08/07/upshot/will-you-lose-your-job-to-a-robot-silicon-valley-is-split.html?_r=0&abt=0002&abg=0
 * http://www.wired.com/2014/08/when-robots-take-all-the-work-whatll-be-left-for-us-to-do/
 * http://www.utsandiego.com/news/2014/aug/31/labor-day-dont-fear-robots-jobs-tech/
 * http://www.marketwatch.com/story/9-jobs-robots-already-do-better-than-you-2014-01-27
 * http://mentalfloss.com/article/58332/7-new-robots-designed-do-human-jobs

**Don't shake a mojito!**
