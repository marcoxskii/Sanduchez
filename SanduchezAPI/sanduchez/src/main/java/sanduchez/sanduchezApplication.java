package sanduchez;

import java.util.HashSet;
import java.util.Set;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import util.CORSFilter;

@ApplicationPath("/api")
public class sanduchezApplication extends Application{

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new HashSet<>();
        resources.add(CORSFilter.class); // Registra el filtro CORS
        return resources;
    }
}