import './App.css';
import { Component } from 'react';
// import history from './components/history'

class App extends Component {

  state = {
    imagePath : process.env.PUBLIC_URL + 'bird.png', 
    imageLinkTo : '',
    imageIdName : 'tooltip-image'
  }

  handleHover = (input, hasLink) => {
    hasLink ? this.setState({ imageIdName : 'tooltip-image-link'}) : this.setState({imageIdName : 'tooltip-image'})

    switch (input) {
      case 'matthew':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/portrait.JPG',
          imageLinkTo : ''
        })
        break;
      case 'anvio':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/anvio.png',
          imageLinkTo : 'http://merenlab.org/software/anvio/'
        })
        break;
      case 'spotbot':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/spotbot-ss.jpg',
          imageLinkTo : 'https://chrome.google.com/webstore/detail/spot-bot-junior/gofiphdnhckpieobeakapodkokihnlhj?hl=en-US'
        })
        break;
      case 'choosr':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/choosr-retry.jpg',
          imageLinkTo : 'https://choosr-f4ee6.firebaseapp.com/'
        })
        break;
      case 'portfolio':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/portfolio.jpg',
          imageLinkTo : 'http://portfolio.matthewlawrencekle.in'
        })
        break;
      case 'gamecube':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/gamecube.jpg',
          imageLinkTo : ''
        })
        break;
      case 'marshall':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/marshall.jpg',
          imageLinkTo : ''
        })
        break;
      case 'goodboy':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/goodboy.jpg',
          imageLinkTo : 'https://goodboyweddings.com'
        })
        break
      case 'blog':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/blog.png', 
          imageLinkTo : 'https://matthewlawrenceklein.github.io'
        })
        break
      case 'uptown':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/uptown.jpg', 
          imageLinkTo : ''
        })
        break
      case 'bandcamp':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/music.jpg',
          imageLinkTo : 'https://saint-something.bandcamp.com/'
        })
        break
      case 'confluence':
        this.setState({
          imagePath : process.env.PUBLIC_URL + '/confluence.png',
          imageLinkTo : 'https://confluence-io.web.app/'
        })
        break
      case 'finsta':
        this.setState({
          imagePath : process.env.PUBLIC_URL + 'finsta.jpg', 
          imageLinkTo : 'http://finsta.matthewlawrencekle.in'
        })
        break
    
      default:
        break;
    }
  }

  handleRightClick = () => {
   // pushing url to history doesn't redirect, better explore other options  
  }

  render(){
    return (
      <div className="master" onContextMenu={() => this.handleRightClick()}>
        <div className='container'>
          <p className='text-body'>
              hi everyone! my name is 
              <span onMouseOver={() => this.handleHover('matthew', false)} className='hover-text'> matthew lawrence klein</span>
              . i do software development at the university of chicago, working on the open source 
              <span onMouseOver={() => this.handleHover('anvio', true)} className='hover-text'> anvio platform</span>
              . here's a 
              <span onMouseOver={() => this.handleHover('spotbot', true)} className='hover-text'> chrome extension </span>
              i made that serves randomized spotify playlists. i made an app for friends to
              <span onMouseOver={() => this.handleHover('confluence', true)} className='hover-text'> share streaming platforms</span>
              . and here's an app that helps folx 
              <span onMouseOver={() => this.handleHover('choosr', true)} className='hover-text'> choose stuff</span>
              . it's still in beta. want to talk computers? i have a 
              <span onMouseOver={() => this.handleHover('portfolio', true)} className='hover-text'> fancy portfolio site </span>
               for that!
           </p>
           <p className='text-body'>
              i currently live in beautiful 
              <span onMouseOver={() => this.handleHover('uptown', false)} className='hover-text'> uptown </span>
              with 
              <span onMouseOver={() => this.handleHover('marshall', false)} className='hover-text'> marshall </span>
              & 
              <span onMouseOver={() => this.handleHover('gamecube', false)} className='hover-text'> gamecube </span>
              . i used to 
              <span onMouseOver={() => this.handleHover('goodboy', true)} className='hover-text'> edit videos </span>
              .i still edit videos, but i used to as well. sometimes i 
              <span onMouseOver={() => this.handleHover('bandcamp', true)} className='hover-text'> make music </span>
              , and sometimes i 
              <span onMouseOver={() => this.handleHover('blog', true)} className='hover-text'> blog </span>
              . i try to keep my fake instagram 
              <span onMouseOver={() => this.handleHover('finsta', true)} className='hover-text'> photo stream thing </span>
              updated. want to contribute? shoot me a message for the secret handshake, or find me on 
              <a href='https://github.com/matthewlawrenceklein/' target='_blank' rel="noreferrer"> github </a>
              or (woof) 
              <a href='https://www.linkedin.com/in/matthew-lawrence-klein/' target='_blank' rel='noreferrer'> linkedin </a>
              . thanks y'all! 
          <div id='image-container'>
            <a href={this.state.imageLinkTo} target="_blank" rel="noreferrer">
                <img src={this.state.imagePath} alt='tooltip' id={this.state.imageIdName}/>
            </a>
          </div>

           </p>

           

        </div>

      </div>
    );
  }
}

export default App;
