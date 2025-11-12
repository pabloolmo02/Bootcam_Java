package Sheet03.ex01;

public class Producto {
    private String nombre;
    private double precio;
    private int stock;

    public Producto(String nombre, double precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public int getStock() {
        return stock;
    }

    void mostrarDatos() {
        System.out.println("Datos:\n - Nombre: " + nombre + "\n - Precio: " + precio + "\n - stock: " + stock);
    }

    
}
