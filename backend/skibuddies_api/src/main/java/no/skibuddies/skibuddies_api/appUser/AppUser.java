package no.skibuddies.skibuddies_api.appUser;

import java.sql.Date;
//java imports
import java.util.Collection;
import java.util.Collections;

import org.springframework.data.mongodb.core.mapping.Document;
//spring imports
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.NoArgsConstructor;
import no.skibuddies.skibuddies_api.appUser.userData.HomeTown;
import no.skibuddies.skibuddies_api.appUser.userData.User;
import no.skibuddies.skibuddies_api.appUser.userData.UserRole;

@Document(collection = "users")
@NoArgsConstructor
public class AppUser extends User implements UserDetails {

    //Crutial constructor
    public AppUser(String username,
                     String email,
                     String password,
                     UserRole role,
                     boolean locked,
                     boolean enabled) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.locked = locked;
        this.enabled = enabled;
    }

    //Crutial+Optional constructor
    public AppUser(String username,
                     String email,
                     String password,
                     HomeTown homeTown,
                     Date dateOfBirth,
                     Collection<String> hobbies,
                     boolean isPrivate,
                     UserRole role,
                     boolean locked,
                     boolean enabled) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.homeTown = homeTown;
        this.dateOfBirth = dateOfBirth;
        this.hobbies = hobbies;
        this.isPrivate = isPrivate;
        this.role = role;
        this.locked = locked;
        this.enabled = enabled;
    }

    //User detailsData
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(role.name());
        return Collections.singleton(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
    
}
