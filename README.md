# Great North WordPress assignment

A short WordPress technical assignment from October 2023: five fixes and additions to a Bootstrap 5 theme, with my notes on each.

This is an early project. The theme was supplied with the assignment and is built on the [them.es Starter](https://github.com/them-es/starter-bootstrap) theme (Bootstrap 5, Sass, gulp and webpack). This repo holds the theme with my changes. The notes below cover each task, including the one I did not fully solve.

## The tasks

### 1. Make the header horizontal

> The header is stacked vertically, we would like it horizontal.

I added rules to `style.css` that lay the main menu out in a row (`ul.navbar-nav { display: flex; }`) and space out the menu items.

![Header with the menu items laid out in a row](https://github.com/dwatces/great-north-assignment/assets/74215535/1c3e9877-a320-4b32-b25b-6f3ee0dabc6f)

### 2. Animate the mobile menu

> The mobile header is not animating in when someone clicks the hamburger button, can you fix that?

Partly solved. I added a click handler in `js/hamburger-menu.js` (enqueued from `functions.php`) that toggles a `show` class on the menu:

![jQuery click handler that toggles the show class on #navbar](https://github.com/dwatces/great-north-assignment/assets/74215535/c82d283e-6df3-4dc0-a4fa-1317a946d577)

and styles in `style.css` to display the menu and slide it in:

![CSS keyframe animation for #navbar.show](https://github.com/dwatces/great-north-assignment/assets/74215535/6b961cf8-a6a5-40d4-a1a1-a17e0c8829f7)

The menu animates in as expected, but it disappears once the animation finishes. I looked for jQuery conflicts and used Chrome DevTools to check for styles overriding the intended behaviour, but I was not able to fully fix the mobile menu.

### 3. Make the footer logo easy to change

> We want a different logo in the footer, can you make it so we can add our own easily?

I registered a new widget area, "Custom Footer Widget Area" (`custom-footer-widget`), in `functions.php` and output it in `footer.php`. A logo can then be added as a widget from the WordPress admin, without editing the theme files.

![footer.php outputting the custom-footer-widget area](https://github.com/dwatces/great-north-assignment/assets/74215535/a75c7e1e-655e-415c-863f-d47a3105001f)

![register_sidebar call for the Custom Footer Widget Area](https://github.com/dwatces/great-north-assignment/assets/74215535/d0511ed6-2825-4c64-8c6c-62b0c81fa368)

### 4. Fix the product page

> I tried making a change to the product page and it stopped loading? It should display a product name, a product description and the price.

The Product Page template (`page-product.php`) gets its values from `get_products()` in `functions.php`. I corrected the misspelt name of the description function, and the page loaded again with the name, description and price.

![Product page showing a product name, description and price](https://github.com/dwatces/great-north-assignment/assets/74215535/6b16ac95-ac0b-44cf-8510-0e2f45ddc372)

### 5. Restore the custom Elementor widget

> We have a custom Elementor widget that just went missing on the homepage, can you restore it? (This is a tough one, we don't expect you to get this one)

The theme registers a "Great North" Elementor category and a custom widget (`widgets/my-widget.php`) from `functions.php`. I got the widget displaying on the homepage again through the WordPress admin dashboard.

![Homepage showing the restored widget](https://github.com/dwatces/great-north-assignment/assets/74215535/038c6841-eb58-420d-84f9-ef9d2cfad6e4)

## Tech stack

- WordPress theme (PHP), based on them.es Starter
- Bootstrap 5, Sass and jQuery
- gulp and webpack to build `assets/dist`
- Elementor, for the custom widget

## Running it locally

You need a local WordPress install, plus the Elementor plugin if you want to see the custom widget.

1. Copy this folder into `wp-content/themes/`.
2. Activate "Great North" under Appearance > Themes.
3. To see the product page, create a page and choose the "Product Page" template.

The compiled CSS and JS in `assets/dist` are committed, so no build step is needed to view the theme. To change the styles or scripts, install the build tools and start the watcher:

```bash
npm install
npm run watch
```

`npm run watch` runs `gulp watch`. Each time a source file changes, it recompiles `assets/main.scss` (with the partials in `assets/sass/`) to `assets/dist/main.css`, or bundles `assets/main.js` into `assets/dist/main.bundle.js`. `main.scss` imports Bootstrap from `node_modules`, so `npm install` is needed first.

## Project structure

```
functions.php          theme setup, widget areas, product helpers, Elementor registration
header.php, footer.php site header (main menu) and footer (logo widget area)
page-product.php       Product Page template
widgets/my-widget.php  custom Elementor widget
js/hamburger-menu.js   mobile menu toggle
style.css              theme header and the menu styles from tasks 1 and 2
assets/                Sass and JS sources; assets/dist holds the compiled output
inc/                   Customizer settings and Bootstrap nav walkers
```

## Credits and licence

Based on the [them.es Starter](https://github.com/them-es/starter-bootstrap) theme by them.es. Released under GPLv2 or later, see [LICENSE](LICENSE).

## Author

Built by Daniel Olliver. More of my work: [danielolliver.com/dev](https://danielolliver.com/dev/).
