
package DAO;

import java.util.List;

import javax.persistence.Query;

import Models.Sandwich;

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