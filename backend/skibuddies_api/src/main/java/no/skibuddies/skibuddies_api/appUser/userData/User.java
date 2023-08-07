package no.skibuddies.skibuddies_api.appUser.userData;

//java imports
import java.sql.Date;
import java.util.Collection;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

//lombok imports
import lombok.Data;

@Data
public class User {

    //Crutial UserData
    @Id
    protected ObjectId id;
    protected String username;
    protected String email;
    protected String password;

    //Optional UserData
    protected HomeTown homeTown;
    protected Date dateOfBirth;
    protected Collection<String> hobbies;
    protected boolean isPrivate;

    //Backend UserData
    protected UserRole role;
    protected boolean locked;
    protected boolean enabled;
}
