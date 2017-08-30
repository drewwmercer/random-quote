$(document).ready(function() {
  var randomNum;
  var randomQuote;
  var randomAuthor;

  getQuote();

  function getQuote() {
    var quotes = [
      "“Just go. Go see all the beauty in the world.”",
      "“Travel is  fatal to prejudice, bigotry, and narrow mindedness, and many of our people need it sorely on these accounts.”",
      '"The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.”',
      "“If you think adventure is dangerous, try routine, it is lethal.”",
      "“Great things never came from comfort zones.”",
      "“Don't listen to what they say, go see.”",
      "“Oh, the places you'll go!",
      "“Travel…the best way to be lost and found at the same time.”",
      "“This heart of mine was made to travel this world”",
      "“I travel not to go anywhere, but to go. I travel for travel's sake.”",
      "“I don\'t know where I\'m going, but I\'m on my way.",
      '“Let\'s find some beautiful place to get lost.”',
      "“The journey is my home.”"
    ];
    var authors = [
      "~ Unknown",
      "~ Mark Twain",
      "~ Marcel Proust",
      "~ Unknown",
      "~ Unknown",
      "~ Chinese Proverb",
      "~ Dr. Seuss",
      "~ Brenna Smith",
      "~ Unknown",
      "~ Unknown",
      "~ Unknown",
      "~ Unknown",
      "~ Unknown"
    ];

    randomNum = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];

    $(".randomQuote").text(randomQuote);
    $(".quoteAuthor").text(randomAuthor);
  }

  $("#newQuote").on("click", function() {
    getQuote();
  });

  $("#tweet").on("click", function() {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        randomQuote +
        " " +
        randomAuthor
    );
  });
});

// var quotes = new Array(, '“If you are always trying to be normal, you will never know how amazing you can be.”', '“Stop worrying about the potholes in the road and enjoy the journey.”', '“Fear is only temporary. Regrets last forever.”', '“Life begins at the end of your comfort zone.”', '“Travel does not become adventure until you leave yourself behind.”', '“Climb the mountain so you can see the world, not so the world can see you."', '“Man cannot discover new oceans unless he has the courage to lose sight of the shore.” ~ Andre Gide', '“It is not the destination where you end up, but the mishaps and memories you create along the way.”', '“I would rather own a little and see the world, than own the world and see a little of it.”', '“It is better to see something once than to hear about it a thousand times.”', '“The real voyage of discovery consists not in seeking new landscapes, but having new eyes.”', '“Live with no excuses and travel with no regrets.”', '“We travel not to escape life but for life not to escape us.”', '“People don\'t take trips, trips take people.”', '“Travel makes one modest, you see what a tiny place you occupy in the world.”', '“Like all great travellers, I have seen more than I remember and remember more than I have seen.”', '“Whenever you find yourself on the side of majority, it\'s time to pause and reflect.”', '“Those who follow the crowd usually get lost in it.”', '“The world is changed by your example, not your opinion.”', '“To travel is to discover that everyone is wrong about other countries.”', '“You must be the change you wish to see in the world.”', '“Don\'t quit your day dream.”', '“There\'s a sunrise and sunset every single day, and they\'re absolutely free. Don\'t miss so many of them.”', '“Life isn\'t about finding yourself. Life is about creating yourself.”', '“If your ship doesn\'t come in, swim out to it.”', '“Because when you stop and look around, this life is pretty amazing.”', '“Without new experiences something inside us sleeps. The sleeper must awaken.”', '“Doing what you like is freedom, liking what you do is happiness.”', '“You only live once, but if you do it right, once is enough.” ~ Mae West', '"The impulse to travel is one of the hopeful symptoms of life.”', '“I\'m in love with cities I\'ve never been to and people I\'ve never met.”', '“It\'s a big world out there, it would be a shame not to experience it.”', '“You can shake the sand from your shoes, but not from your soul.”', '“I want to make memories all over the world.”', '“Someday I\'m going to be free and I\'m going to travel the world.”', '“We wander for distraction, but we travel for fulfillment.”', '“It doesn\'t matter where you\'re going, it\'s who you have beside you.”', '“Traveling is not something you\'re good at. It\'s something you do, like breathing.” ~ Gayle Foreman', '“All we have to decide is what to do with the time that is given us.”', '“Let your memory be your travel bag.”', '“It feels good to be lost in the right direction.”', '“Traveling allows you to become so many different versions of yourself.”', '“Travel has a way of stretching the mind.”', , '“Wandering re-establishes the original harmony which once existed between man and the universe.”', '“All journeys have secret destinations of which the traveler is unaware.”', '“A journey is best measured in friends rather than miles.”')
