package Sheet02.Ex03;

/**
 * ex03 - PromedioArray
 * Método que calcula el promedio (media aritmética) de un array de enteros.
 * Maneja el caso de array vacío devolviendo 0.
 */
public class Ex03 {

    /**
     * Calcula el promedio de los valores de un array
     * @param numeros array de números enteros
     * @return promedio de los valores, o 0 si el array está vacío
     */
    public static double calcularPromedio(int[] numeros) {
        if (numeros == null || numeros.length == 0) {
            return 0.0;
        }
        
        int suma = 0;
        for (int numero : numeros) {
            suma += numero;
        }
        
        return (double) suma / numeros.length;
    }

    public static void main(String[] args) {
        // Ejemplos de ejecución
        int[] array1 = {4, 8, 6, 2};
        System.out.println("Promedio de [4, 8, 6, 2]: " + calcularPromedio(array1));
        
        int[] array2 = {10, 20, 30};
        System.out.println("Promedio de [10, 20, 30]: " + calcularPromedio(array2));
        
        int[] array3 = {};
        System.out.println("Promedio de array vacío: " + calcularPromedio(array3));
    }
}
