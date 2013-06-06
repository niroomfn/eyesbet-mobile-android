/*******************************************
 Default Pull-up and Pull-down styling
 Replace/modify/override to your preferences
*******************************************/
.iscroll-pullup {
    /* The wrapper is position:relative or position:absolute, so the pullUp is positioned here
       relative to the scroller, not the page. If we don't do this, the pullUp will initially
       appear briefly at the bottom of content if content is shorter than the wrapper.
    */
    position: absolute;    /* relative to the scroller */
    bottom:   0;           /* at the bottom of the scroller */
    width:    100%;
}

.iscroll-pulldown,
.iscroll-pullup {
  background: #fff;
  height: 40px;
  line-height: 40px;    /* Center text vertically */
  font-weight: bold;
  font-size: 14px;
  color: #888;
}


/* MSIE not supported by iScroll, so not MSIE transitions or animation  */
.iscroll-pulldown .iscroll-pull-icon,
.iscroll-pullup .iscroll-pull-icon  {
  margin-left: 0.5em;
  display: block;
  float: left;
  width: 40px;
  height: 40px;
  background: url(iscroll-pull-icon@2x.png) 0 0 no-repeat;
  -webkit-background-size: 40px 80px;
  -moz-background-size: 40px 80px;
  -o-background-size: 40px 80px;
  background-size: 40px 80px;
  -webkit-transition: -webkit-transform 250ms linear;
  -moz-transition: -moz-transform 250ms linear;
  -o-transition: -o-transform 250ms linear;
  transition: transform 250ms linear;
  -webkit-animation: none;
  -moz-animation: none;
  -o-animation: none;
  animation: none;
}

/* Note that translateZ(0) triggers hardware acceleration on WebKit browsers
   Acceleration is automatic on Mozilla */

.iscroll-pulldown .iscroll-pull-icon {
  -webkit-transform: rotate(0deg) translateZ(0);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg) translateZ(0);
  -webkit-animation: none;
  -moz-animation: none;
  -o-animation: none;
  animation: none;
}

.iscroll-pullup .iscroll-pull-icon  {
  -webkit-transform: rotate(-180deg) translateZ(0);
  -moz-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg) translateZ(0);
  -webkit-animation: none;
  -moz-animation: none;
  -o-animation: none;
  animation: none;
}

.iscroll-pulldown.iscroll-pull-pulled .iscroll-pull-icon {
  -webkit-transform: rotate(-180deg) translateZ(0);
  -moz-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg) translateZ(0);
}

.iscroll-pullup.iscroll-pull-pulled .iscroll-pull-icon {
  -webkit-transform: rotate(0deg) translateZ(0);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg) translateZ(0);
}

.iscroll-pulldown.iscroll-pull-loading .iscroll-pull-icon,
.iscroll-pullup.iscroll-pull-loading .iscroll-pull-icon {
  background-position: 0 100%;
  -webkit-transform: rotate(0deg) translateZ(0);
  -webkit-transition-duration: 0ms;
  -webkit-animation: iscroll-pull-loading 2s infinite linear;
  -moz-transform: rotate(0deg);
  -moz-transition-duration: 0ms;
  -moz-animation: iscroll-pull-loading 2s infinite linear;
  -o-transform: rotate(0deg);
  -o-transition-duration: 0ms;
  -o-animation: iscroll-pull-loading 2s infinite linear;   /* Opera 12+ only */
  transform: rotate(0deg) translateZ(0);
  transition: transform 0ms linear;
  animation: iscroll-pull-loading 2s infinite linear;
  }

@-webkit-keyframes iscroll-pull-loading {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}

@-moz-keyframes iscroll-pull-loading {
  from { -moz-transform: rotate(0deg); }
  to { -moz-transform: rotate(360deg); }
}

@-o-keyframes iscroll-pull-loading {
  from { -o-transform: rotate(0deg); }
  to { -o-transform: rotate(360deg); }
}

@-keyframes iscroll-pull-loading {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}