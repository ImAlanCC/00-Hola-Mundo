import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const formatUserName = (userName) => `@${userName}`
  
  return (
    //se puede colocar así o solamente dejando los signos "<>/</>"
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}   
        isFollowing
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="alan"
        name="Alan Ricardo Che Cahum"
      />
    </section>
  );
}
