package sanduchez;

import java.util.HashSet;
import java.util.Set;

import Controller.SanduchezController;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;
import util.CORSFilter;

@ApplicationPath("/rs")
public class sanduchezApplication extends Application{

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new HashSet<>();
        resources.add(CORSFilter.class);
        resources.add(SanduchezController.class);
        return resources;
    }
}
