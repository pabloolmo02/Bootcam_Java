package First;

public class Coche {

    String marca;
    String modelo;
    int año;

    //  Constructor vacío
    public Coche() {

    }
    
    public Coche(String marca, String modelo, int año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    void arrancar() {
        System.out.println("El " + marca + ", " + modelo + " está arrancado");
    }
}