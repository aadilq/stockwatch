import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import "./App.css";

const Stocks = ({addToWatchList}) => {
  const[stocks, setStocks] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    //We want to fetch the data from our backend server
    fetch("http://localhost:5000/api/stocks")
    .then((res) => res.json())
    .then((data) => setStocks(data))
    .catch((error) => console.error("Error fetching stocks:", error));
    setDataIsLoaded(true);
  }, [])

  if(!dataIsLoaded){
    return(
      <div>
        <h1>Please wait some time...</h1>
      </div>
    )
  }

  const getRandomColors = () =>{
    const colors = ["FF3F33", "#075B5E"]
    return colors[Math.floor(Math.random() * colors.length)]
  };

  return(
    <div className="App">
      <h1>Stockwatch</h1>
      <h2>Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.company} ({stock.symbol}) - 
            <span style={{color: getRandomColors() }}>
              {" "}
              ${stock.initial_price}
            </span>
            <button onClick={() => addToWatchList(stock)}>
              Add to my Watchlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
};

const Watchlist = ({ watchlist }) => {
	const getRandomColor = () => {
		const colors = ["#FF0000", "#00FF00"]; // Red and Green
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<div className="App">
			<h1>Stock Market MERN App</h1>
			<h2>My Watchlist</h2>
			<ul>
				{watchlist.map((stock) => (
					<li key={stock.symbol}>
						{stock.company} ({stock.symbol}) -
						<span style={{ color: getRandomColor() }}>
							{" "}
							${stock.initial_price}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

function App(){
  const [watchlist, setWatchlist] = useState([]);
  
  const addToWatchlist = (stock) =>{
    //Add the stock to the watchlist
    fetch("http://localhost:5000/api/watchlist", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(stock)
    })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message)
      setWatchlist([...watchlist, stock])
    })
    .catch((error) => console.error("Error adding stock to watchlist:", error)
  );
  }

  return(
    <Router>
      <nav>
      <NavLink to="/stocks">Stocks</NavLink>
      <NavLink to="/watchlist">Watchlist</NavLink>
      </nav>
      <Routes>
        <Route 
        path="/stocks"
        element = {<Stocks addToWatchList={addToWatchlist} />}
         />
         <Route
         path="/watchlist" 
         element={<Watchlist watchlist={watchlist} />}/>
      </Routes>
    </Router>
  )
};