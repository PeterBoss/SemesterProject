/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author mahnaz
 */
@Path("flights")
public class FlightinfoService {
    private final String USER_AGENT = "Mozilla/5.0";
    private static Gson gson;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of FlightinfoService
     */
    public FlightinfoService() {
        gson = new Gson();
    }

    /**
     * Retrieves representation of an instance of rest.FlightinfoService
     * @param from
     * @param date
     * @param seats
     * @return an instance of java.lang.String
     */
    @GET
    @Path("{from}/{date}/{seats}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson(@PathParam("from") String from,@PathParam("date") String date,@PathParam("seats") String seats) {
        StringBuffer response = null;
        String json ="[";
        try {
            //TODO return proper representation object
            
            List<String> list = new ArrayList();
            String lars = "http://airline-plaul.rhcloud.com/api/flightinfo/";
            String us = "http://airline-plaul.rhcloud.com/api/flightinfo/";
            list.add(lars);
            list.add(us);
            String url=null;
            
            
            for (String string : list) {
                
                url = string +from+"/"+date+"/"+seats;
            
            URL obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            
            // optional default is GET
            con.setRequestMethod("GET");
            
            //add request header
            con.setRequestProperty("User-Agent", USER_AGENT);
            
            int responseCode = con.getResponseCode();
            System.out.println("\nSending 'GET' request to URL : " + url);
            System.out.println("Response Code : " + responseCode);
            
            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            response = new StringBuffer();
            
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            if (json.length()>1){
            json += ",";
            }
            if (response.length()>0){
                json +=response.toString();
            }
            
            in.close();
            
            //print result
            System.out.println(response.toString());
            
            
            // **Gem informationer fra forbindelsen**
            }
            
        } catch (MalformedURLException ex) {
            Logger.getLogger(FlightinfoService.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(FlightinfoService.class.getName()).log(Level.SEVERE, null, ex);
        }
        json += "]";
        return json; //placeholder
    }

    /**
     * PUT method for updating or creating an instance of FlightinfoService
     * @param content representation for the resource
     */
    @PUT
    
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
    @POST
    @Path("reservation/{flightid}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void postJson(String content,@PathParam("flightid") String flightid) {
        
// Parse JSONobject
//gson.fromJson(content, Klasse til indkommende reservationer)
        
        
        // Gem vha facadekald
    }
    
}
