from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index_china.html')
def home_china():
    return render_template('index_china.html')


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/about_china')
def about_china():
    return render_template('about_china.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/contact_china')
def contact_china():
    return render_template('contact_china.html')

if __name__ == '__main__':
    app.run(debug=True)
