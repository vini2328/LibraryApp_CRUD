import "./index.css";
import { Addcolor } from "./Addcolor";
import {Counter} from"./Counter";
import{ Routes,Route,Link,useNavigate,useParams, Navigate} from"react-router-dom";
import { useState } from "react";
import Profile from './Profile';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import * as React from 'react';
import BasicForm from "./BasicForm";






const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
    trailer:"https://www.youtube.com/embed/Ma_qMbvTpzo"
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
  },
];

export default function App() {
  const[booklist,setBooklist]=useState(INITIAL_BOOK_LIST)
  const navigate=useNavigate()
   
  const[mode,setMode]=useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  

 
  const people =["rohan","vini","harshi","Guvi"];

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
        <Button color="inherit" onClick={()=>navigate("/books")}>Booklist</Button>
        <Button color="inherit" onClick={()=>navigate("/add-color")}>Addcolor</Button>
        <Button color="inherit" onClick={()=>navigate("/profile")}>Users</Button>
        <Button color="inherit" onClick={()=>navigate("/books/add")}>Addbook</Button>
        <Button color="inherit" onClick={()=>navigate("/form")}>BasicForm</Button>


        <Button sx={{ marginLeft:"auto"}}
        startIcon={mode===mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}

        color="inherit" onClick={()=>setMode(mode==="light"?"dark": "light" )}>{mode==="light"?"dark": "light"} Mode</Button>


      </Toolbar>
      </AppBar>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/books">Book App📕📗📘📙📚📔</Link>
            </li>
          <li>
            <Link to="/add-color">Add Color Game</Link>
            </li>
          <li>
            <Link to="/profile">Users Profile</Link>
            </li>
            <li>
            <Link to="/books/add">Add book</Link>
            </li>

           </ul>
      </nav> */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books" element={<Bookist  booklist={booklist} setBooklist={setBooklist}/>} />
  <Route path="/books/:bookid" element={<BookDetails booklist={booklist} />} />
  <Route path="/books/add" element={<Addbook booklist={booklist} setBooklist={setBooklist}/>} />
  <Route path="/add-color" element={<Addcolor />} />
  <Route path="/profile" element={<Users/>}/>
  <Route path="/novel" element={<Navigate replace to="/books"/>}/>
  <Route path="/form" element={<BasicForm/>}/>



  <Route path="/404" element={<Notfoundpage/>}/>
  <Route path="*" element={<Navigate replace to="/404"/>}/>

  </Routes>


     {/* {people.map((person)=>(
      <Welcome name={person}/>
      ))} */}
      {/* <Profile
      name="vini"
      pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJ5YjQ6WTRlcIfhMzCEwb8oTXCkVyKZer2R0T0JLbGw&s"
      />
      <Profile
      name="Rohan"
      pic="https://media.licdn.com/dms/image/D5603AQGKYc0mNxq_3w/profile-displayphoto-shrink_800_800/0/1674274798202?e=2147483647&v=beta&t=PqYQrkMU7KHKv7j_EsZfA0IkhwYc-bve12HwwQN1lKE"
      />
      <Profile
      name="Harshi"
      pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXa1pF-jvboEZTSsM9J4Fu_DuiaIO0fNlMw&usqp=CAU"
      />
      <Profile
      name="Guvi"
      pic="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
      /> */}


      
      {/* <Welcome name="Vini"  age="21"/>
      <Welcome name="Rohan"  age="25"/>
      <Welcome name="Harshi" age="22"/> */}


     </div>
     </ThemeProvider>
  );
}

function Addbook({booklist,setBooklist}){
  const [name,setName]=useState(" ")
  const [poster,setPoster]=useState(" ")
  const [rating,setRating]=useState(" ")
  const [summary,setSummary]=useState(" ")

  const navigate=useNavigate()


  return(
    <div>
      <div className="Add-book-form">
      <TextField id="outlined-basic" label="name" variant="outlined" value={name} onChange={(event)=>setName(event.target.value)} />
        
      <TextField id="outlined-basic" label="poster" variant="outlined" value={poster} onChange={(event)=>setPoster(event.target.value)}/>

      <TextField id="outlined-basic" label="rating" variant="outlined" value={rating} onChange={(event)=>setRating(event.target.value)}/>
      <TextField id="outlined-basic" label="summary" variant="outlined" value={summary} onChange={(event)=>setSummary(event.target.value)}/>


      <Button  variant="contained" onClick={()=>{
        
          const newBook={
            name: name,
            poster: poster,
            rating: rating,
            summary:summary,
        

          };
          setBooklist([...booklist,newBook])
          navigate("np/books")
        }}
        
        
        >Add Book
        

      </Button>
      


      </div>

    </div>
  )
}

