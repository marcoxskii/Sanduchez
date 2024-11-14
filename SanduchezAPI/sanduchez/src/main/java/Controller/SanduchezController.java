package Controller;

import DAO.SanduchezDAO;
import Models.Sandwich;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("sandwich")
public class SanduchezController {

    @Inject
    SanduchezDAO dao;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response  getAll(){
        System.out.println("Start");
        try{
            return Response.ok(dao.getAll()).build();
        }
        catch(Exception ex){
            return Response.status(Response.Status.BAD_REQUEST).entity(ex.getMessage()).type(MediaType.TEXT_PLAIN).build();
        }
        finally{
            System.out.println("End");
        }
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(String id){
         try{
            return Response.ok(dao.get(id)).build();
        }
        catch(Exception ex){
            return Response.status(Response.Status.BAD_REQUEST).entity(ex.getMessage()).type(MediaType.TEXT_PLAIN).build();
        }
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response save(Sandwich sandwich){
        try {
            dao.create(sandwich);
            return Response.ok(sandwich).build();            
        } catch (Exception ex) {
            return Response.status(Response.Status.BAD_REQUEST).entity(ex.getMessage()).type(MediaType.TEXT_PLAIN).build();
        }
    }

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response update(Sandwich newSandwich){
        try {       
            dao.update(newSandwich);
            return Response.ok(newSandwich).build();            
        } catch (Exception ex) {
            return Response.status(Response.Status.BAD_REQUEST).entity(ex.getMessage()).type(MediaType.TEXT_PLAIN).build();
        }
    }

    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response delete(@PathParam("id") String id){
        try {      
            dao.delete(id);
            return Response.ok().build();            
        } catch (Exception ex) {
            return Response.status(Response.Status.BAD_REQUEST).entity(ex.getMessage()).build();
        }
    }

}
