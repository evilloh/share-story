import React, { Component } from 'react';
import '../firstDay.css';
import axios from 'axios'
import { HashLink as Link } from 'react-router-hash-link';

class Loop extends Component {


  constructor(props) {
    super(props)
    this.state = {
      span: 0,
      scrollY: 0,
      news: {
        title: "",
        description: "",
        publishedAt: "",
        url: "",
        urlToImage: "",
        source: "",
      },
      date: "",
      cellPhone: 1,
    }

  }


  componentDidMount() {

    console.log(this.props, this.state)
    const truizzami = () => {
      console.log(this.props)
      this.props.props.levelizer()
      // this.props.trueizer(50)
    }


    let actualDate = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: "numeric",
      minute: "numeric"
    });
    this.setState({ date: actualDate })


    const changePhone = () => this.setState({ cellPhone: 2 })

    // HIDE THE APIKEY!!
    const newsRequest = () => axios.get(`https://newsapi.org/v2/top-headlines?q=shooting&apiKey=a925179543d8464cbd6eec1ef06ef1d2`)
      .then(theNews => {
        this.setState({ news: theNews.data.articles[0] })
      })


    newsRequest()
    const canvas = this.refs.canvas

    canvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    canvas.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var bg1 = new Image;
    bg1.src = 'img/newDay1.jpg';
    var bg2 = new Image;
    bg2.src = 'img/newDay2.jpg';
    var bg3 = new Image;
    bg3.src = 'img/newDay3.jpg';

    var grass = new Image;
    grass.src = 'img/newDayGrass.png';

    var cloud1 = new Image;
    cloud1.src = 'img/cloud1.png';

    var cloud2 = new Image;
    cloud2.src = 'img/cloud2.png';

    var cloud3 = new Image;
    cloud3.src = 'img/cloud3.png';

    var person = new Image;
    person.src = 'img/personWalkingSprite.png';

    setTimeout(() => {
      redraw()
    }, 400)

    setTimeout(() => {
      if (document.querySelector(".blackIn")) {
        document.querySelector(".blackIn").style.display = "none"
      }
    }, 700)


    var ctx = canvas.getContext('2d');
    trackTransforms(ctx);
    var scrollerino = 0
    var scrollFrame = 0

    function redraw() {
      var scrollerinoBG = scrollerino
      var scrollerinoGrass = scrollerino * .3

      // Clear the entire canvas

      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      ctx.drawImage(bg1, scrollerinoBG, 0, canvas.width * 2, canvas.height);
      ctx.drawImage(bg2, scrollerinoBG + canvas.width * 2 - 1, 0, canvas.width * 2, canvas.height);
      ctx.drawImage(bg3, scrollerinoBG + canvas.width * 4 - 2, 0, canvas.width * 2, canvas.height);

      ctx.drawImage(grass, scrollerinoGrass, canvas.height * .8, canvas.width * 2, canvas.height * .2);

      ctx.drawImage(cloud1, scrollerino * .4 + canvas.width, 0, canvas.width * .5, canvas.height * .2);
      ctx.drawImage(cloud2, scrollerino * .8 + 112, canvas.height * .2, canvas.width * .5, canvas.height * .1);
      ctx.drawImage(cloud2, scrollerino * 2 + 112 + canvas.width, canvas.height * .3, canvas.width * .5, canvas.height * .1);
      ctx.drawImage(cloud2, scrollerino * 2 + 112 + canvas.width * 2, canvas.height * .15, canvas.width * .5, canvas.height * .1);
      ctx.drawImage(cloud3, scrollerino * -.6, canvas.height * .1, canvas.width * .4, canvas.height * .08);

      person.frames = 4;
      person.frameIndex = 0;


      person.frameIndex = scrollFrame

      // console.log(scrollFrame, "scrollFrame")
      ctx.drawImage(
        person,
        person.frameIndex * Math.floor(person.width / person.frames),
        0,
        Math.floor(person.width / person.frames),
        canvas.height * .75 - 200,
        130,
        canvas.height * .85 - 200,
        140,
        350
      );
    }

    redraw();




    var handleScroll = function (evt) {
      var delta = evt.wheelDelta ? evt.wheelDelta / 5 : evt.detail ? -evt.detail : 0;
      scrollerino += delta
      if (delta > 0 && scrollFrame >= 0) {
        if (scrollFrame === 0) {
          scrollFrame = 3
        } else {
          scrollFrame--

        }
      } else if (delta < 0) {
        if (scrollFrame === 3) {
          scrollFrame = 0
        } else {

          scrollFrame++
        }
      }

      if (scrollerino >= 0) {
        scrollerino = 0
      }
      if (scrollerino * -1 > canvas.width * 3.6) {
        document.querySelector(".firstdayfour").classList.add("firstAppear")
      }
      if (scrollerino * -1 > canvas.width * 1.5) {
        document.querySelector(".firstdaythird").classList.add("firstAppear")
      }

      if (scrollerino * -1 > canvas.width * 0.25) {
        document.querySelector(".firstdayfirst").classList.add("firstAppear")
      }
      if (scrollerino * -1 > canvas.width * 0.75) {
        document.querySelector(".firstdaysec").classList.add("firstAppear")
      }

      if (scrollerino * -1 > canvas.width * 2) {
        document.querySelector(".mobileContainer").classList.add("animatedMobile")
        setTimeout(changePhone, 5500);
      }

      if (scrollerino * -1 > canvas.width * 2) {
        document.querySelector(".mobileContainer").classList.add("animatedMobile")
        setTimeout(changePhone, 5500);
      }

      if (scrollerino * -1 > canvas.width * 4.65) {

        document.querySelector(".endFirstDayBG").style.display = "block"
        document.querySelector(".endFirstDayBG").style.opacity = "1"

        truizzami()
      }
      redraw();


      return evt.preventDefault() && false;
    };

    canvas.addEventListener('DOMMouseScroll', handleScroll, false);
    canvas.addEventListener('mousewheel', handleScroll, false);



    // Adds ctx.getTransform() - returns an SVGMatrix
    // Adds ctx.transformedPoint(x,y) - returns an SVGPoint
    function trackTransforms(ctx) {
    }



  }


  render() {

    const firstSpan = () => {
      if (this.state.span === 2) {
        this.setState({ span: -1 })
      } else {
        const newSpan = this.state.span + 1
        this.setState({ span: newSpan })
        console.log(this.state)
      }
    }


    return (
      <div>
        <p className="firstdayfirst">What a nice day, what a nice life!</p>
        <p className="firstdaysec">Maybe not a nice life for everyone...</p>
        <p className="firstdaythird">Let me distract myself a little...</p>
        <p className="firstdayfour">Maybe not a nice life at all</p>
        <div className="endFirstDayBG">
          <div className="endFirstDayContainer">
            {this.state.span >= 0 && <h4>
              When someone tells me that there are people with real problems out there,
            poverty, wars, diseases, social injustice, do you think that makes me feel <span onClick={firstSpan} className="firstDayFirstSpan">better</span>?
          </h4>}
            {this.state.span > 0 && <h4>Do you think it will ignite a spark of <span onClick={firstSpan} className="firstDaySecondSpan">hope</span> in me?</h4>}
            {this.state.span === 2 && <h4>Fuck <span onClick={firstSpan} className="firstDayThirdSpan">no</span>.</h4>}
          </div>

          {this.state.span === -1 && <h3 className="befSecondPartTitle">It just gives me more reasons to <Link to="/#exactline" ><span className="firstDayLastSpan">end</span></Link> this insufferable pain.</h3>}
        </div>






        <div className="blackIn">
        </div>
        <div className="mobileContainer">
          <div className="mobileText">

            {this.state.cellPhone === 1 ?

              < h3 >
                {this.state.date}
              </h3>

              :
              <div>
                <h2> ~ ~ {this.state.news.source.name} ~ ~ </h2>
                <a href={this.state.news.url} without rel="noopener noreferrer" target="_blank"><h1>{this.state.news.title}</h1></a>
                <img src={this.state.news.urlToImage} alt={this.state.news.title}></img>
                <p>{this.state.news.description}</p>
              </div>
            }

          </div>
          <img src="/img/phone.png" alt="phone"></img>
        </div>
        <div className="firstDayContainer">
          <canvas ref="canvas" id="canvasFirstDay" width="1200" height="700"></canvas>
        </div>
      </div>

    )
  }

}

export default Loop;