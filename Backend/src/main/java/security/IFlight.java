/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import entity.Flight;
import java.util.List;

/**
 *
 * @author Troels
 */
public interface IFlight {
   Flight CreateFlight (Flight flight);
   Flight GetFlightById (int id);
   List<Flight> GetFlight();
   Flight EditFlight (Flight flight);
   Flight DeleteFlight (Flight flight);
   
   
   
   
}
