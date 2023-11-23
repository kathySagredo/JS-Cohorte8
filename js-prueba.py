numero = 1
limite = 100

def fizzbuzz(numero=1):
  while numero < 101:
    if numero % 3 == 0 and numero % 5 == 0:
      print("Fizzbuzz");
    elif numero % 3 == 0:
      print("Fizz");
    elif numero % 5 == 0:
      print("Buzz");
    else:
      print(numero)
    numero= numero+1  
fizzbuzz(numero)


