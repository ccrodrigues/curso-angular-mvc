package clientsoap;

import soap.KaikService;
import soap.KaikService_Service;

public class Main {

    public static void main(String[] args) {
        
        KaikService_Service ks = new KaikService_Service();
        
        KaikService porta = ks.getKaikServicePort();
        
        int soma = porta.somar(1, 2);
        
        System.out.println(soma);
        
        String msg = porta.hello("World");
        
        System.out.println(msg);
    }
    
}
