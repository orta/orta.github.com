export const sections = [
  {
    id: "ts",
    header: "TypeScript",
    subtitle: "Works in Progress.",
    title: "New bodywork",
    body: "<p>I'm starting to get my grips on the project and understand how a lot of the pieces come together. </p>",
    button1url: "https://github.com/microsoft/TypeScript-Website/issues/94",
    button1text: "Roadmap",
    button2url: "https://github.com/orta/typescript-notes",
    button2text: "Compiler Notes",
    new: true
  },
  
  {
    id: "fr",
    header: "Flappy Royale",
    subtitle: "Flappy Fatale.",
    title: "100 Players are Flapping",
    body:
      "<p>Working with <a href:'https://lazerwalker.com'>Em Lazer-Walker</a> and <a href:'http://www.stfj.net'>Zach Gage</a> we explored an unconventional take on Flappy Bird for mobile and web. It's a cruel game with no win state, from which of 20 million birds have flapped out.</p>",
    button1url: "https://flappyroyale.io",
    button1text: "Web",
    button2url: "https://itunes.apple.com/us/app/flappyroyale/id1469168509",
    button2text: "iOS",
    button3url: "https://play.google.com/store/apps/details?id:com.lazerwalker.flappyroyale",
    button3text: "Android",
    new: true
  },

  {
    id: "js",
    header: "Design + JS",
    subtitle: "Giving back by design.",
    title: "Pretty potentate",
    body:
      "<p>I've been helping out some of my favourite JavaScript dev-tools by re-designing and consolidating their homepages.</p>",
    button1url: "https://prettier.io",
    button1text: "Prettier",
    button2url: "https://jestjs.io",
    button2text: "Jest",
    button3url: "https://facebook.github.io/react-native/",
    button3text: "React Native",
    new: true
  },

  {
    id: "danger-swift",
    header: "Danger in Swift",
    subtitle: "Bringing Danger back.",
    title: "JavaScript-powered tooling for other communities",
    body:
      "<p>Working with <a href:'http://twitter.com/fmeloni1'>Franco Meloni</a> we used some of the Danger JS tech created for Peril to create a way for iOS folks to own their Dangerfiles.</p><p>Danger in Swift is a nice trip back home after graduating to a new community.</p>",
    button1url: "https://github.com/danger/danger/",
    button1text: "GitHub Repo",
    button2url: "https://danger.systems",
    button2text: "Website",
    new: true
  },

  {
    id: "readme",
    header: "Transparent Engineering Culture",
    subtitle: "READ ME.",
    title: "Consolidated Culture Documentation",
    body:
      "<p>Over time Artsy's engineering documentation became fragmented, rarely updated and with few contributors.</p><p>I consolidated all docs, open sourced most and created a process for finding or creating new docs.</p>",
    button1url: "https://github.com/artsy/readme/",
    button1text: "artsy/readme",
    button2url: "http://artsy.github.io/blog/2018/08/21/OSS-by-Default-Docs/",
    button2text: "Announcement",
    new: true
  },

  {
    id: "ar",
    header: "AR Artworks at Artsy",
    subtitle: "A fresh perspective on View in Room.",
    title: "",
    body:
      "<p>Working with <a href:'https://brianwatterson.com'>Brian Watterson</a> and <a href:'https://katarinabatina.com'>Katarina Batina</a> we created an augmented reality experience to the Artsy app using Apple's bleeding-edge ARKit 1.5.</p><p>Bit stressful because of technical constraints (and the vague-ness of reality), but we found a way to make it work.</p>",
    button1url: "https://github.com/artsy/eigen",
    button1text: "GitHub Repo",
    button2url: "http://artsy.github.io/blog/2018/03/18/ar/",
    button2text: "Announcement",
    skiplastthumbnail: true,
    new: true
  },

  {
    id: "peril",
    header: "Peril",
    subtitle: "Caring at Scale.",
    title: "GitHub automation before it was cool",
    body:
      "<p>I took Danger to the server, expanding the scope of automation for cultural rules to be anything related to GitHub</p><p>At Artsy, Peril lets us apply <a href:'https://github.com/artsy/README/blob/master/culture/engineering-principles.md#minimal-viable-process'>minimal viable process</a> in all sorts of new and interesting places by mixing schedulers and webhook processing</p>",
    button1url: "https://github.com/danger/peril/",
    button1text: "GitHub Repo",
    button2url: "http://artsy.github.io/blog/2017/09/04/Introducing-Peril/",
    button2text: "Announcement",
    button2url: "https://github.com/danger/peril/issues/235",
    button2text: "Highlights",
    new: true
  },

  {
    id: "danger-js",
    header: "Danger JS",
    subtitle: "Consolidated Caring.",
    title: "Like Danger in Ruby - but for JavaScript",
    body:
      "<p>If Artsy was moving to JS for iOS, we needed to have our tools to come with us.</p><p>Re-writing Danger for JS gave me the chance to fix fundamental blockers for creating a considerably larger Danger eco-system of tools.</p>",
    button1url: "https://github.com/danger/danger-js/",
    button1text: "GitHub Repo",
    button2url: "https://danger.systems",
    button2text: "Website",
    button3url: "http://artsy.github.io/blog/2017/06/30/danger-one-oh-again/",
    button3text: "Announcement",
    new: true
  },

  {
    id: "rn",
    header: "Migration to React Native",
    subtitle: "De-siloing and consolidating tooling.",
    title: "Long term thinking",
    body:
      "<p>When <a href:'http://twitter.com/alloy'>Eloy Durán</a> pitched we should move to React Native at Artsy, I helped his idea not just work - but succeed.</p><p>My contributions ranged from documenting our process, pitching stake-holders, choosing, owning and improving dependencies and helping to establish a high quality engineering culture across the shared web and iOS infrastructure .</p>",
    button1url: "http://github.com/artsy/emission",
    button1text: "Emission",
    button2url: "http://artsy.github.io/series/react-native-at-artsy/",
    button2text: "Blog",
    button3url: "https://artsy.net/x-react-native",
    button3text: "Conference",
    new: true
  },

  {
    id: "danger",
    header: "Danger Ruby",
    subtitle: "Caring About Culture.",
    title: "Like unit tests, but for team culture",
    body:
      "<p>Working with <a href:'http://twitter.com/krausefx'>Felix Krause</a> we created a way to write tests in a way that couldn't exist before.</p><p>Danger is a feedback and testing system for looking at the environment of your code reviews.</p>",
    button1url: "https://github.com/danger/danger/",
    button1text: "GitHub Repo",
    button2url: "https://danger.systems",
    button2text: "Website"
  },

  {
    id: "cpapp",
    header: "CocoaPods.app",
    subtitle: "Less Hassle, More Pods.",
    title: "Compiling Dependencies",
    body:
      "<p>Working with <a href:'http://twitter.com/alloy'>Eloy Durán</a> and <a href:'https://github.com/nwest'>Nate West</a>. We built a hosted environment for all of CocoaPods' environment.</p><p>We went all out as an IDE for understanding your Podfile. Auto-completion, inline errors, migration advice and an integration overview.</p>",
    button1url: "http://github.com/cocoapods/cocoapods-app",
    button1text: "GitHub Repo",
    button2url: "https://cocoapods.org/app",
    button2text: "Download"
  },

  {
    id: "emergence",
    header: "Artsy Shows",
    subtitle: "TV, Shows.",
    title: "Visually Stimulating",
    body:
      "<p>Working with <a href:'http://twitter.com/owen_dodd'>Owen Dodd</a> and <a href:'https://katarinabatina.com'>Katarina Batina</a> we created a beautiful way to experience current exhibitions from galleries and museums around the world on your TV.</p><p>Small scope, tight deadline and a great working design/dev relationship.</p>",
    button1url: "https://github.com/artsy/emergence/",
    button1text: "GitHub Repo"
  },

  {
    id: "oss",
    header: "Open Source By Default",
    subtitle: "If no one says 'no', keep going.",
    title: "Radical Openness",
    body:
      "<p>With help from <a href:'http://code.dblock.org'>Daniel Doubrovkine</a> I transformed the Artsy Mobile team to be Open Source by default.</p><p>We started small, and over the course of a year I made a lot of hard calls and eventually came out with all of our apps available for others to learn from.</p>",
    button1url: "https://github.com/artsy/mobile/",
    button1text: "Mobile Team",
    button2url: "https://www.objc.io/issues/22-scale/artsy/",
    button2text: "objc.io"
  },

  {
    id: "gifs",
    header: "GIFs.app",
    subtitle: "Find GIFs easily.",
    title: "The most distracting app to work on.",
    body:
      "<p>Over the course of years, me and a bunch of internet random contributors eventually shipped a Mac app for quickly finding GIFs.</p><p>Took far too long to make.</p>",
    button1url: "https://github.com/orta/GIFs/",
    button1text: "GitHub Repo",
    button2url: "https://itunes.apple.com/us/app/gifs/id961850017?l:en",
    button2text: "App Store"
  },

  {
    id: "eidolon",
    header: "Eidolon",
    subtitle: "On-site Kiosk App",
    title: "An experiment in Open Source.",
    body:
      "<p>I worked with <a href :'http://ashfurrow.com'/>Ash Furrow</a>, <a href:'https://katarinabatina.com'>Katarina Batina</a> and <a href:'https://twitter.com/1aurabrown'>1aura Brown</a>. We built an app for browsing works, swiping cards and making auction bids. We did it in Swift, <a href:'https://github.com/artsy/eidolon'>in the Open</a>.</p>",
    button1url: "https://github.com/artsy/eidolon/",
    button1text: "Github Repo",
    button2url: "http://www.vogue.com/slideshow/13261562/choice-works-auction-at-sothebys-acria-unframed-party/#5",
    button2text: "En-vogue"
  },

  {
    id: "armory",
    header: "Artsy 1.3 - Fairs",
    subtitle: "Locating the Fair",
    title: "Mapping the booths.",
    body:
      "<p>I worked with <a href :'http://robb.is'/>Rob Bohnke</a>, <a href:'http://dblock.org'>dB.</a>, <a href:'https://twitter.com/1aurabrown'>1aura Brown</a> and <a href:'https://katarinabatina.com'>Katarina Batina</a>. We made the fair experience mobile. Opening out with The Armory Fair 2014, and moving around the world.</p>",
    button1url: "https://github.com/artsy/eigen/",
    button1text: "Github Repo",
    button2url: "http://iphone.artsy.net",
    button2text: "App Website",
    button3url: "https://code.dblock.org/2014/03/19/mapping-and-tiling-on-ios.html",
    button3text: "Video"
  },

  {
    id: "cocoapods",
    header: "CocoaPods",
    subtitle: "The Cocoa Dependency Manager",
    title: "Design Dictating.",
    body:
      "<p>Consolidate the documentation, helped create the brand. The tentpole project for Open Source in iOS/Mac/watchOS/tvOS world.</p><p>Built with <a href :'http://andy-myers.co.uk'>Andy Myers</a>, <a href:'http://florianhanke.com'>Florian Hanke</a> &amp; the <a href:'http://cocoapods.org/about'>CocoaPods Team</a>.",
    button1url: "http://cocoapods.org",
    button1text: "Website"
  },

  {
    id: "artsy",
    header: "Artsy for iOS",
    subtitle: "The art world in your pocket",
    title: "Browsing Artworks in Style.",
    body:
      "<p>Got $100,000 to spend on Artworks? Or just happen to be interested in exploring the art world. This app has you covered.</p><p>Featured weekly in the App Store globally, entirely Open Source.</p><p>Initially built with <a href :'http://robertlenne.com'>Robert Lenne</a> &amp; <a href:'http://speednoisemovement.com'>Leonard Grey</a>.</p>",
    button1url: "https://github.com/artsy/eigen/",
    button1text: "Github Repo",
    button2url: "https://itunes.apple.com/us/app/artsy-art-world-in-your-pocket/id703796080?ls:1&mt:8",
    button2text: "App Store",
    button3url: "http://iphone.artsy.net",
    button3text: "Website"
  },

  {
    id: "cocoadocs",
    header: "CocoaDocs",
    subtitle: "Documentation, yawn, boring.",
    title: "Your code, publicly documentated.",
    body:
      "<p>My initial dive into large scale OSS projects is CocoaDocs. CocoaDocs would host every CocoaPods' documentation for free, automatically.</p>",
    button1url: "http://github.com/cocoapods/cocoadocs.org",
    button1text: "GitHub Repo",
    button2url: "http://cocoadocs.org",
    button2text: "Website"
  },

  {
    id: "putio",
    header: "PutIO For iOS",
    subtitle: "Easy stream movies",
    title: "Put.IO is a hosted torrent service.",
    body:
      "<p> Put.IO for iOS <i>was</i> a universal app that aims for the best user experience on the app store. It has iCloud syncing, in-app search and 16 language ,subtitle support. At last check the app has streamed over 100000 hours of video.</p><p>And is totally open source. Shame though, Apple stopped allowing it through the review process. So it's not on the App Store anymore.</p>",
    button1url: "https://github.com/orta/Puttio/",
    button1text: "GitHub Repo",
    button2url: "http://orta.io/Puttio",
    button2text: "Website"
  },

  {
    id: "folio",
    header: "Artsy Folio",
    subtitle: "A beautiful portfolio",
    title: "Folio brings all the galleries into the yard.",
    body:
      "<p>I worked with <a href :'http://robertlenne.com'>Robert Lenne</a>, <a href:'http://90wpm.com/hello'>Benjamin Jackson</a> and <a href:'http://speednoisemovement.com'>Leonard Grey</a>. To make a stunning portfolio app for museums and art galleries around the world.</p><p>Folio deals with downloading gigabytes of images and metadata. The app exposes no Apple styled views unobtrusively leaving the content itself to make its own statements. Lots of cool animations.</p>",
    button1url: "https://github.com/artsy/energy/",
    button1text: "Github Repo",
    button1url: "https://itunes.apple.com/us/app/art.sy-folio/id504862164?mt:8&uo:4",
    button2text: "App Store",
    button3url: "http://folio.artsy.net",
    button3text: "Website"
  },

  {
    id: "mixtapes",
    header: "Mixtapes",
    subtitle: "Curate playlists",
    title: "Create Mixtapes using Spotify.",
    body:
      "<p> Mixtapes was created so I could make new playlists for friends that could change as we change. I update my Mixtapes for a certain someone weekly.</p><p>Free, open source &amp; needs a paid Spotify account.</p>",
    button1url: "https://github.com/orta/mixtapes/",
    button1text: "GitHub Repo",
    button2url: "http://itunes.com/app/Mixtapes",
    button2text: "App Store",
    skiplastthumbnail: true
  }
];
