import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <>
    <div className="slide container">
      <div className="clearfix grid_6 project">
        <h2>Culture</h2>
        <ul>
          <li><a href="https://www.objc.io/issues/22-scale/artsy/">iOS at Scale: Artsy</a></li>
          <li><a href="https://open.nytimes.com/five-questions-with-orta-therox-d5bb9659c50b">NY Times Open: 5 Questions with Orta Therox</a></li>
          <li><a href="http://artsy.github.io/blog/2016/01/30/iOS-Junior-Interviews/">Interviewing, applying and getting your first job in iOS</a></li>
          <li><a href="http://artsy.github.io/blog/2018/10/19/pair-programming/">The Hows and Whys of Pair Programming </a></li>
          <li><a href="http://artsy.github.io/blog/2018/08/21/OSS-by-Default-Docs/">Open Source by Default: Docs</a></li>
          <li><a href="http://artsy.github.io/blog/2018/10/18/long-term-highlights">Engineering Highlights</a></li>
          <li><a href="http://artsy.github.io/blog/2017/10/10/C4Q-QandA/">C4Q&A - How I started programming</a></li>
        </ul>
      </div>

      <div className="clearfix grid_6 omega project">
        <h2>JavaScript</h2>
        <ul>
          <li><a href="http://artsy.github.io/blog/2017/02/05/Front-end-JavaScript-at-Artsy-2017/">Front-end JS at Artsy</a></li>
          <li><a href="http://artsy.github.io/series/javascriptures//">JavaScriptures</a></li>
          <li><a href="http://artsy.github.io/blog/2017/06/30/danger-one-oh-again/">Announcing Danger in JS</a></li>
          <li><a href="http://artsy.github.io/blog/2017/07/06/React-Native-for-iOS-devs/">Intro to React Native for an iOS Developer</a></li>
          <li><a href="http://artsy.github.io/blog/2017/09/04/Introducing-Peril/">Introducing Peril to the Artsy Org</a></li>
          <li><a href="http://artsy.github.io/blog/2018/06/18/On-Obsessive-Statelessness/">How Peril avoids state</a></li>
          <li><a href="http://artsy.github.io/blog/2018/12/11/GraphQL-Stitching/">GraphQL Stitching 101</a></li>
        </ul>
      </div>
    </div>


    <div className="slide container">
      <div className="clearfix grid_6 project">
        <h2>Cocoa</h2>
        <ul >
          <li><a href="http://artsy.github.io/blog/2017/02/05/Retrospective-Swift-at-Artsy/">JS vs Swift at Artsy</a></li>
          <li><a href="http://artsy.github.io/blog/2015/09/18/Cocoa-Architecture-Dependencies/">How Artsy chooses dependencies</a></li>
          <li><a href="https://www.objc.io/issues/15-testing/snapshot-testing/">How to do iOS testing via Snapshots</a></li>
          <li><a href="http://artsy.github.io/blog/2016/06/29/code-spelunking-injection/">Code Spelunking: Injection for Xcode Plugin</a></li>
          <li><a href="http://artsy.github.io/blog/2014/06/17/building-the-xcode-plugin-snapshots/">Building an Xcode Plugin: Snapshots</a></li>
          <li><a href="http://artsy.github.io/blog/2015/09/01/Cocoa-Architecture-Dropped-Design-Patterns/">Dropped Design Patterns</a></li>
          <li><a href="http://artsy.github.io/blog/2015/08/24/Cocoa-Architecture-Hybrid-Apps/">Hybrid Apps</a></li>
          <li><a href="http://artsy.github.io/blog/2015/08/19/Cocoa-Architecture-Switchboard-Pattern/">Switchboard Pattern</a></li>
          <li><a href="http://artsy.github.io/blog/2015/08/15/Cocoa-Architecture-Router-Pattern/">Router Pattern</a></li>
          <li><a href="http://artsy.github.io/blog/2014/06/11/testing-core-data-migrations/">Testing Core Data Migrations</a></li>
        </ul>
      </div>

      <div className="clearfix grid_6 omega project">
        <h2>Open Source</h2>
        <ul>
          <li><a href="http://artsy.github.io/blog/2016/01/13/OSS-Expectations/">Open Source Expectations</a></li>
          <li><a href="http://artsy.github.io/blog/2015/04/28/how-we-open-sourced-eigen/">How we Open Source'd Eigen</a></li>
          <li><a href="http://artsy.github.io/blog/2015/08/06/open-sourcing-energy/">Open Sourcing Energy</a></li>
          <li><a href="http://artsy.github.io/blog/2016/07/03/handling-big-projects/">Handling Large OSS Projects Defensively</a></li>
          <li><a href="http://artsy.github.io/blog/2014/06/20/artsys-first-closed-source-pod/">Artsy's First Closed Source Pod</a></li>
          <li><a href="http://artsy.github.io/blog/2017/01/04/OSS-FAQ/">Open source FAQ for Artsy Engineers</a></li>
        </ul>
      </div>
    </div>


    <div className="slide container project">
      <div className=" clearfix grid_3 ">
        <h2>Flow for VSCode</h2>
        <p>I took over maintenance of a well-used extension for the last few years without using it myself.</a>
      </div>

      <div className="clearfix grid_3">
        <h2>VSCode Jest</h2>
        <p>I started, and handed-off a well-used VS Code extension for Jest.</p>
      </div>

      <div className="clearfix grid_3">
        <h2>RFC process at Artsy</h2>
        <p>I created a process for improving processes by taking the best ideas from big OSS projects.</p>
      </div>

      <div className=" clearfix grid_3 omega">
        <h2>Artsy Engineering Principles</h2>
        <p>I <a href="https://github.com/artsy/README/blob/master/culture/engineering-principles.md">documented</a> the things that makes Engineering unique.</p>
      </div>
    </div>

    <div className=" clearfix grid_12"></div>

    <div className="slide container project">
      <div className=" clearfix grid_3 ">
        <h2>Jest Core</h2>
        <p>I help out with the Jest testing library for JavaScript.</a>
      </div>

      <div className="clearfix grid_3">
        <h2>Komondor</h2>
        <p>I ported over a JS tool for <a href="https://github.com/orta/Komondor">git-hooks</a> to Swift.</p>
      </div>

      <div className="clearfix grid_3">
        <h2>cocoapods-fix-RN</h2>
        <p>I built a CocoaPods Plugin to automatically <a href="https://github.com/orta/cocoapods-fix-react-native">host-fix</a> React Native with CocoaPods.</p>
      </div>

      <div className=" clearfix grid_3 omega">
        <h2>PackageConfig</h2>
        <p>I built a SwiftPM package for  <a href="https://github.com/orta/PackageConfig">consolidating</a> the configuration for build tools.</p>
      </div>
    </div>

    <div className=" clearfix grid_12"></div>

    <div className="slide container project">
      <div className=" clearfix grid_3 ">
        <h2>Static Site Comments</h2>
        <p>I built a system for using GitHub issues for comments on static sites, see the <a href="http://artsy.github.io/blog/2017/07/15/Comments-are-on/">blog post</a> on the Artsy blog.</a>
      </div>

      <div className="clearfix grid_3">
        <h2>Peer Labs</h2>
        <p>I have co-run a <a href="https://peerlab.community">Peer Lab in NYC</a> for three years.</p>
      </div>

      <div className=" clearfix grid_3">
        <h2>Artsy x React Native</h2>
        <p>I co-ran <a href="https://artsy.net/x-react-native">a conference</a> at Facebook London for iOS developers looking to understand React Native better.</p>
      </div>

      <div className="clearfix grid_3 omega">
        <h2>JavaScriptures</h2>
        <p>I helped run a public <a href="http://artsy.github.io/series/javascriptures/">set of workshops</a> teaching how each part of the JavaScript stack at Artsy works.</p>
      </div>
    </div>

    <div className=" clearfix grid_12"></div>

    <div className="slide container project">
      <div className=" clearfix grid_3 ">
        <h2>Specta/Expecta</h2>
        <p>I took over maintenance of <a href="https://github.com/specta/specta/">Specta</a> and <a href="https://github.com/specta/expecta/">Expecta</a>, the  BDD testing frameworks for the Cocoa community.</a>
      </div>

      <div className="clearfix grid_3">
        <h2>RxSwift</h2>
        <p>I provide an odd, but interesting, mentorship role to the <a href="https://github.com/ReactiveX/RxSwift/">RxSwift project</a>.</p>
      </div>

      <div className="clearfix grid_3">
        <h2>Pursuit</h2>
        <p>I help out at a <a href="http://c4q.nyc">non-for-profit</a> bringing new people into the tech sphere in NYC.</p>
      </div>

      <div className=" clearfix grid_3 omega">
        <h2>Swift at Artsy</h2>
        <p>Resources for 3 learn Swift courses for anyone to run in their own company. 2 years running now.</p>
      </div>
    </div>

    <div className=" clearfix grid_12"></div>

    <div className="slide container project">
      <div className=" clearfix grid_3 ">
        <h2>CocoaPods Quality Metrics</h2>
        <p>I spent a year talking and figuring out how to provide <a href="https://guides.cocoapods.org/making/quality-indexes.html">useful metrics</a> on the quality of a library in the Cocoa ecosystem.</a>
      </div>

      <div className="clearfix grid_3">
        <h2>CocoaPods Stats</h2>
        <p>CocoaPods became the first dependency manager to actually say how many projects are using your library. Others provide raw download numbers which are easily skewed.</p>
      </div>

      <div className=" clearfix grid_3">
        <h2>VS Code Extensions</h2>
        <p>Only <a href="https://github.com/orta/vscode-ios-common-files">Common Files</a> and <a href="https://github.com/orta/vscode-danger">Danger</a> ATM.</p><p>Seriously though, credit goes to Microsoft for the amazing editor.</p>
      </div>

      <div className="clearfix grid_3 omega">
        <h2>CocoaPods Embedded Search</h2>
        <p>The CocoaPods website now provides enough information that you don't need to open the homepage of a Pod to make a decision on it's value.</p>
      </div>
    </div>

    <div className=" clearfix grid_12"></div>

    <div className="slide container project">
      <div className="clearfix grid_3 ">
        <h2>Cocoa Kucha / Komitteee</h2>
        <p><a href="http://blog.cocoapods.org/Cocoa-Kucha">Global</a> <a href="http://blog.cocoapods.org/Cocoa-Kucha-2">community</a> <a href="http://blog.cocoapods.org/Cocoa-Kucha-3-Berlin">outreach</a>. Hanging out with cool CocoaPods users around the world and requesting that they talk about their work.</p>
      </div>

      <div className="clearfix grid_3 ">
        <h2>CocoaPods Guides</h2>
        <p>I consolidated all of the CocoaPods documentation, and reference materials into a <a href="http://guides.cocoapods.org">single website</a>.</p>
      </div>

      <div className="clearfix grid_3">
        <h2>AppCode Settings</h2>
        <p>A <a href="https://github.com/orta/AppCode">maintained and opinionated collection</a> of settings for AppCode. You should experiment with it.</p>
      </div>

      <div className="clearfix grid_3 omega">
        <h2>Life issues</h2>
        <p>I started keeping track of things I need to do in <a href="https://github.com/orta/life">a github life</a> issues. You should too.
	</p>
      </div>
    </div>

    <div className=" clearfix grid_12"></div>

    <div className="clearfix slide container project">
      <div className="grid_3 clearfix">
        <h2>pt</h2>
        <p><a href="https://github.com/raul/pt">pt</a> is a gem that is a command line interface to pivotal tracker. It's a much faster way to create new issues, and to get an overview of your things to do.</p>
      </div>

      <div className=" clearfix grid_3">
        <h2>ARAnalytics</h2>
        <p>A <a href="https://github.com/orta/ARAnalytics">generic API</a> for different analytics platforms on iOS. A useful library used in 5 apps of mine now.</p>
      </div>

      <div className=" clearfix grid_3">
        <h2>ORStackView</h2>
        <p>You can't trick me. It's stacks all the way down. <a href="https://github.com/orta/ORStackView">Artsy's iOS app lives by this motto.</a></p>
        <p>Apple deprecated me - whoooo!</p>
      </div>

      <div className=" clearfix grid_3 omega">
        <h2>chairs</h2>
        <p>Chairs makes <a href="https://github.com/orta/chairs">hot-swapping iOS simulator app directories</a> easy. Dealing with migrations and large syncs is now not so time consuming.</p>
      </div>

      <div className=" clearfix grid_12"></div>

      <div className="slide container project">
        <div className=" clearfix grid_3 ">
          <h2>WibbleQuest</h2>
          <p>I wrote a <a href="http://wibblequest.com">text adventure game framework</a> to help kids learn objective-c. I nowadays I make people presents in the form of simple games with this.</p>
        </div>

        <div className=" clearfix grid_3">
          <h2>SpeedS@ver</h2>
          <p>A <a href="https://github.com/orta/SpeedS-ver">screensaver for the Mac</a> showing people completing videogames so you don't have to.</p>
        </div>

        <div className=" clearfix grid_3 omega">
          <h2>Wallpapers</h2>
          <p>The easiest way to set your desktop background to some <strong>awesome</strong> wallpapers. Powered by the reddit search from GIFs. <a href="https://github.com/orta/Wallpapers">Check it here.</a></p>
        </div>

        <div className=" clearfix grid_3">
          <h2>NSManchester</h2>
          <p>I used to run a meetup in manchester called <a href="http://nsmanchester.github.io">NSManchester</a>. Then I moved to NYC.
    </p>
        </div>
      </div>


      <div className=" clearfix grid_12"></div>

      <div className="clearfix grid_6 project">

        <p><a href="http://wutheringbytes.com">Wuthering Bytes</a>, Hebden Bridge, England - 14th Sept 2013
	Looking after an Open Source community - <a href="https://www.youtube.com/watch?v=Kk-OHEPfxcE">video</a></p>
        <p><a href="http://nsspain.com/2013/">NSSpain</a> - Logrono, Spain - 18th Sept 2013
	From Submodules to Private Cocoapods - How to move your infrastructure to private pods for smarter dependency management.</p>
        <p><a href="http://gotocon.com/aarhus-2013/schedule/tuesday.jsp">goto; conference</a> - Aarhus, Denmark - 1st Oct 2013
	CocoaPods, the Objective-C Dependency Manager We've Been Waiting For. - <a href="https://www.youtube.com/watch?v=2WlVQmPUqE8">video</a></p>
        <p><a href="http://2014.mceconf.com">Mobile Central Europe</a> - Warsaw, Poland - 11th Jan 2014
	CocoaPods and the road to 1.0 - <a href="http://www.youtube.com/watch?v=xN5-nDZpuBU">video</a> <a href="https://speakerdeck.com/orta/cocoapods-the-road-to-1-dot-0">slides</a></p>
        <p>Nickelodeon HQ - NYC, USA - 31st Jan 2014
	How does CocoaPods work?</p>
        <p><a href="http://2014.snow-mobile.org">Snow*Mobile</a> - Madison, WI, USA - Feb 21st 2014
	CocoaPods and the road to 1.0 - <a href="https://speakerdeck.com/orta/snow-star-mobile-cocoapods">slides</a></p>
        <p>Tumblr HQ - NYC, USA - 26th Feb 2014
	How to hijack an Open Source Community for Internet Points</p>
        <p><a href="http://mdevcon.com/2014/posts/2014/01/09/orta-therox-fabio-pelosin/">mdevcon</a> - Amsterdam, The Netherlands - March 8th 2014
	CocoaPods and the road to 1.0</p>
        <p><a href="http://2014.istanbultechtalks.com">Istanbul Tech Talks</a>, Istanbul, Turkey - 28th April 2014
	Mobile and the Art world - <a href="https://www.youtube.com/watch?v=tmWSGZkOSa0&amp;spfreload=10">video</a></p>
        <p><a href="http://2014.uikonf.com">UIKonf</a> - Berlin, Germany - 16th May 2014
	CocoaPods and Documentation - <a href="https://speakerdeck.com/orta/the-future-of-cocoapods-trunk-and-cocoadocs-2">slides</a> <a href="https://www.youtube.com/watch?v=TDAKOYQ7B-4">video</a></p>
        <p><a href="http://blog.cocoapods.org/CocoaPods-WWDC-Party/">CocoaPods State of the Union</a> - San Francisco, USA - 2nd June 2014
	Host, and gave overview of what has happened in the year.</p>
      </div>

      <div className="clearfix grid_6 omega project">
        <p>Altconf - San Francisco, USA - 3rd Jun 2014
	Project Eigen Post Mortem - <a href="https://www.youtube.com/watch?v=2DvDeEZ0NDw">video</a> <a href="https://speakerdeck.com/orta/getting-eigen-out">slides</a></p>
        <p><a href="http://www.meetup.com/CocoaHeads-Stockholm/events/191411172/">CocoaHeads StockHolm</a>, Stockholm, Sweden - July 7th 2014
	Ways to Start Open Source</p>
        <p>Gilt HQ - NYC, USA 20th August
	iOS at Artsy - <a href="https://speakerdeck.com/orta/ios-at-artsy">slides</a></p>
        <p>Brooklyn iOS - NYC, USA - 21st August 2014
	iOS at Artsy - <a href="https://speakerdeck.com/orta/ios-at-artsy">slides</a></p>
        <p><a href="http://pragmamark.org/events/pragma-conference-2014/">#pragma mark</a>, Milan, Italy. 3rd October 2014
	CocoaPods</p>
        <p><a href="https://tech.yandex.com/events/yac/2014/">Yet Another Conference</a>, Moscow Russia, 30th October 2014
	Tools, Testing and new New Team Members. The Story of Post 1.0 App - <a href="https://events.yandex.ru/lib/talks/2386/">video</a></p>
        <p><a href="http://www.meetup.com/Brooklyn-Swift-Developers/events/215252432/">Brooklyn Swift Developers</a> - NYC, USA - November 13th, 2014
	Swift Under the Deadline - <a href="https://vimeo.com/112326724">video</a> <a href="https://speakerdeck.com/orta/swift-on-a-deadline">slides</a></p>
        <p><a href="http://www.cocoaheadsnyc.org/2015/04/02/april-2015/">CocoaHeads NYC</a> - April 9th 2015
	How the Artsy Mobile Team works in the Open</p>
        <p>New York Times HQ - 14th April 2015
	How the Artsy Mobile Team works in the Open</p>
        <p><a href="http://selfconference.org/schedule">Self Conference</a> - Detroit, NYC - 30th May 2015
	Contributing to Open Source Doesn’t Require Changing the World</p>
        <p><a href="http://blog.cocoapods.org/2015-CocoaPods-State-of-the-Union/">CocoaPods State of the Union</a> - San Francisco, USA - 8th June 2015
	Host, and gave overview of what has happened in the year.</p>
        <p><a href="http://altconf.com/schedule/">Altconf</a> - San Francisco - 9th June 2015
	Being Nice in Open Source - <a href="https://realm.io/news/altconf-orta-therox-being-nice-in-open-source/">video</a></p>
        <p><a href="http://mo.dev.by/english.html">MobileOptimized</a> - Minsk, Belarus - 14th July 2015
	Being Nice in Open Source - <a href="https://speakerdeck.com/orta/being-nice-is-nice">slides</a></p>
      </div>


      <div className="slide" >
        <div className="container clearfix">

          <div className="grid_6">
            <h4>whoami?</h4>
            <p>ortatherox NYC/UK</p>
            <p>Omni-Engineer at <a href="https://artsy.net">Microsoft</a></p>
            <p><a href="mailto:from-website@orta.io">from-website@orta.io</a></p>
            <p>I rarely blog here: <a href="http://orta.io/rebase">orta.io/rebase</a></p>
            <p>I write tech here: <a href="http://artsy.github.io">artsy.github.io</a></p>
            <p>I make stuff here: <a href="http://github.com/orta">github.com/orta</a></p>
            <p>I natter here: <a href="http://twitter.com/orta">twitter.com/orta</a></p>
          </div>
          <div className="grid_6 omega">
            <h4>non-technical bestof?</h4>
            <ul>
              <li>On being <a href="/on/being/23">23</a>, <a href="/on/being/24">24</a>, <a href="/on/being/25">25</a>,  <a href="/on/being/26/">26</a>, <a href="/on/being/27">27</a>, <a href="/on/being/28">28</a> <a href="/on/being/29">29</a>, <a href="/on/being/30">30</a>, <a href="/on/being/31">31</a> <a href="/on/being/32">32</a> &amp; <a href="/on/being/33">33</a>.</li>
              <li><a href="http://orta.github.io/on_making/iphone/games/">old, old iPhone games</a></li>
              <li><a href="http://kieronononon.heroku.com">My old band of 7 years, Kieronononon</a></li>
              <li><a href="http://orta.github.io/rebase/on/overusing/keyboards/">Essential keyboard shortcuts</a></li>
            </ul>
            <img src="http://ortastuff.s3.amazonaws.com/site/images/kkkl320-2.jpg" width="50%" alt="OK COOL" />
          </div>

        </div>
      </div>




      <p><a href="http://twitter.com/orta"><img src="http://ortastuff.s3.amazonaws.com/site/images/twitter_black.png" /></a></p>



      <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
    </div>
  </>
)

export default Home
