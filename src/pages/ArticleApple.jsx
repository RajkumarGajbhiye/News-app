import React, { useState, useEffect } from 'react'

import { Card } from 'antd';
import axios from 'axios';

const { Meta } = Card;
//Api key=2e09da319c4049ba9f32dfa43965ca53
const ArticleApple = () => {
  const [news, setNews] = useState([]);
  const Callapi = () => {
    axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&apiKey=2e09da319c4049ba9f32dfa43965ca53").then(response => {
      console.log(response.data.articles);
      setNews(response.data.articles);
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    Callapi();
  }, [])

  return (
    <div className={"apple"} style={{ marginLeft: "300px" }}>
      <div>
        {
          news && news.map((ele, index) => (
            <Card key={index} hoverable style={{ width: "70%", marginTop: "20px" }} cover={<img src={ele.urlToImage
            } alt="image" />}>
              <Meta title={ele.title} description={ele.content} />
              <a href={ele.url} target="_blank" rel="noopener noreferrer ">
                <button type="button" class="btn btn-info" style={{ marginTop: "20px", left: "290px", position: "relative" }}>Read More</button> {/* button bootstrap se liya*/}
              </a>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default ArticleApple