package First;

public class Poo {

    public static void main(String[] args) {
        //  Constructor vacío 
        Coche coche = new Coche();
        coche.marca = "Lambo";
        coche.modelo = "murcielago";
        coche.año = 1997;
        coche.arrancar();
        //  Constructor vacío
        Coche coche2 = new Coche();
        coche2.marca = "Porsche";
        coche2.modelo = "Panamera";
        coche2.año = 2025;
        coche2.arrancar();
        //  Constructor Coche
        Coche coche3 = new Coche("Audi", "A3", 2020);
        coche3.arrancar();
    }
}