from IPython.display import HTML
HTML('https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data')
HTML('<iframe src = "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"</iframe>')

from sklearn.datasets import load_iris
from sklearn import metrics
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
import matplotlib.pyplot as plt
iris = load_iris()
type(iris)

print(iris.feature_names)
print(iris.target_names)
print(iris.target)
print(iris.data)
print(type(iris.data))
print(type(iris.target))
X = iris.data
y = iris.target


knn = KNeighborsClassifier(n_neighbors=1)
print(knn)
knn.fit(X,y)
prediction = knn.predict([[2,4,3,1]])
type(prediction)
# [0] - setosa
print(prediction)

prediction2 = knn.predict([[2,4,3,1],[4,6,5,3]])
# [0 2] - setosa, virginica
print(prediction2)

knn5 = KNeighborsClassifier(n_neighbors=5)
knn5.fit(X,y)
prediction = knn5.predict([[2,4,3,1],[4,6,5,3]])
type(prediction)
# [0 1] - setosa, versicolor
print(prediction)

#LOGISTIC REGRESSION#

logistic = LogisticRegression()
logistic.fit(X,y)
print(logistic)

prediction_lr = logistic.predict([[2,4,3,1],[4,6,5,3]])
print(prediction_lr)
print(iris.target_names)

prediction = knn.predict([[5.1,3.5,1.4,0.2],[6.3,3.3,4.7,1.6]])
# [0] - setosa
print(prediction)

prediction = knn5.predict([[5.1,3.5,1.4,0.2],[6.3,3.3,4.7,1.6]])
# [0 2] - setosa, virginica
print(prediction)

knn5 = KNeighborsClassifier(n_neighbors=5)
knn5.fit(X,y)
prediction = knn5.predict([[5.1,3.5,1.4,0.2],[6.3,3.3,4.7,1.6]])
type(prediction)
# [0 1] - setosa, versicolor
print(prediction)

X_train, X_test, y_train, y_test = train_test_split(X,y, test_size = 0.4, random_state = 4)
print(X.shape)
print(X_train.shape)
print(X_test.shape)

print(y_train.shape)
print(y_test.shape)

logistic = LogisticRegression()
logistic.fit(X_train, y_train)
y_pred = logistic.predict(X_test)

print(metrics.accuracy_score(y_test, y_pred))
#accuracy equal 93,3%

knn.fit(X_train, y_train)
y_pred = knn.predict(X_test)
print(metrics.accuracy_score(y_test, y_pred))
#accuracy equal 95,5%

knn5.fit(X_train, y_train)
y_pred = knn5.predict(X_test)
print(metrics.accuracy_score(y_test, y_pred))
#accuracy equal 93,3%

#K FOLD CROSS VALIDATION#
knn = KNeighborsClassifier(n_neighbors = 5)
scores = cross_val_score(knn, X, y, cv=10, scoring='accuracy')
print(scores.mean())
#accuracy equal 96,6%

k_range = range(1,45)
k_scores = []
for k in k_range:
    knn = KNeighborsClassifier(n_neighbors = k)
    scores = cross_val_score(knn, X, y, cv=10, scoring = 'accuracy')
    k_scores.append(scores.mean())
print(k_scores)

plt.plot(k_range, k_scores)
plt.xlabel('K value for KNN algorithm');
plt.ylabel('Accuracy value')