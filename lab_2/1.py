from scipy.stats import norm
P = 0.95 		  #вероятность обнаружения
Ф_1 = norm.ppf(P)  #Вычисление квантиля (обратной функции Лапласа)
print(Ф_1)
