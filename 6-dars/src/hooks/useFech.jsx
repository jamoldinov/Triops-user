import React, { useEffect, useState } from "react";

function useFech(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
useEffect(() => {
    const fechData = async() => {
        setLoading(true)
        try{
          const req = await fetch(url)
          if(!req.ok){
            throw new Error(req.statusText)
          }
          const data = await req.json()
          setData(data)
          setLoading(false)

        }
        catch(err) {
            console.log(err.massage);
            setError(err.massage)
            setLoading(false)
        }

    }
    fechData()
}, [url])

  return {
    data, loading, error
  };
}

export {useFech};
