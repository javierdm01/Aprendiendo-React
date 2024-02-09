
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  const users=[
    {
      userName:'midudev',
      name:"Miguel Angel Duran", 
      initialFollowing:true
    },
    {
      userName:'javierdm01',
      name:"Javier Diaz Molina", 
      initialFollowing:false
    },
    {
      userName:'willirex',
      name:"Guillermo Diaz",
      initialFollowing:true
    }
  ]
  return (
    <>
    <section className="App">
      {
        users.map(({userName, name, initialFollowing},index) =>(
          <TwitterFollowCard 
            key={index}
            userName={userName}
            name={name}
            initialFollowing={initialFollowing} />
        ))
      }
    </section>
      
      

    </>
  )
}

export default App
