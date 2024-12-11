import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function AboutUs() {
  useEffect(() => {
    document.querySelector(".history img").addEventListener("load", (e) => {
      let cordinates = document.querySelector(".history img").getBoundingClientRect()
      let imageX = (cordinates.left + window.scrollX + cordinates.right) / 2
      let imageY = (cordinates.top + window.scrollY + cordinates.bottom) / 2
  
      const ANGLE_COMPESATION = 10;
      document.querySelector(".history img").addEventListener("mousemove", (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
    
        let xOffset = imageX - mouseX;
        let yOffset = imageY - mouseY;
    
        let xRotationAngle = yOffset / ANGLE_COMPESATION;
        let yRotationAngle = xOffset / ANGLE_COMPESATION;
  
        document.querySelector(".history img").style.transform = "rotateX(" + xRotationAngle + "deg) rotateY("+ yRotationAngle + "deg)"
      })
      document.querySelector(".history img").addEventListener("mouseleave", (event) => {
        // document.querySelector(".history img").style.transform = "rotateX(deg) rotateY(deg)"
        if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
          {
        
             console.log("I'm out");
        
          }
      })
    })
  })
  return (
    <>
        <Navbar />
        <h1>Nosotros:</h1>
        <div className="history">
            <ul>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta sit autem voluptatem inventore debitis delectus saepe et eveniet id. Temporibus similique vero necessitatibus ipsum. Natus quis rerum porro sapiente.</p></li>
              <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel possimus obcaecati sequi! Vero, facere doloribus repellat minus reprehenderit quaerat consequuntur et iusto dolorem nihil eius perspiciatis excepturi maiores corporis harum.</p></li>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aperiam fugit quia nulla aspernatur maxime sequi nostrum? Repudiandae laboriosam molestias id deserunt reiciendis debitis possimus qui veritatis ipsum. Maiores, reiciendis.</p></li>
            </ul>
            <img src="https://www.qcnews.com/wp-content/uploads/sites/109/2023/06/Micro-Center.jpg" alt="store" />
        </div>
        <div className="aboutProducts">
            <ul>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, totam dolore quibusdam provident expedita doloremque qui sunt. Minima, repellat. Praesentium dolores itaque dignissimos? Repellat, sit voluptatum. Repudiandae harum fugiat sunt.</p></li>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi debitis voluptas soluta autem consectetur, rerum ut maxime! Quo nihil unde sed consectetur eos, perferendis laborum similique expedita repellat modi.</p></li>
              <li><ul>
                  <li>Calidad</li>
                  <li>Mas calidad</li>
                  <li>Y muchisima mas calidad</li>
                </ul></li>
              <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, sapiente, sit nihil cum libero ex harum itaque velit vitae, possimus vero dignissimos suscipit quo facere voluptas illum labore quod necessitatibus.</p></li>
            </ul>
            <img src="https://www.pcwelt.de/wp-content/uploads/2024/04/pcw08_Asus-Gaming-PC.jpg?quality=50&strip=all&w=1024" alt="pc-gaming" data-tilt data-tilt-glare/>
        </div>
        <div className="money">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, minus. Odio perspiciatis iusto assumenda nobis at officiis temporibus aliquid voluptate nemo. Exercitationem modi recusandae atque dolorem dolore accusantium suscipit nostrum?</p>
            <img src="https://media.istockphoto.com/id/160968295/photo/store-cashier-counting-the-cash.jpg?s=612x612&w=0&k=20&c=TzR20po1Ql_6_9rBvRVGNKUvpfDbM_hY0tNVM0-0rmQ=" alt="money" />
        </div>
        <Footer />
    </>
  )
}

export default AboutUs