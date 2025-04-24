from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import joblib
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)  # So React can talk to Flask

# Load model and scalers
model = load_model("lstm_model.h5", compile=False)
feature_scaler = joblib.load("feature_scaler.pkl")
target_scaler = joblib.load("target_scaler.pkl")

feature_columns = [
    "Average Temperature (Day)",
    "Average Wind Direction (Day)",
    "Average Wind Speed (Day)",
    "Relative Humidity",
    "Average Wind Speed (Period)"
]
SEQ_LEN = 60

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        values = [float(data[col]) for col in feature_columns]
        df = pd.DataFrame([values], columns=feature_columns)
        scaled = feature_scaler.transform(df)
        sequence = np.array([scaled] * SEQ_LEN).reshape(1, SEQ_LEN, len(feature_columns))
        prediction_scaled = model.predict(sequence)
        prediction = target_scaler.inverse_transform(prediction_scaled)
        return jsonify({"prediction": float(prediction[0][0])})
    except Exception as e:
        return jsonify({"error": str(e)}), 400
if __name__ == "__main__":
    app.run(port=5000)