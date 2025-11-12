package Sheet03.ex02;


public class Main {
    public static void main(String[] args) {
       Producto producto1 = new Producto("Laptop", 899.99, 15);
        System.out.println("Producto 1 (constructor completo):");
        producto1.mostrarDatos();

        System.out.println("\n----------------------------------------\n");

        // Crear producto usando constructor parcial (2 parámetros)
        Producto producto2 = new Producto("Mouse", 24.99);
        System.out.println("Producto 2 (constructor con stock por defecto):");
        producto2.mostrarDatos();

        System.out.println("\n----------------------------------------\n");

        // Otro ejemplo con constructor completo
        Producto producto3 = new Producto("Teclado mecánico", 129.50, 8);
        System.out.println("Producto 3 (constructor completo):");
        producto3.mostrarDatos();
    }
    
}
