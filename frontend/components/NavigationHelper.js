import { useNavigation } from "@react-navigation/native";

export const useNavigationToNewPost = () => {
  const navigation = useNavigation();
  return () => navigation.navigate("NewPost");
};

export const useNavigateToFriendsFeed = () => {
  const navigation = useNavigation();
  return () => navigation.navigate("FriendsFeed");
};

export const useNavigateToDicover = () => {
  const navigation = useNavigation();
  return () => navigation.navigate("Discover")
}