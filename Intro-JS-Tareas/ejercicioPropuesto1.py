#Ejercicio suma
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
suma = num1 + num2
print(f"La suma de {num1} y {num2} es {suma}")

#Ejercicio producto
producto = num1 * num2
print(f"El producto de {num1} y {num2} es {producto}")

# Ejercicio Factorial
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

numero = int(input("Ingresa un número entero positivo: "))
if numero < 0:
    print("El número debe ser positivo.")
else:
    resultado = factorial(numero)
    print(f"El factorial de {numero} es {resultado}")

#Ejercicio Fibonacci
def fibonacci(n):
    fib = []
    a, b = 0, 1
    while a <= n:
        fib.append(a)
        a, b = b, a + b
    return fib

limite = int(input("Ingresa un número límite para la secuencia de Fibonacci: "))
if limite < 0:
    print("El límite debe ser un número positivo.")
else:
    secuencia = fibonacci(limite)
    print("Secuencia de Fibonacci:", secuencia)

#Mayor de los 3 números

num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
num3 = float(input("Ingresa el tercer número: "))

if num1 >= num2 and num1 >= num3:
    mayor = num1
elif num2 >= num1 and num2 >= num3:
    mayor = num2
else:
    mayor = num3

print(f"El número mayor entre {num1}, {num2} y {num3} es {mayor}")

#Ejercicio ordenar

entrada = input("Ingresa una lista de números separados por comas: ")
numeros = [float(num) for num in entrada.split(',')]
orden = input("¿Deseas ordenar en 'ascendente' o 'descendente'? ").lower()

def ordenar_ascendente(lista):
    n = len(lista)
    for i in range(n):
        for j in range(0, n-i-1):
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]

def ordenar_descendente(lista):
    n = len(lista)
    for i in range(n):
        for j in range(0, n-i-1):
            if lista[j] < lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]

if orden == "ascendente":
    ordenar_ascendente(numeros)
elif orden == "descendente":
    ordenar_descendente(numeros)
else:
    print("Opción de ordenamiento no válida. Por favor, elige 'ascendente' o 'descendente'.")

print("Lista ordenada:", numeros)

#Promedio

entrada = input("Ingresa una lista de números separados por comas: ")
numeros = [float(num) for num in entrada.split(',')]

if len(numeros) > 0:
    promedio = sum(numeros) / len(numeros)
    print(f"El promedio de los números ingresados es: {promedio}")
else:
    print("No ingresaste ningún número.")

#Contador de palabras
texto = input("Ingresa una cadena de texto: ")
palabras = texto.split()
cantidad_palabras = len(palabras)
print(f"La cadena ingresada tiene {cantidad_palabras} palabras.")

#Inversión de cadena

cadena = input("Ingresa una cadena de texto: ")
cadena_invertida = cadena[::-1]
print("Cadena invertida:", cadena_invertida)

#Numeros primos
numero = int(input("Ingresa un número: "))

if numero > 1:
    es_primo = True
    for i in range(2, int(numero ** 0.5) + 1):
        if numero % i == 0:
            es_primo = False
            break
    if es_primo:
        print(f"{numero} es un número primo.")
    else:
        print(f"{numero} no es un número primo.")
else:
    print("Por favor, ingresa un número mayor que 1.")

#Calificación en letras

calificacion = int(input("Ingresa una calificación numérica (de 0 a 100): "))

if 0 <= calificacion <= 100:
    if calificacion >= 90:
        letra = 'A'
    elif calificacion >= 80:
        letra = 'B'
    elif calificacion >= 70:
        letra = 'C'
    elif calificacion >= 60:
        letra = 'D'
    else:
        letra = 'F'
    
    print(f"La calificación {calificacion} se convierte a letra: {letra}")
else:
    print("La calificación debe estar en el rango de 0 a 100.")

#Interes Compuesto

principal = float(input("Ingresa el monto principal: "))
tasa_interes = float(input("Ingresa la tasa de interés anual (en porcentaje): "))
tiempo = int(input("Ingresa el número de años: "))

tasa_interes_decimal = tasa_interes / 100
monto_final = principal * (1 + tasa_interes_decimal) ** tiempo

print(f"El monto final después de {tiempo} años con interés compuesto es: {monto_final}")

#Validación de contraseña
contrasena = input("Ingresa una contraseña: ")

# Definir los requisitos de seguridad
longitud_minima = 8
requiere_mayusculas = True
requiere_minusculas = True
requiere_numeros = True

# Inicializa las variables para verificar los requisitos
cumple_longitud = len(contrasena) >= longitud_minima
cumple_mayusculas = any(c.isupper() for c in contrasena) if requiere_mayusculas else True
cumple_minusculas = any(c.islower() for c in contrasena) if requiere_minusculas else True
cumple_numeros = any(c.isdigit() for c in contrasena) if requiere_numeros else True

# Verifica si la contraseña cumple con todos los requisitos
if cumple_longitud and cumple_mayusculas and cumple_minusculas and cumple_numeros:
    print("La contraseña es segura y cumple con los requisitos.")
else:
    print("La contraseña no cumple con los requisitos de seguridad.")
