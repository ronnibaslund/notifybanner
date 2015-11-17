# NotifyBanner
A simple, lightweight JavaScript library for handling banner notifications

## Installation

**Bower:**
```bash
$ bower install notifybanner
```

Or include the script (unless you are packaging scripts somehow else):

```html
<link rel="stylesheet" href="/path/to/notifybanner.css" type="text/css" media="all">
<script src="/path/to/notifybanner.js"></script>
```

When you're done, your setup should look similar to the following:

```html
<!doctype html>
<html>
<head>
   <link rel="stylesheet" href="/path/to/notifybanner.css" type="text/css" media="all">
   <script src="/path/to/notifybanner.js"></script>
</head>
<body>
    ...
        <div class="NotifyBanner" data-id="uniq id">
            ...
        </div>
    ...
</body>
</html>
```

The data attribute id is used to save data to a cookie so you only show the banner once to the visitor.