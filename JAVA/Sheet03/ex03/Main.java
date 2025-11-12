package Sheet03.ex03;

public class Main {
    public static void main(String[] args) {

        System.out.println("PASO 1: Usando constructor por defecto (implícito)");
        Alumno alumno1 = new Alumno();
        alumno1.mostrarDatos();

        Alumno alumno2 = new Alumno(); // Constructor por defecto explícito
        System.out.println("Constructor sin parámetros:");
        alumno2.mostrarDatos();


        Alumno alumno3 = new Alumno("Ana García", 20); // Constructor con parámetros
        System.out.println("Constructor con parámetros:");
        alumno3.mostrarDatos();

    }
}
