import React, { Component } from 'react';
import TwitterLogo from "./icons/twitter.png";
import RenewIcon from "./icons/renew.png";

class RandomQuoteGen extends Component {

  constructor(props) {
    super(props);
    this.randomQuote = this.randomQuote.bind(this);
    this.state = {
      quotes: [
        '"If you want to achieve greatness stop asking for permission."',
        '"Things work out best for those who make the best of how things work out."',
        '"To live a creative life, we must lose our fear of being wrong."',
        '"If you are not willing to risk the usual you will have to settle for the ordinary."',
        '"Trust because you are willing to accept the risk, not because it’s safe or certain."',
        '"Nothing in the world is more common than unsuccessful people with talent."',
        '"All our dreams can come true if we have the courage to pursue them."',
        '"Good things come to people who wait, but better things come to those who go out and get them."',
        '"If you do what you always did, you will get what you always got."',
        '"Success is walking from failure to failure with no loss of enthusiasm."',
        '"Just when the caterpillar thought the world was ending, he turned into a butterfly."',
        '"Successful entrepreneurs are givers and not takers of positive energy."',
        '"Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them."',
        '"Opportunities don’t happen, you create them."',
        '"Try not to become a person of success, but rather try to become a person of value."',
        '"Great minds discuss ideas; average minds discuss events; small minds discuss people."',
        '"I have not failed. I’ve just found 10,000 ways that won’t work."',
        '"If you don’t value your time, neither will others. Stop giving away your time and talents- start charging for it."',
        '"A successful man is one who can lay a firm foundation with the bricks others have thrown at him."',
        '"No one can make you feel inferior without your consent."',
        '"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it."',
        '"If you’re going through hell keep going."',
        '"The ones who are crazy enough to think they can change the world, are the ones that do."',
        '"Don’t raise your voice, improve your argument."',
        '"What seems to us as bitter trials are often blessings in disguise."'
      ],
      authors: [
        '~Anonymous',
        '~John Wooden',
        '~Anonymous',
        '~Jim Rohn',
        '~Anonymous',
        '~Anonymous',
        '~Walt Disney',
        '~Anonymous',
        '~Winston Churchill',
        '~Anonymous',
        '~Proverb',
        '~Anonymous',
        '~Vaibhav Shah',
        '~Chris Grosser',
        '~Albert Einstein',
        '~Eleanor Roosevelt',
        '~Thomas A. Edison',
        '~Kim Garst',
        '~David Brinkley',
        '~Eleanor Roosevelt',
        '~Henry Ford',
        '~Winston Churchill',
        '~Anonymous',
        '~Anonymous',
        '~Oscar Wilde'
      ],
      selectedQuote: null,
      selectedAuthor: null
    };
  }

  randomQuote() {
    const randomNum = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({ 
      selectedQuote: this.state.quotes[randomNum],
      selectedAuthor: this.state.authors[randomNum] 
    });
  }

  componentWillMount() {
    this.randomQuote();
  }
  componentDidUpdate() {
    console.log(this.state.selectedQuote);
    console.log(this.state.selectedAuthor);
  }

  render() {
    return (
      <div>
        <Quote
          randomQuote={this.randomQuote}
          selectedQuote={this.state.selectedQuote}
          selectedAuthor={this.state.selectedAuthor}
        />
      </div>
    );
  };
}

const Quote = (props) => {
  const tweetURL = "https://twitter.com/intent/tweet?text=" + props.selectedQuote + " " +props.selectedAuthor;
  return (
    <div className="return-quote-container">
      <p className="spacing">{props.selectedQuote}</p>
      <p>{props.selectedAuthor}</p>
      <div className="quote-buttons">
        <button onClick={props.randomQuote}>
        New quote
        <img className="renew" src={RenewIcon} alt="Refresh Symbol" />
        </button>
        <a href={tweetURL} id="tweet-share" target="_blank">
        Tweet this
        <img src={TwitterLogo} alt="Twitter Logo" />
        </a>
      </div>
    </div>
  )
}


export default RandomQuoteGen;