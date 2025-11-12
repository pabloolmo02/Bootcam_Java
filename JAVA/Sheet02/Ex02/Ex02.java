package Sheet02.Ex02;

/**
 * ex02 - SumaCondicional
 * Método que devuelve la suma de dos números solo si ambos son positivos;
 * en caso contrario, devuelve 0.
 */
public class Ex02 {

    /**
     * Suma dos números solo si ambos son positivos
     * @param a primer número
     * @param b segundo número
     * @return suma si ambos son positivos, 0 en caso contrario
     */
    public static int sumarSiPositivo(int a, int b) {
        if (a > 0 && b > 0) {
            return a + b;
        }
        return 0;
    }

    public static void main(String[] args) {
        // Ejemplos de ejecución
        System.out.println("sumarSiPositivo(3, 5) → " + sumarSiPositivo(3, 5));
        System.out.println("sumarSiPositivo(-2, 4) → " + sumarSiPositivo(-2, 4));
        System.out.println("sumarSiPositivo(10, 20) → " + sumarSiPositivo(10, 20));
        System.out.println("sumarSiPositivo(-5, -3) → " + sumarSiPositivo(-5, -3));
    }
}
