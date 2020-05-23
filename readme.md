replaceTextNode.js
==========

Find and replace text nodes.

**`replaceTextNode(element: HTMLElement, str: String|RegExp, wrapper: String| HTMLElement as string)`**

| Name                  | Default         | value                            | Description  |
| --------------------- | --------------- | -------------------------------- | ------------- |
| element               | `undefined`     | `HTMLElement`                    | Parent element to search for text |
| str                   | `undefined`     | `String or RegExp`                  | String to search for |
| wrapper               | `undefined`     | `String or HTMLElement as string`   | String or HTMLElement as string which will be inserted in place of string |


How to use
==========

Add script in your `<head>` tag.

```html
<script src="path/to/replaceTextNode.min.js"></script>
```

```html
<body>
    <div>
        Hello my name is Manoj
        <div>
            And I am a software <b>Developer <i>Yes I am</i></b>
        </div>
    </div>
    <div>
        Hello my name is John
        <div>
            And I am a software <b>Developer <i>Yes I am</i></b>
        </div>
    </div>
    <div>
        Hello my name is Steven
        <div>
            And I am a software <b>Designer <i>Yes I am</i></b>
        </div>
    </div>
</body>
<script>
    replaceTextNode(document.querySelector("body"), "Manoj", "<a href='manoj'>Manoj</a>")
</script>
```

### About Me

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Medium](https://medium.com/@manojsinghnegi) (@manojsinghnegi)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)
