package no.skibuddies.skibuddies_api.users;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.sql.Date;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    private ObjectId id;

    private String userId;
    private String username;
    private String email;
    private String hometown;
    private String pwd;
    private List<String> hobbies;
    private String dateOfBirth;
    private boolean isprivate;

    @DocumentReference
    private List<User> followers;

    @DocumentReference
    private List<User> following;

    public User(String userId, String username, String email, String homeTown, String pwd, String hobbies, String dateOfBirth, String isPrivate) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.hometown = homeTown;
        this.pwd = pwd;
        this.hobbies.add(hobbies);
        this.dateOfBirth = dateOfBirth;

        if (isPrivate.toLowerCase().equals("true")) {
            this.isprivate = true;
        } else if (isPrivate.toLowerCase().equals("false")) {
            this.isprivate = false;
        } else {
            throw new IllegalArgumentException("Neither true or false");
        }
    }

}