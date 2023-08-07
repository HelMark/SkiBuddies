package no.skibuddies.skibuddies_api.appUser.userData;

//Lombok imports
import lombok.Data;

@Data
public class HomeTown {
        
    //Crutial townData
    private String city; 

    //Optional townData
    private String address;
    private String country;
    private String zipCode;
    
    public HomeTown (String city) {
        this.city = city;
    }
}
