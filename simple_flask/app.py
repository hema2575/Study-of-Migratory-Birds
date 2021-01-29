from flask import Flask, render_template, url_for

app = Flask(__name__)

records = [{'name':'John'},{'name':'Suzy'}]

@app.route('/')
def entry():
    return render_template('index.html', data = records)


if __name__ == "__main__":
    app.run()