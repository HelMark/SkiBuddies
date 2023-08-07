package no.skibuddies.skibuddies_api.appUser;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public interface AppUserRepository extends MongoRepository<AppUser, ObjectId> {
    
    Optional<AppUser> findByEmailOrUsername(String usernameOrEmail);

}
