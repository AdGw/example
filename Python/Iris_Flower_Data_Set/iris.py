from IPython.display import HTML
HTML('https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data')
HTML('<iframe src = "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"</iframe>')

from sklearn.datasets import load_iris
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

from sklearn.neighbors import KNeighborsClassifier
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