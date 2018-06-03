import React, { Component } from 'react';
import TwitterLogo from "./icons/twitter.png"

class RandomQuoteGen extends Component {

  constructor(props) {
    super(props);
    this.randomQuote = this.randomQuote.bind(this);
    this.state = {
      quotes: [
        'If you want to achieve greatness stop asking for permission. ~Anonymous',
        'Things work out best for those who make the best of how things work out. ~John Wooden',
        'To live a creative life, we must lose our fear of being wrong. ~Anonymous',
        'If you are not willing to risk the usual you will have to settle for the ordinary. ~Jim Rohn',
        'Trust because you are willing to accept the risk, not because it’s safe or certain. ~Anonymous',
        'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. ~Swami Vivekananda',
        'All our dreams can come true if we have the courage to pursue them. ~Walt Disney',
        'Good things come to people who wait, but better things come to those who go out and get them. ~Anonymous',
        'If you do what you always did, you will get what you always got. ~Anonymous',
        'Success is walking from failure to failure with no loss of enthusiasm. ~Winston Churchill',
        'Just when the caterpillar thought the world was ending, he turned into a butterfly. ~Proverb',
        'Successful entrepreneurs are givers and not takers of positive energy. ~Anonymous',
        'Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them. ~Vaibhav Shah',
        'Opportunities don’t happen, you create them. ~Chris Grosser',
        'Try not to become a person of success, but rather try to become a person of value. ~Albert Einstein',
        'Great minds discuss ideas; average minds discuss events; small minds discuss people. ~Eleanor Roosevelt',
        'I have not failed. I’ve just found 10,000 ways that won’t work. ~Thomas A. Edison',
        'If you don’t value your time, neither will others. Stop giving away your time and talents- start charging for it. ~Kim Garst',
        'A successful man is one who can lay a firm foundation with the bricks others have thrown at him. ~David Brinkley',
        'No one can make you feel inferior without your consent. ~Eleanor Roosevelt',
        'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it. ~Henry Ford',
        'If you’re going through hell keep going. ~Winston Churchill',
        'The ones who are crazy enough to think they can change the world, are the ones that do. ~Anonymous',
        'Don’t raise your voice, improve your argument. ~Anonymous',
        'What seems to us as bitter trials are often blessings in disguise. ~Oscar Wilde'
      ],
      selectedQuote: null
    };
  }

  randomQuote() {
    const randomNum = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({ selectedQuote: this.state.quotes[randomNum] });
  }

  componentWillMount() {
    this.randomQuote();
  }
  componentDidUpdate() {
    console.log(this.state.selectedQuote);
  }

  render() {
    return (
      <div>
        <Quote
          randomQuote={this.randomQuote}
          selectedQuote={this.state.selectedQuote}
        />
      </div>
    );
  };
}

const Quote = (props) => {
  const tweetURL = "https://twitter.com/intent/tweet?text=" + props.selectedQuote;
  return (
    <div>
      <h2>{props.selectedQuote}</h2>
      <button onClick={props.randomQuote}>Get new quote</button>
      <a href={tweetURL} id="tweet-share" target="_blank">
      <img src={TwitterLogo} alt="Twitter Logo" />
      Tweet this
      </a>
    </div>
  )
}


export default RandomQuoteGen;