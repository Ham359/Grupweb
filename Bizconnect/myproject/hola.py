from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hola():
    return render_template('pinicial.html')

if __name__ == "__main__":
    app.run()
