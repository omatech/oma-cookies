<div id="top"></div>
<br />

<!-- PROJECT INTRO -->
<div align="center">
<a href="https://github.com/omatech/oma-cookies">
<img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFxVreSDp08_w/company-logo_200_200/0/1646817864804?e=1654732800&v=beta&t=MOoMzAXsSOpcBj9ro350Ky98jNJp3LO2IwbL_r61TeM" alt="Omatech Logo" width="80" height="80">
</a>
<h1 align="center">Oma-cookies</h1>
Built-in solution that allows the control of cookies, <br>enabling GDPR compliance for Omatech internal projects.
</div>

<!-- TABLE OF CONTENTS -->
<h2>Table of contents</h2>
<ol>
<li>
<a href="#introduction">Introduction</a>
<ul>
<li><a href="#how">How does it work?</a></li>
</ul>
</li>
<li><a href="#built-with">Built with</a></li>
<li>
<a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#installation">Installation</a></li>
<li><a href="#markup">Markup for the cookie-depending content</a></li>
</ul>
</li>
<li>
<a href="#configuration">Configuration</a>
<ul>
<li><a href="#lang-strings">Override language strings</a></li>
<li><a href="#add-lang">Adding a new language</a></li>
<li><a href="#default-lang">Setting the default language</a></li>
<li><a href="#read-more">Read more link</a></li>
<li><a href="#format">Format</a></li>
<li><a href="#quick-link">Quick link position</a></li>
</ul>
</li>
<li>
<a href="#styling">Styling</a>
<ul>
<li><a href="using-sass">Override variables using SASS</a></li>
</ul>
</li>
</ol>

<p align="right"><a href="#top">↑ Back to top</a></p>

<!-- INTRODUCTION -->
<h2 id="introduction">Introduction</h2>
The General Data Protection Regulation (GDPR) applies to all websites with users from the EU. <br>
Oma-cookies provides control over all cookies and trackings on the website.

<h3 id="how">How does it work?</h3>
<ul>
<li><strong>Cookie consent dialog</strong> <br>
Oma-cookies provides a highly-customizable, user friendly consent advice that will appear everytime a new user visits the website. <br>
Once the user has made this choice, he will be able to easily change its cookies consent configuration using the "quick link" widget that will appear in a fixed customizable position.
</li>
<li><strong>Content blocking</strong> <br>
Oma-cookies detects all cookies and similar trackers on the website and blocks them until consent is given.
</li>
</ul>

<p align="right"><a href="#top">↑ Back to top</a></p>

<!-- BUILT WITH -->
<h2 id="built-with">Built With</h2>
<ul>
<li><a href="https://www.npmjs.com/">npm</a></li>
<li><a href="https://webpack.js.org/">Webpack</a></li>
<li><a href="http://vanilla-js.com/">Vanilla JS</a></li>
</ul>

<p align="right"><a href="#top">↑ Back to top</a></p>

<!-- GETTING STARTED -->
<h2 id="getting-started">Getting started</h2>

<h3 id="installation">Installation</h3>
<ol>
<li>

Add the oma-cookies package into your `composer.json` file.

```json
"require": {
    "omatech/oma-cookies": "dev-master",
},
```
</li>
<li>
Install the composer dependencies running in your terminal.

```sh
composer install
```
</li>
<li>
Import the main js file into your project:

```js
require('/vendor/omatech/oma-cookies/dist/js/omacookies.min.js');
```
</li>
<li>

Create a new .js file called `omacookies.config.js` in order to override the default Oma-cookies configuration.
Import it to your project after the previous require statement.

```js
require('/vendor/omatech/oma-cookies/dist/js/omacookies.min.js');
require('path-to-my-project-js/omacookies.config.js');
```
</li>
<li>

