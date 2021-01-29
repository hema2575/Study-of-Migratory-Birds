## Simple Flask App

This app illustrates how to get a dict type object from your Flask backend to your HTML and Javascript front end.

Pass the dict from Flask with render_template.
```python
@app.route('/')
def entry():
    return render_template('index.HTML', data = records)
```

The key bit of code on the front end is.
```HTML
<script>
var new_data = JSON.parse('{{data | tojson}}');
</script>
```
Include this in your HTML and the data is a JSON object that can be used by your Javascript.



##  Another Note
Be mindful of your file structure. Flask expects your HTML to be in the templates folder and your Javascript to be in the static folder. 
