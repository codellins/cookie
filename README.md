
# Codellins Cookies - A JavaScript Utility Library

Codellins Cookies is a versatile JavaScript utility library that simplifies common tasks for developers. It provides convenient functions for working with cookies and clipboard interactions.

## Installation

You can install Codellins Cookies using npm:

```bash
npm install codellins
```

Or, you can use the CDN for direct access:

```html
<script src="https://codellins.github.io/cookies/v1/cookie.js"></script>
```

## Usage

### Cookies

Codellins Cookies allows you to work with cookies easily. Here's how you can use it:

```javascript
import codellins from "codellins";

// Set a cookie with a name, value, and expiration days

codellins.Cookies.set("myCookie", "cookieValue", 7);

// Get the value of a cookie by its name
const cookieValue = codellins.Cookies.get('myCookie');

// Remove a cookie by its name
codellins.Cookies.remove('myCookie');
```

### Clipboard

You can also interact with the clipboard using Codellins Cookies:

```javascript
import codellins from "codellins";

// Write text to the clipboard
codellins.Clipboard.write('Text to copy to clipboard');

// Read text from the clipboard
const copiedText = codellins.Clipboard.read();
```

### CDN Usage



```html
<!DOCTYPE html>
<html>
<head>
    <title>Codellins Example</title>
    <script src="https://codellins.github.io/cookies/v1/cookie.js"></script>
</head>
<body>
    <button id="setCookieButton">Set Cookie</button>
    <button id="getCookieButton">Get Cookie Value</button>
    <button id="removeCookieButton">Remove Cookie</button>

    <script>
            // Event listeners for each button
            const setCookieButton = document.getElementById('setCookieButton');
            const getCookieButton = document.getElementById('getCookieButton');
            const removeCookieButton = document.getElementById('removeCookieButton');

            setCookieButton.addEventListener('click', function () {
                // Set a cookie
                codellins.Cookies.set('myCookie', 'cookieValue', 30);
                alert('Cookie Set!');
            });

            getCookieButton.addEventListener('click', function () {
                // Get the value of a cookie
                const cookieValue = codellins.Cookies.get('myCookie');
                alert('Cookie Value: ' + cookieValue);
            });

            removeCookieButton.addEventListener('click', function () {
                // Remove a cookie
                codellins.Cookies.remove('myCookie');
                alert('Cookie Removed!');
            });
      
    </script>
</body>
</html>

```

## License

This tool is licensed under the GNU General Public License (GPL) with certain restrictions. Please see the [LICENSE](LICENSE) file for detailed terms and conditions.

## Contributing

We welcome contributions from the community. If you would like to contribute, please check out our [CONTRIBUTING](CONTRIBUTING.md) guidelines.

## Support

If you encounter any issues or have questions, please feel free to [create an issue](link_to_issues) on our GitHub repository.

## NPM Package

You can find the Codellins NPM package for React users [here](https://www.npmjs.com/package/codellins).

---

Thank you for using Codellins Cookies! We hope it simplifies your development tasks. If you have any feedback or suggestions, we'd love to hear from you.

Happy coding!

Author:  Collins Adi
```
