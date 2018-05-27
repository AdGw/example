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