
package DAO;

import java.util.List;

import Models.Sandwich;
import jakarta.ejb.Stateless;
import jakarta.persistence.Query;

@Stateless
public class SanduchezDAO extends GenericDAO<Sandwich, String> {

    @Override
    public Sandwich get(String param) {
        Sandwich entity = em.find(Sandwich.class, param);
		return entity;
    }

    @Override
    public List<Sandwich> getAll() {
        String jpql = "SELECT l FROM Sandwich l";
		Query query = em.createQuery(jpql);
		return query.getResultList();
    }

}