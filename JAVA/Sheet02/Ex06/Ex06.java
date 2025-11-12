package Sheet02.Ex06;

/**
 * ex06 - OperacionesMatemáticas
 * Clase Calculadora con métodos estáticos para operaciones matemáticas básicas.
 */
public class Ex06 {

    /**
     * Clase interna con métodos estáticos para cálculos matemáticos
     */
    static class Calculadora {
        
        /**
         * Calcula el cuadrado de un número
         * @param x número a elevar al cuadrado
         * @return x al cuadrado
         */
        public static double cuadrado(double x) {
            return Math.pow(x, 2);
        }
        
        /**
         * Calcula la raíz cuadrada de un número
         * @param x número del que obtener la raíz
         * @return raíz cuadrada de x
         */
        public static double raizCuadrada(double x) {
            return Math.sqrt(x);
        }
        
        /**
         * Devuelve el mayor de dos valores
         * @param a primer valor
         * @param b segundo valor
         * @return el mayor de los dos valores
         */
        public static double mayor(double a, double b) {
            return Math.max(a, b);
        }
    }

    public static void main(String[] args) {
        // Ejemplos de uso de los métodos estáticos
        System.out.println("Cuadrado de 4: " + Calculadora.cuadrado(4));
        System.out.println("Raíz de 9: " + Calculadora.raizCuadrada(9));
        System.out.println("Mayor entre 7 y 12: " + Calculadora.mayor(7, 12));
        
        System.out.println();
        
        // Más ejemplos
        System.out.println("Cuadrado de 7.5: " + Calculadora.cuadrado(7.5));
        System.out.println("Raíz de 16: " + Calculadora.raizCuadrada(16));
        System.out.println("Mayor entre -5 y 3: " + Calculadora.mayor(-5, 3));
    }
}
