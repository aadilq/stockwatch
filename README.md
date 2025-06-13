
# Stockwatch

Stockwatch is a full-stack application that allows users to track their stock market investments and build their Portfolio by selecting what stocks they want to add to their watchlist. Through the Stocks page, investors can look at which stocks they are interested in and select those stocks to view for later. 





## Tech Stack

**Client:** React.js

**Server:** Node.js, Express.js

**Database:** MongoDB

**Deployment tools:** FireBase







## Demo

https://github.com/user-attachments/assets/e0da1369-78d9-4c99-8fc3-2c82b51ef69e


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

During this project, I would say that I learned about creating an express server and connecting it to a NOSQL database such as MONGODB. I created my MongoDB database through a database cluster via MongoDB Atlas then I was able to insert the stock data into the collection via json format from:

https://gist.github.com/stevekinney/f96d5800852e91282f46#file-stocks-json

One challenge that I did face was once I was able to connect my express server to the mongoDB database via a connection string, I wanted to make sure that I was could actually access the stock data that was present in the collection. I tried debugging using console.log statements such as 

        const count = await Stock.countDocuments();
        console.log(`Found ${count} documents in the stock collection`);

        //Get a sample document
        const sample = await Stock.findOne();
        console.log('Sample document: ', sample);

but nothing was working. When I went back into mongoDB, I noticed that in my collections, I had two separate databases. One that I had created called **StockWatch** and another one called **test**, which appeared out of nowhere. Long story short, it turns out that the collection that was connected to my server was **test** and not **StockWatch**. 

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Background Color |  #FFE6E1 |
| Heading 1 |  #1f454d |
| Heading 2 |  #3c8d93 |
| list items Background Color | #3c8d93 |
| button:hover |  #3c8d93 |
| nav |  #d9d7ca |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=` Port number that will listen to express server

`MONGO_DB_URI=` MongoDB connection String that connects your MongoDB database to your express server


## Deployment

To deploy this project run

```bash
  npm run build
```




