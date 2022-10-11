import axios from "axios";

export default axios.create({
  baseURL: "https://upayments-studycase-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1bWh1cmNhbmdzOTdAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2NjYW5jYW5rYXlhIiwiaWF0IjoxNjY1Mzk5NjI2LCJleHAiOjE2NjU4MzE2MjZ9.aiVYFYyLRJ6LyxzPh5iIaMreMOJAdsvGoVOa2vqieVc"
  }
});