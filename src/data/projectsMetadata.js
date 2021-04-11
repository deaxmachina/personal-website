

const projectsMetadata = [
  {
    id: 'anime-timeline', 
    title: "Timeline of Anime",
    websiteUrl: "https://animetimeline.netlify.app/",
    imgUrl: 'https://live.staticflickr.com/65535/51100639753_1f4281a9e2_o.png',
    smallImgUrl: 'https://live.staticflickr.com/65535/51100904620_e7c1a12e14_o.png',
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100639753_1f4281a9e2_o.png",
    individualPageSmallImgUrl: 'https://live.staticflickr.com/65535/51100904620_e7c1a12e14_o.png',
    backgroundColour: "#4E1B34",
    responsibleFor: 'data preparation, visualisation, website',
    tools: 'D3.js, React, Python',
    client: <em>personal project</em>,
    description: 
    <>
      <p>
        As an avid Japanese anime fan, I started this project with the idea of expressing through visualisation 
        the evolution of anime genres over time. Was sci-fi more popular in the 90s, were the 2000s truly the 
        ‘golden age’ of anime, and if so, what genres were prevalent during that time? As is often the case, 
        the story I imagined the data would tell was different to reality. 
      </p>
      <br />
      <p>
        The evolution of anime is a topic worthy of proper exploration, but I decided to leave this task to 
        another day, and instead create an exploratory anime timeline. I used data from the popular anime fansite 
        MyAnimeList, sorted the anime of each year by user rating (vertical axis) and popularity 
        (size of the shape for each anime) and coloured the shapes that make up each anime representation by their 
        genres, choosing colours which vaguely represent more or less serious/fun genres. The result is something 
        akin to an anime ‘dashboard’ that can be used as a recommendation engine, to spot your favourite series or 
        find similar ones, to explore your taste in genres, or see at a glance what was popular over the years. 
      </p>
      <br />
      <p>
        Creating this project was a very enjoyable experience for me, and I decided to adapt a simpler version 
        to use when teaching the basics of D3 to a Japanese 
        audience. <a style={{color: "#4E1B34"}} className="link-project" href="https://animetimelinedemo.netlify.app/" target="_blank">Here</a> is
        the version I used for a D3 talk 
        I gave at LeWagon Tokyo; the GitHub repository is  
        over <a style={{color: "#4E1B34"}} className="link-project" href="https://github.com/deaxmachina/lewagon_demo_vanilla" target="_blank">here</a>.
      </p>
    </>
        
  },
  {
    id: 'japanese-earthquakes', 
    title: "Earthquake Disasters in Japan",
    websiteUrl: "https://japan-earthquakes.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100108341_dffc0a04d8_o.png",
    backgroundColour: "#286380",
    responsibleFor: 'data preparation, visualisation, website',
    tools: 'D3.js, React, GSAP, Python',
    client: <>individual project while at <em>the University of Tokyo</em></>,
    description:
    <>
      <p>
        Between September 2020 and March 2021, I worked on a project to record the memories of survivors of 
        the 2011 Tohoku earthquake and tsunami disaster in north Japan. I wanted to find out more about the 
        history of earthquakes in Japan and set out to create this visualisation, where you can see the magnitude 
        and number of casualties over time side by side. 2011 saw the biggest earthquake in recorded Japanese history, 
        but the deadliest one (1923 Kanto) was by far smaller in intensity. This project is by no means an in-depth 
        representation of the history of these devastating natural phenomena, but simply a humble attempt to 
        understand the most basic facts around them. 
      </p>
    </>
  },
  {
    id: 'iwate-archive', 
    title: "Tohoku Earthquake 10th Anniversary Archive",
    websiteUrl: "https://311narratives.archiving.jp",
    imgUrl: "https://live.staticflickr.com/65535/51100202969_ab9cbb0a93_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100202969_ab9cbb0a93_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100210929_d1f6d1a474_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100210929_d1f6d1a474_o.png",
    backgroundColour: "#222E3A",
    responsibleFor: 'data analysis, NLP, visualisation, website',
    tools: 'D3.js, React, Python (spaCy)',
    client: <><b>client:</b> <em>Iwate Nippo岩手日報</em></>,
    description:  
    <>
      <p>
        At the start of my time at 
        the <a style={{color: "#222E3A"}} className="link-project" href="https://labo.wtnv.jp/" target="_blank">Watanave Lab</a> at
        the University of Tokyo in 2020, 
        I was invited to take part in a project with a prominent local news agency in Iwate 
        prefecture in north 
        Japan - <a style={{color: "#222E3A"}} className="link-project" href="https://www.iwate-np.co.jp/" target="_blank">Iwate Nippo</a>.
        The objective was to create an archive to
        preserve the thoughts, memories and narratives of survivors of 
        the <a a style={{color: "#222E3A"}} className="link-project" href="https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami" target="_blank">2011 Tohoku earthquake and tsunami disaster</a>,
        using the content of over 500 interviews. This included people’s 
        movements after 11th March 2011, their thoughts to their deceased loved ones, the 
        rebuilding of their homes, and their experiences over those 10 years. 
      </p>
      <br />
      <p>
        This was my first client project in data visualisation, and a rather important one. 
        It was a challenge to perform linguistic analysis (NLP) on Japanese text for the first time, 
        build a production website for the first time, and create both standard and custom visualisations 
        in D3, which was very new to me at the time, while being respectful of the content and 
        design/representation wishes of the client. I did not want to get anything wrong. 
      </p>
      <br />
      <p>
        I was humbled by the experience of working so closely with people who have lived through this 
        disaster, and by the trust placed in me, a non-Japanese non-native speaker, to work with this
        valuable data. My talented colleague, Dr Takata Yurina created 
        a <a style={{color: "#222E3A"}} className="link-project" href="https://311stories.archiving.jp/" target="_blank">map of the movements</a> of
        people whose homes were destroyed – many of them moving over 4 times in the past 10 years. 
        The full archive page can be viewed on 
        on <a style={{color: "#222E3A"}} className="link-project" href="https://www.iwate-np.co.jp/page/higashinihon2021#01-01" target="_blank">the Iwate Nippo website</a>.     
      </p>

    </>
  },
  {
    id: 'co2-emissions', 
    title: "CO2 Emissions in Cities",
    websiteUrl: "https://co2cities.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100260017_687728e4c8_o.png",
    backgroundColour: "#2E5659",
    responsibleFor: 'data preparation, visualisation, website',
    tools: 'D3.js, React, Python',
    client: <>for <em>2021 Climate Crisis AI Hackathon</em></>,
    description: 
    <>
      <p>
        This visualisation of CO2 & other greenhouse gas emissions in cities worldwide was completed 
        over one weekend (~30 hours) in January 2021 as part of 
        the <a href="https://climate-crisis.devpost.com/" style={{color: "#2E5659"}} className="link-project" target="_blank">2021 Climate Crisis AI Hackathon </a> by <a href="https://launchlab.ai/" style={{color: "#2E5659"}} className="link-project" target="_blank">AI Launch Lab</a>. The 
        challenge setter 
        was <a href="https://www.climatereality.ca/" style={{color: "#2E5659"}} className="link-project" target="_blank">The Climate Reality Project Canada</a>. 
      </p>
      <br />
      <p>
        The visualisation can be used to view average CO2 emissions of cities worldwide at a glance, 
        as well as to dive into the data, for the years it is available for, for a specific city – 
        both its emissions and trends over time. 
      </p>
    </>
  },
  {
    id: 'olympics-museum', 
    title: "Tokyo Olympics Museum School Trip",
    websiteUrl: "https://olympics.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100179841_0cfe4b31b2_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100319547_51b0024bbb_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100179841_0cfe4b31b2_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100319547_51b0024bbb_o.png",
    backgroundColour: "#A62343",
    responsibleFor: 'data collection, visualisation, website',
    tools: 'D3.js, React, Rough.js, Python',
    client: <>for <em>the University of Tokyo</em></>,
    description:  
    <>
      <p>
        Between Nov 2020 and Feb 2021, I worked on a collaborative project between the Universities 
        of Tokyo and Tsukuba, coordinated by teaching bodies in Japan, with the purpose of producing 
        materials for classroom study prior to school trips to 
        the <a href="https://japan-olympicmuseum.jp/en/" style={{color: "#A62343"}} className="link-project" target="_blank">Olympics Museum in Tokyo</a>.
        The target audience was secondary school students in schools all around Japan. 
      </p>
      <p>
        The questions and accompanying visualisations serve the purpose of cues for group discussions among 
        the students before they visit the museum and aim to bring up important topics around the history 
        and goals of the Olympics and Paralympics. The current iteration is a rough draft, or a PoC to show 
        what is possible through the use of interactive visualisations. 
        The Japanese version can be found <a href="https://olympicsjp.netlify.app/" style={{color: "#A62343"}} className="link-project" target="_blank">here</a>.
      </p>
    </>
  },
  {
    id: '100days-d3', 
    title: "100 Days of D3.js",
    websiteUrl: "https://100daysd3.netlify.app/",
    imgUrl: "https://live.staticflickr.com/65535/51100815013_3dd02d1252_o.png",
    smallImgUrl: "https://live.staticflickr.com/65535/51100815013_3dd02d1252_o.png",
    individualPageImgUrl: "https://live.staticflickr.com/65535/51100815013_3dd02d1252_o.png",
    individualPageSmallImgUrl: "https://live.staticflickr.com/65535/51100815013_3dd02d1252_o.png",
    backgroundColour: "#6C6874",
    responsibleFor: 'data preparation, visualisation',
    tools: 'D3.js, React, Python',
    client: <em>personal project</em>,
    description: 
    <>
      <p>
        In 2020, I started my data visualization journey into D3.js. Simultaneously, I was teaching 
        myself React, while using it in real projects. I set aside time almost every day for 100 
        days to dedicate to my 100 Days of Code with D3 & React challenge, completing a variety of 
        charts and custom visuals. I focused on either representing data which I deem (socially) 
        important or on creating pieces which are fun and experimental. This website contains all 
        the stand-alone visualisations that I completed during this time. 
      </p>
    </>
  },
]


export default projectsMetadata; 