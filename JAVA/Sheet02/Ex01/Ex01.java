package Sheet02.Ex01;

/**
 * ex01 - EcoPersonalizado
 * Método que recibe una cadena y un número entero n,
 * y muestra el texto repetido n veces, uno por línea.
 */
public class Ex01 {

    /**
     * Muestra un mensaje repetido n veces
     * @param mensaje el texto a repetir
     * @param n número de repeticiones
     */
    public static void eco(String mensaje, int n) {
        for (int i = 0; i < n; i++) {
            System.out.println(mensaje);
        }
    }

    public static void main(String[] args) {
        // Ejemplo de ejecución
        eco("¡Hola!", 3);
        System.out.println();
        eco("Java es genial", 2);
    }
}
