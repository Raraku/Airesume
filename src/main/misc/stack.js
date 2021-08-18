import React from "react";

export default function Stack() {
  return (
    <div>
      <h3>My Stack</h3>
      <div>
        <p>
          I work as a backend, frontend and mobile engineer and I picked up the
          basics of devops, Content Delivery System and deployment along the
          way. I consider myself a skilled unreal engine developer. I have
          deployed complex applications to the web, integrated cryptocurrency
          into fintech applications, harnessed message queues and brokers for
          instant messaging and deployed a mobile app to the Google Play Store.
        </p>
        <div>
          <Django />
          <Reacte />
          <ReactNative />
          <UnrealEngine />
          <Bash />
        </div>
      </div>
    </div>
  );
}

function Django() {
  return (
    <div>
      <h4>Django(Python)</h4>
      <div>
        Django is a python framework designed to do basically perform any and
        all backend tasks. Their official site describes it as a “high-level
        Python web framework that encourages rapid development and clean,
        pragmatic design.” I started with Django books and tutorials determined
        to get into web development and it was an enlightening experience. I
        built myriad apps and experimented freely with the framework. I
        successfully built ecommmerce applications, a scalable review service as
        well as a complex image manipulator tool. But quite early into it, I had
        personal concerns about the readability, ease and efficiency of their
        html framework and decided to find a permanent fix for that. This brings
        us to our next tool – React
      </div>
    </div>
  );
}

function Reacte() {
  return (
    <div>
      <h4>React(Javascript)</h4>
      <div>
        React is one of the best frontend libraries around.I use it majorly in
        tandem with Django to fix the shortcomings of the latter. So, I shifted
        focus to an API, JAMStack configuration. React was to act as the
        frontend and communicate to my Django Application which stored data and
        acted as a backend server. React was easy to use, unopinionated, fast
        and had very helpful vscode extensions. I built my first real
        application “elitemanga.net” with this tool. It was long, hard and
        sorely tested by limits but it gave me an in-depth understanding of
        React.
      </div>
    </div>
  );
}

function ReactNative() {
  return (
    <div>
      <h4>React Native(Javascript)</h4>
      <div>
        React Native is an ingenios way of building one application to serve a
        large number of devices. It is an embodiment of the "write once, run
        anywhere" philosophy. It is fast, efficient and versatile. React Native
        works by communicating with Java by an API and this has severely reduced
        its disadvantages compared to native languages. At the moment, I
        currently have an app on the Google Play Store, It is called RemakeU.
      </div>
    </div>
  );
}

function UnrealEngine() {
  return (
    <div>
      <h4>Unreal Engine, Golang and C++</h4>
      <div>
        C++ was the first language I learnt but I never used it for anything
        more complex than simple scripts. I learnt Golang very recently and I
        haven’t yet used the language to build anything enterprise-worthy. It is
        an enjoyable language and its ability to reduce mistakes is remarkable.
        I am currently working on a project with Unreal Engine on the making of
        a game. Unfortunately, I am not at liberty to share details at the
        moment. But, I will surely update this page when it is finally released.
      </div>
    </div>
  );
}

function Bash() {
  return (
    <div>
      <h4>Bash, Scripting and System Administration</h4>
      <div>
        I have spent my fair share of time with linux distros and docker
        containers. I learnt bash scripting and I am perfectly able of creating
        cron jobs, data backups and whatever terminal operations you require.
      </div>
    </div>
  );
}
