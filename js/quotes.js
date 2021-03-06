document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    {
      quote:
        'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      author: 'Nelson Mandela',
    },
    {
      quote: 'The way to get started is to quit talking and begin doing.',
      author: 'Walt Disney',
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      author: 'Steve Jobs',
    },
    {
      quote:
        'If life were predictable it would cease to be life, and be without flavor.',
      author: 'Eleanor Roosevelt',
    },
    {
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: 'Oprah Winfrey',
    },
    {
      quote:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: 'James Cameron',
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: 'John Lennon',
    },
    {
      quote:
        'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
      author: 'Mother Teresa',
    },
    {
      quote:
        'When you reach the end of your rope, tie a knot in it and hang on.',
      author: 'Franklin D. Roosevelt',
    },
    {
      quote:
        'Always remember that you are absolutely unique. Just like everyone else.',
      author: 'Margaret Mead',
    },
    {
      quote:
        "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      author: 'Robert Louis Stevenson',
    },
    {
      quote:
        'The future belongs to those who believe in the beauty of their dreams.',
      author: 'Eleanor Roosevelt',
    },
    {
      quote:
        'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
      author: 'Benjamin Franklin',
    },
    {
      quote:
        'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
      author: 'Helen Keller',
    },
    {
      quote:
        'It is during our darkest moments that we must focus to see the light.',
      author: 'Aristotle',
    },
    {
      quote: 'Whoever is happy will make others happy too.',
      author: 'Anne Frank',
    },
    {
      quote:
        'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      author: 'Ralph Waldo Emerson',
    },
    {
      quote:
        'You will face many defeats in life, but never let yourself be defeated.',
      author: 'Maya Angelou',
    },
    {
      quote:
        "In the end, it's not the years in your life that count. It's the life in your years.",
      author: 'Abraham Lincoln',
    },
    {
      quote:
        'Never let the fear of striking out keep you from playing the game.',
      author: 'Babe Ruth',
    },
    {
      quote: 'Life is either a daring adventure or nothing at all.',
      author: 'Helen Keller',
    },
    {
      quote:
        "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      author: 'Thomas A. Edison',
    },
    {
      quote:
        'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
      author: 'Dr. Seuss',
    },
    {
      quote:
        'If life were predictable it would cease to be life and be without flavor.',
      author: 'Eleanor Roosevelt',
    },
    {
      quote:
        'Life is a succession of lessons which must be lived to be understood.',
      author: 'Ralph Waldo Emerson',
    },
    {
      quote:
        'Life is never fair, and perhaps it is a good thing for most of us that it is not.',
      author: 'Oscar Wilde',
    },
    {
      quote: 'The only impossible journey is the one you never begin.',
      author: 'Tony Robbins',
    },
    {
      quote:
        'In this life we cannot do great things. We can only do small things with great love.',
      author: 'Mother Teresa',
    },
    {
      quote: 'Only a life lived for others is a life worthwhile.',
      author: 'Albert Einstein',
    },
    {
      quote: 'The purpose of our lives is to be happy.',
      author: 'Dalai Lama',
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: 'John Lennon',
    },
    {
      quote: 'You only live once, but if you do it right, once is enough',
      author: 'Mae West',
    },
    {
      quote: 'Live in the sunshine, swim the sea, drink the wild air.',
      author: 'Ralph Waldo Emerson',
    },
    {
      quote:
        "Go confidently in the direction of your dreams! Live the life you've imagined.",
      author: 'Henry David Thoreau',
    },
    {
      quote:
        'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      author: 'Nelson Mandela',
    },
    {
      quote: 'Life is really simple, but we insist on making it complicated.',
      author: 'Confucius',
    },
    {
      quote: 'May you live all the days of your life.',
      author: 'Jonathan Swift',
    },
    {
      quote: 'Life itself is the most wonderful fairy tale.',
      author: 'Hans Christian Andersen',
    },
    {
      quote: 'Do not let making a living prevent you from making a life.',
      author: 'John Wooden',
    },
    {
      quote: 'Life is ours to be spent, not to be saved.',
      author: 'D. H. Lawrence',
    },
    {
      quote:
        "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
      author: 'Marilyn Monroe',
    },
  ];

  const quote = document.querySelector('#quote');
  const author = document.querySelector('#quote-wrapper .author');
  const random_quote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = random_quote.quote;
  author.innerText = random_quote.author;
});
