package no.skibuddies.skibuddies_api.appUserRegistration;

import java.sql.Date;
import java.util.Collection;

import lombok.Data;
import no.skibuddies.skibuddies_api.appUser.userData.HomeTown;

@Data
public class RegistrationRequest {

    //Crutial UserData
    private final String username;
    private final String email;
    private final String password;

    //Optional UserData
    private final HomeTown homeTown;
    private final Date dateOfBirth;
    private final Collection<String> hobbies;
    private final boolean isPrivate;

    
}
