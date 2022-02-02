import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {props.headComponents}
                {/* FIXME: We need to change the pieces requiring the css below into react comps*/}

                <style
                    dangerouslySetInnerHTML={{
                        __html: `
    .incontent-banner {
		background-color: rgba(153, 226, 244, 0.25);
        padding: 20px;
        margin: 0 0 1.5em;
    }

    .incontent-banner h2 {
        overflow-wrap: break-word;
    }
    .primary-button {
    	background-color: rgb(0, 184, 230) !important;
        color: #fff !important;
        border-radius: 3px;
        border: 2px solid transparent;
        -webkit-border-image: initial;
        -o-border-image: initial;
        border-image: initial;
        margin: 0 auto;
        display: block;
        text-decoration: none;
        box-shadow: none;
    }
    .primary-button:hover {
        text-decoration: underline;
    }
    .fixed-banner {
        position: fixed;
        display: none;
        right: 20px;
        bottom: 20px;
        background: white;
        max-width: 300px;
        border: 1px solid rgb(231, 233, 243);
    	border-radius: 10px;
 		box-shadow: 0 9.2px 18px 0 rgba(0, 0, 0, 0.1);
        z-index:100;
    }
    
    @media screen and (max-width: 750px) {
        .fixed-banner {
        	display: none !important;
        }
    }
    
    .fixed-banner .content {
   		padding: 15px 25px;   
    }

    
    .fixed-banner img {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    
    .fixed-banner h3 {
		font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        margin-bottom: 20px;
    }
    
    .fixed-banner p {
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.42;   
    }
    
    .fixed-banner .close {
    	cursor:pointer;
    }
    
    .fixed-banner .close::after {
        content:"";
        height:20px;
        width:20px;
        border-top:2px solid #fff;
        position:absolute;
        top: 15px;
        right: 20px;
     	transform: rotate(45deg);
    }
    
    .fixed-banner .close::before {
        content:"";
        height:20px;
        width:20px;
        border-top:2px solid #fff;
        position:absolute;
        top: 15px;
        right: 8px;
     	transform: rotate(-45deg);
    }
    
    .fixed-banner .content .primary-button {
   		text-align: center;
        margin: 0px;
    	width: 100%;
    	max-width: none;
    }
    .exit-intent {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 10000;
        background: rgba(33, 33, 33, 0.8);
    }
    
    .exit-intent .content {
        position: relative;
        top: 50%;
        left: 50%;
		background: white;
        min-width: 500px;
        max-width :1000px;
        transform: translate(-50%, -50%);
        border-radius: 10px;
    }
    
    .exit-intent .content .contentWrapper {
		    display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
    }
    
    .exit-intent .content .contentWrapper .contentLeft {
		        width: 39%;
            padding: 20px 50px;
    }
    
    
    .exit-intent .content .contentWrapper .contentLeft .headline {
    	margin-bottom: 25px;   
        color: #0c0c0c;
        font-size: 18px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 2.7;
          letter-spacing: 1.8px;
    }
    
    .exit-intent .content .contentWrapper .contentLeft ul {
      list-style: none;
        
    padding: 0px;
    }
    
    .exit-intent .content .contentWrapper .contentLeft ul li {
     	font-family: BasierSquare, Georgia, serif;
        font-size: 20px;
        font-stretch: 100%;
        line-height: 0.5rem;
    }

    .exit-intent .content .contentWrapper .contentLeft ul li:before {
      content: '✓';
        margin-right: 20px;
        color: #00b7e5;
      top: 22px;
    }
    
    .exit-intent .content .contentWrapper .primary-button {
    	width: 100%;
        margin: 0px;
        text-align: center;
        max-width: none;   
            background-color: rgb(0, 184, 230) !important;
    color: #fff !important;
    border-radius: 3px;
    border: 2px solid transparent;
    -webkit-border-image: initial;
    -o-border-image: initial;
    border-image: initial;
    margin: 0 auto;
    display: block;
    text-decoration: none;
    box-shadow: none;
    }
  	
    .exit-intent .content .contentWrapper .contentRight {
		width: 50%;
    }
    
    .exit-intent p {
    	font: BasierSquare, Georgia, serif;
        font-size: 20px;
        font-stretch: 100%;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 32px;
        vertical-align: baseline;
        display:inline-block;
    }
    
    .exit-intent .content .contentWrapper .contentRight img {
		 
    height: 100%;
    width: 100%;
    margin: 0px;
    }
    
    .exit-intent .content .contentWrapper .trustedBar {
		width: 100%;
        background-color: #001f26;
        text-align: center;
        color: #fff;
        padding-top: 15px;
        padding-bottom: 15px;
    	border-bottom-left-radius: 10px;
    	border-bottom-right-radius: 10px;
        font-size: 28px;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
    }
    
    .exit-intent .content .contentWrapper .trustedBar img {
         display: inline-block;
        height: 20px;
        margin: 0px;
        margin-right: 15px;   
        position: relative;
        top: 3px;
    }
    
    .exit-intent .content .close {
    	cursor:pointer;
    }
    
    .exit-intent .content .close::after {
        content:"";
        height:20px;
        width:20px;
        border-top:2px solid #000;
        position:absolute;
        top: 15px;
        right: 20px;
     	transform: rotate(45deg);
    }
    
     .exit-intent .content .close::before {
        content:"";
        height:20px;
        width:20px;
        border-top:2px solid #000;
        position:absolute;
        top: 15px;
        right: 8px;
     	transform: rotate(-45deg);
    }
    
    .timeline {
        width: 100%;
    }
    .timelineItem {
        position:relative;
        padding-left: 10%;
        padding-bottom: 50px;
        font-size: 20px;
    }
    .timelineItem p {
        font-size: 20px;
    }
    .timelineItem > h2:first-child {
        margin-top: -8px;
        /* padding-bottom: 0px; */
        bottom: 9px;
        position: relative;
		font-size: 25px;
    }
    
    .timelineItem > img {
     	width: 100%;   
    }
    
    .timelineItem::before {
    	width: 16px;
        content: "";
        height: 16px;
        object-fit: contain;
        border: solid 2px #00b8e6;
        background-color: #ebf9fd;
        display: block;
        border-radius: 16px;
        position: absolute;
        left: -8px;
	}
    
    .timelineFirst::before {
    	width: 16px;
        content: "";
        height: 16px;
        object-fit: contain;
        border: solid 2px #ebf9fd;
        background-color: #00b8e6;
        display: block;
        border-radius: 16px;
        position: absolute;
        left: -8px;
	}
    
    .timelineItem::after {
    	width: 2px;
        content: "";
        height: calc(100% - 100px);
        object-fit: contain;
        background-color: #00b8e6;
        display: block;
        background-color: #ebf9fd;
        border-radius: 16px;
        position: absolute;
        top: 30px;
        left: -2px;
	}
    
    .blueText {
        color: #00b8e6;
    }

    figure {
        margin: 0px;
    }
    
    .timelineItem ul {
      list-style: none; /* Remove default bullets */
    }
    .timelineItem ul li::before {
      content: "\\2022";  /* Add content: \\2022 is the CSS Code/unicode for a bullet */
      color: #00b8e6; /* Change the color */
      font-weight: bold; /* If you want it to be bold */
        font-size: 30px;
      display: inline-block; /* Needed to add space between the bullet and the text */
      width: 1em; /* Also needed for space (tweak if needed) */
      margin-left: -1em; /* Also needed for space (tweak if needed) */
    }
`,
                    }}
                />
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
                <script type="text/javascript" src="/prism.min.js"></script>
                <script type="text/javascript" src="/prism-toolbar.min.js"></script>
                <script type="text/javascript" src="/prism-copy-to-clipboard.min.js"></script>
                <script src="/prism-python.min.js"></script>
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
