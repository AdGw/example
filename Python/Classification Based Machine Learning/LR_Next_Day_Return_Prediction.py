import numpy as np
import pandas as pd

lags = 5
start_test = pd.to_datetime('2018-03-31')

from sklearn.linear_model import LogisticRegression

ts = pd.read_csv('XMA.csv', index_col = 'Date')
ts.index = pd.to_datetime(ts.index)
tslag = ts[["XMA"]].copy()

for i in range(0,lags):
    tslag["Lag_" + str(i+1)] = tslag["XMA"].shift(i+1)
tslag["returns"] = tslag["XMA"].pct_change()

# Create the lagged percentage returns columns
for i in range(0,lags):
    tslag["Lag_" + str(i+1)] = tslag["Lag_" + str(i+1)].pct_change()
tslag.fillna(0, inplace=True)
tslag["Direction"] = np.sign(tslag["returns"])

#Use the prior two days of returns as predictor values,
#with direction as the response
#if the number of Lag is positive or negative, than has a impact of sign in
#Direction section
X = tslag[["Lag_1", "Lag_2"]]
y = tslag["Direction"]

#Creating test sets
X_train = X[X.index < start_test]
X_test = X[X.index >= start_test]
y_train = y[y.index < start_test]
y_test = y[y.index >= start_test]

#Create dataframe predictions
pred = pd.DataFrame(index=y_test.index)
lr = LogisticRegression()
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)

pred = (1.0 + (y_pred == y_test))/2
hit_rate = np.mean(pred)

print("Logistic Regression {:.4f}", format(hit_rate))

"""
    Logistic Regression {:.4f} 0.775
"""