Import the stylesheet link in the head of your main html document, before all other stylesheets (for further css customization, visit the [styling section](#styling) below).

```html
<link href="path-to-oma-cookies/dist/css/omacookies.css" rel="stylesheet">
```

In addition, you will have to add the following line to the html meta tags to allow the webpage to be responsive.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
</li>
<li>

Finally, add an empty div with the id `"omacookies"` into your html, right before the body closing tag.

```html
<body>
    ...
    <div id="omacookies"></div>
</body>
```
</li>
</ol>

<h3 id="markup">Markup for the cookie-dependent content</h3>

* The <strong>class for each div type is mandatory</strong> in order to allow the script to work properly.

* We will specify which type of cookie consent needs to be allowed to block/unblock the content using the `data-omacookies-consent` attribute.

<h4>Youtube videos</h4>
```html
<div
    class="omacookies-iframe-youtube"
    data-omacookies-consent="marketing"
    data-omacookies-yt-video-id="YOUTUBE_VIDEO_ID"
></div>
```

<h4>Iframe</h4>
```html
<div
    class="omacookies-iframe"
    data-omacookies-consent="statistics"
    data-omacookies-src="https://example.com/"
    data-omacookies-width="720"
></div>
```

<h4>Google Analytics</h4>
It is required to add the `type="text/plain"` attribute.

```html
<div
    class="omacookies-script"
    type="text/plain"
    data-omacookies-consent="statistics"
    async
    src="https://www.googletagmanager.com/gtag/js?id=YOUR_GTAG_ID"
></div>
```

<!-- CONFIGURATION -->
<h2 id="configuration">Configuration</h2>

We will override the default configuration in our `omacookies.config.js` file.

<h3 id="lang-strings">Override language strings</h3>
We can set a new value for any language string with the following declaration:
```js
window.OMAC.available_languages.LOCALE.STRING_KEY = 'New value';
```

For example:

```js
window.OMAC.available_languages.es.select_box_title = 'Personalizar Cookies';
```
<h3 id="add-lang">Adding a new language</h3>
We can add as many languages as we want, we just need to follow the same object structure we already have for ES and EN.

```js
window.OMAC.available_languages.LOCALE = {
    "STRING_KEY": "New value",
    ...
};
```
For example, we will add German language:
```js
window.OMAC.available_languages.de = {
    "constent_box_title": "Diese Website verwendet Cookies",
    ...
};
```

<h3 id="default-lang">Setting the default language</h3>
```js
window.OMAC.setLang("LOCALE");
```
For example:
```js
window.OMAC.setLang("en");
```
<h3 id="read-more">Read more link</h3>
Here we will add the website link where the user will be redirected to read the cookie policy.

For example:

```js
window.OMAC.readMoreLink("https://omatech.com/cookies.html");
```
<h3 id="format">Format</h3>
Here we can set the appearance of the initial cookie dialog. The allowed values are `"modal"` (default) or `"banner"`.
```js
window.OMAC.format("banner");
```

<h3 id="quick-link">Quick link position</h3>
Here we can configure in which corner of the screen will the quick link be located, using the values `"top-right", "top-left", "bottom-right"` or `"bottom-left"`.
The quick link will appear on the right bottom by default.
```js
window.OMAC.quickLinkPosition("bottom-right");
```

<!-- STYLING -->
<h2 id="styling">Styling</h2>

<h3 id="using-sass">Override variables using SASS</h3>
Have in mind you will need a SCSS preprocessor running in your project if you want to override the SCSS variables.

In order to do so, you will have to import the SCSS files of the oma-cookies project in the proper order and add your custom `variables-override.scss` stylesheet right after the package `_variables.scss` file.

```scss
@import "vendor/omatech/oma-cookies/dist/scss/base";
@import "vendor/omatech/oma-cookies/dist/scss/reset";
@import "vendor/omatech/oma-cookies/dist/scss/variables";
@import "variables-override"; // your custom variables stylesheet
@import "vendor/omatech/oma-cookies/dist/scss/styles";
```

<!-- LICENSE -->
<h2 id="license">License</h2>
This project has MIT license. For further information, read the `LICENSE` file.

<p align="right"><a href="#top">↑ Back to top</a></p>

<!-- CONTACT -->
<h2 id="contact">Contact</h2>

<ul>
<li>Website: <a href="https://www.omatech.com">www.omatech.com</a></li>
<li>Email: <a href="mailto:info@omatech.com">info@omatech.com</a></li>
<li>LinkedIn: <a href="https://www.linkedin.com/company/omatech.com/">LinkedIn Omatech</a></li>
<li>Project Link: <a href="https://github.com/omatech/oma-cookies">GitHub Oma-cookies</a></li>
</ul>

<p align="right"><a href="#top">↑ Back to top</a></p>
