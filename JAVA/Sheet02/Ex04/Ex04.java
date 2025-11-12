package Sheet02.Ex04;

/**
 * ex04 - Temperaturas
 * Array bidimensional que representa temperaturas de 3 semanas (filas) 
 * con 7 días cada una (columnas).
 * Calcula y muestra el promedio de cada semana.
 */
public class Ex04 {

    /**
     * Calcula y muestra el promedio de temperatura de cada semana
     * @param datos array bidimensional con temperaturas [semanas][días]
     */
    public static void mostrarPromedioSemanal(double[][] datos) {
        for (int semana = 0; semana < datos.length; semana++) {
            double suma = 0;
            for (int dia = 0; dia < datos[semana].length; dia++) {
                suma += datos[semana][dia];
            }
            double promedio = suma / datos[semana].length;
            System.out.printf("Promedio semana %d: %.1f°C%n", (semana + 1), promedio);
        }
    }

    public static void main(String[] args) {
        // Array bidimensional: 3 semanas x 7 días
        double[][] temperaturas = {
            {22.5, 21.0, 20.5, 21.8, 22.0, 19.5, 21.8}, // Semana 1
            {19.0, 20.5, 18.5, 19.8, 20.2, 21.0, 19.6}, // Semana 2
            {23.5, 24.0, 22.8, 23.2, 22.5, 23.8, 22.0}  // Semana 3
        };
        
        mostrarPromedioSemanal(temperaturas);
    }
}
