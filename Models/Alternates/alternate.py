import pandas as pd
from flask_cors import CORS
from math import radians, sin, cos, sqrt, atan2
from flask import Flask, render_template, request

app = Flask(__name__)
CORS(app)

data = pd.read_csv("E:\\Marine_Classification\\Models\\Alternates\\fish dummy .csv")
data = data.drop(['Accessibility', 'Popularity'], axis=1)

def haversine(lat1, lon1, lat2, lon2):
    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    distance = 6371 * c  
    return distance

def find_nearest_places(reference_place, places, fish_species):
    reference_lat, reference_lon = reference_place['Latitude'], reference_place['Longitude']
    places_with_distances = []
    visited_locations = set()

    fish_species = fish_species.lower()

    for place in places:
        if fish_species in place['Common Fish Species'].lower():
            distance = haversine(reference_lat, reference_lon, place['Latitude'], place['Longitude'])
            location_name = place['Location']

            if location_name not in visited_locations:
                places_with_distances.append((location_name, distance))
                visited_locations.add(location_name)

    places_with_distances.sort(key=lambda x: x[1])

    return places_with_distances[1:7]

@app.route('/')
def index():
    return render_template('alternate.html')

@app.route('/predict', methods=['POST'])
def predict():
    user_location = request.form['location']
    user_fish_species = request.form['fish_species']

    location_row = data[data['Location'] == user_location]

    if location_row.empty:
        return render_template('alternate.html', error='Invalid Location')

    else:
        available_fish_species = [species.strip() for species in location_row['Common Fish Species'].iloc[0].split(',')]

        if user_fish_species not in available_fish_species:
            return render_template('alternate.html', location=user_location, error='Invalid Fish Species')

        reference_place = {'Location': user_location, 'Latitude': location_row['Latitude'].iloc[0], 'Longitude': location_row['Longitude'].iloc[0]}
        nearest_places = find_nearest_places(reference_place, data.to_dict(orient='records'), user_fish_species)

        return render_template('alternate.html', location=user_location, fish_species=user_fish_species, nearest_places=nearest_places)


if __name__ == '__main__':
    app.run(debug=True)
