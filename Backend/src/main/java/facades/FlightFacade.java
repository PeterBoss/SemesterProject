/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entity.Flight;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import security.IFlight;

/**
 *
 * @author Troels
 */
public class FlightFacade implements IFlight {
      EntityManagerFactory emf;
       public FlightFacade(EntityManagerFactory emf) {
    this.emf = emf;   
  }
private EntityManager getEntityManager() {
    return emf.createEntityManager();
  }

    @Override
    public Flight CreateFlight(Flight flight) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(flight);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return flight;
    }

    @Override
    public Flight GetFlightById(int id) {
    EntityManager em = getEntityManager();
        Flight flight;
        try {
            flight = em.find(Flight.class, id);
        } finally {
            em.close();
        }
        return flight;    
    }

    @Override
    public List<Flight> GetFlight() {
          EntityManager em = getEntityManager();
        List<Flight> flights;        try {

            flights = em.createQuery("SELECT flight FROM Flight flight").getResultList();
        } finally {
            em.close();
        }
        return flights;
    }

    @Override
    public Flight EditFlight(Flight flight) {
            EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.merge(flight);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return flight;
    }

    @Override
    public Flight DeleteFlight(Flight flight) {
        EntityManager em = getEntityManager();
        
        try {
            em.getTransaction().begin();
            flight = em.find(Flight.class, flight);
            em.remove(flight);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return flight;
    }





}
