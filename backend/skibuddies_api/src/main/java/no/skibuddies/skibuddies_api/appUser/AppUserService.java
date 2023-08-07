package no.skibuddies.skibuddies_api.appUser;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {
    
    private final static String USER_NOT_FOUND_MSG = "User with email %s not found";
    private final AppUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        return userRepository.findByEmailOrUsername(usernameOrEmail).orElseThrow(()-> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, usernameOrEmail)));
    }

    //FOR TESTING PURPOSES
    public List<AppUser> allUsers(){
        return userRepository.findAll();
    }
    /*
    public AppUser createUser(String userId, String username, String email, String homeTown, String pwd, String hobbies, String dateOfBirth, String isPrivate) {
        AppUser AppUser = new AppUser(userId, username, email, homeTown, pwd, hobbies, dateOfBirth, isPrivate);
        userRepository.insert(AppUser);
        return AppUser;
    }
    */

}
