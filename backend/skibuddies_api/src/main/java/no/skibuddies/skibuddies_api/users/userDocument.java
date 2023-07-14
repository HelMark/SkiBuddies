/*package no.skibuddies.skibuddies_api.users;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "skibuddiesAPI_DB")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class userDocument {

    @Id
    private ObjectId id;

    private String username;
    private String hashedPassword;
    private String email;
    private boolean isprivate;

    @DocumentReference
    private List<userDocument> followers;
    private List<userDocument> following;


}
*/