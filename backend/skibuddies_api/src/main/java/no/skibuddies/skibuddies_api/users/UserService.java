package no.skibuddies.skibuddies_api.users;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public List<User> allUsers(){
        return userRepository.findAll();
    }

    public Optional<User> singleUser(String userId) {
        return userRepository.findUserByUserId(userId);
    }

    public void createUser(String userId, String username, String email, String homeTown, String pwd, String hobbies, String dateOfBirth, String isPrivate) {
        User user = new User(userId, username, email, homeTown, pwd, hobbies, dateOfBirth, isPrivate);
        
        userRepository.insert(user);
    }
}
