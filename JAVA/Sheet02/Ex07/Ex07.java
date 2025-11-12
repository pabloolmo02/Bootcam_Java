package Sheet02.Ex07;

import java.util.ArrayList;
import java.util.Collections;

/**
 * ex07 - EstadísticasDeNotas (Nivel avanzado)
 * Gestión de notas con cálculos estadísticos usando ArrayList.
 */
public class Ex07 {

    private static ArrayList<Double> notas = new ArrayList<>();

    /**
     * Agrega una nota a la lista
     * @param n nota a agregar
     */
    public static void agregarNota(double n) {
        if (n >= 0 && n <= 10) {
            notas.add(n);
            System.out.println("✓ Nota " + n + " agregada correctamente");
        } else {
            System.out.println("✗ La nota debe estar entre 0 y 10");
        }
    }

    /**
     * Calcula el promedio de todas las notas
     * @return promedio de las notas, o 0 si no hay notas
     */
    public static double calcularPromedio() {
        if (notas.isEmpty()) {
            return 0.0;
        }
        
        double suma = 0;
        for (double nota : notas) {
            suma += nota;
        }
        return suma / notas.size();
    }

    /**
     * Calcula la nota máxima
     * @return nota máxima, o 0 si no hay notas
     */
    public static double calcularMaximo() {
        if (notas.isEmpty()) {
            return 0.0;
        }
        return Collections.max(notas);
    }

    /**
     * Calcula la nota mínima
     * @return nota mínima, o 0 si no hay notas
     */
    public static double calcularMinimo() {
        if (notas.isEmpty()) {
            return 0.0;
        }
        return Collections.min(notas);
    }

    /**
     * Muestra todas las estadísticas
     */
    public static void mostrarEstadisticas() {
        if (notas.isEmpty()) {
            System.out.println("No hay notas registradas");
            return;
        }
        
        System.out.println("\n=== ESTADÍSTICAS DE NOTAS ===");
        System.out.println("Total de notas: " + notas.size());
        System.out.println("Notas: " + notas);
        System.out.printf("Promedio: %.2f%n", calcularPromedio());
        System.out.printf("Nota máxima: %.2f%n", calcularMaximo());
        System.out.printf("Nota mínima: %.2f%n", calcularMinimo());
        System.out.println();
    }

    public static void main(String[] args) {
        // Agregar notas de ejemplo
        agregarNota(8.5);
        agregarNota(7.0);
        agregarNota(9.2);
        agregarNota(6.5);
        agregarNota(8.0);
        agregarNota(10.0);
        agregarNota(5.5);
        
        // Intentar agregar nota inválida
        agregarNota(11.0);
        agregarNota(-2.0);
        
        // Mostrar estadísticas
        mostrarEstadisticas();
        
        // Agregar más notas
        agregarNota(7.8);
        agregarNota(9.0);
        
        // Mostrar estadísticas actualizadas
        mostrarEstadisticas();
    }
}
