# VetzBoostPharma

The shared head, header, and footer are loaded from `head.html`, `header.html`,
and `footer.html`.
Preview the site through a local web server so the browser can fetch these files
(opening an HTML file directly with `file://` does not support these requests):

```sh
python3 -m http.server
```

Then open `http://localhost:8000` in your browser.