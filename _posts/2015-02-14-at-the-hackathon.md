---
title: At the Hackathon
description: We visit the third annual WSU EECS Hackathon and interview the teams working on some of our favorite projects
date: 2015-02-14
picture:
  src: /img/episodes/2015-02-14-at-the-hackathon.jpg
  thumbnail-src: /img/episodes/thumbnails/2015-02-14-at-the-hackathon.jpg
  alt: Participants in the third annual WSU EECS Hackathon
  credit:
    name: Wyat Taylor / WSU Association for Computing Machinery
    source: https://wlt.exposure.co
    license:
      name: permission
audio:
  duration: '01:08:26'
  src: http://refinedbitspodcast.com/episodes/refined-bits-2015-02-14-at-the-hackathon.mp3
  size: 49200502
explicit: 'no'

layout: single-episode
episode-id: 5
---

# Show Notes

We hope you didn't miss us too much while we were on vacation! Several big things have been happening, especially for Bryce.

## Bryce Graduated, got Married, and Moved to Seattle! (00:00:53)

Bryce and Tori have been settling into their life over on the West side. Chris awkwardly says "awesome" right after hearing that their larger-than-allowed dog can't live in their apartment, because that's his default casual "let's move on" phrase, but be assured, he is quite sad at this situation.

Bryce has started work at [EMC Isilon](http://www.emc.com/domains/isilon/index.htm), on their Authentication, Identity Management, and Access (AIMA) team. We use a lot of other acronyms in that conversation, too:

 * LDAP - [Lightweight Directory Access Protocol](http://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)
 * AD - [Active Directory](http://en.wikipedia.org/wiki/Active_Directory)
 * PCAP - [Packet Capture](http://en.wikipedia.org/wiki/Packet_analyzer)
 * SMB - [Server Message Block](http://en.wikipedia.org/wiki/Server_Message_Block)
 * NFS - [Network File System](http://en.wikipedia.org/wiki/Network_File_System)

We were talking through [Mumble](http://wiki.mumble.info/wiki/Main_Page), a great open source VoIP application.

BTW this is Cancún:

![An aerial photo of the resort city of Cancún and its rich blue water](http://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Imagebysafa2.jpg/640px-Imagebysafa2.jpg "Cancún is bello.")

## The Third Annual WSU EECS Hackathon (00:07:35)

Learn more about the hackathon at this extremely logically-addressed website: <http://hackathon.eecs.wsu.edu/>. You can even follow it on Twitter: [@wsuhackathon](https://twitter.com/wsuhackathon)!

### Interviews (00:13:53)

#### Team Gir (00:13:53)

Wearables!

Leah, [Erin](https://www.linkedin.com/in/erinmullen1), and MacKenzie had tons of fun building LEDs and [Arduinos](http://www.arduino.cc/) into common articles of clothing, like hats, shirts, and gloves. One of our favorites was a scavenger hunt where you would get a set of random colors that you would then go find in the real world and touch.

[Their Prezi presentation](https://prezi.com/mk-gigjriqyi/team-gir-hackathon-presentation/) includes overviews of each of their projects as well as pictures and videos of them in action. Check it out!

#### Team Robert'); DROP TABLE Hackathon;-- (00:20:50)

They made a drink fountain similar to the [Coca-Cola Freestyle](http://en.wikipedia.org/wiki/Coca-Cola_Freestyle), with a web interface for selecting your beverage and the hardware to dispense it. Their goal was to be able to build the machine with off-the-shelf parts, like [Raspberry Pi](http://www.raspberrypi.org/), Arduino, and a common [soda gun](http://en.wikipedia.org/wiki/Soda_gun).

Their team name is a reference to the [XKCD](http://xkcd.com/) comic [*Exploits of a Mom*](http://xkcd.com/327/):

![Exploits of a Mom](http://imgs.xkcd.com/comics/exploits_of_a_mom.png)

#### Frederick's Beatbox Calculator (00:29:27)

Frederick combined his love for math and sweet beats to create a basic calculator that builds up a drum loop as you enter your operands and operators. While he admits it's not very useful, it was very fun to build and learn from.  He may be adding it to his now created [github account](https://github.com/FR3DIII) in the future!

#### Team Miranda (00:33:48)

[Miranda](https://www.linkedin.com/pub/miranda-hansen/96/6a/631) wanted to put her DIY, hardware, and programming skills to work by creating a workspace that can monitor your activity and regain your attention when you get off-task. The sensor she was working with at the hackathon was a pen containing a custom-built switch mechanism that would send pressure feedback to an Arduino that keeps track of your time spent not writing. When enough time passes that it can tell you've been distracted, it triggers a flashing light pattern that reminds you of the task at hand.

See [Miranda's Instructables page](http://www.instructables.com/member/Diyified) for more of her projects!

#### Team `/dev/null` (00:39:05)

[Andrew](https://github.com/aclytle) built a new door controller for use by the [Linux Users' Group](https://lug.wsu.edu/) and [Ham Radio Club](http://hamradio.wsu.edu/) on campus. A [Python](http://en.wikipedia.org/wiki/Python_%28programming_language%29) app running on a Raspberry Pi is responsible for authentication and authorization, and can be used through an attached [RFID](http://en.wikipedia.org/wiki/Radio-frequency_identification) reader or another interface, like [SSH](http://en.wikipedia.org/wiki/Secure_Shell).

Like the drink fountain project, this is another great example where a microcontroller was used as an adapter between a very friendly programming platform (Raspberry Pi, in both cases) and a low-level hardware interface. The RFID reader uses the 3-wire [Wiegand interface](http://en.wikipedia.org/wiki/Wiegand_interface) to communicate with the [Uno32 microcontroller](http://www.digilentinc.com/Products/Detail.cfm?Prod=CHIPKIT-UNO32), which in turn uses a [UART](http://en.wikipedia.org/wiki/Universal_asynchronous_receiver/transmitter) interface to relay the information to the Raspberry Pi.

Check out [the project on GitHub](https://github.com/aclytle/hackathon2015)!

*Correction*: It's the lazy geniuses in the LUG with the doorknob-turning hardware, not the ACM.

![A dog playing fetch with a machine](http://i.imgur.com/w3lQ9gY.gif "This is what I got when I googled &quot;lazy genius&quot;.")

#### Outrageous Fun (00:48:18)

They used [jQuery](http://en.wikipedia.org/wiki/JQuery) to create a fun little game for kids to learn the keyboard.

### Projects we Didn't Interview (00:53:09)

There were a few projects we learned about later that we didn't get the chance to interview, but wanted to mention.

 * Phonics - A mother using her web and programming skills to help her children learn phonics.
 * Kinect face authentication - Using the Kinect's 3D face mapping feature to perform authentication.
 * Kinect game controller - Using your body as a gamepad via Kinect's sensors and keystroke simulation.
 * 3D web game - A 3D game using the [WebGL JavaScript API](http://en.wikipedia.org/wiki/WebGL).

### Closing Thoughts (00:59:32)

With hackathons, part of the idea is to get out there and try something new &mdash; to learn and experiment with a tool or language that you haven't had a lot of experience with, so you can expand your horizons and be creative. However, we noticed that this idea might have been interpreted by many of the participants to mean "start with zero experience with your platform". While it is impressive to some degree to go from zero to a basic shopping list app in 24 hours, it's much more impressive to go from "I made a basic shopping list app once" to "I made an app that uses data gathered from various fitness and health APIs to help you build a personalized grocery list that focuses on maintaining a balanced diet". We all know that setting up a development environment takes time. There are always a series of small (or large) and very boring issues to work through &mdash; missing dependencies, something that needs to go in the `PATH`, the platform's little idiosyncrasies you're not used to. Those take time to hack and slash your way past, and they drain energy and creativity. We think the teams did a great job with what they all had, but we wonder what some of these projects would have looked like if the participants had done just a *Hello, World* in advance, so the path was clear to charge ahead the whole time.

In summary, get all the boring stuff out of the way and spend as much time as you can during the hackathon being creative and learning.

And use libraries!

![USE ALL THE LIBRARIES (meme)](http://i.imgur.com/jTBgwTL.jpg "USE ALL THE LIBRARIES")
