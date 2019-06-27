import React, { Component } from 'react';
import '../loop.css';


class Loop extends Component {


  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0
    }
  }


  componentDidMount() {

    const truizzami = () => {
      clearInterval(refreshIntervalId)
      console.log(this.props)
      for (let i = 0; i < 100; i++) {
        window.clearInterval(i);
      }
      if (this.props.wakes[28]) {

        this.props.trueizer(28)
      } else if (this.props.wakes[29]) {
        this.props.trueizer(29)

      } else if (this.props.wakes[30]) {
        console.log(this.props.wakes)

        for (let i = 0; i < 100; i++) {
          window.clearInterval(i);
        }

        this.props.trueizer(30)

      }

    }

    const canvas = this.refs.canvas

    canvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    canvas.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var gkhead = new Image;

    // window.onload = function () {

    var ctx = canvas.getContext('2d');
    trackTransforms(ctx);

    setTimeout(() => {
      redraw()
    }, 300)


    function redraw() {

      // Clear the entire canvas
      var p1 = ctx.transformedPoint(0, 0);
      var p2 = ctx.transformedPoint(canvas.width, canvas.height);
      ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      ctx.drawImage(gkhead, canvas.width * 0.235, 0, canvas.width * 0.5, canvas.width * 0.5);
    }

    redraw();

    var lastX = canvas.width / 2, lastY = canvas.height / 2;

    var dragStart, dragged;

    canvas.addEventListener('mousedown', function (evt) {
      document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
      lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
      lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
      dragStart = ctx.transformedPoint(lastX, lastY);
      dragged = false;
    }, false);

    canvas.addEventListener('mousemove', function (evt) {
      lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
      lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
      dragged = true;
      if (dragStart) {
        var pt = ctx.transformedPoint(lastX, lastY);
        ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
        redraw();
      }
    }, false);

    canvas.addEventListener('mouseup', function (evt) {
      dragStart = null;
      if (!dragged) zoom(evt.shiftKey ? -1 : 1);
    }, false);

    var scaleFactor = 1.1;

    var zoom = function (clicks) {
      var pt = ctx.transformedPoint(lastX, lastY);
      ctx.translate(pt.x, pt.y);
      var factor = Math.pow(scaleFactor, clicks);
      ctx.scale(factor, factor);
      ctx.translate(-pt.x, -pt.y);
      redraw();
    }


    let casa = 0
    var handleScroll = function (evt) {
      var delta = evt.wheelDelta ? evt.wheelDelta / 440 : evt.detail ? -evt.detail : 0;
      casa += (delta < 0) ? delta * -1 : delta;
      console.log("Casa", casa)
      if (casa > 30) {
        if (delta) zoom(delta);
        for (let i = 0; i < 100; i++) {
          window.clearInterval(i);
        }

        truizzami()

      } else {
        if (delta) zoom(delta);

      }


      return evt.preventDefault() && false;
    };

    canvas.addEventListener('DOMMouseScroll', handleScroll, false);
    canvas.addEventListener('mousewheel', handleScroll, false);
    // };

    gkhead.src = 'img/ilLadro.png';

    // Adds ctx.getTransform() - returns an SVGMatrix
    // Adds ctx.transformedPoint(x,y) - returns an SVGPoint
    function trackTransforms(ctx) {
      var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
      var xform = svg.createSVGMatrix();
      ctx.getTransform = function () { return xform; };

      var savedTransforms = [];
      var save = ctx.save;
      ctx.save = function () {
        savedTransforms.push(xform.translate(0, 0));
        return save.call(ctx);
      };

      var restore = ctx.restore;
      ctx.restore = function () {
        xform = savedTransforms.pop();
        return restore.call(ctx);
      };

      var scale = ctx.scale;
      ctx.scale = function (sx, sy) {
        xform = xform.scaleNonUniform(sx, sy);
        return scale.call(ctx, sx, sy);
      };

      var rotate = ctx.rotate;
      ctx.rotate = function (radians) {
        xform = xform.rotate(radians * 180 / Math.PI);
        return rotate.call(ctx, radians);
      };

      var translate = ctx.translate;
      ctx.translate = function (dx, dy) {
        xform = xform.translate(dx, dy);
        return translate.call(ctx, dx, dy);
      };

      var transform = ctx.transform;
      ctx.transform = function (a, b, c, d, e, f) {
        var m2 = svg.createSVGMatrix();
        m2.a = a; m2.b = b; m2.c = c; m2.d = d; m2.e = e; m2.f = f;
        xform = xform.multiply(m2);
        return transform.call(ctx, a, b, c, d, e, f);
      };

      var setTransform = ctx.setTransform;
      ctx.setTransform = function (a, b, c, d, e, f) {
        xform.a = a;
        xform.b = b;
        xform.c = c;
        xform.d = d;
        xform.e = e;
        xform.f = f;
        return setTransform.call(ctx, a, b, c, d, e, f);
      };

      var pt = svg.createSVGPoint();
      ctx.transformedPoint = function (x, y) {
        pt.x = x; pt.y = y;
        return pt.matrixTransform(xform.inverse());
      }
    }


    window.onbeforeunload = () => window.scrollTo(0, 0);


    var refreshIntervalId = setInterval(() => {
      document.querySelector(".casita").style.display = "block"
      document.querySelector(".casita").classList.toggle("glitch")
      console.log("casa")
      setTimeout(() => {
        document.querySelector(".casita").style.display = "none"
        document.querySelector(".casita").classList.toggle("glitch")
      }, 300);
    }, 3500);

  }


  render() {


    return (
      <React.Fragment>
        <div className="loopContainer">
          <div className="disturb">
            <img className="casita" src="img/ilLadro.png" alt="glitch effect"></img>
          </div>
          <div>
            <canvas ref="canvas" width={this.w} height={this.h} />
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default Loop;