# Webshop @Work2
**Team: CodeGram**

---
## Latest changes (28/05/2021) by Charlotte
### Update package.json 
- Changed node modules. Run `npm install` again to ensure you have all modules installed.
- Changed scripts: 
  - `npm run dev`: Only runs the server & database again.
  - `npm run build-css`: Run this in a separate terminal tab/window to convert SCSS into CSS. Input files from: `/server/public/_sass/main.scss` and exported to: `/server/public/css/main.css`.
  
### Update server/app.js
- Added publicRoutes to be rendered at `/`, using `/server/routes/index.js` to define the publicRoutes.
- Added static rendering from `/server/public` to serve assets (_sass, css, images, ...) on the `/static/` route. Linking in njk templates through `/static/...`.

### Create server/views/...
- `base.html` = the base template (see: eleventy base layout). Contains main html file, header & footer links, sections and blocks.
- `index.html` = the home page with some basic rendering | gets its rendered data from `publicController.getHome`. Can be reached from [http://localhost:8080/]
- `categories.html` = the categories page with some basic data displayed - can be reached from [http://localhost:8080/categories] or [localhost:8080/categories?category={CategoryId}](http://localhost:8080/categories?category=1d67bfe9-4be2-4cdc-b92f-739fa745c71a)
- `partials/header.njk` = the header block
- `partials/footer.njk` = the footer block

### Move client/assets/ to server/public/
- Contains the _sass, css and images folder
- Gets served on [https://localhost/static/images/icons/favicon.ico] for instance from server location `server/public/images/icons/favicon.ico`.

### Create server/routes/index.js
- Contains all the public routes and callback functions for the public routes. For now that means: 
  - `/`: home - `publicController.getHome`
  - `/categories`: categories - `publicController.getCategories`
    - This can be extended with query parameters as in [http://localhost:8080/categories?category=73652f20-5b07-428c-9e2a-cbff3a383bff]

### Create server/controllers/publicController.js
- Connect to database
- Added `getHome`: renders data for homepage. Available data at this point in time:
  - categories (all categories in the database): reached through nunjucks templates through `{% for category in categories %} --do something-- {% endfor %}`
  - courses (all courses in the database): reached through nunjucks templates through `{% for course in courses %} --do something-- {% endfor %}`
- Not exported as default, so can be reached through importing the file and calling the function: `import * as publicController from '../controllers/publicController.js'` - Call with: `publicController.getHome`.

### Updated server/db/seeders/index.js
- Thanks to Philippe the first association table (the ones without an actual model) has gotten a seed. Hooray!
- TO DO: everything else.

### Pending delete depending on your views
- `client/`
  - Reasoning: Client has been moved to server side rendering. May have become redundant.