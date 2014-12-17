---
title: Preparing for a Hackathon
description: Essential tools and techniques for a successful hackathon
date: 2014-12-16
picture:
  src: /img/episodes/2014-12-16-preparing-for-a-hackathon.jpg
  thumbnail-src: /img/episodes/thumbnails/2014-12-16-preparing-for-a-hackathon.jpg
  alt: Participants in the second annual WSU EECS Hackathon
  credit:
    name: Wyat Taylor / WSU Linux Users Group
    source: https://wlt.exposure.co
    license:
      name: permission
audio:
  duration: '01:19:41'
  sources:
    - type: ogg
      src: http://refinedbitspodcast.com/episodes/refined-bits-2014-12-09-preparing-for-a-hackathon.ogg
      size: 56371942
    - type: mp3
      src: http://refinedbitspodcast.com/episodes/refined-bits-2014-12-09-preparing-for-a-hackathon.mp3
      size: 57289048

layout: single-episode
episode-id: 4
---

# Show Notes

## News (00:00:46)

### .NET Core is now Open Source (00:01:04)

<http://blogs.msdn.com/b/dotnet/archive/2014/11/12/net-core-is-open-source.aspx>

The core of .NET now joins [ASP.NET](https://github.com/aspnet/home), [Entity Framework](https://github.com/aspnet/EntityFramework), and [Roslyn](https://roslyn.codeplex.com/) in Microsoft's growing bullpen of open source products that make up the foundation of the Microsoft developer platform.

Now the community can participate in its development - reporting bugs, fixing bugs, discussing new features, and implementing new features.

<https://github.com/dotnet/core>

### White House Holiday Lights (00:03:22)

<https://holidays.madewithcode.com/project/lights>

### NASA Orion Test Flight (00:04:58)

NASA is at it again, moving forward into the next (and some might say final) frontier with their official unmanned pilot flight of the spacecraft [Orion](http://www.nasa.gov/orion/).

## Intro to Hackathons (00:07:29)

> A hackathon (also known as a hack day, hackfest or codefest) is an event in which computer programmers and others involved in software development, including graphic designers, interface designers and project managers, collaborate intensively on software projects. &mdash; [Wikipedia](http://en.wikipedia.org/wiki/Hackathon)

Check out the [WSU EECS Hackathon III](http://hackathon.eecs.wsu.edu).

We won't be going over specific competitive tips but how to get the most out of your hackathon experience.

Make something cool with your team, and maybe help solve some real problems and win some prizes along the way.  Meet new people, make friends, and network! Eat tons of free food and drink.

### General Hackathon Process (00:11:56)

* Be prepared | Have a plan
 * Try to make a plan ahead of time
 * Have an idea of what you want to build
 * Work on an ambitious but reasonable project
 * Bring the things you need

### Understand Judging (00:15:01)

* Be innovative - is your project unique?
* Comfort zone - what did the team learn?
* Adherence to themes - if there are any
* Is it stable - did it segfault during the demo?
* Look and feel - is it beautiful/responsive?
* Technicality - what's happening behind the scenes?
* Efficient - are selected algorithms appropriate?
* Architected - does it show that the app was designed?
* Purpose - does the app do something?
* Presentation - can the developers communicate the purpose?

## A Hackathon Developer's Toolkit (00:18:32)

Have the tools you need. Know the tools you need.

### Version Control (00:19:14)

> None of your hard work is real until it's version-controlled.

<http://en.wikipedia.org/wiki/Revision_control>

[Git](http://git-scm.com/) is our favorite. Here's a couple of great resources for learning Git:

 * *The* Git Book: [Pro Git](https://progit.org/) (Oh look, we use the same base theme!)
 * [LearnGitBranching](http://pcottle.github.io/learnGitBranching/), a simplified visual demo-tutorial about how to work with branches.

A couple other popular choices:

 * [Mercurial](http://mercurial.selenic.com/)
 * [Subversion](http://subversion.apache.org/)
 * [Team Foundation Server](http://www.visualstudio.com/products/tfs-overview-vs) (also supports Git!)

<http://en.wikipedia.org/wiki/List_of_revision_control_software>
<http://en.wikipedia.org/wiki/Comparison_of_revision_control_software>

### GitHub (00:23:08)

> Work better together by sharing code and reviewing each other's work before merging all those great features.

*Note*: Turns out GitHub doesn't actually [host Mercurial repositories](http://mercurial.selenic.com/wiki/MercurialHosting), but you can use a Mercurial client with GitHub with the [Hg-Git plugin](http://hg-git.github.io/).

Check out the [GitHub Student Developer Pack](https://education.github.com/pack) if you're a student!

GitHub has [a great list of resources for learning Git and GitHub](https://help.github.com/articles/good-resources-for-learning-git-and-github/), and even [an interactive code school](https://try.github.io)!

Alternatives:

 * [BitBucket](https://bitbucket.org)
 * Standing around someone's screen, squinting at a branch diff, talking about it for a while, then letting them merge it and push to your private remote (wherever that is, hopefully somewhere safe).

### A Comfortable Text Editor (00:27:53)

> There's tons out there, so have fun and explore the possibilities. Once you find one that feels good and has the features you need, stop looking and get to work.

The big ones:

 * [Vim](http://www.vim.org/)
 * [Emacs](http://www.gnu.org/software/emacs/)
 * [Sublime Text](http://www.sublimetext.com/)
 * [Visual Studio](http://www.visualstudio.com/)
 * [Notepad++](http://notepad-plus-plus.org/)
 * [Atom](https://atom.io/)
 * [IntelliJ IDEA](http://www.jetbrains.com/idea/)

Chris stands corrected - turns out there was a Sublime Text 3 build ([3065](http://www.sublimetext.com/3)) released just a few months ago, and an even newer build on [the dev channel](http://www.sublimetext.com/3dev). It is true that Sublime Text 3 is still in beta though, with [the latest *stable* release (2.0.2) back in July 2013](http://www.sublimetext.com/2).

Features we like:

 * Syntax highlighting
   * And being able to quickly change it
 * Autocomplete
 * Keyboard document navigation
   * Jump to file
   * Jump to line
   * Global search
 * Lexical navigation
 * Multiple cursors
 * Automatic refactorings
 * Multiple documents
   * Tabs
   * Split frames

### A Debugger (00:35:52)

> Still using `fprintf()`, `console.log()`, `print`, or `var_dump()` to chase down where everything goes wrong? Stop that. There's a better way.

Examples of debuggers:

 * [GDB](http://www.gnu.org/software/gdb/), the GNU Debugger, for native applications written in languages like C, C++, Ada, [and several others](https://sourceware.org/gdb/onlinedocs/gdb/Supported-Languages.html)
 * [PDB](https://docs.python.org/2/library/pdb.html), the Python Debugger
 * [Visual Studio](http://msdn.microsoft.com/en-us/library/sc65sadd.aspx) has a built-in debugger for managed and unmanaged code
 * [IntelliJ IDEA](https://www.jetbrains.com/idea/) and other IntelliJ-based IDEs have built-in debuggers for their respective platforms
 * All modern desktop web browsers ([Chrome](https://developer.chrome.com/devtools), [Firefox](https://developer.mozilla.org/en-US/docs/Tools), [Internet Explorer](http://msdn.microsoft.com/en-us/library/ie/gg589507.aspx), [Opera](http://www.opera.com/dragonfly/), [Safari](https://developer.apple.com/safari/tools/)) have built-in developer tools that include a JavaScript debugger

### Pen and Paper (00:46:14)

> Or whiteboard and marker.

> Either way, you need to communicate ideas with your team, and good pictures are still the best medium.

Make sure you have a common language, so your pictures make sense. [UML](http://en.wikipedia.org/wiki/Unified_Modeling_Language) is a fairly popular graphical language designed for communicating software ideas. [The official UML spec](http://www.omg.org/spec/UML/2.0/) is pretty big and complicated, though, so feel free to just stick to the parts that everyone can understand, and even modify it to be more useful to your particular team; that's how you use other languages designed for communicating with humans, right?

[Dia](https://wiki.gnome.org/Apps/Dia), [VioletUML](http://alexdp.free.fr/violetumleditor/page.php), and [Visio](http://products.office.com/en-us/visio) are some popular UML drawing tools, if you want to keep your diagrams and photos of the board aren't enough. Just be careful not to spend the whole hackathon making drawings instead of actually building your product!

### Continuous Integration (00:49:46)

> [Continuous Integration](http://en.wikipedia.org/wiki/Continuous_integration) is about knowing the health of your project without having to go check.

Let a continuous integration service like [TravisCI](https://travis-ci.org/) build (and maybe test, if you spent the time to write those) your project every time code gets pushed, and know right away when something breaks. The last thing you want is to be in the 23rd hour with pages full of build errors.

TravisCI is [free for private GitHub repositories with the GitHub Student Developer Pack](https://education.github.com/pack#travis).

[Jenkins](http://jenkins-ci.org/), [Bamboo](https://www.atlassian.com/software/bamboo), and [TeamCity](https://www.jetbrains.com/teamcity/) are some other popular CI options.

### Package Managers (00:52:20)

> Downloading libraries and managing dependencies is something a computer can do. Let the computer do that for you.

A few of the big ones:

 * [Bower](http://bower.io/), for web libraries
 * [NPM](https://www.npmjs.com/), for [Node.js](http://nodejs.org/) modules
 * [NuGet](https://www.nuget.org/), for .NET libraries
 * [RubyGems](https://rubygems.org/), for Ruby libraries
 * [Pip](https://pypi.python.org/pypi/pip), for Python libraries

The Cheerio library isn't at cheer.io, it's here: <http://cheeriojs.github.io/cheerio/>.

### An IDE (TODO)

### Twitter Bootstrap (TODO)

### Fiddler (TODO)

### Yeoman (01:07:03)

Don't waste time writing boilerplate! Scaffold your web apps with [Yeoman](http://yeoman.io/).

For example, if you're using [AngularJS](https://angularjs.org/), use [generator-angular](https://github.com/yeoman/generator-angular) to scaffold a basic app:

```sh
$ npm install -g generator-angular
$ yo angular
```

### Trello (01:09:36)

[Trello](https://trello.com) is a great on-line/cross-platform tool for collaborating and organizing with a team.  It is similar to [Scrum](http://en.wikipedia.org/wiki/Scrum_%28software_development%29).

* [Spoiler](https://www.youtube.com/watch?v=oyVksFviJVE) (01:11:55)

### Polymer (01:12:10)

> Treat your front end like the Legos it should be.

[Polymer](https://www.polymer-project.org/) is a web components framework from Google.  Development for designers.

* Web components with [Custom Elements IO](http://customelements.io/)

## Protips (1:16:17)

From our combined handful of experiences with  hackathons, we want to remind everyone to get up, walk around, eat food, talk to people, enjoy the event. Oh yea, don't forget to sign up for the hackathon if they have a registration.

* Be innovative
* Be inspired
* Have fun
