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
<ul>

<li>
<a href="#installation">Installation</a>
<ul>
<li><a href="#js-import">JavaScript import</a></li>
<li><a href="#css-import">CSS/SASS import</a></li>
</ul>
</li>

<li>
<a href="#implementation">Implementation</a>
<ul>
<li><a href="#iframes">Iframes</a></li>
<li><a href="#scripts">Scripts</a></li>
</ul>
</li>

<li>
<a href="#methods">Methods</a>
<ul>
<li>
<a href="#method-open-consent">Open cookies consent selection modal</a>
</li>
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
<a href="#license">License</a>
</li>

<li>
<a href="#contact">Contact</a>
</li>

</ul>

<h2 id="installation">Installation</h2>

Install the package

```
npm i @omatech/oma-cookies
```

<h3 id="js-import">JavaScript import</h3>

Import the main js file into your project:

```js
require('@omatech/oma-cookies/dist/js/omacookies.min');
```

Optionally you can copy into a public folder the JS file located inside
the `/node_modules/@omatech/oma-cookies/dist/js` folder and link it in your HTML layout

```html
<script src="/path_to_copied_file/omacookies.min.js"></script>
```

<h3 id="css-import">CSS/SASS import</h3>

There are 2 approaches depending on your styling method:

**A) If you are *ONLY* overriding CSS classes => Import the compiled CSS file**

```sass
@import "~@omatech/oma-cookies/dist/css/omacookies.min.css"
```

Optionally you can copy into a public folder the CSS file located inside
the `/node_modules/@omatech/oma-cookies/dist/css` folder and link it in your HTML layout

```html
<link href="/path_to_copied_file/omacookies.min.css" rel="stylesheet">
```

**B) If you want to override the variables and CSS classes => Import all the separated files**

```sass
@import "~@omatech/oma-cookies/dist/scss/base"
@import "~@omatech/oma-cookies/dist/scss/variables"
//Your own SCSS file overriding the variables from the file above
@import "variables"
@import "~@omatech/oma-cookies/dist/scss/styles"
```

<h3>Regardless of what option you choose, make sure this line is in your HTML layout so the responsive works
properly.</h3>

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

<h2 id="implementation">Implementation</h2>

To start things up, you must add this somewhere in your HTML layout (preferably at the end)

```html
<body>
...
<div id="omacookies"></div>
</body>
```

<h3 id="iframes">Iframes</h3>

Every iframe must have the attribute `data-omacookies-consent` which has 2 possible values `marketing`
or `statistics`. This specitfy when the content will be un/blocked

<h4>YouTube videos</h4>

The attribute `data-omacookies-yt-video-id` is the ID found at the end of every YouTube video URL. In `/watch?v=uu5k19UaCT0`
the ID would be `uu5k19UaCT0`

```html
<div
    class="omac-iframe-youtube"
    data-omacookies-consent="marketing"
    data-omacookies-yt-video-id="uu5k19UaCT0"
></div>
```

<h4>Generic iframe</h4>

The attribute `data-omacookies-src` would work as the normal iframe `src` attribute

You can add any attribute to the rendered iframe using the attribute `data-omacookies-xxx`. Simply change `xxx`
for any other attribute. See the attribute `width` shown in the example.

```html
<div
    class="omac-iframe"
    data-omacookies-consent="statistics"
    data-omacookies-src="https://example.com/"
    data-omacookies-width="720"
></div>
```

<h3 id="scripts">Scripts</h3>

**It is required to add the `type="text/plain"` attribute.**

* For **file** JavaScript scripts

```html
<script
    class="omac-script"
    type="text/plain"
    data-omacookies-consent="statistics"
    src="https://example.com/"
></script>
```

* For **inline** JavaScript code

```html
<script
    class="omac-script"
    type="text/plain"
    data-omacookies-consent="statistics"
>
    console.log("Hello World!");
</script>
```

<p align="right"><a href="#top">↑ Back to top</a></p>

<h2 id="methods">Methods</h2>

<h3 id="method-open-consent">Open cookies consent selection modal</h3>

```js
window.OMAC.SelectionModal.open();
```

<p align="right"><a href="#top">↑ Back to top</a></p>

<h2 id="configuration">Configuration</h2>

Somewhere after the import of the `omacookies` JS file we will override attributes from the main object.

<h3 id="lang-strings">Override language strings</h3>

We can set a new value for any language string with the following declaration:

```js
window.OMAC.available_languages.es.select_box_title = 'Personalizar Cookies';
```

<h3 id="add-lang">Adding a new language</h3>

We can add as many languages as we want, we just need to follow the same object structure we already have for ES and EN.

You can copy the structure from `/node_modules/@omatech/oma-cookies/src/lang/en.json`

For example, we will add German language:

```js
window.OMAC.available_languages.de = {
    "constent_box_title": "Diese Website verwendet Cookies",
    ...
};
```

<h3 id="default-lang">Setting the default language</h3>

Make sure to set the language **after** you make any modifications to the `available_languages` object.

```js
window.OMAC.setLang("en");
```

<h3 id="read-more">Read more link</h3>

Here we will add the website link where the user will be redirected to read the cookie policy.

```js
window.OMAC.readMoreLink = "https://omatech.com/cookies.html";
```

<h3 id="format">Format</h3>

Here we can set the appearance of the initial cookie dialog. The allowed values are `modal` (default) or `banner`.

```js
window.OMAC.format = "banner";
```

<h3 id="quick-link">Enable/disable quick link</h3>

The quick link is enabled by default. Disable it setting the following:

```js
window.OMAC.enableQuickLink = false;
```

*To open the cookies selection modal when disabled, use the <a href="#method-open-consent">this method</a>*

<h3 id="quick-link">Quick link position</h3>

Here we can configure in which corner of the screen will the quick link be located, using the values `top-right`
, `top-left`, `bottom-right` or `bottom-left`. The quick link will appear on the `bottom-right` by default.

```js
window.OMAC.quickLinkPosition = "bottom-left";
```

<p align="right"><a href="#top">↑ Back to top</a></p>

<h2 id="license">License</h2>

This project has MIT license. For further information, read the `LICENSE` file.

<p align="right"><a href="#top">↑ Back to top</a></p>

<h2 id="contact">Contact</h2>

<ul>
<li>Website: <a href="https://www.omatech.com">www.omatech.com</a></li>
<li>Email: <a href="mailto:info@omatech.com">info@omatech.com</a></li>
<li>LinkedIn: <a href="https://www.linkedin.com/company/omatech.com/">LinkedIn Omatech</a></li>
<li>Project Link: <a href="https://github.com/omatech/oma-cookies">GitHub Oma-cookies</a></li>
</ul>

<p align="right"><a href="#top">↑ Back to top</a></p>
