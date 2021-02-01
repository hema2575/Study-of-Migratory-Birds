# -*- coding: utf-8 -*-
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
# from dotenv import load_dotenv
import os
import json
from flask import Flask, render_template, url_for
# 
#  bird data sample
birdData = {0: {'SPECIESNAME': "American Coot", 'region': 'Central High', 'count': '100'}, 
1: {'SPECIESNAME': "American Coot", 'region': 'Central High', 'count': '200'}, 
2: {'SPECIESNAME': "American Coot", 'region': 'East Coast', 'count': '105'}, 
3: {'SPECIESNAME': "American Coot", 'region': 'East Coast', 'count': '105'}, 
4: {'SPECIESNAME': "American Coot", 'region': 'Lower West Coasth', 'count': '150'}, 
5: {'SPECIESNAME': "American Coot", 'region': 'Lower West Coast', 'count': '100'},
6: {'SPECIESNAME': "American Coot", 'region': 'Northwen Highlands', 'count': '180'},
7: {'SPECIESNAME': "American Coot", 'region': 'Northwen Highlands', 'count': '190'},
8: {'SPECIESNAME': "American Coot", 'region': 'Other interior highlands', 'count': '900'},
9: {'SPECIESNAME': "American Coot", 'region': 'Other interior highlands', 'count': '100'},
10: {'SPECIESNAME': "American Coot", 'region': 'Upper west coast', 'count': '190'},
11: {'SPECIESNAME': "American Coot", 'region': 'Upper west coast', 'count': '130'},
12: {'SPECIESNAME': "Other bird", 'region': 'Central High', 'count': '100'}}

#Call data from postgres server
engine = create_engine('postgresql+psycopg2://postgres:password@localhost:5432/bird_data')

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Create our session (link) from Python to the DB
session = Session(engine)

# Request data from postgres
resultproxy = session.execute("SELECT * FROM bird_data")

# Write data into dictionary
d, a = {}, []
for rowproxy in resultproxy:
    # rowproxy.items() returns an array like [(key0, value0), (key1, value1)]
    for column, value in rowproxy.items():
        # build up the dictionary
        d = {**d, **{column: value}}
    a.append(d)
# print(birdData[0])

#Create dictionary for mapping
regions = {0: {'name': "Central High", 'location': [36.00, -94]}, 
1: {'name': "East Coast", 'location': [38, -75.00]}, 
2: {'name': "Lower West Coast", 'location': [33.00, -117.00]}, 
3: {'name': "Northwen Highlands", 'location': [55.00, -64.00]}, 
4: {'name': "Other interior highlands", 'location': [38.60, -101]}, 
5: {'name': "Upper west coast", 'location': [45.00, -120.00]}}


# filter bird data (a) by id
speciesFilter = list(filter(lambda d: d['SPECIESNAME'] == "American Coot", a))
# [v for v in birdData.values() if "American Coot" in v.values()]
# print(speciesFilter)
# set initial birdcount variable
birdcount = 0

#loop through regions array
for region in regions:

    #loop through the bird data
    for result in speciesFilter:

        # loop through birdcount data to sum totals for regions
        if result['REGION'] == regions[region]['name']:
            
            # add birdcount to counter
            birdcount = birdcount + int(result['COUNT']);

    # append key item to dictionary
    regions[region]['count']=birdcount;

    #reset birdcount to 0
    birdcount= 0

print(regions)