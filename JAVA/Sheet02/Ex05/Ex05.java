package Sheet02.Ex05;

import java.util.ArrayList;
import java.util.Scanner;

/**
 * ex05 - ListaDeTareas
 * Gestión de una lista de tareas usando ArrayList con menú interactivo.
 */
public class Ex05 {

    private static ArrayList<String> tareas = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    /**
     * Añade una nueva tarea a la lista
     */
    public static void añadirTarea() {
        System.out.print("Introduce la nueva tarea: ");
        String tarea = scanner.nextLine();
        tareas.add(tarea);
        System.out.println("✓ Tarea añadida correctamente");
    }

    /**
     * Elimina una tarea de la lista por su índice
     */
    public static void eliminarTarea() {
        if (tareas.isEmpty()) {
            System.out.println("No hay tareas para eliminar");
            return;
        }
        
        mostrarTareas();
        System.out.print("Introduce el número de tarea a eliminar: ");
        try {
            int indice = Integer.parseInt(scanner.nextLine()) - 1;
            if (indice >= 0 && indice < tareas.size()) {
                String tareaEliminada = tareas.remove(indice);
                System.out.println("✓ Tarea eliminada: " + tareaEliminada);
            } else {
                System.out.println("✗ Número de tarea inválido");
            }
        } catch (NumberFormatException e) {
            System.out.println("✗ Por favor, introduce un número válido");
        }
    }

    /**
     * Muestra todas las tareas de la lista
     */
    public static void mostrarTareas() {
        if (tareas.isEmpty()) {
            System.out.println("No hay tareas en la lista");
            return;
        }
        
        System.out.println("\n--- Lista de Tareas ---");
        for (int i = 0; i < tareas.size(); i++) {
            System.out.println((i + 1) + ". " + tareas.get(i));
        }
        System.out.println();
    }

    /**
     * Muestra el menú principal
     */
    public static void mostrarMenu() {
        System.out.println("\n=== GESTOR DE TAREAS ===");
        System.out.println("1. Añadir tarea");
        System.out.println("2. Eliminar tarea");
        System.out.println("3. Mostrar todas las tareas");
        System.out.println("4. Salir");
        System.out.print("Elige una opción: ");
    }

    public static void main(String[] args) {
        boolean continuar = true;
        
        while (continuar) {
            mostrarMenu();
            String opcion = scanner.nextLine();
            
            switch (opcion) {
                case "1":
                    añadirTarea();
                    break;
                case "2":
                    eliminarTarea();
                    break;
                case "3":
                    mostrarTareas();
                    break;
                case "4":
                    System.out.println("¡Hasta pronto!");
                    continuar = false;
                    break;
                default:
                    System.out.println("✗ Opción no válida");
            }
        }
        
        scanner.close();
    }
}
