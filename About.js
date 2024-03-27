import Layout from "./Layout";

function About (){

    return (
        <>
  <Layout header={'About '}>
  
      <div className="container" style={{display:'flex'}}>
  
         <aside className="w-50">
          <p>show image</p>
         </aside>

         <article className="w-50">
        
          <div>
            <form>
             <p>name</p>
             <input type="text"></input>
             <p></p>
             <input type="file"></input>
             <p></p>
             <input type="submit" value="Send" class="btn btn-primary" />
             </form>

          </div>
         </article>


      </div>

        
      </Layout>

        </>
    )
}
export default About ;