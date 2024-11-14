package com.sanduchez;

import java.util.HashSet;
import java.util.Set;

import Controller.SanduchezController;
import Util.CORSFilter;
import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;

@ApplicationPath("/rs")
public class SanduchezApplication extends Application{

    @Override
    public Set<Class<?>> getClasses() {
        System.out.println("Application classes started");
        Set<Class<?>> resources = new HashSet<>();
        resources.add(CORSFilter.class);
        resources.add(SanduchezController.class);
        return resources;
    }
}
