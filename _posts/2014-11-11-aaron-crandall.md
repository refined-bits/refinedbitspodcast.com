---
title: Aaron S. Crandall, Ph.D
description: Smart Homes, Gerontechnology, Language and Code Quality, Tabs vs. Spaces
date: 2014-11-11
picture:
  src: /img/episodes/2014-11-11-aaron-crandall.jpg
  thumbnail-src: /img/episodes/thumbnails/2014-11-11-aaron-crandall.jpg
  alt: Aaron Crandall
audio:
  duration: '01:02:35'
  sources:
    - type: ogg
      src: http://refinedbitspodcast.com/episodes/refined-bits-2014-11-11-aaron-crandall.ogg
      size: 43611795
    - type: mp3
      src: http://refinedbitspodcast.com/episodes/refined-bits-2014-11-11-aaron-crandall.mp3
      size: 44995347

layout: single-episode
episode-id: 3
---

# Show Notes

## News (00:00:50)

### Trading Computational Accuracy for Energy Savings (00:01:01)

 * <http://dspace.mit.edu/handle/1721.1/91290>
 * <http://newsoffice.mit.edu/2014/programming-error-for-energy-savings-1030>
 * <http://2014.splashcon.org/event/oopsla2014-chisel-reliability-aware-optimization-of-approximate-computational-kernels>
 * <http://www.sciencedaily.com/releases/2014/10/141030142244.htm>

### Large Scale Study of Programming Languages and Code Quality in Github (00:07:30)

[The paper (PDF).](http://macbeth.cs.ucdavis.edu/lang_study.pdf)

> Most notably, it does appear that strong typing is modestly better than weak typing, and among functional languages, static typing is also somewhat better than dynamic typing. We also find that functional languages are somewhat better than procedural languages.

Results:

> Result 1: Some languages have a greater association with defects than other languages, although the effect is small.

> Result 2: There is a small but significant relationship between language class and defects. Functional languages have a smaller relationship to defects than either procedural or scripting languages.

> Result 3: There is no general relationship between domain and language defect proneness.

> Result 4: Defect types are strongly associated with languages; Some defect type like memory error, concurrency errors also depend on language primitives. Language matters more for specific categories than it does for defects overall.

They admit that, although they have a huge dataset, it may not quite be big enough, because of all the slicing-and-dicing they're doing:

> On the other hand, even large datasets become small and insufficient when they are sliced and diced many ways simultaneously, i.e. when the underlying connectivity between variables is rich. The implications are that the more dependent variables there are, the more difficult it becomes (vis-a-vis the amount of data available) to answer questions about a specific variable’s effect on any outcome where interactions with other variables exist. Hence, we are unable to quantify the specific effects of language type on usage.

### WSU Science DMZ (00:16:05)

WSU is getting a 100Gb DMZ for research projects that interact directly with the internet! How cool!

## Homes and Other Smart Things with Aaron Crandall, Ph.D (00:16:47)

Dr. Crandall's:

 * [Website](http://eecs.wsu.edu/~acrandal/)
 * [Google Scholar citations](http://scholar.google.com/citations?hl=en&user=4Kv_780AAAAJ&view_op=list_works&sortby=pubdate)

[Center for Advanced Studies in Adaptive Systems](http://casas.wsu.edu/)

[The Smart Home in a Box paper](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3886862/) at the NIH.

### Dr. Crandall's Favorite Coins (00:38:17)

[The coins of Constantine I](http://www.numisology.com/Constantine.htm)

[The Flying Eagle cent](http://en.wikipedia.org/wiki/Flying_Eagle_cent)

## This is Awesome! (00:43:24)

### The Border Highlanders (00:43:46)

> Highland Pipers, Drummers and Dancers

http://www.borderhighlanders.com/

### Entity Framework (00:44:17)

Chris has been rewriting some database access code during his day job, and has been really enjoying ditching the assortment of legacy solutions (Dataset, raw ADO.NET, etc.) in favor of the model-centric [Entity Framework](http://en.wikipedia.org/wiki/Entity_Framework). He's especially excited about how `DbContext` classes are mockable, database connections are injectable, and that you get Unit of Work for free.

### LAZORS (00:45:38)

Lasers are focused on specific points in the air, causing that air to ionize and light up!

<http://www.geek.com/science/pulse-laser-used-to-create-3d-display-in-mid-air-1608487/>

### Big Hero 6 (00:48:30)

Disney is going huge with its latest movie, including using a **55,000-core supercomputer** to render it.

<http://www.engadget.com/2014/10/18/disney-big-hero-6/>

## Spontaneous Debate: Tabs vs. Spaces (00:55:32)

Well this is a sensitive topic.

We hope that [EditorConfig](http://editorconfig.org/) can at least bring some peace.
