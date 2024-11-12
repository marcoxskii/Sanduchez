package DAO;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public abstract class GenericDAO<T, D> {

    @PersistenceContext
	protected EntityManager em;

    public void create(T entity){
        em.persist(entity);
    }

    public void update(T entity) {
		em.merge(entity);
	}
	
	public void delete(D param) {
		T entity = get(param);
		em.remove(entity);		
	}
	
	public abstract T get(D param);
	
	public abstract List<T> getAll();

}