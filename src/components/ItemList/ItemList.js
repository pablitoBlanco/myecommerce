import {Item} from "../Item/Item.js"
import {useState, useEffect} from "react"



const arrayDiscos = [{ id: 1, name: "MHTRT", band: "Boards of Canada", price: 3000, photo: "https://img.discogs.com/nyWy7vnrmdXV0rcyPrd7vhrgHlQ=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11778-1475170215-9229.jpeg.jpg" },
{ id: 2, name: "Aenima", band: "TOOL", price: 2500, photo: "https://www.nacionrock.com/wp-content/uploads/aenima.jpg" },
{ id: 3, name: "El baile aleman", band: "Señor coconut", price: 3500, photo: "https://img.discogs.com/dp98D1xp1FwvppmCdw9BTEHw2XY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-55427-1337875009-2157.jpeg.jpg" },
{ id: 4, name: "Man made object", band: "Gogo penguin", price: 2700, photo: "https://img.discogs.com/D8JTyghBLIhOgwPfAsIv4XZ12is=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8062430-1454420247-1268.jpeg.jpg" }]


 export const ItemList = () => {

  const [discos, setDiscos] = useState()

  useEffect( () => {

     const task = new Promise( (resolve, reject) => {

       setTimeout( () => {
         resolve(arrayDiscos)
       }, 2000)

     })

     task.then(
       (result) => {

         setDiscos(result)
         console.log(result)

       }

     )
     .catch( (err)=>{

        console.log(err)

     })

   }, [])


  return(
      <>
     {

      discos?.map( ({name, band, photo, price, id } ) =>

        <Item name={name} band={band} cover={photo} price={price} key={id}/>

     )
    }
     </>
     )
     }


