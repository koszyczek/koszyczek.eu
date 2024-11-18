
const nightscoutUrl = 'https://web-production-4268.up.railway.app/api/v1/entries.json?count=1';


fetch(nightscoutUrl)
  .then(response => response.json())
  .then(data => {
    if (data && data.length > 0) {
      const latestEntry = data[0];
      const bloodSugar = latestEntry.sgv;
      const direction = latestEntry.direction;

      // Map trend directions to arrows
      const directionArrows = {
        'Flat': '→',
        'SingleUp': '↑',
        'DoubleUp': '↑↑',
        'SingleDown': '↓',
        'DoubleDown': '↓↓',
        'FortyFiveUp': '↗',
        'FortyFiveDown': '↘'
      };

 
      const nightscoutElement = document.getElementById('nightscout');
      if (nightscoutElement) {
        nightscoutElement.textContent = `${bloodSugar} mg/dL`;
      }
    } else {
      document.getElementById('nightscout').innerHTML = "No data available.";
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('nightscout').innerHTML = "Error fetching data.";
  });

  var strings = [    
    "Fuck you Bridget - Lurit",
    "öö - estonia - Lurit",
    "Cheese.  - Lurit",
     "I am sucking a tank exhaust - Lurit",
     "GLORY TO JOHN DILLLERRMANDD - Lurit",
     "sperma byka - Królowa Loda",
     "România Markiplier - Solus",
"you know what? I could massacre and nail leftists to the fence - Królowa Loda",
"fuck you bridget - KinitoPET (may or may not be real)",
"if i wont kill myself in 2024 ill become an furry artist - Bridget",
"flif floneee!! yippiee!! - Dani",
"co do sigmy - Dani",
"PLEASE VC WITH ME IM BEGGING YOU - Bridget to Dani",
"come listen to femtanyl, we have: ear damage - FLXY",
"I ATE HEAPS OF TIDE PODS IN 2017 - Bridget",
"This video definitely tickled my funny bone! 😂🦴 I ABSOLUTELY gotta let my bookclub know about this! - Leafy",
"hows it like in school? have they beaten you up yet? - Królowa Loda (org. message in polish)",
"I ever tell you about the time Keith and I made fireworks? - Ellis (from L4D2)",
"you look like if a man and a woman had a child - Ethera",
"REST IN PEACE: KOSZYCZEK.GITHUB.IO (MAY 17TH 2023 - 15TH NOVEMBER 2024)",
];
  window.onload = function() {
      var randomIndex = Math.floor(Math.random() * strings.length);
      var randomString = strings[randomIndex];
      document.getElementById("randomString").textContent = randomString;
  };

