package Sheet03.ex03;

public class Alumno {
    private String nombre;
    private int edad;

    public Alumno() {
        this.nombre = "Sin nombre";
        this.edad = 0;
    }

    public Alumno(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    public void mostrarDatos() {
        System.out.println("Alumno: " + nombre + ", Edad: " + edad + " años");
    }
}


