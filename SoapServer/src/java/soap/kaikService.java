package soap;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

@WebService(serviceName = "kaikService")
public class kaikService {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }
    
    @WebMethod(operationName = "somar")
    public Integer somar (@WebParam(name = "num1") int num1, @WebParam(name = "num2") int num){
        return num1+num;
    }
}
