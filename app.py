# -*- coding: utf-8 -*-
from datetime import datetime
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from dotenv import load_dotenv
import os
import json
from flask import Flask, render_template, url_for


load_dotenv()
username=os.environ.get('DB_USERNAME')
password=os.environ.get('DB_PASSWORD')

engine = create_engine('postgresql+psycopg2://postgres:password@localhost:5432/bird_migration')


Base = automap_base()
Base.prepare(engine, reflect=True)
Base.classes.keys()

engine.table_names()[0]

Bird_Count = engine.table_names()

session = Session(engine)

allData = [row for row in engine.execute("SELECT * FROM bird_count")]

resultproxy = session.execute("SELECT * FROM bird_count")

d, a = {}, []
for rowproxy in resultproxy:
     # rowproxy.items() returns an array like [(key0, value0), (key1, value1)]
     for column, value in rowproxy.items():
         # build up the dictionary
         d = {**d, **{column: value}}
     a.append(d)
    

# Flask Setup
app = Flask(__name__)
# Flask Routes

#flask app v1
@app.route('/')
def entry():
    return render_template('index.html', data = a)

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5010)



# #flask app v2
# #@app.route('/data/speciesname/')
# #def access_data(speciesname):

#     # Check records for something that matches the params. This is where you would us a database query similar to HW12.
# #    results = []
# #    for record in records:
# #        key, value = speciesname.split('=')
# #        if record[key] == value:
# #            results.append(record) 

#     return jsonify(results)


# if __name__ == "__main__":
#     app.run()