function Notfoundpage(){
  return(
    <div>
      <img 
      width="650px"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAKCng6IoJNKZdJHwzIu744f0DxxgQ5MIhA&usqp=CAU"
      alt="404 not found"
      />
    </div>
  )
}

function BookDetails({booklist}){
  const navigate = useNavigate(); 

  const{bookid}=useParams()
  console.log(booklist[bookid])
  const book=booklist[bookid]
  return(
    <div>
      <iframe 
      width="100%" height="550px" src={book.trailer}
      title="The Secret Full Movie In English Law Of Attraction Full HD Original  Full Uncut Movie  Secret 2020" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
     </iframe>
     <div className="book-detail-container">
    <div className="book-spec">
      <h2 className="book-name">{book.name} </h2>
      <p  className="book-rating">⭐{book.rating}</p>
    </div>
    <p className="book-summary">{book.summary}</p>
    <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=>navigate(-1)}>
    BACK
   </Button></div>

    </div>
  )

}

function Users(){
  const users = [
    {
      name: "Vini",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJ5YjQ6WTRlcIfhMzCEwb8oTXCkVyKZer2R0T0JLbGw&s"
    },

    {
      name: "Rohan",
      img:
        "https://media.licdn.com/dms/image/D5603AQGKYc0mNxq_3w/profile-displayphoto-shrink_800_800/0/1674274798202?e=2147483647&v=beta&t=PqYQrkMU7KHKv7j_EsZfA0IkhwYc-bve12HwwQN1lKE"
    },

    {
      name: "harshi",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAXa1pF-jvboEZTSsM9J4Fu_DuiaIO0fNlMw&usqp=CAU"
    },
    {
      name: "Guvi",
      img:
        "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
    }
  ];
   
return(
  <div>
    {users.map((usrs)=>(
      <Profile
      name={usrs.name}
      pic={usrs.img}/>))}


   
  </div>
)

}

function Home(){
  return <h1>Welcome to Library App📕📗📘📙📚📔</h1>;
}
function Bookist({booklist,setBooklist}){
  // const booklist=INITIAL_BOOK_LIST



  return(
    <div className="book-list">
    {booklist.map((bk,index)=>(
          <Book key={index} book={bk} id={index}/>

    ))}
    </div>


  )
}

function Book({book,id}){
  const navigate = useNavigate(); 
  const styles={
    color:book.rating > 8 ? "green": "red",
    }
    const [show,setShow]=useState(true);
    const Summarystyle={
      display: show ? "block":"none",
    }
  // const book={
  //   name:"The Secret",
  //   poster:
  //   "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
  //   summary:"The Secret by Rhonda Byrne is a self-help book that embarks to motivate the reader about a universal paradigm about success that can be achieved through it remains hidden for most people. The book explores about unveiling this little secret which may transform how people look at things and lead them on to the road of success and true happiness. ",
  //   rating:9,

  return(
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name}/>
      <div className="book-spec">
        <h2 className="book-name">{book.name} - {id}</h2>
        <p  style={styles}className="book-rating">⭐{book.rating}</p>
      </div>
      <IconButton aria-label="delete" onClick={()=>setShow(!show)} color="primary">
       {show?<ExpandLessIcon />: <ExpandMoreIcon />}

    </IconButton>
    <IconButton aria-label="delete" onClick={()=>navigate("/books/"+ id)} color="primary">
      <InfoIcon/>
    </IconButton>

      {/* <button onClick={()=>setShow(!show)}>Toggle description</button> */}
      {/* <button onClick={()=>navigate("/books/"+ id)}>info</button> */}
      {/* <p  style={Summarystyle} className="book-summary">{book.summary}</p> */}
      {/* {conditional rendering} */}
      { show ? <p className="book-summary">{book.summary}</p>: null}
      <Counter/>
    </div>
  )
}

