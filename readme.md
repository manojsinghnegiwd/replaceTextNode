wrapText.js
==========

Find and wrap text nodes in a document.

How to use
==========

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
    wrapText(document.querySelector("body"), /am/gi, "<a href='#'>am</a>")
</script>
```
