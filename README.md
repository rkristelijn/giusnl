# Gius.nl
This is just a personal github repository to stash my code. If you need a template to start of your website, feel free to use my code. Also I'm happy to receive comments. My aim is to create a responsive, if possible progressive web app to manage my blog posts. Before I wrote any code I wrote this.

Most probably the site is already running on [Gius.nl](gius.nl)

## Mission statement
Create a good template, with the least amount of code that is as light as possible that delivers the most tidy result.

# Plan
- **step 0: write this document (current status)**
- step 1: create a github, stash my code
- step 2: create a app shell, so it loads my stuff, potentially using HTML5 cache
- step 3: create some static content
- step 4: create a rest service to be able to manage my content

# Honorable mentions
Beforehand I want to thank all the resources that I could use to create this epic project;
- [Douwe Egberts](https://www.douwe-egberts.com/) coffee: *no coffee no code*
- [Hertog Jan](http://www.hertogjan.nl/bieren/) beer
- The [Internet](http://hmpg.net/): *for letting me copy all the code*:
- Jono, Tony and Paavo of [Above and Beyond](http://www.aboveandbeyond.nu/): *for letting me code on in tune*
- [Brackets.io](brackets.io) for a free IDE

### Step 2a: Basic HTML5 page
 Kevin Yank wrote an article about the [minimal HTML5 page](https://www.sitepoint.com/a-minimal-html-document-html5-edition/) in 2010 - this is a good read; short summary: type optional in both style and script tags.
````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Gius.nl</title>
    <link rel="stylesheet" href="style.css">
    
  </head>
  <body>
    <!-- i want to first load the page and then the javascript -->
      <script src="script.js"></script>
  </body>
</html>
````
Also I took a look at the [HTML5 styleguide](http://www.w3schools.com/html/html5_syntax.asp) and checked the page on [W3 html checker](https://validator.w3.org/).
### Step 2b: add bootstrap
I'm not going to reinvent the wheel for layouts. I don't even want a css. Maybe I need it in future, but for now I'm going to use the *vanilla* Twitter [bootstrap](http://v4-alpha.getbootstrap.com/getting-started/best-practices/)

Added the link tag in the head, connected to the CDN:
````html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css" integrity="sha384-MIwDKRSSImVFAZCVLtU0LMDdON6KVCrZHyVQQj6e8wIEJkW4tvwqXrbMIya1vriY" crossorigin="anonymous">
````
I'm wondering if I need the [integrity attribute](http://stackoverflow.com/questions/32039568/what-are-the-integrity-and-crossorigin-attribute). *Q:What do these attributes mean? How do they affect the loading of the stylesheet? A:Both attributes have been added to Bootstrap CDN to implement [Subresource Integrity](http://www.w3.org/TR/SRI/).

Subresource Integrity defines a mechanism by which user agents may verify that a fetched resource has been delivered without unexpected manipulation ([Reference](https://code.google.com/p/chromium/issues/detail?id=355467))

**Integrity attribute** is to allow the browser to check the file source to ensure that the code is never loaded if the source has been manipulated.

**Crossorigin attribute** is present when a request is loaded using 'CORS' which is now a requirement of SRI checking when not loaded from the 'same-origin'. [More info on crossorigin](https://www.npmjs.com/package/ember-cli-sri#crossorigin-attribute)*
And read up on [support for old browsers](http://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do): *Depending upon what Microsoft browsers you support you may not need to continue using the X-UA-Compatible tag. If you need to support IE 9 or IE 8, then I would recommend using the tag.*
I want good support so I added this in the head:
````html
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
````
Looking back at the [Starter template](http://v4-alpha.getbootstrap.com/getting-started/introduction/):
````html
<!doctype html>
<!-- 
so you are looking at my code? have a look at https://github.com/rkristelijn/giusnl instead
-->
<html lang="en">

<head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <title>Gius.nl</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css" integrity="sha384-MIwDKRSSImVFAZCVLtU0LMDdON6KVCrZHyVQQj6e8wIEJkW4tvwqXrbMIya1vriY" crossorigin="anonymous">
</head>

<body>
    <!-- i want to first load the page and then the javascript -->
    <h1>Hello, world!</h1>

    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js" integrity="sha384-THPy051/pYDQGanwU6poAc/hOdQxjnOEXzbT+OuUAFqNqFjL+4IGLBgCJC3ZOShY" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js" integrity="sha384-Plbmg8JY28KFelvJVai01l8WyZzrYWG825m+cZ0eDDS1f7d/js6ikvy1+X+guPIB" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/js/bootstrap.min.js" integrity="sha384-ux8v3A6CPtOTqOzMKiuo3d/DomGaaClxFYdCu2HPMBEkf6x2xiDyJ7gkXU0MWwaD" crossorigin="anonymous"></script>
</body>

</html>
````
I'm wondering why I [need the 3 javascripts](http://stackoverflow.com/questions/14608681/can-i-use-twitter-bootstrap-without-jquery): jquery, Tether and BoostrapJS. Q:*I work in a project where we don't use JQuery. Is twitter bootstrap dependant on it? A:Twitter bootstrap itself isn't jQuery dependant. If you use just the CSS part of it, you won't need jQuery. If you use the Javascript plugins you need jQuery, since they are jQuery plugins.*
So what do I need [Tether](http://github.hubspot.com/tether/) for and [BootstrapJS].

[Tether](http://github.hubspot.com/tether/):
Better support for positioning, scrolling etc for things like tooltips, dropdowns, hover-activated info boxes, etc.
- Optimized GPU-accelerated repositioning for 60fps scrolling
- Reliable positioning on any possible corner, edge or point in between.
- Support for repositioning or pinning the element when it would be offscreen
- Designed to be embeddable in other libraries

[BootstrapJS]()
Button dropdowns require the Bootstrap dropdown plugin to function.

In some cases—like mobile—dropdown menus will extend outside the viewport. You need to resolve the alignment manually or with custom JavaScript.

Some [downsides of using bootstrap](http://www.zingdesign.com/5-reasons-not-to-use-twitter-bootstrap/) - interesting, but since I'm a developer, bootstrap enables me to make my site responsive. I'm not a designer. not sure if I want to become one either. I don't realy care that my site looks like everyone elses. If it starts to annoy me, I just buy a new [template](https://themeforest.net/search?utf8=%E2%9C%93&term=bootstrap&referrer=search&view=grid&sort=sales&date=&category=site-templates&price_min=&price_max=&sales=&rating_min=4&gclid=CNO5keKi0M4CFcIV0wodRSMDPg)
### Step 2c: building the app shell
Why wait any longer, let's get started and steal some [template](http://v4-alpha.getbootstrap.com/examples/jumbotron/).